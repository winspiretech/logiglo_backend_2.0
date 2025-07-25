// formBuilder.controllers.js

const prisma = require('../models/prismaClient');
const { z } = require('zod');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');

// Validation schemas
const formSchema = z.object({
  title: z.string().min(1, 'Form title is required'),
  description: z.string().optional(),
});

const sectionSchema = z.object({
  formId: z.string().uuid('Invalid form ID'),
  name: z.string().min(1, 'Section name is required'),
  position: z.number().int().min(0, 'Position must be a non-negative integer'),
});

const fieldSchema = z.object({
  sectionId: z.string().uuid('Invalid section ID'),
  type: z.enum(
    ['TEXT', 'DROPDOWN', 'RADIO', 'CHECKBOX', 'DATE', 'NUMBER', 'TEXTAREA'],
    {
      message: 'Invalid field type',
    },
  ),
  name: z.string().min(1, 'Field name is required'),

  label: z.string().min(1, 'Label is required'),
  placeholder: z.string().optional(),
  position: z.number().int().min(0, 'Position must be a non-negative integer'),
  required: z.boolean().default(false),
  options: z.array(z.string()).optional(),
  optionSetId: z.string().uuid('Invalid option set ID').optional().nullable(),
});

const optionSetSchema = z.object({
  name: z.string().min(1, 'Option set name is required'),
  options: z
    .array(z.string().min(1, 'Option cannot be empty'))
    .min(1, 'At least one option is required'),
});

const postFieldValueSchema = z.object({
  postId: z.string().uuid('Invalid post ID').optional(), // Either quotePostId or generalPostId will be set on creation
  fieldId: z.string().uuid('Invalid field ID'),
  value: z.string(), // All values are stored as strings
});

const createFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  sections: z.array(
    z.object({
      name: z.string().min(1, 'Section name is required'),
      position: z.number().int(),
      enabled: z.boolean().optional().default(true), // Add this line
      fields: z.array(
        z.object({
          label: z.string().min(1, 'Field label is required'),
          type: z.enum([
            'TEXT',
            'DROPDOWN',
            'RADIO',
            'CHECKBOX',
            'DATE',
            'NUMBER',
            'TEXTAREA',
          ]),
          placeholder: z.string().optional(),
          required: z.boolean().optional().default(false),
          options: z.array(z.string()).optional(),
          position: z.number().int(),
          enabled: z.boolean().optional().default(true), // Add this line
        }),
      ),
    }),
  ),
});

module.exports.createForm = async (req, res) => {
  try {
    const { title, description, sections } = createFormSchema.parse(req.body);

    const createdForm = await prisma.$transaction(async (tx) => {
      const form = await tx.form.create({
        data: {
          title,
          description,
        },
      });

      for (const section of sections) {
        const createdSection = await tx.formSection.create({
          data: {
            name: section.name,
            position: section.position,
            formId: form.id,
          },
        });

        for (const field of section.fields) {
          await tx.field.create({
            data: {
              label: field.label,
              type: field.type,
              placeholder: field.placeholder,
              required: field.required ?? false,
              options: field.options || [],
              position: field.position,
              sectionId: createdSection.id,
            },
          });
        }
      }

      return form;
    });

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          createdForm,
          'Form created successfully with sections and fields',
        ),
      );
  } catch (error) {
    console.error('Error in createForm:', error);
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to create form', error.message));
  }
};

const updateFormSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  sections: z
    .array(
      z.object({
        id: z.string().optional(),
        name: z.string(),
        position: z.number(),
        enabled: z.boolean().optional().default(true), // Add this line
        fields: z.array(
          z.object({
            id: z.string().optional(),
            label: z.string(),
            type: z.enum([
              'TEXT',
              'DROPDOWN',
              'RADIO',
              'CHECKBOX',
              'DATE',
              'NUMBER',
              'TEXTAREA',
            ]),
            placeholder: z.string().optional(),
            required: z.boolean().optional(),
            options: z.array(z.string()).optional(),
            position: z.number(),
            enabled: z.boolean().optional().default(true), // Add this line
          }),
        ),
      }),
    )
    .optional(),
});

module.exports.updateFormWithStructure = async (req, res) => {
  try {
    const { formId } = req.params;
    const { title, description, sections } = updateFormSchema.parse(req.body);

    const updatedForm = await prisma.$transaction(async (tx) => {
      const form = await tx.form.update({
        where: { id: formId },
        data: { title, description },
      });

      if (sections) {
        for (const section of sections) {
          let updatedSection;
          if (section.id) {
            const sectionExists = await tx.formSection.findUnique({
              where: { id: section.id },
            });
            if (!sectionExists) {
              throw new Error(`Section with ID ${section.id} not found`);
            }
            updatedSection = await tx.formSection.update({
              where: { id: section.id },
              data: {
                name: section.name,
                position: section.position,
                enabled: section.enabled ?? true,
              },
            });
          } else {
            updatedSection = await tx.formSection.create({
              data: {
                name: section.name,
                position: section.position,
                enabled: section.enabled ?? true, // Include enabled
                formId: form.id,
              },
            });
          }

          for (const field of section.fields) {
            if (field.id) {
              const fieldExists = await tx.field.findUnique({
                where: { id: field.id },
              });
              if (!fieldExists) {
                throw new Error(`Field with ID ${field.id} not found`);
              }
              await tx.field.update({
                where: { id: field.id },
                data: {
                  label: field.label,
                  type: field.type,
                  placeholder: field.placeholder,
                  required: field.required ?? false,
                  options: field.options || [],
                  position: field.position,
                  enabled: field.enabled ?? true, // Include enabled
                },
              });
            } else {
              await tx.field.create({
                data: {
                  label: field.label,
                  type: field.type,
                  placeholder: field.placeholder,
                  required: field.required ?? false,
                  options: field.options || [],
                  position: field.position,
                  enabled: field.enabled ?? true, // Include enabled
                  sectionId: updatedSection.id,
                },
              });
            }
          }
        }
      }

      return form;
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedForm,
          'Form updated successfully with structure',
        ),
      );
  } catch (error) {
    console.error('Error in updateFormWithStructure:', error);
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error.code === 'P2025') {
      return res
        .status(404)
        .json(new ApiError(404, 'Resource not found', error.message));
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to update form', error.message));
  }
};

// Delete Form
module.exports.deleteForm = async (req, res) => {
  try {
    const { formId } = req.params;

    // Delete associated sections and fields first due to cascading delete rules if not set up in Prisma
    // With onDelete: Cascade in schema.prisma for FormSection and Field, this might not be strictly necessary
    // but explicit deletion can ensure consistency if cascade is not fully configured for all relations.
    await prisma.form.delete({
      where: { id: formId },
    });
    return res
      .status(200)
      .json(new ApiResponse(200, null, 'Form deleted successfully'));
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json(new ApiError(404, 'Form not found'));
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to delete form', error.message));
  }
};

// Create Section
module.exports.createSection = async (req, res) => {
  try {
    const { formId, name, position } = sectionSchema.parse(req.body);
    const section = await prisma.formSection.create({
      data: {
        formId,
        name,
        position,
      },
    });
    return res
      .status(201)
      .json(new ApiResponse(201, section, 'Section created successfully'));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to create section', error.message));
  }
};

// Update Section
module.exports.updateSection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const { name, position } = sectionSchema.partial().parse(req.body); // Allow partial updates

    const updatedSection = await prisma.formSection.update({
      where: { id: sectionId },
      data: { name, position },
    });
    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedSection, 'Section updated successfully'),
      );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error.code === 'P2025') {
      return res.status(404).json(new ApiError(404, 'Section not found'));
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to update section', error.message));
  }
};
// Toggle Section Enabled Status
module.exports.toggleSection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const { enabled } = z
      .object({
        enabled: z.boolean(),
      })
      .parse(req.body);

    const updatedSection = await prisma.formSection.update({
      where: { id: sectionId },
      data: { enabled },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedSection,
          `Section ${enabled ? 'enabled' : 'disabled'} successfully`,
        ),
      );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error.code === 'P2025') {
      return res.status(404).json(new ApiError(404, 'Section not found'));
    }
    return res
      .status(500)
      .json(
        new ApiError(500, 'Failed to toggle section status', error.message),
      );
  }
};

// Toggle Field Enabled Status
module.exports.toggleField = async (req, res) => {
  try {
    const { fieldId } = req.params;
    const { enabled } = z
      .object({
        enabled: z.boolean(),
      })
      .parse(req.body);

    const updatedField = await prisma.field.update({
      where: { id: fieldId },
      data: { enabled },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedField,
          `Field ${enabled ? 'enabled' : 'disabled'} successfully`,
        ),
      );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error.code === 'P2025') {
      return res.status(404).json(new ApiError(404, 'Field not found'));
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to toggle field status', error.message));
  }
};
// // Delete Section
// module.exports.deleteSection = async (req, res) => {
//   try {
//     const { sectionId } = req.params;
//     await prisma.formSection.delete({
//       where: { id: sectionId },
//     });
//     return res
//       .status(200)
//       .json(new ApiResponse(200, null, 'Section deleted successfully'));
//   } catch (error) {
//     if (error.code === 'P2025') {
//       return res.status(404).json(new ApiError(404, 'Section not found'));
//     }
//     return res
//       .status(500)
//       .json(new ApiError(500, 'Failed to delete section', error.message));
//   }
// };

// Update Section Positions (reorder)
module.exports.updateSectionPosition = async (req, res) => {
  try {
    const { formId } = req.params;

    const { sectionUpdates } = z
      .object({
        sectionUpdates: z
          .array(
            z.object({
              id: z.string().uuid(),
              position: z.number().int().min(0),
            }),
          )
          .min(1, 'At least one section update is required'),
      })
      .parse(req.body);

    // Ensure positions are unique
    const seen = new Set();
    for (const s of sectionUpdates) {
      if (seen.has(s.position)) {
        throw new ApiError(400, 'Duplicate positions are not allowed');
      }
      seen.add(s.position);
    }

    // Verify all sections belong to the form
    const existingSections = await prisma.formSection.findMany({
      where: {
        formId,
        id: { in: sectionUpdates.map((s) => s.id) },
      },
      select: { id: true },
    });

    const validIds = new Set(existingSections.map((s) => s.id));
    const invalid = sectionUpdates.filter((s) => !validIds.has(s.id));
    if (invalid.length > 0) {
      throw new ApiError(
        404,
        `Invalid section IDs: ${invalid.map((s) => s.id).join(', ')}`,
      );
    }

    const TEMP_OFFSET = 100000;

    const reset = sectionUpdates.map((s, i) =>
      prisma.formSection.update({
        where: { id: s.id, formId },
        data: { position: TEMP_OFFSET + i },
      }),
    );

    const apply = sectionUpdates.map((s) =>
      prisma.formSection.update({
        where: { id: s.id, formId },
        data: { position: s.position },
      }),
    );

    await prisma.$transaction([...reset, ...apply]);

    return res
      .status(200)
      .json(
        new ApiResponse(200, null, 'Section positions updated successfully'),
      );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(
        new ApiError(500, 'Failed to update section positions', error.message),
      );
  }
};

// Create Field
module.exports.createField = async (req, res) => {
  try {
    const data = fieldSchema.parse(req.body);
    const field = await prisma.field.create({
      data: {
        sectionId: data.sectionId,
        type: data.type,
        label: data.label,
        placeholder: data.placeholder,
        position: data.position,
        required: data.required,
        options: data.options,
        optionSetId: data.optionSetId,
      },
    });
    return res
      .status(201)
      .json(new ApiResponse(201, field, 'Field created successfully'));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to create field', error.message));
  }
};

// Update Field
module.exports.updateField = async (req, res) => {
  try {
    const { fieldId } = req.params;
    // Use partial to allow updating only some fields
    const data = fieldSchema.partial().parse(req.body);

    const updatedField = await prisma.field.update({
      where: { id: fieldId },
      data: {
        type: data.type,
        label: data.label,
        placeholder: data.placeholder,
        position: data.position,
        required: data.required,
        options: data.options,
        optionSetId: data.optionSetId,
      },
    });
    return res
      .status(200)
      .json(new ApiResponse(200, updatedField, 'Field updated successfully'));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error.code === 'P2025') {
      return res.status(404).json(new ApiError(404, 'Field not found'));
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to update field', error.message));
  }
};

// Delete Field
// module.exports.deleteField = async (req, res) => {
//   try {
//     const { fieldId } = req.params;
//     await prisma.field.delete({
//       where: { id: fieldId },
//     });
//     return res
//       .status(200)
//       .json(new ApiResponse(200, null, 'Field deleted successfully'));
//   } catch (error) {
//     if (error.code === 'P2025') {
//       return res.status(404).json(new ApiError(404, 'Field not found'));
//     }
//     return res
//       .status(500)
//       .json(new ApiError(500, 'Failed to delete field', error.message));
//   }
// };

// Update Field Positions (reorder within a section)
module.exports.updateFieldPosition = async (req, res) => {
  try {
    const { sectionId } = req.params;

    const { fieldUpdates } = z
      .object({
        fieldUpdates: z
          .array(
            z.object({
              id: z.string().uuid(),
              position: z.number().int().min(0),
            }),
          )
          .min(1, 'At least one field update is required'),
      })
      .parse(req.body);

    // Ensure positions are unique
    const seen = new Set();
    for (const f of fieldUpdates) {
      if (seen.has(f.position)) {
        throw new ApiError(400, 'Duplicate positions are not allowed');
      }
      seen.add(f.position);
    }

    // Verify all fields belong to the section
    const existingFields = await prisma.field.findMany({
      where: {
        sectionId,
        id: { in: fieldUpdates.map((f) => f.id) },
      },
      select: { id: true },
    });

    const validIds = new Set(existingFields.map((f) => f.id));
    const invalid = fieldUpdates.filter((f) => !validIds.has(f.id));
    if (invalid.length > 0) {
      throw new ApiError(
        404,
        `Invalid field IDs: ${invalid.map((f) => f.id).join(', ')}`,
      );
    }

    const TEMP_OFFSET = 100000;

    const reset = fieldUpdates.map((f, i) =>
      prisma.field.update({
        where: { id: f.id, sectionId },
        data: { position: TEMP_OFFSET + i },
      }),
    );

    const apply = fieldUpdates.map((f) =>
      prisma.field.update({
        where: { id: f.id, sectionId },
        data: { position: f.position },
      }),
    );

    await prisma.$transaction([...reset, ...apply]);

    return res
      .status(200)
      .json(new ApiResponse(200, null, 'Field positions updated successfully'));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(
        new ApiError(500, 'Failed to update field positions', error.message),
      );
  }
};

// Create Option Set
module.exports.createOptionSet = async (req, res) => {
  try {
    const { name, options } = optionSetSchema.parse(req.body);
    const optionSet = await prisma.optionSet.create({
      data: { name, options },
    });
    return res
      .status(201)
      .json(new ApiResponse(201, optionSet, 'Option Set created successfully'));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error.code === 'P2002') {
      // Unique constraint failed
      return res
        .status(409)
        .json(new ApiError(409, 'Option Set with this name already exists'));
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to create Option Set', error.message));
  }
};

// Get All Option Sets
module.exports.getAllOptionSets = async (req, res) => {
  try {
    const optionSets = await prisma.optionSet.findMany({
      orderBy: { name: 'asc' },
    });
    return res
      .status(200)
      .json(
        new ApiResponse(200, optionSets, 'Option Sets fetched successfully'),
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to fetch option sets', error.message));
  }
};

// Get Form by ID (with sections and fields)
module.exports.getFormById = async (req, res) => {
  try {
    const { formId } = req.params;
    const form = await prisma.form.findUnique({
      where: { id: formId },
      include: {
        sections: {
          orderBy: { position: 'asc' },
          include: {
            fields: {
              orderBy: { position: 'asc' },
              include: { optionSet: true },
            },
          },
        },
      },
    });
    if (!form) throw new ApiError(404, 'Form not found');
    return res
      .status(200)
      .json(new ApiResponse(200, form, 'Form fetched successfully'));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to fetch form', error.message));
  }
};
// Get all forms
module.exports.getAllForms = async (req, res) => {
  try {
    const forms = await prisma.form.findMany({
      include: {
        sections: {
          orderBy: { position: 'asc' },
          include: {
            fields: {
              orderBy: { position: 'asc' },
              include: { optionSet: true },
            },
          },
        },
      },
    });
    return res
      .status(200)
      .json(new ApiResponse(200, forms, 'Forms fetched successfully'));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to fetch forms', error.message));
  }
};
// Save Post Field Values (used when creating a QuotePost or GeneralPost)
module.exports.savePostFieldValues = async (postId, fieldValues) => {
  try {
    if (!Array.isArray(fieldValues) || fieldValues.length === 0) {
      return; // No field values to save
    }

    const dataToCreate = fieldValues.map((fv) => ({
      ...fv,
      postId: postId, // Link to the newly created post
    }));

    // Validate each field value individually
    for (const fv of dataToCreate) {
      postFieldValueSchema.parse(fv);
    }

    await prisma.postFieldValue.createMany({
      data: dataToCreate,
      skipDuplicates: true, // In case of retries, avoid creating duplicates
    });
    console.log(
      `Successfully saved ${dataToCreate.length} post field values for post ${postId}`,
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation Error saving Post Field Values:', error.errors);
      throw new ApiError(400, 'Invalid Post Field Value data', error.errors);
    }
    console.error('Failed to save Post Field Values:', error);
    throw new ApiError(500, 'Failed to save post field values', error.message);
  }
};

// Update Post Field Values (if a post is being edited)
module.exports.updatePostFieldValues = async (postId, fieldValues) => {
  try {
    if (!Array.isArray(fieldValues)) {
      return;
    }

    // First, delete existing field values for this post
    await prisma.postFieldValue.deleteMany({
      where: { postId: postId },
    });

    // Then, create new ones
    if (fieldValues.length > 0) {
      const dataToCreate = fieldValues.map((fv) => ({
        ...fv,
        postId: postId,
      }));

      for (const fv of dataToCreate) {
        postFieldValueSchema.parse(fv);
      }

      await prisma.postFieldValue.createMany({
        data: dataToCreate,
        skipDuplicates: false, // Allow re-creation after deletion
      });
    }
    console.log(`Successfully updated post field values for post ${postId}`);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(
        'Validation Error updating Post Field Values:',
        error.errors,
      );
      throw new ApiError(
        400,
        'Invalid Post Field Value data for update',
        error.errors,
      );
    }
    console.error('Failed to update Post Field Values:', error);
    throw new ApiError(
      500,
      'Failed to update post field values',
      error.message,
    );
  }
};
module.exports.getFormByIdForUser = async (req, res) => {
  try {
    const { formId } = req.params;

    const form = await prisma.form.findUnique({
      where: { id: formId },
      include: {
        sections: {
          orderBy: { position: 'asc' },
          include: {
            fields: {
              orderBy: { position: 'asc' },
              include: { optionSet: true },
            },
          },
        },
      },
    });

    if (!form) throw new ApiError(404, 'Form not found');

    // Filter only enabled sections and fields
    const filteredSections = form.sections
      .filter((section) => section.enabled)
      .map((section) => ({
        ...section,
        fields: section.fields.filter((field) => field.enabled),
      }));

    const filteredForm = {
      ...form,
      sections: filteredSections,
    };

    return res
      .status(200)
      .json(new ApiResponse(200, filteredForm, 'Form fetched successfully'));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to fetch form', error.message));
  }
};
module.exports.getAllFormsForUser = async (req, res) => {
  try {
    const forms = await prisma.form.findMany({
      include: {
        sections: {
          orderBy: { position: 'asc' },
          include: {
            fields: {
              orderBy: { position: 'asc' },
              include: { optionSet: true },
            },
          },
        },
      },
    });

    // Filter only enabled sections and fields for each form
    const filteredForms = forms.map((form) => ({
      ...form,
      sections: form.sections
        .filter((section) => section.enabled)
        .map((section) => ({
          ...section,
          fields: section.fields.filter((field) => field.enabled),
        })),
    }));

    return res
      .status(200)
      .json(new ApiResponse(200, filteredForms, 'Forms fetched successfully'));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to fetch forms', error.message));
  }
};
