
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ForumMainCategory
 * 
 */
export type ForumMainCategory = $Result.DefaultSelection<Prisma.$ForumMainCategoryPayload>
/**
 * Model ForumSubCategory
 * 
 */
export type ForumSubCategory = $Result.DefaultSelection<Prisma.$ForumSubCategoryPayload>
/**
 * Model QuotePost
 * 
 */
export type QuotePost = $Result.DefaultSelection<Prisma.$QuotePostPayload>
/**
 * Model QuoteReply
 * 
 */
export type QuoteReply = $Result.DefaultSelection<Prisma.$QuoteReplyPayload>
/**
 * Model QuoteLike
 * 
 */
export type QuoteLike = $Result.DefaultSelection<Prisma.$QuoteLikePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseModule
 * 
 */
export type CourseModule = $Result.DefaultSelection<Prisma.$CourseModulePayload>
/**
 * Model CourseQuery
 * 
 */
export type CourseQuery = $Result.DefaultSelection<Prisma.$CourseQueryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EducationLevel: {
  UNDERGRADUATE: 'UNDERGRADUATE',
  GRADUATE: 'GRADUATE',
  POSTGRADUATE: 'POSTGRADUATE'
};

export type EducationLevel = (typeof EducationLevel)[keyof typeof EducationLevel]


export const CourseDifficulty: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type CourseDifficulty = (typeof CourseDifficulty)[keyof typeof CourseDifficulty]


export const CourseMode: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  HYBRID: 'HYBRID'
};

export type CourseMode = (typeof CourseMode)[keyof typeof CourseMode]


export const Currency: {
  INR: 'INR',
  USD: 'USD',
  EUR: 'EUR'
};

export type Currency = (typeof Currency)[keyof typeof Currency]


export const CourseStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type CourseStatus = (typeof CourseStatus)[keyof typeof CourseStatus]


export const InstitutionType: {
  SCHOOL: 'SCHOOL',
  COLLEGE: 'COLLEGE',
  UNIVERSITY: 'UNIVERSITY',
  COACHING_CENTER: 'COACHING_CENTER',
  TRAINING_INSTITUTE: 'TRAINING_INSTITUTE',
  NGO: 'NGO',
  OTHER: 'OTHER'
};

export type InstitutionType = (typeof InstitutionType)[keyof typeof InstitutionType]

}

export type EducationLevel = $Enums.EducationLevel

export const EducationLevel: typeof $Enums.EducationLevel

export type CourseDifficulty = $Enums.CourseDifficulty

export const CourseDifficulty: typeof $Enums.CourseDifficulty

export type CourseMode = $Enums.CourseMode

export const CourseMode: typeof $Enums.CourseMode

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

export type CourseStatus = $Enums.CourseStatus

export const CourseStatus: typeof $Enums.CourseStatus

export type InstitutionType = $Enums.InstitutionType

export const InstitutionType: typeof $Enums.InstitutionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumMainCategory`: Exposes CRUD operations for the **ForumMainCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumMainCategories
    * const forumMainCategories = await prisma.forumMainCategory.findMany()
    * ```
    */
  get forumMainCategory(): Prisma.ForumMainCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumSubCategory`: Exposes CRUD operations for the **ForumSubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumSubCategories
    * const forumSubCategories = await prisma.forumSubCategory.findMany()
    * ```
    */
  get forumSubCategory(): Prisma.ForumSubCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quotePost`: Exposes CRUD operations for the **QuotePost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuotePosts
    * const quotePosts = await prisma.quotePost.findMany()
    * ```
    */
  get quotePost(): Prisma.QuotePostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quoteReply`: Exposes CRUD operations for the **QuoteReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuoteReplies
    * const quoteReplies = await prisma.quoteReply.findMany()
    * ```
    */
  get quoteReply(): Prisma.QuoteReplyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quoteLike`: Exposes CRUD operations for the **QuoteLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuoteLikes
    * const quoteLikes = await prisma.quoteLike.findMany()
    * ```
    */
  get quoteLike(): Prisma.QuoteLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseModule`: Exposes CRUD operations for the **CourseModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseModules
    * const courseModules = await prisma.courseModule.findMany()
    * ```
    */
  get courseModule(): Prisma.CourseModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseQuery`: Exposes CRUD operations for the **CourseQuery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseQueries
    * const courseQueries = await prisma.courseQuery.findMany()
    * ```
    */
  get courseQuery(): Prisma.CourseQueryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ForumMainCategory: 'ForumMainCategory',
    ForumSubCategory: 'ForumSubCategory',
    QuotePost: 'QuotePost',
    QuoteReply: 'QuoteReply',
    QuoteLike: 'QuoteLike',
    Admin: 'Admin',
    Course: 'Course',
    CourseModule: 'CourseModule',
    CourseQuery: 'CourseQuery'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "forumMainCategory" | "forumSubCategory" | "quotePost" | "quoteReply" | "quoteLike" | "admin" | "course" | "courseModule" | "courseQuery"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ForumMainCategory: {
        payload: Prisma.$ForumMainCategoryPayload<ExtArgs>
        fields: Prisma.ForumMainCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumMainCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMainCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumMainCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMainCategoryPayload>
          }
          findFirst: {
            args: Prisma.ForumMainCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMainCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumMainCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMainCategoryPayload>
          }
          findMany: {
            args: Prisma.ForumMainCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMainCategoryPayload>[]
          }
          create: {
            args: Prisma.ForumMainCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMainCategoryPayload>
          }
          createMany: {
            args: Prisma.ForumMainCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumMainCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMainCategoryPayload>[]
          }
          delete: {
            args: Prisma.ForumMainCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMainCategoryPayload>
          }
          update: {
            args: Prisma.ForumMainCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMainCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ForumMainCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumMainCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumMainCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMainCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ForumMainCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMainCategoryPayload>
          }
          aggregate: {
            args: Prisma.ForumMainCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumMainCategory>
          }
          groupBy: {
            args: Prisma.ForumMainCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumMainCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumMainCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ForumMainCategoryCountAggregateOutputType> | number
          }
        }
      }
      ForumSubCategory: {
        payload: Prisma.$ForumSubCategoryPayload<ExtArgs>
        fields: Prisma.ForumSubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumSubCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumSubCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubCategoryPayload>
          }
          findFirst: {
            args: Prisma.ForumSubCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumSubCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubCategoryPayload>
          }
          findMany: {
            args: Prisma.ForumSubCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubCategoryPayload>[]
          }
          create: {
            args: Prisma.ForumSubCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubCategoryPayload>
          }
          createMany: {
            args: Prisma.ForumSubCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumSubCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubCategoryPayload>[]
          }
          delete: {
            args: Prisma.ForumSubCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubCategoryPayload>
          }
          update: {
            args: Prisma.ForumSubCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ForumSubCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumSubCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumSubCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ForumSubCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumSubCategoryPayload>
          }
          aggregate: {
            args: Prisma.ForumSubCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumSubCategory>
          }
          groupBy: {
            args: Prisma.ForumSubCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumSubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumSubCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ForumSubCategoryCountAggregateOutputType> | number
          }
        }
      }
      QuotePost: {
        payload: Prisma.$QuotePostPayload<ExtArgs>
        fields: Prisma.QuotePostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotePostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotePostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          findFirst: {
            args: Prisma.QuotePostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotePostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          findMany: {
            args: Prisma.QuotePostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>[]
          }
          create: {
            args: Prisma.QuotePostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          createMany: {
            args: Prisma.QuotePostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuotePostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>[]
          }
          delete: {
            args: Prisma.QuotePostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          update: {
            args: Prisma.QuotePostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          deleteMany: {
            args: Prisma.QuotePostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotePostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuotePostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>[]
          }
          upsert: {
            args: Prisma.QuotePostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePostPayload>
          }
          aggregate: {
            args: Prisma.QuotePostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotePost>
          }
          groupBy: {
            args: Prisma.QuotePostGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotePostGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotePostCountArgs<ExtArgs>
            result: $Utils.Optional<QuotePostCountAggregateOutputType> | number
          }
        }
      }
      QuoteReply: {
        payload: Prisma.$QuoteReplyPayload<ExtArgs>
        fields: Prisma.QuoteReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteReplyPayload>
          }
          findFirst: {
            args: Prisma.QuoteReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteReplyPayload>
          }
          findMany: {
            args: Prisma.QuoteReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteReplyPayload>[]
          }
          create: {
            args: Prisma.QuoteReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteReplyPayload>
          }
          createMany: {
            args: Prisma.QuoteReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuoteReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteReplyPayload>[]
          }
          delete: {
            args: Prisma.QuoteReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteReplyPayload>
          }
          update: {
            args: Prisma.QuoteReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteReplyPayload>
          }
          deleteMany: {
            args: Prisma.QuoteReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuoteReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteReplyPayload>[]
          }
          upsert: {
            args: Prisma.QuoteReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteReplyPayload>
          }
          aggregate: {
            args: Prisma.QuoteReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuoteReply>
          }
          groupBy: {
            args: Prisma.QuoteReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteReplyCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteReplyCountAggregateOutputType> | number
          }
        }
      }
      QuoteLike: {
        payload: Prisma.$QuoteLikePayload<ExtArgs>
        fields: Prisma.QuoteLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteLikePayload>
          }
          findFirst: {
            args: Prisma.QuoteLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteLikePayload>
          }
          findMany: {
            args: Prisma.QuoteLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteLikePayload>[]
          }
          create: {
            args: Prisma.QuoteLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteLikePayload>
          }
          createMany: {
            args: Prisma.QuoteLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuoteLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteLikePayload>[]
          }
          delete: {
            args: Prisma.QuoteLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteLikePayload>
          }
          update: {
            args: Prisma.QuoteLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteLikePayload>
          }
          deleteMany: {
            args: Prisma.QuoteLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuoteLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteLikePayload>[]
          }
          upsert: {
            args: Prisma.QuoteLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteLikePayload>
          }
          aggregate: {
            args: Prisma.QuoteLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuoteLike>
          }
          groupBy: {
            args: Prisma.QuoteLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteLikeCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteLikeCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseModule: {
        payload: Prisma.$CourseModulePayload<ExtArgs>
        fields: Prisma.CourseModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          findFirst: {
            args: Prisma.CourseModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          findMany: {
            args: Prisma.CourseModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>[]
          }
          create: {
            args: Prisma.CourseModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          createMany: {
            args: Prisma.CourseModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>[]
          }
          delete: {
            args: Prisma.CourseModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          update: {
            args: Prisma.CourseModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          deleteMany: {
            args: Prisma.CourseModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>[]
          }
          upsert: {
            args: Prisma.CourseModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseModulePayload>
          }
          aggregate: {
            args: Prisma.CourseModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseModule>
          }
          groupBy: {
            args: Prisma.CourseModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseModuleCountArgs<ExtArgs>
            result: $Utils.Optional<CourseModuleCountAggregateOutputType> | number
          }
        }
      }
      CourseQuery: {
        payload: Prisma.$CourseQueryPayload<ExtArgs>
        fields: Prisma.CourseQueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseQueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseQueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseQueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseQueryPayload>
          }
          findFirst: {
            args: Prisma.CourseQueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseQueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseQueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseQueryPayload>
          }
          findMany: {
            args: Prisma.CourseQueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseQueryPayload>[]
          }
          create: {
            args: Prisma.CourseQueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseQueryPayload>
          }
          createMany: {
            args: Prisma.CourseQueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseQueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseQueryPayload>[]
          }
          delete: {
            args: Prisma.CourseQueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseQueryPayload>
          }
          update: {
            args: Prisma.CourseQueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseQueryPayload>
          }
          deleteMany: {
            args: Prisma.CourseQueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseQueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseQueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseQueryPayload>[]
          }
          upsert: {
            args: Prisma.CourseQueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseQueryPayload>
          }
          aggregate: {
            args: Prisma.CourseQueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseQuery>
          }
          groupBy: {
            args: Prisma.CourseQueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseQueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseQueryCountArgs<ExtArgs>
            result: $Utils.Optional<CourseQueryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    forumMainCategory?: ForumMainCategoryOmit
    forumSubCategory?: ForumSubCategoryOmit
    quotePost?: QuotePostOmit
    quoteReply?: QuoteReplyOmit
    quoteLike?: QuoteLikeOmit
    admin?: AdminOmit
    course?: CourseOmit
    courseModule?: CourseModuleOmit
    courseQuery?: CourseQueryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    quotePost: number
    quoteReply: number
    quoteLike: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotePost?: boolean | UserCountOutputTypeCountQuotePostArgs
    quoteReply?: boolean | UserCountOutputTypeCountQuoteReplyArgs
    quoteLike?: boolean | UserCountOutputTypeCountQuoteLikeArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuotePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotePostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuoteReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteReplyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuoteLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteLikeWhereInput
  }


  /**
   * Count Type QuotePostCountOutputType
   */

  export type QuotePostCountOutputType = {
    quoteReply: number
    quoteLike: number
  }

  export type QuotePostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quoteReply?: boolean | QuotePostCountOutputTypeCountQuoteReplyArgs
    quoteLike?: boolean | QuotePostCountOutputTypeCountQuoteLikeArgs
  }

  // Custom InputTypes
  /**
   * QuotePostCountOutputType without action
   */
  export type QuotePostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePostCountOutputType
     */
    select?: QuotePostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuotePostCountOutputType without action
   */
  export type QuotePostCountOutputTypeCountQuoteReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteReplyWhereInput
  }

  /**
   * QuotePostCountOutputType without action
   */
  export type QuotePostCountOutputTypeCountQuoteLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteLikeWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    courses: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | AdminCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    modules: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | CourseCountOutputTypeCountModulesArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseModuleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    rating: number | null
  }

  export type UserSumAggregateOutputType = {
    rating: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    verified: boolean | null
    role: string | null
    mobileNo: string | null
    country: string | null
    city: string | null
    address: string | null
    postalCode: string | null
    profilePic: string | null
    bio: string | null
    online: boolean | null
    lastSeen: Date | null
    rating: number | null
    accountType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    verified: boolean | null
    role: string | null
    mobileNo: string | null
    country: string | null
    city: string | null
    address: string | null
    postalCode: string | null
    profilePic: string | null
    bio: string | null
    online: boolean | null
    lastSeen: Date | null
    rating: number | null
    accountType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    verified: number
    role: number
    mobileNo: number
    country: number
    city: number
    address: number
    postalCode: number
    profilePic: number
    bio: number
    online: number
    lastSeen: number
    rating: number
    accountType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    rating?: true
  }

  export type UserSumAggregateInputType = {
    rating?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    verified?: true
    role?: true
    mobileNo?: true
    country?: true
    city?: true
    address?: true
    postalCode?: true
    profilePic?: true
    bio?: true
    online?: true
    lastSeen?: true
    rating?: true
    accountType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    verified?: true
    role?: true
    mobileNo?: true
    country?: true
    city?: true
    address?: true
    postalCode?: true
    profilePic?: true
    bio?: true
    online?: true
    lastSeen?: true
    rating?: true
    accountType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    verified?: true
    role?: true
    mobileNo?: true
    country?: true
    city?: true
    address?: true
    postalCode?: true
    profilePic?: true
    bio?: true
    online?: true
    lastSeen?: true
    rating?: true
    accountType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    verified: boolean | null
    role: string | null
    mobileNo: string | null
    country: string | null
    city: string | null
    address: string | null
    postalCode: string | null
    profilePic: string | null
    bio: string | null
    online: boolean | null
    lastSeen: Date | null
    rating: number | null
    accountType: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    verified?: boolean
    role?: boolean
    mobileNo?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    postalCode?: boolean
    profilePic?: boolean
    bio?: boolean
    online?: boolean
    lastSeen?: boolean
    rating?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quotePost?: boolean | User$quotePostArgs<ExtArgs>
    quoteReply?: boolean | User$quoteReplyArgs<ExtArgs>
    quoteLike?: boolean | User$quoteLikeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    verified?: boolean
    role?: boolean
    mobileNo?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    postalCode?: boolean
    profilePic?: boolean
    bio?: boolean
    online?: boolean
    lastSeen?: boolean
    rating?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    verified?: boolean
    role?: boolean
    mobileNo?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    postalCode?: boolean
    profilePic?: boolean
    bio?: boolean
    online?: boolean
    lastSeen?: boolean
    rating?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    verified?: boolean
    role?: boolean
    mobileNo?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    postalCode?: boolean
    profilePic?: boolean
    bio?: boolean
    online?: boolean
    lastSeen?: boolean
    rating?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "verified" | "role" | "mobileNo" | "country" | "city" | "address" | "postalCode" | "profilePic" | "bio" | "online" | "lastSeen" | "rating" | "accountType" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotePost?: boolean | User$quotePostArgs<ExtArgs>
    quoteReply?: boolean | User$quoteReplyArgs<ExtArgs>
    quoteLike?: boolean | User$quoteLikeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      quotePost: Prisma.$QuotePostPayload<ExtArgs>[]
      quoteReply: Prisma.$QuoteReplyPayload<ExtArgs>[]
      quoteLike: Prisma.$QuoteLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      verified: boolean | null
      role: string | null
      mobileNo: string | null
      country: string | null
      city: string | null
      address: string | null
      postalCode: string | null
      profilePic: string | null
      bio: string | null
      online: boolean | null
      lastSeen: Date | null
      rating: number | null
      accountType: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotePost<T extends User$quotePostArgs<ExtArgs> = {}>(args?: Subset<T, User$quotePostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quoteReply<T extends User$quoteReplyArgs<ExtArgs> = {}>(args?: Subset<T, User$quoteReplyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quoteLike<T extends User$quoteLikeArgs<ExtArgs> = {}>(args?: Subset<T, User$quoteLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'String'>
    readonly mobileNo: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly postalCode: FieldRef<"User", 'String'>
    readonly profilePic: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly online: FieldRef<"User", 'Boolean'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly rating: FieldRef<"User", 'Float'>
    readonly accountType: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.quotePost
   */
  export type User$quotePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostInclude<ExtArgs> | null
    where?: QuotePostWhereInput
    orderBy?: QuotePostOrderByWithRelationInput | QuotePostOrderByWithRelationInput[]
    cursor?: QuotePostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuotePostScalarFieldEnum | QuotePostScalarFieldEnum[]
  }

  /**
   * User.quoteReply
   */
  export type User$quoteReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
    where?: QuoteReplyWhereInput
    orderBy?: QuoteReplyOrderByWithRelationInput | QuoteReplyOrderByWithRelationInput[]
    cursor?: QuoteReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteReplyScalarFieldEnum | QuoteReplyScalarFieldEnum[]
  }

  /**
   * User.quoteLike
   */
  export type User$quoteLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
    where?: QuoteLikeWhereInput
    orderBy?: QuoteLikeOrderByWithRelationInput | QuoteLikeOrderByWithRelationInput[]
    cursor?: QuoteLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteLikeScalarFieldEnum | QuoteLikeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ForumMainCategory
   */

  export type AggregateForumMainCategory = {
    _count: ForumMainCategoryCountAggregateOutputType | null
    _min: ForumMainCategoryMinAggregateOutputType | null
    _max: ForumMainCategoryMaxAggregateOutputType | null
  }

  export type ForumMainCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    enabled: boolean | null
  }

  export type ForumMainCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    enabled: boolean | null
  }

  export type ForumMainCategoryCountAggregateOutputType = {
    id: number
    name: number
    enabled: number
    _all: number
  }


  export type ForumMainCategoryMinAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
  }

  export type ForumMainCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
  }

  export type ForumMainCategoryCountAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
    _all?: true
  }

  export type ForumMainCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumMainCategory to aggregate.
     */
    where?: ForumMainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumMainCategories to fetch.
     */
    orderBy?: ForumMainCategoryOrderByWithRelationInput | ForumMainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumMainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumMainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumMainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumMainCategories
    **/
    _count?: true | ForumMainCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumMainCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumMainCategoryMaxAggregateInputType
  }

  export type GetForumMainCategoryAggregateType<T extends ForumMainCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateForumMainCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumMainCategory[P]>
      : GetScalarType<T[P], AggregateForumMainCategory[P]>
  }




  export type ForumMainCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumMainCategoryWhereInput
    orderBy?: ForumMainCategoryOrderByWithAggregationInput | ForumMainCategoryOrderByWithAggregationInput[]
    by: ForumMainCategoryScalarFieldEnum[] | ForumMainCategoryScalarFieldEnum
    having?: ForumMainCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumMainCategoryCountAggregateInputType | true
    _min?: ForumMainCategoryMinAggregateInputType
    _max?: ForumMainCategoryMaxAggregateInputType
  }

  export type ForumMainCategoryGroupByOutputType = {
    id: string
    name: string | null
    enabled: boolean | null
    _count: ForumMainCategoryCountAggregateOutputType | null
    _min: ForumMainCategoryMinAggregateOutputType | null
    _max: ForumMainCategoryMaxAggregateOutputType | null
  }

  type GetForumMainCategoryGroupByPayload<T extends ForumMainCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumMainCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumMainCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumMainCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ForumMainCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ForumMainCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enabled?: boolean
  }, ExtArgs["result"]["forumMainCategory"]>

  export type ForumMainCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enabled?: boolean
  }, ExtArgs["result"]["forumMainCategory"]>

  export type ForumMainCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enabled?: boolean
  }, ExtArgs["result"]["forumMainCategory"]>

  export type ForumMainCategorySelectScalar = {
    id?: boolean
    name?: boolean
    enabled?: boolean
  }

  export type ForumMainCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "enabled", ExtArgs["result"]["forumMainCategory"]>

  export type $ForumMainCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumMainCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      enabled: boolean | null
    }, ExtArgs["result"]["forumMainCategory"]>
    composites: {}
  }

  type ForumMainCategoryGetPayload<S extends boolean | null | undefined | ForumMainCategoryDefaultArgs> = $Result.GetResult<Prisma.$ForumMainCategoryPayload, S>

  type ForumMainCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumMainCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumMainCategoryCountAggregateInputType | true
    }

  export interface ForumMainCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumMainCategory'], meta: { name: 'ForumMainCategory' } }
    /**
     * Find zero or one ForumMainCategory that matches the filter.
     * @param {ForumMainCategoryFindUniqueArgs} args - Arguments to find a ForumMainCategory
     * @example
     * // Get one ForumMainCategory
     * const forumMainCategory = await prisma.forumMainCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumMainCategoryFindUniqueArgs>(args: SelectSubset<T, ForumMainCategoryFindUniqueArgs<ExtArgs>>): Prisma__ForumMainCategoryClient<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumMainCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumMainCategoryFindUniqueOrThrowArgs} args - Arguments to find a ForumMainCategory
     * @example
     * // Get one ForumMainCategory
     * const forumMainCategory = await prisma.forumMainCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumMainCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumMainCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumMainCategoryClient<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumMainCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMainCategoryFindFirstArgs} args - Arguments to find a ForumMainCategory
     * @example
     * // Get one ForumMainCategory
     * const forumMainCategory = await prisma.forumMainCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumMainCategoryFindFirstArgs>(args?: SelectSubset<T, ForumMainCategoryFindFirstArgs<ExtArgs>>): Prisma__ForumMainCategoryClient<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumMainCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMainCategoryFindFirstOrThrowArgs} args - Arguments to find a ForumMainCategory
     * @example
     * // Get one ForumMainCategory
     * const forumMainCategory = await prisma.forumMainCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumMainCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumMainCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumMainCategoryClient<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumMainCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMainCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumMainCategories
     * const forumMainCategories = await prisma.forumMainCategory.findMany()
     * 
     * // Get first 10 ForumMainCategories
     * const forumMainCategories = await prisma.forumMainCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumMainCategoryWithIdOnly = await prisma.forumMainCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumMainCategoryFindManyArgs>(args?: SelectSubset<T, ForumMainCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumMainCategory.
     * @param {ForumMainCategoryCreateArgs} args - Arguments to create a ForumMainCategory.
     * @example
     * // Create one ForumMainCategory
     * const ForumMainCategory = await prisma.forumMainCategory.create({
     *   data: {
     *     // ... data to create a ForumMainCategory
     *   }
     * })
     * 
     */
    create<T extends ForumMainCategoryCreateArgs>(args: SelectSubset<T, ForumMainCategoryCreateArgs<ExtArgs>>): Prisma__ForumMainCategoryClient<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumMainCategories.
     * @param {ForumMainCategoryCreateManyArgs} args - Arguments to create many ForumMainCategories.
     * @example
     * // Create many ForumMainCategories
     * const forumMainCategory = await prisma.forumMainCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumMainCategoryCreateManyArgs>(args?: SelectSubset<T, ForumMainCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumMainCategories and returns the data saved in the database.
     * @param {ForumMainCategoryCreateManyAndReturnArgs} args - Arguments to create many ForumMainCategories.
     * @example
     * // Create many ForumMainCategories
     * const forumMainCategory = await prisma.forumMainCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumMainCategories and only return the `id`
     * const forumMainCategoryWithIdOnly = await prisma.forumMainCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumMainCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumMainCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumMainCategory.
     * @param {ForumMainCategoryDeleteArgs} args - Arguments to delete one ForumMainCategory.
     * @example
     * // Delete one ForumMainCategory
     * const ForumMainCategory = await prisma.forumMainCategory.delete({
     *   where: {
     *     // ... filter to delete one ForumMainCategory
     *   }
     * })
     * 
     */
    delete<T extends ForumMainCategoryDeleteArgs>(args: SelectSubset<T, ForumMainCategoryDeleteArgs<ExtArgs>>): Prisma__ForumMainCategoryClient<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumMainCategory.
     * @param {ForumMainCategoryUpdateArgs} args - Arguments to update one ForumMainCategory.
     * @example
     * // Update one ForumMainCategory
     * const forumMainCategory = await prisma.forumMainCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumMainCategoryUpdateArgs>(args: SelectSubset<T, ForumMainCategoryUpdateArgs<ExtArgs>>): Prisma__ForumMainCategoryClient<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumMainCategories.
     * @param {ForumMainCategoryDeleteManyArgs} args - Arguments to filter ForumMainCategories to delete.
     * @example
     * // Delete a few ForumMainCategories
     * const { count } = await prisma.forumMainCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumMainCategoryDeleteManyArgs>(args?: SelectSubset<T, ForumMainCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumMainCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMainCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumMainCategories
     * const forumMainCategory = await prisma.forumMainCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumMainCategoryUpdateManyArgs>(args: SelectSubset<T, ForumMainCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumMainCategories and returns the data updated in the database.
     * @param {ForumMainCategoryUpdateManyAndReturnArgs} args - Arguments to update many ForumMainCategories.
     * @example
     * // Update many ForumMainCategories
     * const forumMainCategory = await prisma.forumMainCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumMainCategories and only return the `id`
     * const forumMainCategoryWithIdOnly = await prisma.forumMainCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumMainCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumMainCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumMainCategory.
     * @param {ForumMainCategoryUpsertArgs} args - Arguments to update or create a ForumMainCategory.
     * @example
     * // Update or create a ForumMainCategory
     * const forumMainCategory = await prisma.forumMainCategory.upsert({
     *   create: {
     *     // ... data to create a ForumMainCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumMainCategory we want to update
     *   }
     * })
     */
    upsert<T extends ForumMainCategoryUpsertArgs>(args: SelectSubset<T, ForumMainCategoryUpsertArgs<ExtArgs>>): Prisma__ForumMainCategoryClient<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumMainCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMainCategoryCountArgs} args - Arguments to filter ForumMainCategories to count.
     * @example
     * // Count the number of ForumMainCategories
     * const count = await prisma.forumMainCategory.count({
     *   where: {
     *     // ... the filter for the ForumMainCategories we want to count
     *   }
     * })
    **/
    count<T extends ForumMainCategoryCountArgs>(
      args?: Subset<T, ForumMainCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumMainCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumMainCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMainCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumMainCategoryAggregateArgs>(args: Subset<T, ForumMainCategoryAggregateArgs>): Prisma.PrismaPromise<GetForumMainCategoryAggregateType<T>>

    /**
     * Group by ForumMainCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMainCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumMainCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumMainCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ForumMainCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumMainCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumMainCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumMainCategory model
   */
  readonly fields: ForumMainCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumMainCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumMainCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumMainCategory model
   */
  interface ForumMainCategoryFieldRefs {
    readonly id: FieldRef<"ForumMainCategory", 'String'>
    readonly name: FieldRef<"ForumMainCategory", 'String'>
    readonly enabled: FieldRef<"ForumMainCategory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ForumMainCategory findUnique
   */
  export type ForumMainCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ForumMainCategory to fetch.
     */
    where: ForumMainCategoryWhereUniqueInput
  }

  /**
   * ForumMainCategory findUniqueOrThrow
   */
  export type ForumMainCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ForumMainCategory to fetch.
     */
    where: ForumMainCategoryWhereUniqueInput
  }

  /**
   * ForumMainCategory findFirst
   */
  export type ForumMainCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ForumMainCategory to fetch.
     */
    where?: ForumMainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumMainCategories to fetch.
     */
    orderBy?: ForumMainCategoryOrderByWithRelationInput | ForumMainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumMainCategories.
     */
    cursor?: ForumMainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumMainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumMainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumMainCategories.
     */
    distinct?: ForumMainCategoryScalarFieldEnum | ForumMainCategoryScalarFieldEnum[]
  }

  /**
   * ForumMainCategory findFirstOrThrow
   */
  export type ForumMainCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ForumMainCategory to fetch.
     */
    where?: ForumMainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumMainCategories to fetch.
     */
    orderBy?: ForumMainCategoryOrderByWithRelationInput | ForumMainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumMainCategories.
     */
    cursor?: ForumMainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumMainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumMainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumMainCategories.
     */
    distinct?: ForumMainCategoryScalarFieldEnum | ForumMainCategoryScalarFieldEnum[]
  }

  /**
   * ForumMainCategory findMany
   */
  export type ForumMainCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ForumMainCategories to fetch.
     */
    where?: ForumMainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumMainCategories to fetch.
     */
    orderBy?: ForumMainCategoryOrderByWithRelationInput | ForumMainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumMainCategories.
     */
    cursor?: ForumMainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumMainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumMainCategories.
     */
    skip?: number
    distinct?: ForumMainCategoryScalarFieldEnum | ForumMainCategoryScalarFieldEnum[]
  }

  /**
   * ForumMainCategory create
   */
  export type ForumMainCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ForumMainCategory.
     */
    data?: XOR<ForumMainCategoryCreateInput, ForumMainCategoryUncheckedCreateInput>
  }

  /**
   * ForumMainCategory createMany
   */
  export type ForumMainCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumMainCategories.
     */
    data: ForumMainCategoryCreateManyInput | ForumMainCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumMainCategory createManyAndReturn
   */
  export type ForumMainCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ForumMainCategories.
     */
    data: ForumMainCategoryCreateManyInput | ForumMainCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumMainCategory update
   */
  export type ForumMainCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ForumMainCategory.
     */
    data: XOR<ForumMainCategoryUpdateInput, ForumMainCategoryUncheckedUpdateInput>
    /**
     * Choose, which ForumMainCategory to update.
     */
    where: ForumMainCategoryWhereUniqueInput
  }

  /**
   * ForumMainCategory updateMany
   */
  export type ForumMainCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumMainCategories.
     */
    data: XOR<ForumMainCategoryUpdateManyMutationInput, ForumMainCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ForumMainCategories to update
     */
    where?: ForumMainCategoryWhereInput
    /**
     * Limit how many ForumMainCategories to update.
     */
    limit?: number
  }

  /**
   * ForumMainCategory updateManyAndReturn
   */
  export type ForumMainCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ForumMainCategories.
     */
    data: XOR<ForumMainCategoryUpdateManyMutationInput, ForumMainCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ForumMainCategories to update
     */
    where?: ForumMainCategoryWhereInput
    /**
     * Limit how many ForumMainCategories to update.
     */
    limit?: number
  }

  /**
   * ForumMainCategory upsert
   */
  export type ForumMainCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ForumMainCategory to update in case it exists.
     */
    where: ForumMainCategoryWhereUniqueInput
    /**
     * In case the ForumMainCategory found by the `where` argument doesn't exist, create a new ForumMainCategory with this data.
     */
    create: XOR<ForumMainCategoryCreateInput, ForumMainCategoryUncheckedCreateInput>
    /**
     * In case the ForumMainCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumMainCategoryUpdateInput, ForumMainCategoryUncheckedUpdateInput>
  }

  /**
   * ForumMainCategory delete
   */
  export type ForumMainCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
    /**
     * Filter which ForumMainCategory to delete.
     */
    where: ForumMainCategoryWhereUniqueInput
  }

  /**
   * ForumMainCategory deleteMany
   */
  export type ForumMainCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumMainCategories to delete
     */
    where?: ForumMainCategoryWhereInput
    /**
     * Limit how many ForumMainCategories to delete.
     */
    limit?: number
  }

  /**
   * ForumMainCategory without action
   */
  export type ForumMainCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategory
     */
    select?: ForumMainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMainCategory
     */
    omit?: ForumMainCategoryOmit<ExtArgs> | null
  }


  /**
   * Model ForumSubCategory
   */

  export type AggregateForumSubCategory = {
    _count: ForumSubCategoryCountAggregateOutputType | null
    _min: ForumSubCategoryMinAggregateOutputType | null
    _max: ForumSubCategoryMaxAggregateOutputType | null
  }

  export type ForumSubCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    enabled: boolean | null
  }

  export type ForumSubCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    enabled: boolean | null
  }

  export type ForumSubCategoryCountAggregateOutputType = {
    id: number
    name: number
    enabled: number
    _all: number
  }


  export type ForumSubCategoryMinAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
  }

  export type ForumSubCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
  }

  export type ForumSubCategoryCountAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
    _all?: true
  }

  export type ForumSubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumSubCategory to aggregate.
     */
    where?: ForumSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumSubCategories to fetch.
     */
    orderBy?: ForumSubCategoryOrderByWithRelationInput | ForumSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumSubCategories
    **/
    _count?: true | ForumSubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumSubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumSubCategoryMaxAggregateInputType
  }

  export type GetForumSubCategoryAggregateType<T extends ForumSubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateForumSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumSubCategory[P]>
      : GetScalarType<T[P], AggregateForumSubCategory[P]>
  }




  export type ForumSubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumSubCategoryWhereInput
    orderBy?: ForumSubCategoryOrderByWithAggregationInput | ForumSubCategoryOrderByWithAggregationInput[]
    by: ForumSubCategoryScalarFieldEnum[] | ForumSubCategoryScalarFieldEnum
    having?: ForumSubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumSubCategoryCountAggregateInputType | true
    _min?: ForumSubCategoryMinAggregateInputType
    _max?: ForumSubCategoryMaxAggregateInputType
  }

  export type ForumSubCategoryGroupByOutputType = {
    id: string
    name: string | null
    enabled: boolean | null
    _count: ForumSubCategoryCountAggregateOutputType | null
    _min: ForumSubCategoryMinAggregateOutputType | null
    _max: ForumSubCategoryMaxAggregateOutputType | null
  }

  type GetForumSubCategoryGroupByPayload<T extends ForumSubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumSubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumSubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumSubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ForumSubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ForumSubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enabled?: boolean
  }, ExtArgs["result"]["forumSubCategory"]>

  export type ForumSubCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enabled?: boolean
  }, ExtArgs["result"]["forumSubCategory"]>

  export type ForumSubCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enabled?: boolean
  }, ExtArgs["result"]["forumSubCategory"]>

  export type ForumSubCategorySelectScalar = {
    id?: boolean
    name?: boolean
    enabled?: boolean
  }

  export type ForumSubCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "enabled", ExtArgs["result"]["forumSubCategory"]>

  export type $ForumSubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumSubCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      enabled: boolean | null
    }, ExtArgs["result"]["forumSubCategory"]>
    composites: {}
  }

  type ForumSubCategoryGetPayload<S extends boolean | null | undefined | ForumSubCategoryDefaultArgs> = $Result.GetResult<Prisma.$ForumSubCategoryPayload, S>

  type ForumSubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumSubCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumSubCategoryCountAggregateInputType | true
    }

  export interface ForumSubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumSubCategory'], meta: { name: 'ForumSubCategory' } }
    /**
     * Find zero or one ForumSubCategory that matches the filter.
     * @param {ForumSubCategoryFindUniqueArgs} args - Arguments to find a ForumSubCategory
     * @example
     * // Get one ForumSubCategory
     * const forumSubCategory = await prisma.forumSubCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumSubCategoryFindUniqueArgs>(args: SelectSubset<T, ForumSubCategoryFindUniqueArgs<ExtArgs>>): Prisma__ForumSubCategoryClient<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumSubCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumSubCategoryFindUniqueOrThrowArgs} args - Arguments to find a ForumSubCategory
     * @example
     * // Get one ForumSubCategory
     * const forumSubCategory = await prisma.forumSubCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumSubCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumSubCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumSubCategoryClient<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumSubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubCategoryFindFirstArgs} args - Arguments to find a ForumSubCategory
     * @example
     * // Get one ForumSubCategory
     * const forumSubCategory = await prisma.forumSubCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumSubCategoryFindFirstArgs>(args?: SelectSubset<T, ForumSubCategoryFindFirstArgs<ExtArgs>>): Prisma__ForumSubCategoryClient<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumSubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubCategoryFindFirstOrThrowArgs} args - Arguments to find a ForumSubCategory
     * @example
     * // Get one ForumSubCategory
     * const forumSubCategory = await prisma.forumSubCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumSubCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumSubCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumSubCategoryClient<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumSubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumSubCategories
     * const forumSubCategories = await prisma.forumSubCategory.findMany()
     * 
     * // Get first 10 ForumSubCategories
     * const forumSubCategories = await prisma.forumSubCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumSubCategoryWithIdOnly = await prisma.forumSubCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumSubCategoryFindManyArgs>(args?: SelectSubset<T, ForumSubCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumSubCategory.
     * @param {ForumSubCategoryCreateArgs} args - Arguments to create a ForumSubCategory.
     * @example
     * // Create one ForumSubCategory
     * const ForumSubCategory = await prisma.forumSubCategory.create({
     *   data: {
     *     // ... data to create a ForumSubCategory
     *   }
     * })
     * 
     */
    create<T extends ForumSubCategoryCreateArgs>(args: SelectSubset<T, ForumSubCategoryCreateArgs<ExtArgs>>): Prisma__ForumSubCategoryClient<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumSubCategories.
     * @param {ForumSubCategoryCreateManyArgs} args - Arguments to create many ForumSubCategories.
     * @example
     * // Create many ForumSubCategories
     * const forumSubCategory = await prisma.forumSubCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumSubCategoryCreateManyArgs>(args?: SelectSubset<T, ForumSubCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumSubCategories and returns the data saved in the database.
     * @param {ForumSubCategoryCreateManyAndReturnArgs} args - Arguments to create many ForumSubCategories.
     * @example
     * // Create many ForumSubCategories
     * const forumSubCategory = await prisma.forumSubCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumSubCategories and only return the `id`
     * const forumSubCategoryWithIdOnly = await prisma.forumSubCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumSubCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumSubCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumSubCategory.
     * @param {ForumSubCategoryDeleteArgs} args - Arguments to delete one ForumSubCategory.
     * @example
     * // Delete one ForumSubCategory
     * const ForumSubCategory = await prisma.forumSubCategory.delete({
     *   where: {
     *     // ... filter to delete one ForumSubCategory
     *   }
     * })
     * 
     */
    delete<T extends ForumSubCategoryDeleteArgs>(args: SelectSubset<T, ForumSubCategoryDeleteArgs<ExtArgs>>): Prisma__ForumSubCategoryClient<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumSubCategory.
     * @param {ForumSubCategoryUpdateArgs} args - Arguments to update one ForumSubCategory.
     * @example
     * // Update one ForumSubCategory
     * const forumSubCategory = await prisma.forumSubCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumSubCategoryUpdateArgs>(args: SelectSubset<T, ForumSubCategoryUpdateArgs<ExtArgs>>): Prisma__ForumSubCategoryClient<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumSubCategories.
     * @param {ForumSubCategoryDeleteManyArgs} args - Arguments to filter ForumSubCategories to delete.
     * @example
     * // Delete a few ForumSubCategories
     * const { count } = await prisma.forumSubCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumSubCategoryDeleteManyArgs>(args?: SelectSubset<T, ForumSubCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumSubCategories
     * const forumSubCategory = await prisma.forumSubCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumSubCategoryUpdateManyArgs>(args: SelectSubset<T, ForumSubCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumSubCategories and returns the data updated in the database.
     * @param {ForumSubCategoryUpdateManyAndReturnArgs} args - Arguments to update many ForumSubCategories.
     * @example
     * // Update many ForumSubCategories
     * const forumSubCategory = await prisma.forumSubCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumSubCategories and only return the `id`
     * const forumSubCategoryWithIdOnly = await prisma.forumSubCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumSubCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumSubCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumSubCategory.
     * @param {ForumSubCategoryUpsertArgs} args - Arguments to update or create a ForumSubCategory.
     * @example
     * // Update or create a ForumSubCategory
     * const forumSubCategory = await prisma.forumSubCategory.upsert({
     *   create: {
     *     // ... data to create a ForumSubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumSubCategory we want to update
     *   }
     * })
     */
    upsert<T extends ForumSubCategoryUpsertArgs>(args: SelectSubset<T, ForumSubCategoryUpsertArgs<ExtArgs>>): Prisma__ForumSubCategoryClient<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubCategoryCountArgs} args - Arguments to filter ForumSubCategories to count.
     * @example
     * // Count the number of ForumSubCategories
     * const count = await prisma.forumSubCategory.count({
     *   where: {
     *     // ... the filter for the ForumSubCategories we want to count
     *   }
     * })
    **/
    count<T extends ForumSubCategoryCountArgs>(
      args?: Subset<T, ForumSubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumSubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumSubCategoryAggregateArgs>(args: Subset<T, ForumSubCategoryAggregateArgs>): Prisma.PrismaPromise<GetForumSubCategoryAggregateType<T>>

    /**
     * Group by ForumSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumSubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumSubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumSubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ForumSubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumSubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumSubCategory model
   */
  readonly fields: ForumSubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumSubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumSubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumSubCategory model
   */
  interface ForumSubCategoryFieldRefs {
    readonly id: FieldRef<"ForumSubCategory", 'String'>
    readonly name: FieldRef<"ForumSubCategory", 'String'>
    readonly enabled: FieldRef<"ForumSubCategory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ForumSubCategory findUnique
   */
  export type ForumSubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ForumSubCategory to fetch.
     */
    where: ForumSubCategoryWhereUniqueInput
  }

  /**
   * ForumSubCategory findUniqueOrThrow
   */
  export type ForumSubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ForumSubCategory to fetch.
     */
    where: ForumSubCategoryWhereUniqueInput
  }

  /**
   * ForumSubCategory findFirst
   */
  export type ForumSubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ForumSubCategory to fetch.
     */
    where?: ForumSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumSubCategories to fetch.
     */
    orderBy?: ForumSubCategoryOrderByWithRelationInput | ForumSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumSubCategories.
     */
    cursor?: ForumSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumSubCategories.
     */
    distinct?: ForumSubCategoryScalarFieldEnum | ForumSubCategoryScalarFieldEnum[]
  }

  /**
   * ForumSubCategory findFirstOrThrow
   */
  export type ForumSubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ForumSubCategory to fetch.
     */
    where?: ForumSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumSubCategories to fetch.
     */
    orderBy?: ForumSubCategoryOrderByWithRelationInput | ForumSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumSubCategories.
     */
    cursor?: ForumSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumSubCategories.
     */
    distinct?: ForumSubCategoryScalarFieldEnum | ForumSubCategoryScalarFieldEnum[]
  }

  /**
   * ForumSubCategory findMany
   */
  export type ForumSubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ForumSubCategories to fetch.
     */
    where?: ForumSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumSubCategories to fetch.
     */
    orderBy?: ForumSubCategoryOrderByWithRelationInput | ForumSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumSubCategories.
     */
    cursor?: ForumSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumSubCategories.
     */
    skip?: number
    distinct?: ForumSubCategoryScalarFieldEnum | ForumSubCategoryScalarFieldEnum[]
  }

  /**
   * ForumSubCategory create
   */
  export type ForumSubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ForumSubCategory.
     */
    data?: XOR<ForumSubCategoryCreateInput, ForumSubCategoryUncheckedCreateInput>
  }

  /**
   * ForumSubCategory createMany
   */
  export type ForumSubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumSubCategories.
     */
    data: ForumSubCategoryCreateManyInput | ForumSubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumSubCategory createManyAndReturn
   */
  export type ForumSubCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ForumSubCategories.
     */
    data: ForumSubCategoryCreateManyInput | ForumSubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumSubCategory update
   */
  export type ForumSubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ForumSubCategory.
     */
    data: XOR<ForumSubCategoryUpdateInput, ForumSubCategoryUncheckedUpdateInput>
    /**
     * Choose, which ForumSubCategory to update.
     */
    where: ForumSubCategoryWhereUniqueInput
  }

  /**
   * ForumSubCategory updateMany
   */
  export type ForumSubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumSubCategories.
     */
    data: XOR<ForumSubCategoryUpdateManyMutationInput, ForumSubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ForumSubCategories to update
     */
    where?: ForumSubCategoryWhereInput
    /**
     * Limit how many ForumSubCategories to update.
     */
    limit?: number
  }

  /**
   * ForumSubCategory updateManyAndReturn
   */
  export type ForumSubCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ForumSubCategories.
     */
    data: XOR<ForumSubCategoryUpdateManyMutationInput, ForumSubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ForumSubCategories to update
     */
    where?: ForumSubCategoryWhereInput
    /**
     * Limit how many ForumSubCategories to update.
     */
    limit?: number
  }

  /**
   * ForumSubCategory upsert
   */
  export type ForumSubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ForumSubCategory to update in case it exists.
     */
    where: ForumSubCategoryWhereUniqueInput
    /**
     * In case the ForumSubCategory found by the `where` argument doesn't exist, create a new ForumSubCategory with this data.
     */
    create: XOR<ForumSubCategoryCreateInput, ForumSubCategoryUncheckedCreateInput>
    /**
     * In case the ForumSubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumSubCategoryUpdateInput, ForumSubCategoryUncheckedUpdateInput>
  }

  /**
   * ForumSubCategory delete
   */
  export type ForumSubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * Filter which ForumSubCategory to delete.
     */
    where: ForumSubCategoryWhereUniqueInput
  }

  /**
   * ForumSubCategory deleteMany
   */
  export type ForumSubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumSubCategories to delete
     */
    where?: ForumSubCategoryWhereInput
    /**
     * Limit how many ForumSubCategories to delete.
     */
    limit?: number
  }

  /**
   * ForumSubCategory without action
   */
  export type ForumSubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
  }


  /**
   * Model QuotePost
   */

  export type AggregateQuotePost = {
    _count: QuotePostCountAggregateOutputType | null
    _avg: QuotePostAvgAggregateOutputType | null
    _sum: QuotePostSumAggregateOutputType | null
    _min: QuotePostMinAggregateOutputType | null
    _max: QuotePostMaxAggregateOutputType | null
  }

  export type QuotePostAvgAggregateOutputType = {
    totalNetWeight: number | null
    totalGrossWeight: number | null
    volumetricWeight: number | null
    width: number | null
    height: number | null
    length: number | null
    viewCount: number | null
    likesCount: number | null
    commentsCount: number | null
  }

  export type QuotePostSumAggregateOutputType = {
    totalNetWeight: number | null
    totalGrossWeight: number | null
    volumetricWeight: number | null
    width: number | null
    height: number | null
    length: number | null
    viewCount: number | null
    likesCount: number | null
    commentsCount: number | null
  }

  export type QuotePostMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    totalNetWeight: number | null
    totalGrossWeight: number | null
    volumetricWeight: number | null
    transitInsurance: boolean | null
    width: number | null
    height: number | null
    length: number | null
    viewCount: number | null
    likesCount: number | null
    commentsCount: number | null
    dangerousGoods: boolean | null
    status: string | null
    fromPostalCode: string | null
    toPostalCode: string | null
    fromCity: string | null
    toCity: string | null
    fromCountry: string | null
    toCountry: string | null
    fromAddress: string | null
    toAddress: string | null
    fromState: string | null
    toState: string | null
    postCategory: string | null
    shipmentType: string | null
    shipmentMode: string | null
  }

  export type QuotePostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    totalNetWeight: number | null
    totalGrossWeight: number | null
    volumetricWeight: number | null
    transitInsurance: boolean | null
    width: number | null
    height: number | null
    length: number | null
    viewCount: number | null
    likesCount: number | null
    commentsCount: number | null
    dangerousGoods: boolean | null
    status: string | null
    fromPostalCode: string | null
    toPostalCode: string | null
    fromCity: string | null
    toCity: string | null
    fromCountry: string | null
    toCountry: string | null
    fromAddress: string | null
    toAddress: string | null
    fromState: string | null
    toState: string | null
    postCategory: string | null
    shipmentType: string | null
    shipmentMode: string | null
  }

  export type QuotePostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    userId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    totalNetWeight: number
    totalGrossWeight: number
    volumetricWeight: number
    transitInsurance: number
    width: number
    height: number
    length: number
    viewCount: number
    likesCount: number
    commentsCount: number
    dangerousGoods: number
    status: number
    fromPostalCode: number
    toPostalCode: number
    fromCity: number
    toCity: number
    fromCountry: number
    toCountry: number
    fromAddress: number
    toAddress: number
    fromState: number
    toState: number
    postCategory: number
    shipmentType: number
    shipmentMode: number
    _all: number
  }


  export type QuotePostAvgAggregateInputType = {
    totalNetWeight?: true
    totalGrossWeight?: true
    volumetricWeight?: true
    width?: true
    height?: true
    length?: true
    viewCount?: true
    likesCount?: true
    commentsCount?: true
  }

  export type QuotePostSumAggregateInputType = {
    totalNetWeight?: true
    totalGrossWeight?: true
    volumetricWeight?: true
    width?: true
    height?: true
    length?: true
    viewCount?: true
    likesCount?: true
    commentsCount?: true
  }

  export type QuotePostMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    totalNetWeight?: true
    totalGrossWeight?: true
    volumetricWeight?: true
    transitInsurance?: true
    width?: true
    height?: true
    length?: true
    viewCount?: true
    likesCount?: true
    commentsCount?: true
    dangerousGoods?: true
    status?: true
    fromPostalCode?: true
    toPostalCode?: true
    fromCity?: true
    toCity?: true
    fromCountry?: true
    toCountry?: true
    fromAddress?: true
    toAddress?: true
    fromState?: true
    toState?: true
    postCategory?: true
    shipmentType?: true
    shipmentMode?: true
  }

  export type QuotePostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    totalNetWeight?: true
    totalGrossWeight?: true
    volumetricWeight?: true
    transitInsurance?: true
    width?: true
    height?: true
    length?: true
    viewCount?: true
    likesCount?: true
    commentsCount?: true
    dangerousGoods?: true
    status?: true
    fromPostalCode?: true
    toPostalCode?: true
    fromCity?: true
    toCity?: true
    fromCountry?: true
    toCountry?: true
    fromAddress?: true
    toAddress?: true
    fromState?: true
    toState?: true
    postCategory?: true
    shipmentType?: true
    shipmentMode?: true
  }

  export type QuotePostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    totalNetWeight?: true
    totalGrossWeight?: true
    volumetricWeight?: true
    transitInsurance?: true
    width?: true
    height?: true
    length?: true
    viewCount?: true
    likesCount?: true
    commentsCount?: true
    dangerousGoods?: true
    status?: true
    fromPostalCode?: true
    toPostalCode?: true
    fromCity?: true
    toCity?: true
    fromCountry?: true
    toCountry?: true
    fromAddress?: true
    toAddress?: true
    fromState?: true
    toState?: true
    postCategory?: true
    shipmentType?: true
    shipmentMode?: true
    _all?: true
  }

  export type QuotePostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotePost to aggregate.
     */
    where?: QuotePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotePosts to fetch.
     */
    orderBy?: QuotePostOrderByWithRelationInput | QuotePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuotePosts
    **/
    _count?: true | QuotePostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotePostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotePostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotePostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotePostMaxAggregateInputType
  }

  export type GetQuotePostAggregateType<T extends QuotePostAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotePost[P]>
      : GetScalarType<T[P], AggregateQuotePost[P]>
  }




  export type QuotePostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotePostWhereInput
    orderBy?: QuotePostOrderByWithAggregationInput | QuotePostOrderByWithAggregationInput[]
    by: QuotePostScalarFieldEnum[] | QuotePostScalarFieldEnum
    having?: QuotePostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotePostCountAggregateInputType | true
    _avg?: QuotePostAvgAggregateInputType
    _sum?: QuotePostSumAggregateInputType
    _min?: QuotePostMinAggregateInputType
    _max?: QuotePostMaxAggregateInputType
  }

  export type QuotePostGroupByOutputType = {
    id: string
    title: string | null
    description: string | null
    userId: string | null
    categoryId: string | null
    createdAt: Date
    updatedAt: Date
    totalNetWeight: number | null
    totalGrossWeight: number | null
    volumetricWeight: number | null
    transitInsurance: boolean | null
    width: number | null
    height: number | null
    length: number | null
    viewCount: number | null
    likesCount: number | null
    commentsCount: number | null
    dangerousGoods: boolean | null
    status: string | null
    fromPostalCode: string | null
    toPostalCode: string | null
    fromCity: string | null
    toCity: string | null
    fromCountry: string | null
    toCountry: string | null
    fromAddress: string | null
    toAddress: string | null
    fromState: string | null
    toState: string | null
    postCategory: string | null
    shipmentType: string | null
    shipmentMode: string | null
    _count: QuotePostCountAggregateOutputType | null
    _avg: QuotePostAvgAggregateOutputType | null
    _sum: QuotePostSumAggregateOutputType | null
    _min: QuotePostMinAggregateOutputType | null
    _max: QuotePostMaxAggregateOutputType | null
  }

  type GetQuotePostGroupByPayload<T extends QuotePostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotePostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotePostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotePostGroupByOutputType[P]>
            : GetScalarType<T[P], QuotePostGroupByOutputType[P]>
        }
      >
    >


  export type QuotePostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalNetWeight?: boolean
    totalGrossWeight?: boolean
    volumetricWeight?: boolean
    transitInsurance?: boolean
    width?: boolean
    height?: boolean
    length?: boolean
    viewCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    dangerousGoods?: boolean
    status?: boolean
    fromPostalCode?: boolean
    toPostalCode?: boolean
    fromCity?: boolean
    toCity?: boolean
    fromCountry?: boolean
    toCountry?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    fromState?: boolean
    toState?: boolean
    postCategory?: boolean
    shipmentType?: boolean
    shipmentMode?: boolean
    quoteReply?: boolean | QuotePost$quoteReplyArgs<ExtArgs>
    quoteLike?: boolean | QuotePost$quoteLikeArgs<ExtArgs>
    user?: boolean | QuotePost$userArgs<ExtArgs>
    _count?: boolean | QuotePostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotePost"]>

  export type QuotePostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalNetWeight?: boolean
    totalGrossWeight?: boolean
    volumetricWeight?: boolean
    transitInsurance?: boolean
    width?: boolean
    height?: boolean
    length?: boolean
    viewCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    dangerousGoods?: boolean
    status?: boolean
    fromPostalCode?: boolean
    toPostalCode?: boolean
    fromCity?: boolean
    toCity?: boolean
    fromCountry?: boolean
    toCountry?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    fromState?: boolean
    toState?: boolean
    postCategory?: boolean
    shipmentType?: boolean
    shipmentMode?: boolean
    user?: boolean | QuotePost$userArgs<ExtArgs>
  }, ExtArgs["result"]["quotePost"]>

  export type QuotePostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalNetWeight?: boolean
    totalGrossWeight?: boolean
    volumetricWeight?: boolean
    transitInsurance?: boolean
    width?: boolean
    height?: boolean
    length?: boolean
    viewCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    dangerousGoods?: boolean
    status?: boolean
    fromPostalCode?: boolean
    toPostalCode?: boolean
    fromCity?: boolean
    toCity?: boolean
    fromCountry?: boolean
    toCountry?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    fromState?: boolean
    toState?: boolean
    postCategory?: boolean
    shipmentType?: boolean
    shipmentMode?: boolean
    user?: boolean | QuotePost$userArgs<ExtArgs>
  }, ExtArgs["result"]["quotePost"]>

  export type QuotePostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totalNetWeight?: boolean
    totalGrossWeight?: boolean
    volumetricWeight?: boolean
    transitInsurance?: boolean
    width?: boolean
    height?: boolean
    length?: boolean
    viewCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    dangerousGoods?: boolean
    status?: boolean
    fromPostalCode?: boolean
    toPostalCode?: boolean
    fromCity?: boolean
    toCity?: boolean
    fromCountry?: boolean
    toCountry?: boolean
    fromAddress?: boolean
    toAddress?: boolean
    fromState?: boolean
    toState?: boolean
    postCategory?: boolean
    shipmentType?: boolean
    shipmentMode?: boolean
  }

  export type QuotePostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "userId" | "categoryId" | "createdAt" | "updatedAt" | "totalNetWeight" | "totalGrossWeight" | "volumetricWeight" | "transitInsurance" | "width" | "height" | "length" | "viewCount" | "likesCount" | "commentsCount" | "dangerousGoods" | "status" | "fromPostalCode" | "toPostalCode" | "fromCity" | "toCity" | "fromCountry" | "toCountry" | "fromAddress" | "toAddress" | "fromState" | "toState" | "postCategory" | "shipmentType" | "shipmentMode", ExtArgs["result"]["quotePost"]>
  export type QuotePostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quoteReply?: boolean | QuotePost$quoteReplyArgs<ExtArgs>
    quoteLike?: boolean | QuotePost$quoteLikeArgs<ExtArgs>
    user?: boolean | QuotePost$userArgs<ExtArgs>
    _count?: boolean | QuotePostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuotePostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | QuotePost$userArgs<ExtArgs>
  }
  export type QuotePostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | QuotePost$userArgs<ExtArgs>
  }

  export type $QuotePostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuotePost"
    objects: {
      quoteReply: Prisma.$QuoteReplyPayload<ExtArgs>[]
      quoteLike: Prisma.$QuoteLikePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      description: string | null
      userId: string | null
      categoryId: string | null
      createdAt: Date
      updatedAt: Date
      totalNetWeight: number | null
      totalGrossWeight: number | null
      volumetricWeight: number | null
      transitInsurance: boolean | null
      width: number | null
      height: number | null
      length: number | null
      viewCount: number | null
      likesCount: number | null
      commentsCount: number | null
      dangerousGoods: boolean | null
      status: string | null
      fromPostalCode: string | null
      toPostalCode: string | null
      fromCity: string | null
      toCity: string | null
      fromCountry: string | null
      toCountry: string | null
      fromAddress: string | null
      toAddress: string | null
      fromState: string | null
      toState: string | null
      postCategory: string | null
      shipmentType: string | null
      shipmentMode: string | null
    }, ExtArgs["result"]["quotePost"]>
    composites: {}
  }

  type QuotePostGetPayload<S extends boolean | null | undefined | QuotePostDefaultArgs> = $Result.GetResult<Prisma.$QuotePostPayload, S>

  type QuotePostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuotePostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuotePostCountAggregateInputType | true
    }

  export interface QuotePostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuotePost'], meta: { name: 'QuotePost' } }
    /**
     * Find zero or one QuotePost that matches the filter.
     * @param {QuotePostFindUniqueArgs} args - Arguments to find a QuotePost
     * @example
     * // Get one QuotePost
     * const quotePost = await prisma.quotePost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotePostFindUniqueArgs>(args: SelectSubset<T, QuotePostFindUniqueArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuotePost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuotePostFindUniqueOrThrowArgs} args - Arguments to find a QuotePost
     * @example
     * // Get one QuotePost
     * const quotePost = await prisma.quotePost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotePostFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotePostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuotePost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostFindFirstArgs} args - Arguments to find a QuotePost
     * @example
     * // Get one QuotePost
     * const quotePost = await prisma.quotePost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotePostFindFirstArgs>(args?: SelectSubset<T, QuotePostFindFirstArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuotePost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostFindFirstOrThrowArgs} args - Arguments to find a QuotePost
     * @example
     * // Get one QuotePost
     * const quotePost = await prisma.quotePost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotePostFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotePostFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuotePosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuotePosts
     * const quotePosts = await prisma.quotePost.findMany()
     * 
     * // Get first 10 QuotePosts
     * const quotePosts = await prisma.quotePost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotePostWithIdOnly = await prisma.quotePost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotePostFindManyArgs>(args?: SelectSubset<T, QuotePostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuotePost.
     * @param {QuotePostCreateArgs} args - Arguments to create a QuotePost.
     * @example
     * // Create one QuotePost
     * const QuotePost = await prisma.quotePost.create({
     *   data: {
     *     // ... data to create a QuotePost
     *   }
     * })
     * 
     */
    create<T extends QuotePostCreateArgs>(args: SelectSubset<T, QuotePostCreateArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuotePosts.
     * @param {QuotePostCreateManyArgs} args - Arguments to create many QuotePosts.
     * @example
     * // Create many QuotePosts
     * const quotePost = await prisma.quotePost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotePostCreateManyArgs>(args?: SelectSubset<T, QuotePostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuotePosts and returns the data saved in the database.
     * @param {QuotePostCreateManyAndReturnArgs} args - Arguments to create many QuotePosts.
     * @example
     * // Create many QuotePosts
     * const quotePost = await prisma.quotePost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuotePosts and only return the `id`
     * const quotePostWithIdOnly = await prisma.quotePost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuotePostCreateManyAndReturnArgs>(args?: SelectSubset<T, QuotePostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuotePost.
     * @param {QuotePostDeleteArgs} args - Arguments to delete one QuotePost.
     * @example
     * // Delete one QuotePost
     * const QuotePost = await prisma.quotePost.delete({
     *   where: {
     *     // ... filter to delete one QuotePost
     *   }
     * })
     * 
     */
    delete<T extends QuotePostDeleteArgs>(args: SelectSubset<T, QuotePostDeleteArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuotePost.
     * @param {QuotePostUpdateArgs} args - Arguments to update one QuotePost.
     * @example
     * // Update one QuotePost
     * const quotePost = await prisma.quotePost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotePostUpdateArgs>(args: SelectSubset<T, QuotePostUpdateArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuotePosts.
     * @param {QuotePostDeleteManyArgs} args - Arguments to filter QuotePosts to delete.
     * @example
     * // Delete a few QuotePosts
     * const { count } = await prisma.quotePost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotePostDeleteManyArgs>(args?: SelectSubset<T, QuotePostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuotePosts
     * const quotePost = await prisma.quotePost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotePostUpdateManyArgs>(args: SelectSubset<T, QuotePostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotePosts and returns the data updated in the database.
     * @param {QuotePostUpdateManyAndReturnArgs} args - Arguments to update many QuotePosts.
     * @example
     * // Update many QuotePosts
     * const quotePost = await prisma.quotePost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuotePosts and only return the `id`
     * const quotePostWithIdOnly = await prisma.quotePost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuotePostUpdateManyAndReturnArgs>(args: SelectSubset<T, QuotePostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuotePost.
     * @param {QuotePostUpsertArgs} args - Arguments to update or create a QuotePost.
     * @example
     * // Update or create a QuotePost
     * const quotePost = await prisma.quotePost.upsert({
     *   create: {
     *     // ... data to create a QuotePost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuotePost we want to update
     *   }
     * })
     */
    upsert<T extends QuotePostUpsertArgs>(args: SelectSubset<T, QuotePostUpsertArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuotePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostCountArgs} args - Arguments to filter QuotePosts to count.
     * @example
     * // Count the number of QuotePosts
     * const count = await prisma.quotePost.count({
     *   where: {
     *     // ... the filter for the QuotePosts we want to count
     *   }
     * })
    **/
    count<T extends QuotePostCountArgs>(
      args?: Subset<T, QuotePostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotePostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuotePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuotePostAggregateArgs>(args: Subset<T, QuotePostAggregateArgs>): Prisma.PrismaPromise<GetQuotePostAggregateType<T>>

    /**
     * Group by QuotePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotePostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuotePostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotePostGroupByArgs['orderBy'] }
        : { orderBy?: QuotePostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuotePostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotePostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuotePost model
   */
  readonly fields: QuotePostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuotePost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotePostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quoteReply<T extends QuotePost$quoteReplyArgs<ExtArgs> = {}>(args?: Subset<T, QuotePost$quoteReplyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quoteLike<T extends QuotePost$quoteLikeArgs<ExtArgs> = {}>(args?: Subset<T, QuotePost$quoteLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends QuotePost$userArgs<ExtArgs> = {}>(args?: Subset<T, QuotePost$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuotePost model
   */
  interface QuotePostFieldRefs {
    readonly id: FieldRef<"QuotePost", 'String'>
    readonly title: FieldRef<"QuotePost", 'String'>
    readonly description: FieldRef<"QuotePost", 'String'>
    readonly userId: FieldRef<"QuotePost", 'String'>
    readonly categoryId: FieldRef<"QuotePost", 'String'>
    readonly createdAt: FieldRef<"QuotePost", 'DateTime'>
    readonly updatedAt: FieldRef<"QuotePost", 'DateTime'>
    readonly totalNetWeight: FieldRef<"QuotePost", 'Float'>
    readonly totalGrossWeight: FieldRef<"QuotePost", 'Float'>
    readonly volumetricWeight: FieldRef<"QuotePost", 'Float'>
    readonly transitInsurance: FieldRef<"QuotePost", 'Boolean'>
    readonly width: FieldRef<"QuotePost", 'Float'>
    readonly height: FieldRef<"QuotePost", 'Float'>
    readonly length: FieldRef<"QuotePost", 'Float'>
    readonly viewCount: FieldRef<"QuotePost", 'Int'>
    readonly likesCount: FieldRef<"QuotePost", 'Int'>
    readonly commentsCount: FieldRef<"QuotePost", 'Int'>
    readonly dangerousGoods: FieldRef<"QuotePost", 'Boolean'>
    readonly status: FieldRef<"QuotePost", 'String'>
    readonly fromPostalCode: FieldRef<"QuotePost", 'String'>
    readonly toPostalCode: FieldRef<"QuotePost", 'String'>
    readonly fromCity: FieldRef<"QuotePost", 'String'>
    readonly toCity: FieldRef<"QuotePost", 'String'>
    readonly fromCountry: FieldRef<"QuotePost", 'String'>
    readonly toCountry: FieldRef<"QuotePost", 'String'>
    readonly fromAddress: FieldRef<"QuotePost", 'String'>
    readonly toAddress: FieldRef<"QuotePost", 'String'>
    readonly fromState: FieldRef<"QuotePost", 'String'>
    readonly toState: FieldRef<"QuotePost", 'String'>
    readonly postCategory: FieldRef<"QuotePost", 'String'>
    readonly shipmentType: FieldRef<"QuotePost", 'String'>
    readonly shipmentMode: FieldRef<"QuotePost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuotePost findUnique
   */
  export type QuotePostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostInclude<ExtArgs> | null
    /**
     * Filter, which QuotePost to fetch.
     */
    where: QuotePostWhereUniqueInput
  }

  /**
   * QuotePost findUniqueOrThrow
   */
  export type QuotePostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostInclude<ExtArgs> | null
    /**
     * Filter, which QuotePost to fetch.
     */
    where: QuotePostWhereUniqueInput
  }

  /**
   * QuotePost findFirst
   */
  export type QuotePostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostInclude<ExtArgs> | null
    /**
     * Filter, which QuotePost to fetch.
     */
    where?: QuotePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotePosts to fetch.
     */
    orderBy?: QuotePostOrderByWithRelationInput | QuotePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotePosts.
     */
    cursor?: QuotePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotePosts.
     */
    distinct?: QuotePostScalarFieldEnum | QuotePostScalarFieldEnum[]
  }

  /**
   * QuotePost findFirstOrThrow
   */
  export type QuotePostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostInclude<ExtArgs> | null
    /**
     * Filter, which QuotePost to fetch.
     */
    where?: QuotePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotePosts to fetch.
     */
    orderBy?: QuotePostOrderByWithRelationInput | QuotePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotePosts.
     */
    cursor?: QuotePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotePosts.
     */
    distinct?: QuotePostScalarFieldEnum | QuotePostScalarFieldEnum[]
  }

  /**
   * QuotePost findMany
   */
  export type QuotePostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostInclude<ExtArgs> | null
    /**
     * Filter, which QuotePosts to fetch.
     */
    where?: QuotePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotePosts to fetch.
     */
    orderBy?: QuotePostOrderByWithRelationInput | QuotePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuotePosts.
     */
    cursor?: QuotePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotePosts.
     */
    skip?: number
    distinct?: QuotePostScalarFieldEnum | QuotePostScalarFieldEnum[]
  }

  /**
   * QuotePost create
   */
  export type QuotePostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostInclude<ExtArgs> | null
    /**
     * The data needed to create a QuotePost.
     */
    data: XOR<QuotePostCreateInput, QuotePostUncheckedCreateInput>
  }

  /**
   * QuotePost createMany
   */
  export type QuotePostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuotePosts.
     */
    data: QuotePostCreateManyInput | QuotePostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuotePost createManyAndReturn
   */
  export type QuotePostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * The data used to create many QuotePosts.
     */
    data: QuotePostCreateManyInput | QuotePostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuotePost update
   */
  export type QuotePostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostInclude<ExtArgs> | null
    /**
     * The data needed to update a QuotePost.
     */
    data: XOR<QuotePostUpdateInput, QuotePostUncheckedUpdateInput>
    /**
     * Choose, which QuotePost to update.
     */
    where: QuotePostWhereUniqueInput
  }

  /**
   * QuotePost updateMany
   */
  export type QuotePostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuotePosts.
     */
    data: XOR<QuotePostUpdateManyMutationInput, QuotePostUncheckedUpdateManyInput>
    /**
     * Filter which QuotePosts to update
     */
    where?: QuotePostWhereInput
    /**
     * Limit how many QuotePosts to update.
     */
    limit?: number
  }

  /**
   * QuotePost updateManyAndReturn
   */
  export type QuotePostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * The data used to update QuotePosts.
     */
    data: XOR<QuotePostUpdateManyMutationInput, QuotePostUncheckedUpdateManyInput>
    /**
     * Filter which QuotePosts to update
     */
    where?: QuotePostWhereInput
    /**
     * Limit how many QuotePosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuotePost upsert
   */
  export type QuotePostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostInclude<ExtArgs> | null
    /**
     * The filter to search for the QuotePost to update in case it exists.
     */
    where: QuotePostWhereUniqueInput
    /**
     * In case the QuotePost found by the `where` argument doesn't exist, create a new QuotePost with this data.
     */
    create: XOR<QuotePostCreateInput, QuotePostUncheckedCreateInput>
    /**
     * In case the QuotePost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotePostUpdateInput, QuotePostUncheckedUpdateInput>
  }

  /**
   * QuotePost delete
   */
  export type QuotePostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostInclude<ExtArgs> | null
    /**
     * Filter which QuotePost to delete.
     */
    where: QuotePostWhereUniqueInput
  }

  /**
   * QuotePost deleteMany
   */
  export type QuotePostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotePosts to delete
     */
    where?: QuotePostWhereInput
    /**
     * Limit how many QuotePosts to delete.
     */
    limit?: number
  }

  /**
   * QuotePost.quoteReply
   */
  export type QuotePost$quoteReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
    where?: QuoteReplyWhereInput
    orderBy?: QuoteReplyOrderByWithRelationInput | QuoteReplyOrderByWithRelationInput[]
    cursor?: QuoteReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteReplyScalarFieldEnum | QuoteReplyScalarFieldEnum[]
  }

  /**
   * QuotePost.quoteLike
   */
  export type QuotePost$quoteLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
    where?: QuoteLikeWhereInput
    orderBy?: QuoteLikeOrderByWithRelationInput | QuoteLikeOrderByWithRelationInput[]
    cursor?: QuoteLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteLikeScalarFieldEnum | QuoteLikeScalarFieldEnum[]
  }

  /**
   * QuotePost.user
   */
  export type QuotePost$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * QuotePost without action
   */
  export type QuotePostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotePost
     */
    select?: QuotePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotePost
     */
    omit?: QuotePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotePostInclude<ExtArgs> | null
  }


  /**
   * Model QuoteReply
   */

  export type AggregateQuoteReply = {
    _count: QuoteReplyCountAggregateOutputType | null
    _min: QuoteReplyMinAggregateOutputType | null
    _max: QuoteReplyMaxAggregateOutputType | null
  }

  export type QuoteReplyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    parentReplyId: string | null
    createdAt: Date | null
  }

  export type QuoteReplyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    parentReplyId: string | null
    createdAt: Date | null
  }

  export type QuoteReplyCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    parentReplyId: number
    createdAt: number
    _all: number
  }


  export type QuoteReplyMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    parentReplyId?: true
    createdAt?: true
  }

  export type QuoteReplyMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    parentReplyId?: true
    createdAt?: true
  }

  export type QuoteReplyCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    parentReplyId?: true
    createdAt?: true
    _all?: true
  }

  export type QuoteReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteReply to aggregate.
     */
    where?: QuoteReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteReplies to fetch.
     */
    orderBy?: QuoteReplyOrderByWithRelationInput | QuoteReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuoteReplies
    **/
    _count?: true | QuoteReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteReplyMaxAggregateInputType
  }

  export type GetQuoteReplyAggregateType<T extends QuoteReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateQuoteReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuoteReply[P]>
      : GetScalarType<T[P], AggregateQuoteReply[P]>
  }




  export type QuoteReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteReplyWhereInput
    orderBy?: QuoteReplyOrderByWithAggregationInput | QuoteReplyOrderByWithAggregationInput[]
    by: QuoteReplyScalarFieldEnum[] | QuoteReplyScalarFieldEnum
    having?: QuoteReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteReplyCountAggregateInputType | true
    _min?: QuoteReplyMinAggregateInputType
    _max?: QuoteReplyMaxAggregateInputType
  }

  export type QuoteReplyGroupByOutputType = {
    id: string
    userId: string
    postId: string
    parentReplyId: string
    createdAt: Date
    _count: QuoteReplyCountAggregateOutputType | null
    _min: QuoteReplyMinAggregateOutputType | null
    _max: QuoteReplyMaxAggregateOutputType | null
  }

  type GetQuoteReplyGroupByPayload<T extends QuoteReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteReplyGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteReplyGroupByOutputType[P]>
        }
      >
    >


  export type QuoteReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    parentReplyId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteReply"]>

  export type QuoteReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    parentReplyId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteReply"]>

  export type QuoteReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    parentReplyId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteReply"]>

  export type QuoteReplySelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    parentReplyId?: boolean
    createdAt?: boolean
  }

  export type QuoteReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "parentReplyId" | "createdAt", ExtArgs["result"]["quoteReply"]>
  export type QuoteReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }
  export type QuoteReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }
  export type QuoteReplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }

  export type $QuoteReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuoteReply"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$QuotePostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
      parentReplyId: string
      createdAt: Date
    }, ExtArgs["result"]["quoteReply"]>
    composites: {}
  }

  type QuoteReplyGetPayload<S extends boolean | null | undefined | QuoteReplyDefaultArgs> = $Result.GetResult<Prisma.$QuoteReplyPayload, S>

  type QuoteReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuoteReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteReplyCountAggregateInputType | true
    }

  export interface QuoteReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuoteReply'], meta: { name: 'QuoteReply' } }
    /**
     * Find zero or one QuoteReply that matches the filter.
     * @param {QuoteReplyFindUniqueArgs} args - Arguments to find a QuoteReply
     * @example
     * // Get one QuoteReply
     * const quoteReply = await prisma.quoteReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteReplyFindUniqueArgs>(args: SelectSubset<T, QuoteReplyFindUniqueArgs<ExtArgs>>): Prisma__QuoteReplyClient<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuoteReply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteReplyFindUniqueOrThrowArgs} args - Arguments to find a QuoteReply
     * @example
     * // Get one QuoteReply
     * const quoteReply = await prisma.quoteReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteReplyClient<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteReplyFindFirstArgs} args - Arguments to find a QuoteReply
     * @example
     * // Get one QuoteReply
     * const quoteReply = await prisma.quoteReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteReplyFindFirstArgs>(args?: SelectSubset<T, QuoteReplyFindFirstArgs<ExtArgs>>): Prisma__QuoteReplyClient<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteReplyFindFirstOrThrowArgs} args - Arguments to find a QuoteReply
     * @example
     * // Get one QuoteReply
     * const quoteReply = await prisma.quoteReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteReplyClient<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuoteReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuoteReplies
     * const quoteReplies = await prisma.quoteReply.findMany()
     * 
     * // Get first 10 QuoteReplies
     * const quoteReplies = await prisma.quoteReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteReplyWithIdOnly = await prisma.quoteReply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteReplyFindManyArgs>(args?: SelectSubset<T, QuoteReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuoteReply.
     * @param {QuoteReplyCreateArgs} args - Arguments to create a QuoteReply.
     * @example
     * // Create one QuoteReply
     * const QuoteReply = await prisma.quoteReply.create({
     *   data: {
     *     // ... data to create a QuoteReply
     *   }
     * })
     * 
     */
    create<T extends QuoteReplyCreateArgs>(args: SelectSubset<T, QuoteReplyCreateArgs<ExtArgs>>): Prisma__QuoteReplyClient<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuoteReplies.
     * @param {QuoteReplyCreateManyArgs} args - Arguments to create many QuoteReplies.
     * @example
     * // Create many QuoteReplies
     * const quoteReply = await prisma.quoteReply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteReplyCreateManyArgs>(args?: SelectSubset<T, QuoteReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuoteReplies and returns the data saved in the database.
     * @param {QuoteReplyCreateManyAndReturnArgs} args - Arguments to create many QuoteReplies.
     * @example
     * // Create many QuoteReplies
     * const quoteReply = await prisma.quoteReply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuoteReplies and only return the `id`
     * const quoteReplyWithIdOnly = await prisma.quoteReply.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuoteReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, QuoteReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuoteReply.
     * @param {QuoteReplyDeleteArgs} args - Arguments to delete one QuoteReply.
     * @example
     * // Delete one QuoteReply
     * const QuoteReply = await prisma.quoteReply.delete({
     *   where: {
     *     // ... filter to delete one QuoteReply
     *   }
     * })
     * 
     */
    delete<T extends QuoteReplyDeleteArgs>(args: SelectSubset<T, QuoteReplyDeleteArgs<ExtArgs>>): Prisma__QuoteReplyClient<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuoteReply.
     * @param {QuoteReplyUpdateArgs} args - Arguments to update one QuoteReply.
     * @example
     * // Update one QuoteReply
     * const quoteReply = await prisma.quoteReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteReplyUpdateArgs>(args: SelectSubset<T, QuoteReplyUpdateArgs<ExtArgs>>): Prisma__QuoteReplyClient<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuoteReplies.
     * @param {QuoteReplyDeleteManyArgs} args - Arguments to filter QuoteReplies to delete.
     * @example
     * // Delete a few QuoteReplies
     * const { count } = await prisma.quoteReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteReplyDeleteManyArgs>(args?: SelectSubset<T, QuoteReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuoteReplies
     * const quoteReply = await prisma.quoteReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteReplyUpdateManyArgs>(args: SelectSubset<T, QuoteReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteReplies and returns the data updated in the database.
     * @param {QuoteReplyUpdateManyAndReturnArgs} args - Arguments to update many QuoteReplies.
     * @example
     * // Update many QuoteReplies
     * const quoteReply = await prisma.quoteReply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuoteReplies and only return the `id`
     * const quoteReplyWithIdOnly = await prisma.quoteReply.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuoteReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, QuoteReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuoteReply.
     * @param {QuoteReplyUpsertArgs} args - Arguments to update or create a QuoteReply.
     * @example
     * // Update or create a QuoteReply
     * const quoteReply = await prisma.quoteReply.upsert({
     *   create: {
     *     // ... data to create a QuoteReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuoteReply we want to update
     *   }
     * })
     */
    upsert<T extends QuoteReplyUpsertArgs>(args: SelectSubset<T, QuoteReplyUpsertArgs<ExtArgs>>): Prisma__QuoteReplyClient<$Result.GetResult<Prisma.$QuoteReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuoteReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteReplyCountArgs} args - Arguments to filter QuoteReplies to count.
     * @example
     * // Count the number of QuoteReplies
     * const count = await prisma.quoteReply.count({
     *   where: {
     *     // ... the filter for the QuoteReplies we want to count
     *   }
     * })
    **/
    count<T extends QuoteReplyCountArgs>(
      args?: Subset<T, QuoteReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuoteReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuoteReplyAggregateArgs>(args: Subset<T, QuoteReplyAggregateArgs>): Prisma.PrismaPromise<GetQuoteReplyAggregateType<T>>

    /**
     * Group by QuoteReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteReplyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuoteReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteReplyGroupByArgs['orderBy'] }
        : { orderBy?: QuoteReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuoteReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuoteReply model
   */
  readonly fields: QuoteReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuoteReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends QuotePostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuotePostDefaultArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuoteReply model
   */
  interface QuoteReplyFieldRefs {
    readonly id: FieldRef<"QuoteReply", 'String'>
    readonly userId: FieldRef<"QuoteReply", 'String'>
    readonly postId: FieldRef<"QuoteReply", 'String'>
    readonly parentReplyId: FieldRef<"QuoteReply", 'String'>
    readonly createdAt: FieldRef<"QuoteReply", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuoteReply findUnique
   */
  export type QuoteReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
    /**
     * Filter, which QuoteReply to fetch.
     */
    where: QuoteReplyWhereUniqueInput
  }

  /**
   * QuoteReply findUniqueOrThrow
   */
  export type QuoteReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
    /**
     * Filter, which QuoteReply to fetch.
     */
    where: QuoteReplyWhereUniqueInput
  }

  /**
   * QuoteReply findFirst
   */
  export type QuoteReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
    /**
     * Filter, which QuoteReply to fetch.
     */
    where?: QuoteReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteReplies to fetch.
     */
    orderBy?: QuoteReplyOrderByWithRelationInput | QuoteReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteReplies.
     */
    cursor?: QuoteReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteReplies.
     */
    distinct?: QuoteReplyScalarFieldEnum | QuoteReplyScalarFieldEnum[]
  }

  /**
   * QuoteReply findFirstOrThrow
   */
  export type QuoteReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
    /**
     * Filter, which QuoteReply to fetch.
     */
    where?: QuoteReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteReplies to fetch.
     */
    orderBy?: QuoteReplyOrderByWithRelationInput | QuoteReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteReplies.
     */
    cursor?: QuoteReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteReplies.
     */
    distinct?: QuoteReplyScalarFieldEnum | QuoteReplyScalarFieldEnum[]
  }

  /**
   * QuoteReply findMany
   */
  export type QuoteReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
    /**
     * Filter, which QuoteReplies to fetch.
     */
    where?: QuoteReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteReplies to fetch.
     */
    orderBy?: QuoteReplyOrderByWithRelationInput | QuoteReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuoteReplies.
     */
    cursor?: QuoteReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteReplies.
     */
    skip?: number
    distinct?: QuoteReplyScalarFieldEnum | QuoteReplyScalarFieldEnum[]
  }

  /**
   * QuoteReply create
   */
  export type QuoteReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a QuoteReply.
     */
    data: XOR<QuoteReplyCreateInput, QuoteReplyUncheckedCreateInput>
  }

  /**
   * QuoteReply createMany
   */
  export type QuoteReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuoteReplies.
     */
    data: QuoteReplyCreateManyInput | QuoteReplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteReply createManyAndReturn
   */
  export type QuoteReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * The data used to create many QuoteReplies.
     */
    data: QuoteReplyCreateManyInput | QuoteReplyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuoteReply update
   */
  export type QuoteReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a QuoteReply.
     */
    data: XOR<QuoteReplyUpdateInput, QuoteReplyUncheckedUpdateInput>
    /**
     * Choose, which QuoteReply to update.
     */
    where: QuoteReplyWhereUniqueInput
  }

  /**
   * QuoteReply updateMany
   */
  export type QuoteReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuoteReplies.
     */
    data: XOR<QuoteReplyUpdateManyMutationInput, QuoteReplyUncheckedUpdateManyInput>
    /**
     * Filter which QuoteReplies to update
     */
    where?: QuoteReplyWhereInput
    /**
     * Limit how many QuoteReplies to update.
     */
    limit?: number
  }

  /**
   * QuoteReply updateManyAndReturn
   */
  export type QuoteReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * The data used to update QuoteReplies.
     */
    data: XOR<QuoteReplyUpdateManyMutationInput, QuoteReplyUncheckedUpdateManyInput>
    /**
     * Filter which QuoteReplies to update
     */
    where?: QuoteReplyWhereInput
    /**
     * Limit how many QuoteReplies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuoteReply upsert
   */
  export type QuoteReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the QuoteReply to update in case it exists.
     */
    where: QuoteReplyWhereUniqueInput
    /**
     * In case the QuoteReply found by the `where` argument doesn't exist, create a new QuoteReply with this data.
     */
    create: XOR<QuoteReplyCreateInput, QuoteReplyUncheckedCreateInput>
    /**
     * In case the QuoteReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteReplyUpdateInput, QuoteReplyUncheckedUpdateInput>
  }

  /**
   * QuoteReply delete
   */
  export type QuoteReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
    /**
     * Filter which QuoteReply to delete.
     */
    where: QuoteReplyWhereUniqueInput
  }

  /**
   * QuoteReply deleteMany
   */
  export type QuoteReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteReplies to delete
     */
    where?: QuoteReplyWhereInput
    /**
     * Limit how many QuoteReplies to delete.
     */
    limit?: number
  }

  /**
   * QuoteReply without action
   */
  export type QuoteReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteReply
     */
    select?: QuoteReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteReply
     */
    omit?: QuoteReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteReplyInclude<ExtArgs> | null
  }


  /**
   * Model QuoteLike
   */

  export type AggregateQuoteLike = {
    _count: QuoteLikeCountAggregateOutputType | null
    _min: QuoteLikeMinAggregateOutputType | null
    _max: QuoteLikeMaxAggregateOutputType | null
  }

  export type QuoteLikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
  }

  export type QuoteLikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
  }

  export type QuoteLikeCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    _all: number
  }


  export type QuoteLikeMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type QuoteLikeMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type QuoteLikeCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type QuoteLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteLike to aggregate.
     */
    where?: QuoteLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteLikes to fetch.
     */
    orderBy?: QuoteLikeOrderByWithRelationInput | QuoteLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuoteLikes
    **/
    _count?: true | QuoteLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteLikeMaxAggregateInputType
  }

  export type GetQuoteLikeAggregateType<T extends QuoteLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateQuoteLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuoteLike[P]>
      : GetScalarType<T[P], AggregateQuoteLike[P]>
  }




  export type QuoteLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteLikeWhereInput
    orderBy?: QuoteLikeOrderByWithAggregationInput | QuoteLikeOrderByWithAggregationInput[]
    by: QuoteLikeScalarFieldEnum[] | QuoteLikeScalarFieldEnum
    having?: QuoteLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteLikeCountAggregateInputType | true
    _min?: QuoteLikeMinAggregateInputType
    _max?: QuoteLikeMaxAggregateInputType
  }

  export type QuoteLikeGroupByOutputType = {
    id: string
    userId: string
    postId: string
    _count: QuoteLikeCountAggregateOutputType | null
    _min: QuoteLikeMinAggregateOutputType | null
    _max: QuoteLikeMaxAggregateOutputType | null
  }

  type GetQuoteLikeGroupByPayload<T extends QuoteLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteLikeGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteLikeGroupByOutputType[P]>
        }
      >
    >


  export type QuoteLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteLike"]>

  export type QuoteLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteLike"]>

  export type QuoteLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteLike"]>

  export type QuoteLikeSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type QuoteLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId", ExtArgs["result"]["quoteLike"]>
  export type QuoteLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }
  export type QuoteLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }
  export type QuoteLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }

  export type $QuoteLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuoteLike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$QuotePostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
    }, ExtArgs["result"]["quoteLike"]>
    composites: {}
  }

  type QuoteLikeGetPayload<S extends boolean | null | undefined | QuoteLikeDefaultArgs> = $Result.GetResult<Prisma.$QuoteLikePayload, S>

  type QuoteLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuoteLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteLikeCountAggregateInputType | true
    }

  export interface QuoteLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuoteLike'], meta: { name: 'QuoteLike' } }
    /**
     * Find zero or one QuoteLike that matches the filter.
     * @param {QuoteLikeFindUniqueArgs} args - Arguments to find a QuoteLike
     * @example
     * // Get one QuoteLike
     * const quoteLike = await prisma.quoteLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteLikeFindUniqueArgs>(args: SelectSubset<T, QuoteLikeFindUniqueArgs<ExtArgs>>): Prisma__QuoteLikeClient<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuoteLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteLikeFindUniqueOrThrowArgs} args - Arguments to find a QuoteLike
     * @example
     * // Get one QuoteLike
     * const quoteLike = await prisma.quoteLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteLikeClient<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLikeFindFirstArgs} args - Arguments to find a QuoteLike
     * @example
     * // Get one QuoteLike
     * const quoteLike = await prisma.quoteLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteLikeFindFirstArgs>(args?: SelectSubset<T, QuoteLikeFindFirstArgs<ExtArgs>>): Prisma__QuoteLikeClient<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLikeFindFirstOrThrowArgs} args - Arguments to find a QuoteLike
     * @example
     * // Get one QuoteLike
     * const quoteLike = await prisma.quoteLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteLikeClient<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuoteLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuoteLikes
     * const quoteLikes = await prisma.quoteLike.findMany()
     * 
     * // Get first 10 QuoteLikes
     * const quoteLikes = await prisma.quoteLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteLikeWithIdOnly = await prisma.quoteLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteLikeFindManyArgs>(args?: SelectSubset<T, QuoteLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuoteLike.
     * @param {QuoteLikeCreateArgs} args - Arguments to create a QuoteLike.
     * @example
     * // Create one QuoteLike
     * const QuoteLike = await prisma.quoteLike.create({
     *   data: {
     *     // ... data to create a QuoteLike
     *   }
     * })
     * 
     */
    create<T extends QuoteLikeCreateArgs>(args: SelectSubset<T, QuoteLikeCreateArgs<ExtArgs>>): Prisma__QuoteLikeClient<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuoteLikes.
     * @param {QuoteLikeCreateManyArgs} args - Arguments to create many QuoteLikes.
     * @example
     * // Create many QuoteLikes
     * const quoteLike = await prisma.quoteLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteLikeCreateManyArgs>(args?: SelectSubset<T, QuoteLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuoteLikes and returns the data saved in the database.
     * @param {QuoteLikeCreateManyAndReturnArgs} args - Arguments to create many QuoteLikes.
     * @example
     * // Create many QuoteLikes
     * const quoteLike = await prisma.quoteLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuoteLikes and only return the `id`
     * const quoteLikeWithIdOnly = await prisma.quoteLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuoteLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, QuoteLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuoteLike.
     * @param {QuoteLikeDeleteArgs} args - Arguments to delete one QuoteLike.
     * @example
     * // Delete one QuoteLike
     * const QuoteLike = await prisma.quoteLike.delete({
     *   where: {
     *     // ... filter to delete one QuoteLike
     *   }
     * })
     * 
     */
    delete<T extends QuoteLikeDeleteArgs>(args: SelectSubset<T, QuoteLikeDeleteArgs<ExtArgs>>): Prisma__QuoteLikeClient<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuoteLike.
     * @param {QuoteLikeUpdateArgs} args - Arguments to update one QuoteLike.
     * @example
     * // Update one QuoteLike
     * const quoteLike = await prisma.quoteLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteLikeUpdateArgs>(args: SelectSubset<T, QuoteLikeUpdateArgs<ExtArgs>>): Prisma__QuoteLikeClient<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuoteLikes.
     * @param {QuoteLikeDeleteManyArgs} args - Arguments to filter QuoteLikes to delete.
     * @example
     * // Delete a few QuoteLikes
     * const { count } = await prisma.quoteLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteLikeDeleteManyArgs>(args?: SelectSubset<T, QuoteLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuoteLikes
     * const quoteLike = await prisma.quoteLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteLikeUpdateManyArgs>(args: SelectSubset<T, QuoteLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteLikes and returns the data updated in the database.
     * @param {QuoteLikeUpdateManyAndReturnArgs} args - Arguments to update many QuoteLikes.
     * @example
     * // Update many QuoteLikes
     * const quoteLike = await prisma.quoteLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuoteLikes and only return the `id`
     * const quoteLikeWithIdOnly = await prisma.quoteLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuoteLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, QuoteLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuoteLike.
     * @param {QuoteLikeUpsertArgs} args - Arguments to update or create a QuoteLike.
     * @example
     * // Update or create a QuoteLike
     * const quoteLike = await prisma.quoteLike.upsert({
     *   create: {
     *     // ... data to create a QuoteLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuoteLike we want to update
     *   }
     * })
     */
    upsert<T extends QuoteLikeUpsertArgs>(args: SelectSubset<T, QuoteLikeUpsertArgs<ExtArgs>>): Prisma__QuoteLikeClient<$Result.GetResult<Prisma.$QuoteLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuoteLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLikeCountArgs} args - Arguments to filter QuoteLikes to count.
     * @example
     * // Count the number of QuoteLikes
     * const count = await prisma.quoteLike.count({
     *   where: {
     *     // ... the filter for the QuoteLikes we want to count
     *   }
     * })
    **/
    count<T extends QuoteLikeCountArgs>(
      args?: Subset<T, QuoteLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuoteLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuoteLikeAggregateArgs>(args: Subset<T, QuoteLikeAggregateArgs>): Prisma.PrismaPromise<GetQuoteLikeAggregateType<T>>

    /**
     * Group by QuoteLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuoteLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteLikeGroupByArgs['orderBy'] }
        : { orderBy?: QuoteLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuoteLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuoteLike model
   */
  readonly fields: QuoteLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuoteLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends QuotePostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuotePostDefaultArgs<ExtArgs>>): Prisma__QuotePostClient<$Result.GetResult<Prisma.$QuotePostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuoteLike model
   */
  interface QuoteLikeFieldRefs {
    readonly id: FieldRef<"QuoteLike", 'String'>
    readonly userId: FieldRef<"QuoteLike", 'String'>
    readonly postId: FieldRef<"QuoteLike", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuoteLike findUnique
   */
  export type QuoteLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
    /**
     * Filter, which QuoteLike to fetch.
     */
    where: QuoteLikeWhereUniqueInput
  }

  /**
   * QuoteLike findUniqueOrThrow
   */
  export type QuoteLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
    /**
     * Filter, which QuoteLike to fetch.
     */
    where: QuoteLikeWhereUniqueInput
  }

  /**
   * QuoteLike findFirst
   */
  export type QuoteLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
    /**
     * Filter, which QuoteLike to fetch.
     */
    where?: QuoteLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteLikes to fetch.
     */
    orderBy?: QuoteLikeOrderByWithRelationInput | QuoteLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteLikes.
     */
    cursor?: QuoteLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteLikes.
     */
    distinct?: QuoteLikeScalarFieldEnum | QuoteLikeScalarFieldEnum[]
  }

  /**
   * QuoteLike findFirstOrThrow
   */
  export type QuoteLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
    /**
     * Filter, which QuoteLike to fetch.
     */
    where?: QuoteLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteLikes to fetch.
     */
    orderBy?: QuoteLikeOrderByWithRelationInput | QuoteLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteLikes.
     */
    cursor?: QuoteLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteLikes.
     */
    distinct?: QuoteLikeScalarFieldEnum | QuoteLikeScalarFieldEnum[]
  }

  /**
   * QuoteLike findMany
   */
  export type QuoteLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
    /**
     * Filter, which QuoteLikes to fetch.
     */
    where?: QuoteLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteLikes to fetch.
     */
    orderBy?: QuoteLikeOrderByWithRelationInput | QuoteLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuoteLikes.
     */
    cursor?: QuoteLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteLikes.
     */
    skip?: number
    distinct?: QuoteLikeScalarFieldEnum | QuoteLikeScalarFieldEnum[]
  }

  /**
   * QuoteLike create
   */
  export type QuoteLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a QuoteLike.
     */
    data: XOR<QuoteLikeCreateInput, QuoteLikeUncheckedCreateInput>
  }

  /**
   * QuoteLike createMany
   */
  export type QuoteLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuoteLikes.
     */
    data: QuoteLikeCreateManyInput | QuoteLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteLike createManyAndReturn
   */
  export type QuoteLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * The data used to create many QuoteLikes.
     */
    data: QuoteLikeCreateManyInput | QuoteLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuoteLike update
   */
  export type QuoteLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a QuoteLike.
     */
    data: XOR<QuoteLikeUpdateInput, QuoteLikeUncheckedUpdateInput>
    /**
     * Choose, which QuoteLike to update.
     */
    where: QuoteLikeWhereUniqueInput
  }

  /**
   * QuoteLike updateMany
   */
  export type QuoteLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuoteLikes.
     */
    data: XOR<QuoteLikeUpdateManyMutationInput, QuoteLikeUncheckedUpdateManyInput>
    /**
     * Filter which QuoteLikes to update
     */
    where?: QuoteLikeWhereInput
    /**
     * Limit how many QuoteLikes to update.
     */
    limit?: number
  }

  /**
   * QuoteLike updateManyAndReturn
   */
  export type QuoteLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * The data used to update QuoteLikes.
     */
    data: XOR<QuoteLikeUpdateManyMutationInput, QuoteLikeUncheckedUpdateManyInput>
    /**
     * Filter which QuoteLikes to update
     */
    where?: QuoteLikeWhereInput
    /**
     * Limit how many QuoteLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuoteLike upsert
   */
  export type QuoteLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the QuoteLike to update in case it exists.
     */
    where: QuoteLikeWhereUniqueInput
    /**
     * In case the QuoteLike found by the `where` argument doesn't exist, create a new QuoteLike with this data.
     */
    create: XOR<QuoteLikeCreateInput, QuoteLikeUncheckedCreateInput>
    /**
     * In case the QuoteLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteLikeUpdateInput, QuoteLikeUncheckedUpdateInput>
  }

  /**
   * QuoteLike delete
   */
  export type QuoteLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
    /**
     * Filter which QuoteLike to delete.
     */
    where: QuoteLikeWhereUniqueInput
  }

  /**
   * QuoteLike deleteMany
   */
  export type QuoteLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteLikes to delete
     */
    where?: QuoteLikeWhereInput
    /**
     * Limit how many QuoteLikes to delete.
     */
    limit?: number
  }

  /**
   * QuoteLike without action
   */
  export type QuoteLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLike
     */
    select?: QuoteLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteLike
     */
    omit?: QuoteLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteLikeInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    courses?: boolean | Admin$coursesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Admin$coursesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Admin$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.courses
   */
  export type Admin$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: number | null
    enrollmentCount: number | null
  }

  export type CourseSumAggregateOutputType = {
    price: number | null
    enrollmentCount: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    slug: string | null
    institution: string | null
    title: string | null
    description: string | null
    instructor: string | null
    logoUrl: string | null
    thumbnailUrl: string | null
    brochureUrl: string | null
    youtubeShortUrl: string | null
    educationLevel: $Enums.EducationLevel | null
    courseDifficulty: $Enums.CourseDifficulty | null
    mode: $Enums.CourseMode | null
    currency: $Enums.Currency | null
    price: number | null
    duration: string | null
    language: string | null
    status: $Enums.CourseStatus | null
    category: string | null
    enrollmentCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    institution: string | null
    title: string | null
    description: string | null
    instructor: string | null
    logoUrl: string | null
    thumbnailUrl: string | null
    brochureUrl: string | null
    youtubeShortUrl: string | null
    educationLevel: $Enums.EducationLevel | null
    courseDifficulty: $Enums.CourseDifficulty | null
    mode: $Enums.CourseMode | null
    currency: $Enums.Currency | null
    price: number | null
    duration: string | null
    language: string | null
    status: $Enums.CourseStatus | null
    category: string | null
    enrollmentCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    slug: number
    institution: number
    title: number
    description: number
    instructor: number
    logoUrl: number
    thumbnailUrl: number
    brochureUrl: number
    youtubeShortUrl: number
    educationLevel: number
    courseDifficulty: number
    mode: number
    currency: number
    price: number
    duration: number
    language: number
    status: number
    category: number
    enrollmentCount: number
    tags: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
    enrollmentCount?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
    enrollmentCount?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    slug?: true
    institution?: true
    title?: true
    description?: true
    instructor?: true
    logoUrl?: true
    thumbnailUrl?: true
    brochureUrl?: true
    youtubeShortUrl?: true
    educationLevel?: true
    courseDifficulty?: true
    mode?: true
    currency?: true
    price?: true
    duration?: true
    language?: true
    status?: true
    category?: true
    enrollmentCount?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    slug?: true
    institution?: true
    title?: true
    description?: true
    instructor?: true
    logoUrl?: true
    thumbnailUrl?: true
    brochureUrl?: true
    youtubeShortUrl?: true
    educationLevel?: true
    courseDifficulty?: true
    mode?: true
    currency?: true
    price?: true
    duration?: true
    language?: true
    status?: true
    category?: true
    enrollmentCount?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    slug?: true
    institution?: true
    title?: true
    description?: true
    instructor?: true
    logoUrl?: true
    thumbnailUrl?: true
    brochureUrl?: true
    youtubeShortUrl?: true
    educationLevel?: true
    courseDifficulty?: true
    mode?: true
    currency?: true
    price?: true
    duration?: true
    language?: true
    status?: true
    category?: true
    enrollmentCount?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    slug: string
    institution: string
    title: string
    description: string
    instructor: string
    logoUrl: string
    thumbnailUrl: string
    brochureUrl: string
    youtubeShortUrl: string
    educationLevel: $Enums.EducationLevel
    courseDifficulty: $Enums.CourseDifficulty
    mode: $Enums.CourseMode
    currency: $Enums.Currency
    price: number
    duration: string
    language: string
    status: $Enums.CourseStatus
    category: string
    enrollmentCount: number
    tags: string[]
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    institution?: boolean
    title?: boolean
    description?: boolean
    instructor?: boolean
    logoUrl?: boolean
    thumbnailUrl?: boolean
    brochureUrl?: boolean
    youtubeShortUrl?: boolean
    educationLevel?: boolean
    courseDifficulty?: boolean
    mode?: boolean
    currency?: boolean
    price?: boolean
    duration?: boolean
    language?: boolean
    status?: boolean
    category?: boolean
    enrollmentCount?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
    modules?: boolean | Course$modulesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    institution?: boolean
    title?: boolean
    description?: boolean
    instructor?: boolean
    logoUrl?: boolean
    thumbnailUrl?: boolean
    brochureUrl?: boolean
    youtubeShortUrl?: boolean
    educationLevel?: boolean
    courseDifficulty?: boolean
    mode?: boolean
    currency?: boolean
    price?: boolean
    duration?: boolean
    language?: boolean
    status?: boolean
    category?: boolean
    enrollmentCount?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    institution?: boolean
    title?: boolean
    description?: boolean
    instructor?: boolean
    logoUrl?: boolean
    thumbnailUrl?: boolean
    brochureUrl?: boolean
    youtubeShortUrl?: boolean
    educationLevel?: boolean
    courseDifficulty?: boolean
    mode?: boolean
    currency?: boolean
    price?: boolean
    duration?: boolean
    language?: boolean
    status?: boolean
    category?: boolean
    enrollmentCount?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    slug?: boolean
    institution?: boolean
    title?: boolean
    description?: boolean
    instructor?: boolean
    logoUrl?: boolean
    thumbnailUrl?: boolean
    brochureUrl?: boolean
    youtubeShortUrl?: boolean
    educationLevel?: boolean
    courseDifficulty?: boolean
    mode?: boolean
    currency?: boolean
    price?: boolean
    duration?: boolean
    language?: boolean
    status?: boolean
    category?: boolean
    enrollmentCount?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "institution" | "title" | "description" | "instructor" | "logoUrl" | "thumbnailUrl" | "brochureUrl" | "youtubeShortUrl" | "educationLevel" | "courseDifficulty" | "mode" | "currency" | "price" | "duration" | "language" | "status" | "category" | "enrollmentCount" | "tags" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
    modules?: boolean | Course$modulesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      createdBy: Prisma.$AdminPayload<ExtArgs>
      modules: Prisma.$CourseModulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      institution: string
      title: string
      description: string
      instructor: string
      logoUrl: string
      thumbnailUrl: string
      brochureUrl: string
      youtubeShortUrl: string
      educationLevel: $Enums.EducationLevel
      courseDifficulty: $Enums.CourseDifficulty
      mode: $Enums.CourseMode
      currency: $Enums.Currency
      price: number
      duration: string
      language: string
      status: $Enums.CourseStatus
      category: string
      enrollmentCount: number
      tags: string[]
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modules<T extends Course$modulesArgs<ExtArgs> = {}>(args?: Subset<T, Course$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly slug: FieldRef<"Course", 'String'>
    readonly institution: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly instructor: FieldRef<"Course", 'String'>
    readonly logoUrl: FieldRef<"Course", 'String'>
    readonly thumbnailUrl: FieldRef<"Course", 'String'>
    readonly brochureUrl: FieldRef<"Course", 'String'>
    readonly youtubeShortUrl: FieldRef<"Course", 'String'>
    readonly educationLevel: FieldRef<"Course", 'EducationLevel'>
    readonly courseDifficulty: FieldRef<"Course", 'CourseDifficulty'>
    readonly mode: FieldRef<"Course", 'CourseMode'>
    readonly currency: FieldRef<"Course", 'Currency'>
    readonly price: FieldRef<"Course", 'Int'>
    readonly duration: FieldRef<"Course", 'String'>
    readonly language: FieldRef<"Course", 'String'>
    readonly status: FieldRef<"Course", 'CourseStatus'>
    readonly category: FieldRef<"Course", 'String'>
    readonly enrollmentCount: FieldRef<"Course", 'Int'>
    readonly tags: FieldRef<"Course", 'String[]'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
    readonly createdById: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.modules
   */
  export type Course$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    where?: CourseModuleWhereInput
    orderBy?: CourseModuleOrderByWithRelationInput | CourseModuleOrderByWithRelationInput[]
    cursor?: CourseModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseModuleScalarFieldEnum | CourseModuleScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseModule
   */

  export type AggregateCourseModule = {
    _count: CourseModuleCountAggregateOutputType | null
    _min: CourseModuleMinAggregateOutputType | null
    _max: CourseModuleMaxAggregateOutputType | null
  }

  export type CourseModuleMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    courseId: string | null
    createdAt: Date | null
  }

  export type CourseModuleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    courseId: string | null
    createdAt: Date | null
  }

  export type CourseModuleCountAggregateOutputType = {
    id: number
    title: number
    description: number
    courseId: number
    createdAt: number
    _all: number
  }


  export type CourseModuleMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    courseId?: true
    createdAt?: true
  }

  export type CourseModuleMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    courseId?: true
    createdAt?: true
  }

  export type CourseModuleCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    courseId?: true
    createdAt?: true
    _all?: true
  }

  export type CourseModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseModule to aggregate.
     */
    where?: CourseModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModules to fetch.
     */
    orderBy?: CourseModuleOrderByWithRelationInput | CourseModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseModules
    **/
    _count?: true | CourseModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseModuleMaxAggregateInputType
  }

  export type GetCourseModuleAggregateType<T extends CourseModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseModule[P]>
      : GetScalarType<T[P], AggregateCourseModule[P]>
  }




  export type CourseModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseModuleWhereInput
    orderBy?: CourseModuleOrderByWithAggregationInput | CourseModuleOrderByWithAggregationInput[]
    by: CourseModuleScalarFieldEnum[] | CourseModuleScalarFieldEnum
    having?: CourseModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseModuleCountAggregateInputType | true
    _min?: CourseModuleMinAggregateInputType
    _max?: CourseModuleMaxAggregateInputType
  }

  export type CourseModuleGroupByOutputType = {
    id: string
    title: string
    description: string
    courseId: string
    createdAt: Date
    _count: CourseModuleCountAggregateOutputType | null
    _min: CourseModuleMinAggregateOutputType | null
    _max: CourseModuleMaxAggregateOutputType | null
  }

  type GetCourseModuleGroupByPayload<T extends CourseModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseModuleGroupByOutputType[P]>
            : GetScalarType<T[P], CourseModuleGroupByOutputType[P]>
        }
      >
    >


  export type CourseModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    courseId?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseModule"]>

  export type CourseModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    courseId?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseModule"]>

  export type CourseModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    courseId?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseModule"]>

  export type CourseModuleSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    courseId?: boolean
    createdAt?: boolean
  }

  export type CourseModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "courseId" | "createdAt", ExtArgs["result"]["courseModule"]>
  export type CourseModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseModule"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      courseId: string
      createdAt: Date
    }, ExtArgs["result"]["courseModule"]>
    composites: {}
  }

  type CourseModuleGetPayload<S extends boolean | null | undefined | CourseModuleDefaultArgs> = $Result.GetResult<Prisma.$CourseModulePayload, S>

  type CourseModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseModuleCountAggregateInputType | true
    }

  export interface CourseModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseModule'], meta: { name: 'CourseModule' } }
    /**
     * Find zero or one CourseModule that matches the filter.
     * @param {CourseModuleFindUniqueArgs} args - Arguments to find a CourseModule
     * @example
     * // Get one CourseModule
     * const courseModule = await prisma.courseModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseModuleFindUniqueArgs>(args: SelectSubset<T, CourseModuleFindUniqueArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseModule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseModuleFindUniqueOrThrowArgs} args - Arguments to find a CourseModule
     * @example
     * // Get one CourseModule
     * const courseModule = await prisma.courseModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleFindFirstArgs} args - Arguments to find a CourseModule
     * @example
     * // Get one CourseModule
     * const courseModule = await prisma.courseModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseModuleFindFirstArgs>(args?: SelectSubset<T, CourseModuleFindFirstArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleFindFirstOrThrowArgs} args - Arguments to find a CourseModule
     * @example
     * // Get one CourseModule
     * const courseModule = await prisma.courseModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseModules
     * const courseModules = await prisma.courseModule.findMany()
     * 
     * // Get first 10 CourseModules
     * const courseModules = await prisma.courseModule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseModuleWithIdOnly = await prisma.courseModule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseModuleFindManyArgs>(args?: SelectSubset<T, CourseModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseModule.
     * @param {CourseModuleCreateArgs} args - Arguments to create a CourseModule.
     * @example
     * // Create one CourseModule
     * const CourseModule = await prisma.courseModule.create({
     *   data: {
     *     // ... data to create a CourseModule
     *   }
     * })
     * 
     */
    create<T extends CourseModuleCreateArgs>(args: SelectSubset<T, CourseModuleCreateArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseModules.
     * @param {CourseModuleCreateManyArgs} args - Arguments to create many CourseModules.
     * @example
     * // Create many CourseModules
     * const courseModule = await prisma.courseModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseModuleCreateManyArgs>(args?: SelectSubset<T, CourseModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseModules and returns the data saved in the database.
     * @param {CourseModuleCreateManyAndReturnArgs} args - Arguments to create many CourseModules.
     * @example
     * // Create many CourseModules
     * const courseModule = await prisma.courseModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseModules and only return the `id`
     * const courseModuleWithIdOnly = await prisma.courseModule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseModule.
     * @param {CourseModuleDeleteArgs} args - Arguments to delete one CourseModule.
     * @example
     * // Delete one CourseModule
     * const CourseModule = await prisma.courseModule.delete({
     *   where: {
     *     // ... filter to delete one CourseModule
     *   }
     * })
     * 
     */
    delete<T extends CourseModuleDeleteArgs>(args: SelectSubset<T, CourseModuleDeleteArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseModule.
     * @param {CourseModuleUpdateArgs} args - Arguments to update one CourseModule.
     * @example
     * // Update one CourseModule
     * const courseModule = await prisma.courseModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseModuleUpdateArgs>(args: SelectSubset<T, CourseModuleUpdateArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseModules.
     * @param {CourseModuleDeleteManyArgs} args - Arguments to filter CourseModules to delete.
     * @example
     * // Delete a few CourseModules
     * const { count } = await prisma.courseModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseModuleDeleteManyArgs>(args?: SelectSubset<T, CourseModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseModules
     * const courseModule = await prisma.courseModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseModuleUpdateManyArgs>(args: SelectSubset<T, CourseModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseModules and returns the data updated in the database.
     * @param {CourseModuleUpdateManyAndReturnArgs} args - Arguments to update many CourseModules.
     * @example
     * // Update many CourseModules
     * const courseModule = await prisma.courseModule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseModules and only return the `id`
     * const courseModuleWithIdOnly = await prisma.courseModule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseModule.
     * @param {CourseModuleUpsertArgs} args - Arguments to update or create a CourseModule.
     * @example
     * // Update or create a CourseModule
     * const courseModule = await prisma.courseModule.upsert({
     *   create: {
     *     // ... data to create a CourseModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseModule we want to update
     *   }
     * })
     */
    upsert<T extends CourseModuleUpsertArgs>(args: SelectSubset<T, CourseModuleUpsertArgs<ExtArgs>>): Prisma__CourseModuleClient<$Result.GetResult<Prisma.$CourseModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleCountArgs} args - Arguments to filter CourseModules to count.
     * @example
     * // Count the number of CourseModules
     * const count = await prisma.courseModule.count({
     *   where: {
     *     // ... the filter for the CourseModules we want to count
     *   }
     * })
    **/
    count<T extends CourseModuleCountArgs>(
      args?: Subset<T, CourseModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseModuleAggregateArgs>(args: Subset<T, CourseModuleAggregateArgs>): Prisma.PrismaPromise<GetCourseModuleAggregateType<T>>

    /**
     * Group by CourseModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseModuleGroupByArgs['orderBy'] }
        : { orderBy?: CourseModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseModule model
   */
  readonly fields: CourseModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseModule model
   */
  interface CourseModuleFieldRefs {
    readonly id: FieldRef<"CourseModule", 'String'>
    readonly title: FieldRef<"CourseModule", 'String'>
    readonly description: FieldRef<"CourseModule", 'String'>
    readonly courseId: FieldRef<"CourseModule", 'String'>
    readonly createdAt: FieldRef<"CourseModule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseModule findUnique
   */
  export type CourseModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter, which CourseModule to fetch.
     */
    where: CourseModuleWhereUniqueInput
  }

  /**
   * CourseModule findUniqueOrThrow
   */
  export type CourseModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter, which CourseModule to fetch.
     */
    where: CourseModuleWhereUniqueInput
  }

  /**
   * CourseModule findFirst
   */
  export type CourseModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter, which CourseModule to fetch.
     */
    where?: CourseModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModules to fetch.
     */
    orderBy?: CourseModuleOrderByWithRelationInput | CourseModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseModules.
     */
    cursor?: CourseModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseModules.
     */
    distinct?: CourseModuleScalarFieldEnum | CourseModuleScalarFieldEnum[]
  }

  /**
   * CourseModule findFirstOrThrow
   */
  export type CourseModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter, which CourseModule to fetch.
     */
    where?: CourseModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModules to fetch.
     */
    orderBy?: CourseModuleOrderByWithRelationInput | CourseModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseModules.
     */
    cursor?: CourseModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseModules.
     */
    distinct?: CourseModuleScalarFieldEnum | CourseModuleScalarFieldEnum[]
  }

  /**
   * CourseModule findMany
   */
  export type CourseModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter, which CourseModules to fetch.
     */
    where?: CourseModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseModules to fetch.
     */
    orderBy?: CourseModuleOrderByWithRelationInput | CourseModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseModules.
     */
    cursor?: CourseModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseModules.
     */
    skip?: number
    distinct?: CourseModuleScalarFieldEnum | CourseModuleScalarFieldEnum[]
  }

  /**
   * CourseModule create
   */
  export type CourseModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseModule.
     */
    data: XOR<CourseModuleCreateInput, CourseModuleUncheckedCreateInput>
  }

  /**
   * CourseModule createMany
   */
  export type CourseModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseModules.
     */
    data: CourseModuleCreateManyInput | CourseModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseModule createManyAndReturn
   */
  export type CourseModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * The data used to create many CourseModules.
     */
    data: CourseModuleCreateManyInput | CourseModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseModule update
   */
  export type CourseModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseModule.
     */
    data: XOR<CourseModuleUpdateInput, CourseModuleUncheckedUpdateInput>
    /**
     * Choose, which CourseModule to update.
     */
    where: CourseModuleWhereUniqueInput
  }

  /**
   * CourseModule updateMany
   */
  export type CourseModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseModules.
     */
    data: XOR<CourseModuleUpdateManyMutationInput, CourseModuleUncheckedUpdateManyInput>
    /**
     * Filter which CourseModules to update
     */
    where?: CourseModuleWhereInput
    /**
     * Limit how many CourseModules to update.
     */
    limit?: number
  }

  /**
   * CourseModule updateManyAndReturn
   */
  export type CourseModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * The data used to update CourseModules.
     */
    data: XOR<CourseModuleUpdateManyMutationInput, CourseModuleUncheckedUpdateManyInput>
    /**
     * Filter which CourseModules to update
     */
    where?: CourseModuleWhereInput
    /**
     * Limit how many CourseModules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseModule upsert
   */
  export type CourseModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseModule to update in case it exists.
     */
    where: CourseModuleWhereUniqueInput
    /**
     * In case the CourseModule found by the `where` argument doesn't exist, create a new CourseModule with this data.
     */
    create: XOR<CourseModuleCreateInput, CourseModuleUncheckedCreateInput>
    /**
     * In case the CourseModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseModuleUpdateInput, CourseModuleUncheckedUpdateInput>
  }

  /**
   * CourseModule delete
   */
  export type CourseModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
    /**
     * Filter which CourseModule to delete.
     */
    where: CourseModuleWhereUniqueInput
  }

  /**
   * CourseModule deleteMany
   */
  export type CourseModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseModules to delete
     */
    where?: CourseModuleWhereInput
    /**
     * Limit how many CourseModules to delete.
     */
    limit?: number
  }

  /**
   * CourseModule without action
   */
  export type CourseModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseModule
     */
    select?: CourseModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseModule
     */
    omit?: CourseModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseModuleInclude<ExtArgs> | null
  }


  /**
   * Model CourseQuery
   */

  export type AggregateCourseQuery = {
    _count: CourseQueryCountAggregateOutputType | null
    _min: CourseQueryMinAggregateOutputType | null
    _max: CourseQueryMaxAggregateOutputType | null
  }

  export type CourseQueryMinAggregateOutputType = {
    id: string | null
    institutionName: string | null
    institutionType: $Enums.InstitutionType | null
    primaryContactName: string | null
    primaryContactTitle: string | null
    contactEmail: string | null
    contactPhone: string | null
    websiteUrl: string | null
    message: string | null
    createdAt: Date | null
  }

  export type CourseQueryMaxAggregateOutputType = {
    id: string | null
    institutionName: string | null
    institutionType: $Enums.InstitutionType | null
    primaryContactName: string | null
    primaryContactTitle: string | null
    contactEmail: string | null
    contactPhone: string | null
    websiteUrl: string | null
    message: string | null
    createdAt: Date | null
  }

  export type CourseQueryCountAggregateOutputType = {
    id: number
    institutionName: number
    institutionType: number
    primaryContactName: number
    primaryContactTitle: number
    contactEmail: number
    contactPhone: number
    websiteUrl: number
    message: number
    createdAt: number
    _all: number
  }


  export type CourseQueryMinAggregateInputType = {
    id?: true
    institutionName?: true
    institutionType?: true
    primaryContactName?: true
    primaryContactTitle?: true
    contactEmail?: true
    contactPhone?: true
    websiteUrl?: true
    message?: true
    createdAt?: true
  }

  export type CourseQueryMaxAggregateInputType = {
    id?: true
    institutionName?: true
    institutionType?: true
    primaryContactName?: true
    primaryContactTitle?: true
    contactEmail?: true
    contactPhone?: true
    websiteUrl?: true
    message?: true
    createdAt?: true
  }

  export type CourseQueryCountAggregateInputType = {
    id?: true
    institutionName?: true
    institutionType?: true
    primaryContactName?: true
    primaryContactTitle?: true
    contactEmail?: true
    contactPhone?: true
    websiteUrl?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type CourseQueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseQuery to aggregate.
     */
    where?: CourseQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseQueries to fetch.
     */
    orderBy?: CourseQueryOrderByWithRelationInput | CourseQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseQueries
    **/
    _count?: true | CourseQueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseQueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseQueryMaxAggregateInputType
  }

  export type GetCourseQueryAggregateType<T extends CourseQueryAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseQuery[P]>
      : GetScalarType<T[P], AggregateCourseQuery[P]>
  }




  export type CourseQueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseQueryWhereInput
    orderBy?: CourseQueryOrderByWithAggregationInput | CourseQueryOrderByWithAggregationInput[]
    by: CourseQueryScalarFieldEnum[] | CourseQueryScalarFieldEnum
    having?: CourseQueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseQueryCountAggregateInputType | true
    _min?: CourseQueryMinAggregateInputType
    _max?: CourseQueryMaxAggregateInputType
  }

  export type CourseQueryGroupByOutputType = {
    id: string
    institutionName: string
    institutionType: $Enums.InstitutionType
    primaryContactName: string
    primaryContactTitle: string
    contactEmail: string
    contactPhone: string
    websiteUrl: string
    message: string | null
    createdAt: Date
    _count: CourseQueryCountAggregateOutputType | null
    _min: CourseQueryMinAggregateOutputType | null
    _max: CourseQueryMaxAggregateOutputType | null
  }

  type GetCourseQueryGroupByPayload<T extends CourseQueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseQueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseQueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseQueryGroupByOutputType[P]>
            : GetScalarType<T[P], CourseQueryGroupByOutputType[P]>
        }
      >
    >


  export type CourseQuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionName?: boolean
    institutionType?: boolean
    primaryContactName?: boolean
    primaryContactTitle?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    websiteUrl?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["courseQuery"]>

  export type CourseQuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionName?: boolean
    institutionType?: boolean
    primaryContactName?: boolean
    primaryContactTitle?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    websiteUrl?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["courseQuery"]>

  export type CourseQuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionName?: boolean
    institutionType?: boolean
    primaryContactName?: boolean
    primaryContactTitle?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    websiteUrl?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["courseQuery"]>

  export type CourseQuerySelectScalar = {
    id?: boolean
    institutionName?: boolean
    institutionType?: boolean
    primaryContactName?: boolean
    primaryContactTitle?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    websiteUrl?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type CourseQueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institutionName" | "institutionType" | "primaryContactName" | "primaryContactTitle" | "contactEmail" | "contactPhone" | "websiteUrl" | "message" | "createdAt", ExtArgs["result"]["courseQuery"]>

  export type $CourseQueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseQuery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institutionName: string
      institutionType: $Enums.InstitutionType
      primaryContactName: string
      primaryContactTitle: string
      contactEmail: string
      contactPhone: string
      websiteUrl: string
      message: string | null
      createdAt: Date
    }, ExtArgs["result"]["courseQuery"]>
    composites: {}
  }

  type CourseQueryGetPayload<S extends boolean | null | undefined | CourseQueryDefaultArgs> = $Result.GetResult<Prisma.$CourseQueryPayload, S>

  type CourseQueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseQueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseQueryCountAggregateInputType | true
    }

  export interface CourseQueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseQuery'], meta: { name: 'CourseQuery' } }
    /**
     * Find zero or one CourseQuery that matches the filter.
     * @param {CourseQueryFindUniqueArgs} args - Arguments to find a CourseQuery
     * @example
     * // Get one CourseQuery
     * const courseQuery = await prisma.courseQuery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseQueryFindUniqueArgs>(args: SelectSubset<T, CourseQueryFindUniqueArgs<ExtArgs>>): Prisma__CourseQueryClient<$Result.GetResult<Prisma.$CourseQueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseQuery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseQueryFindUniqueOrThrowArgs} args - Arguments to find a CourseQuery
     * @example
     * // Get one CourseQuery
     * const courseQuery = await prisma.courseQuery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseQueryFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseQueryClient<$Result.GetResult<Prisma.$CourseQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseQuery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseQueryFindFirstArgs} args - Arguments to find a CourseQuery
     * @example
     * // Get one CourseQuery
     * const courseQuery = await prisma.courseQuery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseQueryFindFirstArgs>(args?: SelectSubset<T, CourseQueryFindFirstArgs<ExtArgs>>): Prisma__CourseQueryClient<$Result.GetResult<Prisma.$CourseQueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseQuery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseQueryFindFirstOrThrowArgs} args - Arguments to find a CourseQuery
     * @example
     * // Get one CourseQuery
     * const courseQuery = await prisma.courseQuery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseQueryFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseQueryClient<$Result.GetResult<Prisma.$CourseQueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseQueries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseQueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseQueries
     * const courseQueries = await prisma.courseQuery.findMany()
     * 
     * // Get first 10 CourseQueries
     * const courseQueries = await prisma.courseQuery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseQueryWithIdOnly = await prisma.courseQuery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseQueryFindManyArgs>(args?: SelectSubset<T, CourseQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseQuery.
     * @param {CourseQueryCreateArgs} args - Arguments to create a CourseQuery.
     * @example
     * // Create one CourseQuery
     * const CourseQuery = await prisma.courseQuery.create({
     *   data: {
     *     // ... data to create a CourseQuery
     *   }
     * })
     * 
     */
    create<T extends CourseQueryCreateArgs>(args: SelectSubset<T, CourseQueryCreateArgs<ExtArgs>>): Prisma__CourseQueryClient<$Result.GetResult<Prisma.$CourseQueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseQueries.
     * @param {CourseQueryCreateManyArgs} args - Arguments to create many CourseQueries.
     * @example
     * // Create many CourseQueries
     * const courseQuery = await prisma.courseQuery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseQueryCreateManyArgs>(args?: SelectSubset<T, CourseQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseQueries and returns the data saved in the database.
     * @param {CourseQueryCreateManyAndReturnArgs} args - Arguments to create many CourseQueries.
     * @example
     * // Create many CourseQueries
     * const courseQuery = await prisma.courseQuery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseQueries and only return the `id`
     * const courseQueryWithIdOnly = await prisma.courseQuery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseQueryCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseQueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseQuery.
     * @param {CourseQueryDeleteArgs} args - Arguments to delete one CourseQuery.
     * @example
     * // Delete one CourseQuery
     * const CourseQuery = await prisma.courseQuery.delete({
     *   where: {
     *     // ... filter to delete one CourseQuery
     *   }
     * })
     * 
     */
    delete<T extends CourseQueryDeleteArgs>(args: SelectSubset<T, CourseQueryDeleteArgs<ExtArgs>>): Prisma__CourseQueryClient<$Result.GetResult<Prisma.$CourseQueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseQuery.
     * @param {CourseQueryUpdateArgs} args - Arguments to update one CourseQuery.
     * @example
     * // Update one CourseQuery
     * const courseQuery = await prisma.courseQuery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseQueryUpdateArgs>(args: SelectSubset<T, CourseQueryUpdateArgs<ExtArgs>>): Prisma__CourseQueryClient<$Result.GetResult<Prisma.$CourseQueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseQueries.
     * @param {CourseQueryDeleteManyArgs} args - Arguments to filter CourseQueries to delete.
     * @example
     * // Delete a few CourseQueries
     * const { count } = await prisma.courseQuery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseQueryDeleteManyArgs>(args?: SelectSubset<T, CourseQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseQueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseQueries
     * const courseQuery = await prisma.courseQuery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseQueryUpdateManyArgs>(args: SelectSubset<T, CourseQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseQueries and returns the data updated in the database.
     * @param {CourseQueryUpdateManyAndReturnArgs} args - Arguments to update many CourseQueries.
     * @example
     * // Update many CourseQueries
     * const courseQuery = await prisma.courseQuery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseQueries and only return the `id`
     * const courseQueryWithIdOnly = await prisma.courseQuery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseQueryUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseQueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseQueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseQuery.
     * @param {CourseQueryUpsertArgs} args - Arguments to update or create a CourseQuery.
     * @example
     * // Update or create a CourseQuery
     * const courseQuery = await prisma.courseQuery.upsert({
     *   create: {
     *     // ... data to create a CourseQuery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseQuery we want to update
     *   }
     * })
     */
    upsert<T extends CourseQueryUpsertArgs>(args: SelectSubset<T, CourseQueryUpsertArgs<ExtArgs>>): Prisma__CourseQueryClient<$Result.GetResult<Prisma.$CourseQueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseQueryCountArgs} args - Arguments to filter CourseQueries to count.
     * @example
     * // Count the number of CourseQueries
     * const count = await prisma.courseQuery.count({
     *   where: {
     *     // ... the filter for the CourseQueries we want to count
     *   }
     * })
    **/
    count<T extends CourseQueryCountArgs>(
      args?: Subset<T, CourseQueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseQueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseQueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseQueryAggregateArgs>(args: Subset<T, CourseQueryAggregateArgs>): Prisma.PrismaPromise<GetCourseQueryAggregateType<T>>

    /**
     * Group by CourseQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseQueryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseQueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseQueryGroupByArgs['orderBy'] }
        : { orderBy?: CourseQueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseQuery model
   */
  readonly fields: CourseQueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseQuery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseQueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseQuery model
   */
  interface CourseQueryFieldRefs {
    readonly id: FieldRef<"CourseQuery", 'String'>
    readonly institutionName: FieldRef<"CourseQuery", 'String'>
    readonly institutionType: FieldRef<"CourseQuery", 'InstitutionType'>
    readonly primaryContactName: FieldRef<"CourseQuery", 'String'>
    readonly primaryContactTitle: FieldRef<"CourseQuery", 'String'>
    readonly contactEmail: FieldRef<"CourseQuery", 'String'>
    readonly contactPhone: FieldRef<"CourseQuery", 'String'>
    readonly websiteUrl: FieldRef<"CourseQuery", 'String'>
    readonly message: FieldRef<"CourseQuery", 'String'>
    readonly createdAt: FieldRef<"CourseQuery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseQuery findUnique
   */
  export type CourseQueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
    /**
     * Filter, which CourseQuery to fetch.
     */
    where: CourseQueryWhereUniqueInput
  }

  /**
   * CourseQuery findUniqueOrThrow
   */
  export type CourseQueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
    /**
     * Filter, which CourseQuery to fetch.
     */
    where: CourseQueryWhereUniqueInput
  }

  /**
   * CourseQuery findFirst
   */
  export type CourseQueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
    /**
     * Filter, which CourseQuery to fetch.
     */
    where?: CourseQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseQueries to fetch.
     */
    orderBy?: CourseQueryOrderByWithRelationInput | CourseQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseQueries.
     */
    cursor?: CourseQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseQueries.
     */
    distinct?: CourseQueryScalarFieldEnum | CourseQueryScalarFieldEnum[]
  }

  /**
   * CourseQuery findFirstOrThrow
   */
  export type CourseQueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
    /**
     * Filter, which CourseQuery to fetch.
     */
    where?: CourseQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseQueries to fetch.
     */
    orderBy?: CourseQueryOrderByWithRelationInput | CourseQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseQueries.
     */
    cursor?: CourseQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseQueries.
     */
    distinct?: CourseQueryScalarFieldEnum | CourseQueryScalarFieldEnum[]
  }

  /**
   * CourseQuery findMany
   */
  export type CourseQueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
    /**
     * Filter, which CourseQueries to fetch.
     */
    where?: CourseQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseQueries to fetch.
     */
    orderBy?: CourseQueryOrderByWithRelationInput | CourseQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseQueries.
     */
    cursor?: CourseQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseQueries.
     */
    skip?: number
    distinct?: CourseQueryScalarFieldEnum | CourseQueryScalarFieldEnum[]
  }

  /**
   * CourseQuery create
   */
  export type CourseQueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
    /**
     * The data needed to create a CourseQuery.
     */
    data: XOR<CourseQueryCreateInput, CourseQueryUncheckedCreateInput>
  }

  /**
   * CourseQuery createMany
   */
  export type CourseQueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseQueries.
     */
    data: CourseQueryCreateManyInput | CourseQueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseQuery createManyAndReturn
   */
  export type CourseQueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
    /**
     * The data used to create many CourseQueries.
     */
    data: CourseQueryCreateManyInput | CourseQueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseQuery update
   */
  export type CourseQueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
    /**
     * The data needed to update a CourseQuery.
     */
    data: XOR<CourseQueryUpdateInput, CourseQueryUncheckedUpdateInput>
    /**
     * Choose, which CourseQuery to update.
     */
    where: CourseQueryWhereUniqueInput
  }

  /**
   * CourseQuery updateMany
   */
  export type CourseQueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseQueries.
     */
    data: XOR<CourseQueryUpdateManyMutationInput, CourseQueryUncheckedUpdateManyInput>
    /**
     * Filter which CourseQueries to update
     */
    where?: CourseQueryWhereInput
    /**
     * Limit how many CourseQueries to update.
     */
    limit?: number
  }

  /**
   * CourseQuery updateManyAndReturn
   */
  export type CourseQueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
    /**
     * The data used to update CourseQueries.
     */
    data: XOR<CourseQueryUpdateManyMutationInput, CourseQueryUncheckedUpdateManyInput>
    /**
     * Filter which CourseQueries to update
     */
    where?: CourseQueryWhereInput
    /**
     * Limit how many CourseQueries to update.
     */
    limit?: number
  }

  /**
   * CourseQuery upsert
   */
  export type CourseQueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
    /**
     * The filter to search for the CourseQuery to update in case it exists.
     */
    where: CourseQueryWhereUniqueInput
    /**
     * In case the CourseQuery found by the `where` argument doesn't exist, create a new CourseQuery with this data.
     */
    create: XOR<CourseQueryCreateInput, CourseQueryUncheckedCreateInput>
    /**
     * In case the CourseQuery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseQueryUpdateInput, CourseQueryUncheckedUpdateInput>
  }

  /**
   * CourseQuery delete
   */
  export type CourseQueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
    /**
     * Filter which CourseQuery to delete.
     */
    where: CourseQueryWhereUniqueInput
  }

  /**
   * CourseQuery deleteMany
   */
  export type CourseQueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseQueries to delete
     */
    where?: CourseQueryWhereInput
    /**
     * Limit how many CourseQueries to delete.
     */
    limit?: number
  }

  /**
   * CourseQuery without action
   */
  export type CourseQueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseQuery
     */
    select?: CourseQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseQuery
     */
    omit?: CourseQueryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    verified: 'verified',
    role: 'role',
    mobileNo: 'mobileNo',
    country: 'country',
    city: 'city',
    address: 'address',
    postalCode: 'postalCode',
    profilePic: 'profilePic',
    bio: 'bio',
    online: 'online',
    lastSeen: 'lastSeen',
    rating: 'rating',
    accountType: 'accountType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ForumMainCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    enabled: 'enabled'
  };

  export type ForumMainCategoryScalarFieldEnum = (typeof ForumMainCategoryScalarFieldEnum)[keyof typeof ForumMainCategoryScalarFieldEnum]


  export const ForumSubCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    enabled: 'enabled'
  };

  export type ForumSubCategoryScalarFieldEnum = (typeof ForumSubCategoryScalarFieldEnum)[keyof typeof ForumSubCategoryScalarFieldEnum]


  export const QuotePostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    totalNetWeight: 'totalNetWeight',
    totalGrossWeight: 'totalGrossWeight',
    volumetricWeight: 'volumetricWeight',
    transitInsurance: 'transitInsurance',
    width: 'width',
    height: 'height',
    length: 'length',
    viewCount: 'viewCount',
    likesCount: 'likesCount',
    commentsCount: 'commentsCount',
    dangerousGoods: 'dangerousGoods',
    status: 'status',
    fromPostalCode: 'fromPostalCode',
    toPostalCode: 'toPostalCode',
    fromCity: 'fromCity',
    toCity: 'toCity',
    fromCountry: 'fromCountry',
    toCountry: 'toCountry',
    fromAddress: 'fromAddress',
    toAddress: 'toAddress',
    fromState: 'fromState',
    toState: 'toState',
    postCategory: 'postCategory',
    shipmentType: 'shipmentType',
    shipmentMode: 'shipmentMode'
  };

  export type QuotePostScalarFieldEnum = (typeof QuotePostScalarFieldEnum)[keyof typeof QuotePostScalarFieldEnum]


  export const QuoteReplyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    parentReplyId: 'parentReplyId',
    createdAt: 'createdAt'
  };

  export type QuoteReplyScalarFieldEnum = (typeof QuoteReplyScalarFieldEnum)[keyof typeof QuoteReplyScalarFieldEnum]


  export const QuoteLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId'
  };

  export type QuoteLikeScalarFieldEnum = (typeof QuoteLikeScalarFieldEnum)[keyof typeof QuoteLikeScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    institution: 'institution',
    title: 'title',
    description: 'description',
    instructor: 'instructor',
    logoUrl: 'logoUrl',
    thumbnailUrl: 'thumbnailUrl',
    brochureUrl: 'brochureUrl',
    youtubeShortUrl: 'youtubeShortUrl',
    educationLevel: 'educationLevel',
    courseDifficulty: 'courseDifficulty',
    mode: 'mode',
    currency: 'currency',
    price: 'price',
    duration: 'duration',
    language: 'language',
    status: 'status',
    category: 'category',
    enrollmentCount: 'enrollmentCount',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseModuleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    courseId: 'courseId',
    createdAt: 'createdAt'
  };

  export type CourseModuleScalarFieldEnum = (typeof CourseModuleScalarFieldEnum)[keyof typeof CourseModuleScalarFieldEnum]


  export const CourseQueryScalarFieldEnum: {
    id: 'id',
    institutionName: 'institutionName',
    institutionType: 'institutionType',
    primaryContactName: 'primaryContactName',
    primaryContactTitle: 'primaryContactTitle',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    websiteUrl: 'websiteUrl',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type CourseQueryScalarFieldEnum = (typeof CourseQueryScalarFieldEnum)[keyof typeof CourseQueryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EducationLevel'
   */
  export type EnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel'>
    


  /**
   * Reference to a field of type 'EducationLevel[]'
   */
  export type ListEnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel[]'>
    


  /**
   * Reference to a field of type 'CourseDifficulty'
   */
  export type EnumCourseDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseDifficulty'>
    


  /**
   * Reference to a field of type 'CourseDifficulty[]'
   */
  export type ListEnumCourseDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseDifficulty[]'>
    


  /**
   * Reference to a field of type 'CourseMode'
   */
  export type EnumCourseModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseMode'>
    


  /**
   * Reference to a field of type 'CourseMode[]'
   */
  export type ListEnumCourseModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseMode[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'CourseStatus'
   */
  export type EnumCourseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseStatus'>
    


  /**
   * Reference to a field of type 'CourseStatus[]'
   */
  export type ListEnumCourseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseStatus[]'>
    


  /**
   * Reference to a field of type 'InstitutionType'
   */
  export type EnumInstitutionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstitutionType'>
    


  /**
   * Reference to a field of type 'InstitutionType[]'
   */
  export type ListEnumInstitutionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstitutionType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    verified?: BoolNullableFilter<"User"> | boolean | null
    role?: StringNullableFilter<"User"> | string | null
    mobileNo?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    postalCode?: StringNullableFilter<"User"> | string | null
    profilePic?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    online?: BoolNullableFilter<"User"> | boolean | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    rating?: FloatNullableFilter<"User"> | number | null
    accountType?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quotePost?: QuotePostListRelationFilter
    quoteReply?: QuoteReplyListRelationFilter
    quoteLike?: QuoteLikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    mobileNo?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    online?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quotePost?: QuotePostOrderByRelationAggregateInput
    quoteReply?: QuoteReplyOrderByRelationAggregateInput
    quoteLike?: QuoteLikeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    mobileNo?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    verified?: BoolNullableFilter<"User"> | boolean | null
    role?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    postalCode?: StringNullableFilter<"User"> | string | null
    profilePic?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    online?: BoolNullableFilter<"User"> | boolean | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    rating?: FloatNullableFilter<"User"> | number | null
    accountType?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quotePost?: QuotePostListRelationFilter
    quoteReply?: QuoteReplyListRelationFilter
    quoteLike?: QuoteLikeListRelationFilter
  }, "id" | "email" | "mobileNo">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    mobileNo?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    online?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    verified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    mobileNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePic?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    online?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    lastSeen?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    rating?: FloatNullableWithAggregatesFilter<"User"> | number | null
    accountType?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ForumMainCategoryWhereInput = {
    AND?: ForumMainCategoryWhereInput | ForumMainCategoryWhereInput[]
    OR?: ForumMainCategoryWhereInput[]
    NOT?: ForumMainCategoryWhereInput | ForumMainCategoryWhereInput[]
    id?: StringFilter<"ForumMainCategory"> | string
    name?: StringNullableFilter<"ForumMainCategory"> | string | null
    enabled?: BoolNullableFilter<"ForumMainCategory"> | boolean | null
  }

  export type ForumMainCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
  }

  export type ForumMainCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForumMainCategoryWhereInput | ForumMainCategoryWhereInput[]
    OR?: ForumMainCategoryWhereInput[]
    NOT?: ForumMainCategoryWhereInput | ForumMainCategoryWhereInput[]
    name?: StringNullableFilter<"ForumMainCategory"> | string | null
    enabled?: BoolNullableFilter<"ForumMainCategory"> | boolean | null
  }, "id">

  export type ForumMainCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    _count?: ForumMainCategoryCountOrderByAggregateInput
    _max?: ForumMainCategoryMaxOrderByAggregateInput
    _min?: ForumMainCategoryMinOrderByAggregateInput
  }

  export type ForumMainCategoryScalarWhereWithAggregatesInput = {
    AND?: ForumMainCategoryScalarWhereWithAggregatesInput | ForumMainCategoryScalarWhereWithAggregatesInput[]
    OR?: ForumMainCategoryScalarWhereWithAggregatesInput[]
    NOT?: ForumMainCategoryScalarWhereWithAggregatesInput | ForumMainCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForumMainCategory"> | string
    name?: StringNullableWithAggregatesFilter<"ForumMainCategory"> | string | null
    enabled?: BoolNullableWithAggregatesFilter<"ForumMainCategory"> | boolean | null
  }

  export type ForumSubCategoryWhereInput = {
    AND?: ForumSubCategoryWhereInput | ForumSubCategoryWhereInput[]
    OR?: ForumSubCategoryWhereInput[]
    NOT?: ForumSubCategoryWhereInput | ForumSubCategoryWhereInput[]
    id?: StringFilter<"ForumSubCategory"> | string
    name?: StringNullableFilter<"ForumSubCategory"> | string | null
    enabled?: BoolNullableFilter<"ForumSubCategory"> | boolean | null
  }

  export type ForumSubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
  }

  export type ForumSubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForumSubCategoryWhereInput | ForumSubCategoryWhereInput[]
    OR?: ForumSubCategoryWhereInput[]
    NOT?: ForumSubCategoryWhereInput | ForumSubCategoryWhereInput[]
    name?: StringNullableFilter<"ForumSubCategory"> | string | null
    enabled?: BoolNullableFilter<"ForumSubCategory"> | boolean | null
  }, "id">

  export type ForumSubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    _count?: ForumSubCategoryCountOrderByAggregateInput
    _max?: ForumSubCategoryMaxOrderByAggregateInput
    _min?: ForumSubCategoryMinOrderByAggregateInput
  }

  export type ForumSubCategoryScalarWhereWithAggregatesInput = {
    AND?: ForumSubCategoryScalarWhereWithAggregatesInput | ForumSubCategoryScalarWhereWithAggregatesInput[]
    OR?: ForumSubCategoryScalarWhereWithAggregatesInput[]
    NOT?: ForumSubCategoryScalarWhereWithAggregatesInput | ForumSubCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForumSubCategory"> | string
    name?: StringNullableWithAggregatesFilter<"ForumSubCategory"> | string | null
    enabled?: BoolNullableWithAggregatesFilter<"ForumSubCategory"> | boolean | null
  }

  export type QuotePostWhereInput = {
    AND?: QuotePostWhereInput | QuotePostWhereInput[]
    OR?: QuotePostWhereInput[]
    NOT?: QuotePostWhereInput | QuotePostWhereInput[]
    id?: StringFilter<"QuotePost"> | string
    title?: StringNullableFilter<"QuotePost"> | string | null
    description?: StringNullableFilter<"QuotePost"> | string | null
    userId?: StringNullableFilter<"QuotePost"> | string | null
    categoryId?: StringNullableFilter<"QuotePost"> | string | null
    createdAt?: DateTimeFilter<"QuotePost"> | Date | string
    updatedAt?: DateTimeFilter<"QuotePost"> | Date | string
    totalNetWeight?: FloatNullableFilter<"QuotePost"> | number | null
    totalGrossWeight?: FloatNullableFilter<"QuotePost"> | number | null
    volumetricWeight?: FloatNullableFilter<"QuotePost"> | number | null
    transitInsurance?: BoolNullableFilter<"QuotePost"> | boolean | null
    width?: FloatNullableFilter<"QuotePost"> | number | null
    height?: FloatNullableFilter<"QuotePost"> | number | null
    length?: FloatNullableFilter<"QuotePost"> | number | null
    viewCount?: IntNullableFilter<"QuotePost"> | number | null
    likesCount?: IntNullableFilter<"QuotePost"> | number | null
    commentsCount?: IntNullableFilter<"QuotePost"> | number | null
    dangerousGoods?: BoolNullableFilter<"QuotePost"> | boolean | null
    status?: StringNullableFilter<"QuotePost"> | string | null
    fromPostalCode?: StringNullableFilter<"QuotePost"> | string | null
    toPostalCode?: StringNullableFilter<"QuotePost"> | string | null
    fromCity?: StringNullableFilter<"QuotePost"> | string | null
    toCity?: StringNullableFilter<"QuotePost"> | string | null
    fromCountry?: StringNullableFilter<"QuotePost"> | string | null
    toCountry?: StringNullableFilter<"QuotePost"> | string | null
    fromAddress?: StringNullableFilter<"QuotePost"> | string | null
    toAddress?: StringNullableFilter<"QuotePost"> | string | null
    fromState?: StringNullableFilter<"QuotePost"> | string | null
    toState?: StringNullableFilter<"QuotePost"> | string | null
    postCategory?: StringNullableFilter<"QuotePost"> | string | null
    shipmentType?: StringNullableFilter<"QuotePost"> | string | null
    shipmentMode?: StringNullableFilter<"QuotePost"> | string | null
    quoteReply?: QuoteReplyListRelationFilter
    quoteLike?: QuoteLikeListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type QuotePostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalNetWeight?: SortOrderInput | SortOrder
    totalGrossWeight?: SortOrderInput | SortOrder
    volumetricWeight?: SortOrderInput | SortOrder
    transitInsurance?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    viewCount?: SortOrderInput | SortOrder
    likesCount?: SortOrderInput | SortOrder
    commentsCount?: SortOrderInput | SortOrder
    dangerousGoods?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    fromPostalCode?: SortOrderInput | SortOrder
    toPostalCode?: SortOrderInput | SortOrder
    fromCity?: SortOrderInput | SortOrder
    toCity?: SortOrderInput | SortOrder
    fromCountry?: SortOrderInput | SortOrder
    toCountry?: SortOrderInput | SortOrder
    fromAddress?: SortOrderInput | SortOrder
    toAddress?: SortOrderInput | SortOrder
    fromState?: SortOrderInput | SortOrder
    toState?: SortOrderInput | SortOrder
    postCategory?: SortOrderInput | SortOrder
    shipmentType?: SortOrderInput | SortOrder
    shipmentMode?: SortOrderInput | SortOrder
    quoteReply?: QuoteReplyOrderByRelationAggregateInput
    quoteLike?: QuoteLikeOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type QuotePostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuotePostWhereInput | QuotePostWhereInput[]
    OR?: QuotePostWhereInput[]
    NOT?: QuotePostWhereInput | QuotePostWhereInput[]
    title?: StringNullableFilter<"QuotePost"> | string | null
    description?: StringNullableFilter<"QuotePost"> | string | null
    userId?: StringNullableFilter<"QuotePost"> | string | null
    categoryId?: StringNullableFilter<"QuotePost"> | string | null
    createdAt?: DateTimeFilter<"QuotePost"> | Date | string
    updatedAt?: DateTimeFilter<"QuotePost"> | Date | string
    totalNetWeight?: FloatNullableFilter<"QuotePost"> | number | null
    totalGrossWeight?: FloatNullableFilter<"QuotePost"> | number | null
    volumetricWeight?: FloatNullableFilter<"QuotePost"> | number | null
    transitInsurance?: BoolNullableFilter<"QuotePost"> | boolean | null
    width?: FloatNullableFilter<"QuotePost"> | number | null
    height?: FloatNullableFilter<"QuotePost"> | number | null
    length?: FloatNullableFilter<"QuotePost"> | number | null
    viewCount?: IntNullableFilter<"QuotePost"> | number | null
    likesCount?: IntNullableFilter<"QuotePost"> | number | null
    commentsCount?: IntNullableFilter<"QuotePost"> | number | null
    dangerousGoods?: BoolNullableFilter<"QuotePost"> | boolean | null
    status?: StringNullableFilter<"QuotePost"> | string | null
    fromPostalCode?: StringNullableFilter<"QuotePost"> | string | null
    toPostalCode?: StringNullableFilter<"QuotePost"> | string | null
    fromCity?: StringNullableFilter<"QuotePost"> | string | null
    toCity?: StringNullableFilter<"QuotePost"> | string | null
    fromCountry?: StringNullableFilter<"QuotePost"> | string | null
    toCountry?: StringNullableFilter<"QuotePost"> | string | null
    fromAddress?: StringNullableFilter<"QuotePost"> | string | null
    toAddress?: StringNullableFilter<"QuotePost"> | string | null
    fromState?: StringNullableFilter<"QuotePost"> | string | null
    toState?: StringNullableFilter<"QuotePost"> | string | null
    postCategory?: StringNullableFilter<"QuotePost"> | string | null
    shipmentType?: StringNullableFilter<"QuotePost"> | string | null
    shipmentMode?: StringNullableFilter<"QuotePost"> | string | null
    quoteReply?: QuoteReplyListRelationFilter
    quoteLike?: QuoteLikeListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type QuotePostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalNetWeight?: SortOrderInput | SortOrder
    totalGrossWeight?: SortOrderInput | SortOrder
    volumetricWeight?: SortOrderInput | SortOrder
    transitInsurance?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    viewCount?: SortOrderInput | SortOrder
    likesCount?: SortOrderInput | SortOrder
    commentsCount?: SortOrderInput | SortOrder
    dangerousGoods?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    fromPostalCode?: SortOrderInput | SortOrder
    toPostalCode?: SortOrderInput | SortOrder
    fromCity?: SortOrderInput | SortOrder
    toCity?: SortOrderInput | SortOrder
    fromCountry?: SortOrderInput | SortOrder
    toCountry?: SortOrderInput | SortOrder
    fromAddress?: SortOrderInput | SortOrder
    toAddress?: SortOrderInput | SortOrder
    fromState?: SortOrderInput | SortOrder
    toState?: SortOrderInput | SortOrder
    postCategory?: SortOrderInput | SortOrder
    shipmentType?: SortOrderInput | SortOrder
    shipmentMode?: SortOrderInput | SortOrder
    _count?: QuotePostCountOrderByAggregateInput
    _avg?: QuotePostAvgOrderByAggregateInput
    _max?: QuotePostMaxOrderByAggregateInput
    _min?: QuotePostMinOrderByAggregateInput
    _sum?: QuotePostSumOrderByAggregateInput
  }

  export type QuotePostScalarWhereWithAggregatesInput = {
    AND?: QuotePostScalarWhereWithAggregatesInput | QuotePostScalarWhereWithAggregatesInput[]
    OR?: QuotePostScalarWhereWithAggregatesInput[]
    NOT?: QuotePostScalarWhereWithAggregatesInput | QuotePostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuotePost"> | string
    title?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    description?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    userId?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuotePost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuotePost"> | Date | string
    totalNetWeight?: FloatNullableWithAggregatesFilter<"QuotePost"> | number | null
    totalGrossWeight?: FloatNullableWithAggregatesFilter<"QuotePost"> | number | null
    volumetricWeight?: FloatNullableWithAggregatesFilter<"QuotePost"> | number | null
    transitInsurance?: BoolNullableWithAggregatesFilter<"QuotePost"> | boolean | null
    width?: FloatNullableWithAggregatesFilter<"QuotePost"> | number | null
    height?: FloatNullableWithAggregatesFilter<"QuotePost"> | number | null
    length?: FloatNullableWithAggregatesFilter<"QuotePost"> | number | null
    viewCount?: IntNullableWithAggregatesFilter<"QuotePost"> | number | null
    likesCount?: IntNullableWithAggregatesFilter<"QuotePost"> | number | null
    commentsCount?: IntNullableWithAggregatesFilter<"QuotePost"> | number | null
    dangerousGoods?: BoolNullableWithAggregatesFilter<"QuotePost"> | boolean | null
    status?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    fromPostalCode?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    toPostalCode?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    fromCity?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    toCity?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    fromCountry?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    toCountry?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    fromAddress?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    toAddress?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    fromState?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    toState?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    postCategory?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    shipmentType?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    shipmentMode?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
  }

  export type QuoteReplyWhereInput = {
    AND?: QuoteReplyWhereInput | QuoteReplyWhereInput[]
    OR?: QuoteReplyWhereInput[]
    NOT?: QuoteReplyWhereInput | QuoteReplyWhereInput[]
    id?: StringFilter<"QuoteReply"> | string
    userId?: StringFilter<"QuoteReply"> | string
    postId?: StringFilter<"QuoteReply"> | string
    parentReplyId?: StringFilter<"QuoteReply"> | string
    createdAt?: DateTimeFilter<"QuoteReply"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<QuotePostScalarRelationFilter, QuotePostWhereInput>
  }

  export type QuoteReplyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentReplyId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: QuotePostOrderByWithRelationInput
  }

  export type QuoteReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuoteReplyWhereInput | QuoteReplyWhereInput[]
    OR?: QuoteReplyWhereInput[]
    NOT?: QuoteReplyWhereInput | QuoteReplyWhereInput[]
    userId?: StringFilter<"QuoteReply"> | string
    postId?: StringFilter<"QuoteReply"> | string
    parentReplyId?: StringFilter<"QuoteReply"> | string
    createdAt?: DateTimeFilter<"QuoteReply"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<QuotePostScalarRelationFilter, QuotePostWhereInput>
  }, "id">

  export type QuoteReplyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentReplyId?: SortOrder
    createdAt?: SortOrder
    _count?: QuoteReplyCountOrderByAggregateInput
    _max?: QuoteReplyMaxOrderByAggregateInput
    _min?: QuoteReplyMinOrderByAggregateInput
  }

  export type QuoteReplyScalarWhereWithAggregatesInput = {
    AND?: QuoteReplyScalarWhereWithAggregatesInput | QuoteReplyScalarWhereWithAggregatesInput[]
    OR?: QuoteReplyScalarWhereWithAggregatesInput[]
    NOT?: QuoteReplyScalarWhereWithAggregatesInput | QuoteReplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuoteReply"> | string
    userId?: StringWithAggregatesFilter<"QuoteReply"> | string
    postId?: StringWithAggregatesFilter<"QuoteReply"> | string
    parentReplyId?: StringWithAggregatesFilter<"QuoteReply"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QuoteReply"> | Date | string
  }

  export type QuoteLikeWhereInput = {
    AND?: QuoteLikeWhereInput | QuoteLikeWhereInput[]
    OR?: QuoteLikeWhereInput[]
    NOT?: QuoteLikeWhereInput | QuoteLikeWhereInput[]
    id?: StringFilter<"QuoteLike"> | string
    userId?: StringFilter<"QuoteLike"> | string
    postId?: StringFilter<"QuoteLike"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<QuotePostScalarRelationFilter, QuotePostWhereInput>
  }

  export type QuoteLikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: QuotePostOrderByWithRelationInput
  }

  export type QuoteLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuoteLikeWhereInput | QuoteLikeWhereInput[]
    OR?: QuoteLikeWhereInput[]
    NOT?: QuoteLikeWhereInput | QuoteLikeWhereInput[]
    userId?: StringFilter<"QuoteLike"> | string
    postId?: StringFilter<"QuoteLike"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<QuotePostScalarRelationFilter, QuotePostWhereInput>
  }, "id">

  export type QuoteLikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: QuoteLikeCountOrderByAggregateInput
    _max?: QuoteLikeMaxOrderByAggregateInput
    _min?: QuoteLikeMinOrderByAggregateInput
  }

  export type QuoteLikeScalarWhereWithAggregatesInput = {
    AND?: QuoteLikeScalarWhereWithAggregatesInput | QuoteLikeScalarWhereWithAggregatesInput[]
    OR?: QuoteLikeScalarWhereWithAggregatesInput[]
    NOT?: QuoteLikeScalarWhereWithAggregatesInput | QuoteLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuoteLike"> | string
    userId?: StringWithAggregatesFilter<"QuoteLike"> | string
    postId?: StringWithAggregatesFilter<"QuoteLike"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    courses?: CourseListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    courses?: CourseListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    slug?: StringFilter<"Course"> | string
    institution?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    logoUrl?: StringFilter<"Course"> | string
    thumbnailUrl?: StringFilter<"Course"> | string
    brochureUrl?: StringFilter<"Course"> | string
    youtubeShortUrl?: StringFilter<"Course"> | string
    educationLevel?: EnumEducationLevelFilter<"Course"> | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFilter<"Course"> | $Enums.CourseDifficulty
    mode?: EnumCourseModeFilter<"Course"> | $Enums.CourseMode
    currency?: EnumCurrencyFilter<"Course"> | $Enums.Currency
    price?: IntFilter<"Course"> | number
    duration?: StringFilter<"Course"> | string
    language?: StringFilter<"Course"> | string
    status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus
    category?: StringFilter<"Course"> | string
    enrollmentCount?: IntFilter<"Course"> | number
    tags?: StringNullableListFilter<"Course">
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    createdById?: StringFilter<"Course"> | string
    createdBy?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    modules?: CourseModuleListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    institution?: SortOrder
    title?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    logoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    brochureUrl?: SortOrder
    youtubeShortUrl?: SortOrder
    educationLevel?: SortOrder
    courseDifficulty?: SortOrder
    mode?: SortOrder
    currency?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    language?: SortOrder
    status?: SortOrder
    category?: SortOrder
    enrollmentCount?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: AdminOrderByWithRelationInput
    modules?: CourseModuleOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    institution?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    logoUrl?: StringFilter<"Course"> | string
    thumbnailUrl?: StringFilter<"Course"> | string
    brochureUrl?: StringFilter<"Course"> | string
    youtubeShortUrl?: StringFilter<"Course"> | string
    educationLevel?: EnumEducationLevelFilter<"Course"> | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFilter<"Course"> | $Enums.CourseDifficulty
    mode?: EnumCourseModeFilter<"Course"> | $Enums.CourseMode
    currency?: EnumCurrencyFilter<"Course"> | $Enums.Currency
    price?: IntFilter<"Course"> | number
    duration?: StringFilter<"Course"> | string
    language?: StringFilter<"Course"> | string
    status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus
    category?: StringFilter<"Course"> | string
    enrollmentCount?: IntFilter<"Course"> | number
    tags?: StringNullableListFilter<"Course">
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    createdById?: StringFilter<"Course"> | string
    createdBy?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    modules?: CourseModuleListRelationFilter
  }, "id" | "slug">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    institution?: SortOrder
    title?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    logoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    brochureUrl?: SortOrder
    youtubeShortUrl?: SortOrder
    educationLevel?: SortOrder
    courseDifficulty?: SortOrder
    mode?: SortOrder
    currency?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    language?: SortOrder
    status?: SortOrder
    category?: SortOrder
    enrollmentCount?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    slug?: StringWithAggregatesFilter<"Course"> | string
    institution?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    instructor?: StringWithAggregatesFilter<"Course"> | string
    logoUrl?: StringWithAggregatesFilter<"Course"> | string
    thumbnailUrl?: StringWithAggregatesFilter<"Course"> | string
    brochureUrl?: StringWithAggregatesFilter<"Course"> | string
    youtubeShortUrl?: StringWithAggregatesFilter<"Course"> | string
    educationLevel?: EnumEducationLevelWithAggregatesFilter<"Course"> | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyWithAggregatesFilter<"Course"> | $Enums.CourseDifficulty
    mode?: EnumCourseModeWithAggregatesFilter<"Course"> | $Enums.CourseMode
    currency?: EnumCurrencyWithAggregatesFilter<"Course"> | $Enums.Currency
    price?: IntWithAggregatesFilter<"Course"> | number
    duration?: StringWithAggregatesFilter<"Course"> | string
    language?: StringWithAggregatesFilter<"Course"> | string
    status?: EnumCourseStatusWithAggregatesFilter<"Course"> | $Enums.CourseStatus
    category?: StringWithAggregatesFilter<"Course"> | string
    enrollmentCount?: IntWithAggregatesFilter<"Course"> | number
    tags?: StringNullableListFilter<"Course">
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    createdById?: StringWithAggregatesFilter<"Course"> | string
  }

  export type CourseModuleWhereInput = {
    AND?: CourseModuleWhereInput | CourseModuleWhereInput[]
    OR?: CourseModuleWhereInput[]
    NOT?: CourseModuleWhereInput | CourseModuleWhereInput[]
    id?: StringFilter<"CourseModule"> | string
    title?: StringFilter<"CourseModule"> | string
    description?: StringFilter<"CourseModule"> | string
    courseId?: StringFilter<"CourseModule"> | string
    createdAt?: DateTimeFilter<"CourseModule"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CourseModuleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type CourseModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseModuleWhereInput | CourseModuleWhereInput[]
    OR?: CourseModuleWhereInput[]
    NOT?: CourseModuleWhereInput | CourseModuleWhereInput[]
    title?: StringFilter<"CourseModule"> | string
    description?: StringFilter<"CourseModule"> | string
    courseId?: StringFilter<"CourseModule"> | string
    createdAt?: DateTimeFilter<"CourseModule"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type CourseModuleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    _count?: CourseModuleCountOrderByAggregateInput
    _max?: CourseModuleMaxOrderByAggregateInput
    _min?: CourseModuleMinOrderByAggregateInput
  }

  export type CourseModuleScalarWhereWithAggregatesInput = {
    AND?: CourseModuleScalarWhereWithAggregatesInput | CourseModuleScalarWhereWithAggregatesInput[]
    OR?: CourseModuleScalarWhereWithAggregatesInput[]
    NOT?: CourseModuleScalarWhereWithAggregatesInput | CourseModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseModule"> | string
    title?: StringWithAggregatesFilter<"CourseModule"> | string
    description?: StringWithAggregatesFilter<"CourseModule"> | string
    courseId?: StringWithAggregatesFilter<"CourseModule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CourseModule"> | Date | string
  }

  export type CourseQueryWhereInput = {
    AND?: CourseQueryWhereInput | CourseQueryWhereInput[]
    OR?: CourseQueryWhereInput[]
    NOT?: CourseQueryWhereInput | CourseQueryWhereInput[]
    id?: StringFilter<"CourseQuery"> | string
    institutionName?: StringFilter<"CourseQuery"> | string
    institutionType?: EnumInstitutionTypeFilter<"CourseQuery"> | $Enums.InstitutionType
    primaryContactName?: StringFilter<"CourseQuery"> | string
    primaryContactTitle?: StringFilter<"CourseQuery"> | string
    contactEmail?: StringFilter<"CourseQuery"> | string
    contactPhone?: StringFilter<"CourseQuery"> | string
    websiteUrl?: StringFilter<"CourseQuery"> | string
    message?: StringNullableFilter<"CourseQuery"> | string | null
    createdAt?: DateTimeFilter<"CourseQuery"> | Date | string
  }

  export type CourseQueryOrderByWithRelationInput = {
    id?: SortOrder
    institutionName?: SortOrder
    institutionType?: SortOrder
    primaryContactName?: SortOrder
    primaryContactTitle?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    websiteUrl?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type CourseQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseQueryWhereInput | CourseQueryWhereInput[]
    OR?: CourseQueryWhereInput[]
    NOT?: CourseQueryWhereInput | CourseQueryWhereInput[]
    institutionName?: StringFilter<"CourseQuery"> | string
    institutionType?: EnumInstitutionTypeFilter<"CourseQuery"> | $Enums.InstitutionType
    primaryContactName?: StringFilter<"CourseQuery"> | string
    primaryContactTitle?: StringFilter<"CourseQuery"> | string
    contactEmail?: StringFilter<"CourseQuery"> | string
    contactPhone?: StringFilter<"CourseQuery"> | string
    websiteUrl?: StringFilter<"CourseQuery"> | string
    message?: StringNullableFilter<"CourseQuery"> | string | null
    createdAt?: DateTimeFilter<"CourseQuery"> | Date | string
  }, "id">

  export type CourseQueryOrderByWithAggregationInput = {
    id?: SortOrder
    institutionName?: SortOrder
    institutionType?: SortOrder
    primaryContactName?: SortOrder
    primaryContactTitle?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    websiteUrl?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CourseQueryCountOrderByAggregateInput
    _max?: CourseQueryMaxOrderByAggregateInput
    _min?: CourseQueryMinOrderByAggregateInput
  }

  export type CourseQueryScalarWhereWithAggregatesInput = {
    AND?: CourseQueryScalarWhereWithAggregatesInput | CourseQueryScalarWhereWithAggregatesInput[]
    OR?: CourseQueryScalarWhereWithAggregatesInput[]
    NOT?: CourseQueryScalarWhereWithAggregatesInput | CourseQueryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseQuery"> | string
    institutionName?: StringWithAggregatesFilter<"CourseQuery"> | string
    institutionType?: EnumInstitutionTypeWithAggregatesFilter<"CourseQuery"> | $Enums.InstitutionType
    primaryContactName?: StringWithAggregatesFilter<"CourseQuery"> | string
    primaryContactTitle?: StringWithAggregatesFilter<"CourseQuery"> | string
    contactEmail?: StringWithAggregatesFilter<"CourseQuery"> | string
    contactPhone?: StringWithAggregatesFilter<"CourseQuery"> | string
    websiteUrl?: StringWithAggregatesFilter<"CourseQuery"> | string
    message?: StringNullableWithAggregatesFilter<"CourseQuery"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CourseQuery"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    verified?: boolean | null
    role?: string | null
    mobileNo?: string | null
    country?: string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    profilePic?: string | null
    bio?: string | null
    online?: boolean | null
    lastSeen?: Date | string | null
    rating?: number | null
    accountType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quotePost?: QuotePostCreateNestedManyWithoutUserInput
    quoteReply?: QuoteReplyCreateNestedManyWithoutUserInput
    quoteLike?: QuoteLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    verified?: boolean | null
    role?: string | null
    mobileNo?: string | null
    country?: string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    profilePic?: string | null
    bio?: string | null
    online?: boolean | null
    lastSeen?: Date | string | null
    rating?: number | null
    accountType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quotePost?: QuotePostUncheckedCreateNestedManyWithoutUserInput
    quoteReply?: QuoteReplyUncheckedCreateNestedManyWithoutUserInput
    quoteLike?: QuoteLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotePost?: QuotePostUpdateManyWithoutUserNestedInput
    quoteReply?: QuoteReplyUpdateManyWithoutUserNestedInput
    quoteLike?: QuoteLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotePost?: QuotePostUncheckedUpdateManyWithoutUserNestedInput
    quoteReply?: QuoteReplyUncheckedUpdateManyWithoutUserNestedInput
    quoteLike?: QuoteLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    verified?: boolean | null
    role?: string | null
    mobileNo?: string | null
    country?: string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    profilePic?: string | null
    bio?: string | null
    online?: boolean | null
    lastSeen?: Date | string | null
    rating?: number | null
    accountType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumMainCategoryCreateInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
  }

  export type ForumMainCategoryUncheckedCreateInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
  }

  export type ForumMainCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ForumMainCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ForumMainCategoryCreateManyInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
  }

  export type ForumMainCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ForumMainCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ForumSubCategoryCreateInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
  }

  export type ForumSubCategoryUncheckedCreateInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
  }

  export type ForumSubCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ForumSubCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ForumSubCategoryCreateManyInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
  }

  export type ForumSubCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ForumSubCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuotePostCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalNetWeight?: number | null
    totalGrossWeight?: number | null
    volumetricWeight?: number | null
    transitInsurance?: boolean | null
    width?: number | null
    height?: number | null
    length?: number | null
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    dangerousGoods?: boolean | null
    status?: string | null
    fromPostalCode?: string | null
    toPostalCode?: string | null
    fromCity?: string | null
    toCity?: string | null
    fromCountry?: string | null
    toCountry?: string | null
    fromAddress?: string | null
    toAddress?: string | null
    fromState?: string | null
    toState?: string | null
    postCategory?: string | null
    shipmentType?: string | null
    shipmentMode?: string | null
    quoteReply?: QuoteReplyCreateNestedManyWithoutPostInput
    quoteLike?: QuoteLikeCreateNestedManyWithoutPostInput
    user?: UserCreateNestedOneWithoutQuotePostInput
  }

  export type QuotePostUncheckedCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalNetWeight?: number | null
    totalGrossWeight?: number | null
    volumetricWeight?: number | null
    transitInsurance?: boolean | null
    width?: number | null
    height?: number | null
    length?: number | null
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    dangerousGoods?: boolean | null
    status?: string | null
    fromPostalCode?: string | null
    toPostalCode?: string | null
    fromCity?: string | null
    toCity?: string | null
    fromCountry?: string | null
    toCountry?: string | null
    fromAddress?: string | null
    toAddress?: string | null
    fromState?: string | null
    toState?: string | null
    postCategory?: string | null
    shipmentType?: string | null
    shipmentMode?: string | null
    quoteReply?: QuoteReplyUncheckedCreateNestedManyWithoutPostInput
    quoteLike?: QuoteLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type QuotePostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    totalGrossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    volumetricWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    transitInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    dangerousGoods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fromPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    toPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    fromCity?: NullableStringFieldUpdateOperationsInput | string | null
    toCity?: NullableStringFieldUpdateOperationsInput | string | null
    fromCountry?: NullableStringFieldUpdateOperationsInput | string | null
    toCountry?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromState?: NullableStringFieldUpdateOperationsInput | string | null
    toState?: NullableStringFieldUpdateOperationsInput | string | null
    postCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentMode?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUpdateManyWithoutPostNestedInput
    quoteLike?: QuoteLikeUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneWithoutQuotePostNestedInput
  }

  export type QuotePostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    totalGrossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    volumetricWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    transitInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    dangerousGoods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fromPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    toPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    fromCity?: NullableStringFieldUpdateOperationsInput | string | null
    toCity?: NullableStringFieldUpdateOperationsInput | string | null
    fromCountry?: NullableStringFieldUpdateOperationsInput | string | null
    toCountry?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromState?: NullableStringFieldUpdateOperationsInput | string | null
    toState?: NullableStringFieldUpdateOperationsInput | string | null
    postCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentMode?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUncheckedUpdateManyWithoutPostNestedInput
    quoteLike?: QuoteLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type QuotePostCreateManyInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalNetWeight?: number | null
    totalGrossWeight?: number | null
    volumetricWeight?: number | null
    transitInsurance?: boolean | null
    width?: number | null
    height?: number | null
    length?: number | null
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    dangerousGoods?: boolean | null
    status?: string | null
    fromPostalCode?: string | null
    toPostalCode?: string | null
    fromCity?: string | null
    toCity?: string | null
    fromCountry?: string | null
    toCountry?: string | null
    fromAddress?: string | null
    toAddress?: string | null
    fromState?: string | null
    toState?: string | null
    postCategory?: string | null
    shipmentType?: string | null
    shipmentMode?: string | null
  }

  export type QuotePostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    totalGrossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    volumetricWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    transitInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    dangerousGoods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fromPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    toPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    fromCity?: NullableStringFieldUpdateOperationsInput | string | null
    toCity?: NullableStringFieldUpdateOperationsInput | string | null
    fromCountry?: NullableStringFieldUpdateOperationsInput | string | null
    toCountry?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromState?: NullableStringFieldUpdateOperationsInput | string | null
    toState?: NullableStringFieldUpdateOperationsInput | string | null
    postCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentMode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotePostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    totalGrossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    volumetricWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    transitInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    dangerousGoods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fromPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    toPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    fromCity?: NullableStringFieldUpdateOperationsInput | string | null
    toCity?: NullableStringFieldUpdateOperationsInput | string | null
    fromCountry?: NullableStringFieldUpdateOperationsInput | string | null
    toCountry?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromState?: NullableStringFieldUpdateOperationsInput | string | null
    toState?: NullableStringFieldUpdateOperationsInput | string | null
    postCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentMode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteReplyCreateInput = {
    id?: string
    parentReplyId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutQuoteReplyInput
    post: QuotePostCreateNestedOneWithoutQuoteReplyInput
  }

  export type QuoteReplyUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
    parentReplyId: string
    createdAt?: Date | string
  }

  export type QuoteReplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentReplyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuoteReplyNestedInput
    post?: QuotePostUpdateOneRequiredWithoutQuoteReplyNestedInput
  }

  export type QuoteReplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteReplyCreateManyInput = {
    id?: string
    userId: string
    postId: string
    parentReplyId: string
    createdAt?: Date | string
  }

  export type QuoteReplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentReplyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteReplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteLikeCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutQuoteLikeInput
    post: QuotePostCreateNestedOneWithoutQuoteLikeInput
  }

  export type QuoteLikeUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
  }

  export type QuoteLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutQuoteLikeNestedInput
    post?: QuotePostUpdateOneRequiredWithoutQuoteLikeNestedInput
  }

  export type QuoteLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteLikeCreateManyInput = {
    id?: string
    userId: string
    postId: string
  }

  export type QuoteLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    email: string
    courses?: CourseCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    courses?: CourseUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    courses?: CourseUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    courses?: CourseUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id?: string
    slug: string
    institution: string
    title: string
    description: string
    instructor: string
    logoUrl: string
    thumbnailUrl: string
    brochureUrl: string
    youtubeShortUrl: string
    educationLevel: $Enums.EducationLevel
    courseDifficulty: $Enums.CourseDifficulty
    mode: $Enums.CourseMode
    currency?: $Enums.Currency
    price: number
    duration: string
    language: string
    status?: $Enums.CourseStatus
    category: string
    enrollmentCount?: number
    tags?: CourseCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: AdminCreateNestedOneWithoutCoursesInput
    modules?: CourseModuleCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    slug: string
    institution: string
    title: string
    description: string
    instructor: string
    logoUrl: string
    thumbnailUrl: string
    brochureUrl: string
    youtubeShortUrl: string
    educationLevel: $Enums.EducationLevel
    courseDifficulty: $Enums.CourseDifficulty
    mode: $Enums.CourseMode
    currency?: $Enums.Currency
    price: number
    duration: string
    language: string
    status?: $Enums.CourseStatus
    category: string
    enrollmentCount?: number
    tags?: CourseCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    modules?: CourseModuleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    brochureUrl?: StringFieldUpdateOperationsInput | string
    youtubeShortUrl?: StringFieldUpdateOperationsInput | string
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFieldUpdateOperationsInput | $Enums.CourseDifficulty
    mode?: EnumCourseModeFieldUpdateOperationsInput | $Enums.CourseMode
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    category?: StringFieldUpdateOperationsInput | string
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    tags?: CourseUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: AdminUpdateOneRequiredWithoutCoursesNestedInput
    modules?: CourseModuleUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    brochureUrl?: StringFieldUpdateOperationsInput | string
    youtubeShortUrl?: StringFieldUpdateOperationsInput | string
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFieldUpdateOperationsInput | $Enums.CourseDifficulty
    mode?: EnumCourseModeFieldUpdateOperationsInput | $Enums.CourseMode
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    category?: StringFieldUpdateOperationsInput | string
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    tags?: CourseUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    modules?: CourseModuleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    slug: string
    institution: string
    title: string
    description: string
    instructor: string
    logoUrl: string
    thumbnailUrl: string
    brochureUrl: string
    youtubeShortUrl: string
    educationLevel: $Enums.EducationLevel
    courseDifficulty: $Enums.CourseDifficulty
    mode: $Enums.CourseMode
    currency?: $Enums.Currency
    price: number
    duration: string
    language: string
    status?: $Enums.CourseStatus
    category: string
    enrollmentCount?: number
    tags?: CourseCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    brochureUrl?: StringFieldUpdateOperationsInput | string
    youtubeShortUrl?: StringFieldUpdateOperationsInput | string
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFieldUpdateOperationsInput | $Enums.CourseDifficulty
    mode?: EnumCourseModeFieldUpdateOperationsInput | $Enums.CourseMode
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    category?: StringFieldUpdateOperationsInput | string
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    tags?: CourseUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    brochureUrl?: StringFieldUpdateOperationsInput | string
    youtubeShortUrl?: StringFieldUpdateOperationsInput | string
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFieldUpdateOperationsInput | $Enums.CourseDifficulty
    mode?: EnumCourseModeFieldUpdateOperationsInput | $Enums.CourseMode
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    category?: StringFieldUpdateOperationsInput | string
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    tags?: CourseUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type CourseModuleCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutModulesInput
  }

  export type CourseModuleUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    courseId: string
    createdAt?: Date | string
  }

  export type CourseModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutModulesNestedInput
  }

  export type CourseModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseModuleCreateManyInput = {
    id?: string
    title: string
    description: string
    courseId: string
    createdAt?: Date | string
  }

  export type CourseModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseQueryCreateInput = {
    id?: string
    institutionName: string
    institutionType?: $Enums.InstitutionType
    primaryContactName: string
    primaryContactTitle: string
    contactEmail: string
    contactPhone: string
    websiteUrl: string
    message?: string | null
    createdAt?: Date | string
  }

  export type CourseQueryUncheckedCreateInput = {
    id?: string
    institutionName: string
    institutionType?: $Enums.InstitutionType
    primaryContactName: string
    primaryContactTitle: string
    contactEmail: string
    contactPhone: string
    websiteUrl: string
    message?: string | null
    createdAt?: Date | string
  }

  export type CourseQueryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionType?: EnumInstitutionTypeFieldUpdateOperationsInput | $Enums.InstitutionType
    primaryContactName?: StringFieldUpdateOperationsInput | string
    primaryContactTitle?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseQueryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionType?: EnumInstitutionTypeFieldUpdateOperationsInput | $Enums.InstitutionType
    primaryContactName?: StringFieldUpdateOperationsInput | string
    primaryContactTitle?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseQueryCreateManyInput = {
    id?: string
    institutionName: string
    institutionType?: $Enums.InstitutionType
    primaryContactName: string
    primaryContactTitle: string
    contactEmail: string
    contactPhone: string
    websiteUrl: string
    message?: string | null
    createdAt?: Date | string
  }

  export type CourseQueryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionType?: EnumInstitutionTypeFieldUpdateOperationsInput | $Enums.InstitutionType
    primaryContactName?: StringFieldUpdateOperationsInput | string
    primaryContactTitle?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseQueryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionType?: EnumInstitutionTypeFieldUpdateOperationsInput | $Enums.InstitutionType
    primaryContactName?: StringFieldUpdateOperationsInput | string
    primaryContactTitle?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    websiteUrl?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuotePostListRelationFilter = {
    every?: QuotePostWhereInput
    some?: QuotePostWhereInput
    none?: QuotePostWhereInput
  }

  export type QuoteReplyListRelationFilter = {
    every?: QuoteReplyWhereInput
    some?: QuoteReplyWhereInput
    none?: QuoteReplyWhereInput
  }

  export type QuoteLikeListRelationFilter = {
    every?: QuoteLikeWhereInput
    some?: QuoteLikeWhereInput
    none?: QuoteLikeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuotePostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuoteReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuoteLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verified?: SortOrder
    role?: SortOrder
    mobileNo?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    profilePic?: SortOrder
    bio?: SortOrder
    online?: SortOrder
    lastSeen?: SortOrder
    rating?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verified?: SortOrder
    role?: SortOrder
    mobileNo?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    profilePic?: SortOrder
    bio?: SortOrder
    online?: SortOrder
    lastSeen?: SortOrder
    rating?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verified?: SortOrder
    role?: SortOrder
    mobileNo?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    profilePic?: SortOrder
    bio?: SortOrder
    online?: SortOrder
    lastSeen?: SortOrder
    rating?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ForumMainCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
  }

  export type ForumMainCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
  }

  export type ForumMainCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
  }

  export type ForumSubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
  }

  export type ForumSubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
  }

  export type ForumSubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type QuotePostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalNetWeight?: SortOrder
    totalGrossWeight?: SortOrder
    volumetricWeight?: SortOrder
    transitInsurance?: SortOrder
    width?: SortOrder
    height?: SortOrder
    length?: SortOrder
    viewCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    dangerousGoods?: SortOrder
    status?: SortOrder
    fromPostalCode?: SortOrder
    toPostalCode?: SortOrder
    fromCity?: SortOrder
    toCity?: SortOrder
    fromCountry?: SortOrder
    toCountry?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    fromState?: SortOrder
    toState?: SortOrder
    postCategory?: SortOrder
    shipmentType?: SortOrder
    shipmentMode?: SortOrder
  }

  export type QuotePostAvgOrderByAggregateInput = {
    totalNetWeight?: SortOrder
    totalGrossWeight?: SortOrder
    volumetricWeight?: SortOrder
    width?: SortOrder
    height?: SortOrder
    length?: SortOrder
    viewCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
  }

  export type QuotePostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalNetWeight?: SortOrder
    totalGrossWeight?: SortOrder
    volumetricWeight?: SortOrder
    transitInsurance?: SortOrder
    width?: SortOrder
    height?: SortOrder
    length?: SortOrder
    viewCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    dangerousGoods?: SortOrder
    status?: SortOrder
    fromPostalCode?: SortOrder
    toPostalCode?: SortOrder
    fromCity?: SortOrder
    toCity?: SortOrder
    fromCountry?: SortOrder
    toCountry?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    fromState?: SortOrder
    toState?: SortOrder
    postCategory?: SortOrder
    shipmentType?: SortOrder
    shipmentMode?: SortOrder
  }

  export type QuotePostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totalNetWeight?: SortOrder
    totalGrossWeight?: SortOrder
    volumetricWeight?: SortOrder
    transitInsurance?: SortOrder
    width?: SortOrder
    height?: SortOrder
    length?: SortOrder
    viewCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    dangerousGoods?: SortOrder
    status?: SortOrder
    fromPostalCode?: SortOrder
    toPostalCode?: SortOrder
    fromCity?: SortOrder
    toCity?: SortOrder
    fromCountry?: SortOrder
    toCountry?: SortOrder
    fromAddress?: SortOrder
    toAddress?: SortOrder
    fromState?: SortOrder
    toState?: SortOrder
    postCategory?: SortOrder
    shipmentType?: SortOrder
    shipmentMode?: SortOrder
  }

  export type QuotePostSumOrderByAggregateInput = {
    totalNetWeight?: SortOrder
    totalGrossWeight?: SortOrder
    volumetricWeight?: SortOrder
    width?: SortOrder
    height?: SortOrder
    length?: SortOrder
    viewCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuotePostScalarRelationFilter = {
    is?: QuotePostWhereInput
    isNot?: QuotePostWhereInput
  }

  export type QuoteReplyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentReplyId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentReplyId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteReplyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentReplyId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteLikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type QuoteLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type QuoteLikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type EnumEducationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelFilter<$PrismaModel> | $Enums.EducationLevel
  }

  export type EnumCourseDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseDifficulty | EnumCourseDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.CourseDifficulty[] | ListEnumCourseDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseDifficulty[] | ListEnumCourseDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseDifficultyFilter<$PrismaModel> | $Enums.CourseDifficulty
  }

  export type EnumCourseModeFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseMode | EnumCourseModeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseMode[] | ListEnumCourseModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseMode[] | ListEnumCourseModeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseModeFilter<$PrismaModel> | $Enums.CourseMode
  }

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumCourseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusFilter<$PrismaModel> | $Enums.CourseStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type CourseModuleListRelationFilter = {
    every?: CourseModuleWhereInput
    some?: CourseModuleWhereInput
    none?: CourseModuleWhereInput
  }

  export type CourseModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    institution?: SortOrder
    title?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    logoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    brochureUrl?: SortOrder
    youtubeShortUrl?: SortOrder
    educationLevel?: SortOrder
    courseDifficulty?: SortOrder
    mode?: SortOrder
    currency?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    language?: SortOrder
    status?: SortOrder
    category?: SortOrder
    enrollmentCount?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
    enrollmentCount?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    institution?: SortOrder
    title?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    logoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    brochureUrl?: SortOrder
    youtubeShortUrl?: SortOrder
    educationLevel?: SortOrder
    courseDifficulty?: SortOrder
    mode?: SortOrder
    currency?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    language?: SortOrder
    status?: SortOrder
    category?: SortOrder
    enrollmentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    institution?: SortOrder
    title?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    logoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    brochureUrl?: SortOrder
    youtubeShortUrl?: SortOrder
    educationLevel?: SortOrder
    courseDifficulty?: SortOrder
    mode?: SortOrder
    currency?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    language?: SortOrder
    status?: SortOrder
    category?: SortOrder
    enrollmentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
    enrollmentCount?: SortOrder
  }

  export type EnumEducationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelFilter<$PrismaModel>
  }

  export type EnumCourseDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseDifficulty | EnumCourseDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.CourseDifficulty[] | ListEnumCourseDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseDifficulty[] | ListEnumCourseDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.CourseDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseDifficultyFilter<$PrismaModel>
    _max?: NestedEnumCourseDifficultyFilter<$PrismaModel>
  }

  export type EnumCourseModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseMode | EnumCourseModeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseMode[] | ListEnumCourseModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseMode[] | ListEnumCourseModeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseModeWithAggregatesFilter<$PrismaModel> | $Enums.CourseMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseModeFilter<$PrismaModel>
    _max?: NestedEnumCourseModeFilter<$PrismaModel>
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumCourseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CourseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseStatusFilter<$PrismaModel>
    _max?: NestedEnumCourseStatusFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CourseModuleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseModuleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumInstitutionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InstitutionType | EnumInstitutionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InstitutionType[] | ListEnumInstitutionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstitutionType[] | ListEnumInstitutionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInstitutionTypeFilter<$PrismaModel> | $Enums.InstitutionType
  }

  export type CourseQueryCountOrderByAggregateInput = {
    id?: SortOrder
    institutionName?: SortOrder
    institutionType?: SortOrder
    primaryContactName?: SortOrder
    primaryContactTitle?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    websiteUrl?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseQueryMaxOrderByAggregateInput = {
    id?: SortOrder
    institutionName?: SortOrder
    institutionType?: SortOrder
    primaryContactName?: SortOrder
    primaryContactTitle?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    websiteUrl?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseQueryMinOrderByAggregateInput = {
    id?: SortOrder
    institutionName?: SortOrder
    institutionType?: SortOrder
    primaryContactName?: SortOrder
    primaryContactTitle?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    websiteUrl?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumInstitutionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstitutionType | EnumInstitutionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InstitutionType[] | ListEnumInstitutionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstitutionType[] | ListEnumInstitutionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInstitutionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InstitutionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstitutionTypeFilter<$PrismaModel>
    _max?: NestedEnumInstitutionTypeFilter<$PrismaModel>
  }

  export type QuotePostCreateNestedManyWithoutUserInput = {
    create?: XOR<QuotePostCreateWithoutUserInput, QuotePostUncheckedCreateWithoutUserInput> | QuotePostCreateWithoutUserInput[] | QuotePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuotePostCreateOrConnectWithoutUserInput | QuotePostCreateOrConnectWithoutUserInput[]
    createMany?: QuotePostCreateManyUserInputEnvelope
    connect?: QuotePostWhereUniqueInput | QuotePostWhereUniqueInput[]
  }

  export type QuoteReplyCreateNestedManyWithoutUserInput = {
    create?: XOR<QuoteReplyCreateWithoutUserInput, QuoteReplyUncheckedCreateWithoutUserInput> | QuoteReplyCreateWithoutUserInput[] | QuoteReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteReplyCreateOrConnectWithoutUserInput | QuoteReplyCreateOrConnectWithoutUserInput[]
    createMany?: QuoteReplyCreateManyUserInputEnvelope
    connect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
  }

  export type QuoteLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<QuoteLikeCreateWithoutUserInput, QuoteLikeUncheckedCreateWithoutUserInput> | QuoteLikeCreateWithoutUserInput[] | QuoteLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteLikeCreateOrConnectWithoutUserInput | QuoteLikeCreateOrConnectWithoutUserInput[]
    createMany?: QuoteLikeCreateManyUserInputEnvelope
    connect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
  }

  export type QuotePostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuotePostCreateWithoutUserInput, QuotePostUncheckedCreateWithoutUserInput> | QuotePostCreateWithoutUserInput[] | QuotePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuotePostCreateOrConnectWithoutUserInput | QuotePostCreateOrConnectWithoutUserInput[]
    createMany?: QuotePostCreateManyUserInputEnvelope
    connect?: QuotePostWhereUniqueInput | QuotePostWhereUniqueInput[]
  }

  export type QuoteReplyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuoteReplyCreateWithoutUserInput, QuoteReplyUncheckedCreateWithoutUserInput> | QuoteReplyCreateWithoutUserInput[] | QuoteReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteReplyCreateOrConnectWithoutUserInput | QuoteReplyCreateOrConnectWithoutUserInput[]
    createMany?: QuoteReplyCreateManyUserInputEnvelope
    connect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
  }

  export type QuoteLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuoteLikeCreateWithoutUserInput, QuoteLikeUncheckedCreateWithoutUserInput> | QuoteLikeCreateWithoutUserInput[] | QuoteLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteLikeCreateOrConnectWithoutUserInput | QuoteLikeCreateOrConnectWithoutUserInput[]
    createMany?: QuoteLikeCreateManyUserInputEnvelope
    connect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuotePostUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuotePostCreateWithoutUserInput, QuotePostUncheckedCreateWithoutUserInput> | QuotePostCreateWithoutUserInput[] | QuotePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuotePostCreateOrConnectWithoutUserInput | QuotePostCreateOrConnectWithoutUserInput[]
    upsert?: QuotePostUpsertWithWhereUniqueWithoutUserInput | QuotePostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuotePostCreateManyUserInputEnvelope
    set?: QuotePostWhereUniqueInput | QuotePostWhereUniqueInput[]
    disconnect?: QuotePostWhereUniqueInput | QuotePostWhereUniqueInput[]
    delete?: QuotePostWhereUniqueInput | QuotePostWhereUniqueInput[]
    connect?: QuotePostWhereUniqueInput | QuotePostWhereUniqueInput[]
    update?: QuotePostUpdateWithWhereUniqueWithoutUserInput | QuotePostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuotePostUpdateManyWithWhereWithoutUserInput | QuotePostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuotePostScalarWhereInput | QuotePostScalarWhereInput[]
  }

  export type QuoteReplyUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuoteReplyCreateWithoutUserInput, QuoteReplyUncheckedCreateWithoutUserInput> | QuoteReplyCreateWithoutUserInput[] | QuoteReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteReplyCreateOrConnectWithoutUserInput | QuoteReplyCreateOrConnectWithoutUserInput[]
    upsert?: QuoteReplyUpsertWithWhereUniqueWithoutUserInput | QuoteReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuoteReplyCreateManyUserInputEnvelope
    set?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    disconnect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    delete?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    connect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    update?: QuoteReplyUpdateWithWhereUniqueWithoutUserInput | QuoteReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuoteReplyUpdateManyWithWhereWithoutUserInput | QuoteReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuoteReplyScalarWhereInput | QuoteReplyScalarWhereInput[]
  }

  export type QuoteLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuoteLikeCreateWithoutUserInput, QuoteLikeUncheckedCreateWithoutUserInput> | QuoteLikeCreateWithoutUserInput[] | QuoteLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteLikeCreateOrConnectWithoutUserInput | QuoteLikeCreateOrConnectWithoutUserInput[]
    upsert?: QuoteLikeUpsertWithWhereUniqueWithoutUserInput | QuoteLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuoteLikeCreateManyUserInputEnvelope
    set?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    disconnect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    delete?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    connect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    update?: QuoteLikeUpdateWithWhereUniqueWithoutUserInput | QuoteLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuoteLikeUpdateManyWithWhereWithoutUserInput | QuoteLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuoteLikeScalarWhereInput | QuoteLikeScalarWhereInput[]
  }

  export type QuotePostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuotePostCreateWithoutUserInput, QuotePostUncheckedCreateWithoutUserInput> | QuotePostCreateWithoutUserInput[] | QuotePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuotePostCreateOrConnectWithoutUserInput | QuotePostCreateOrConnectWithoutUserInput[]
    upsert?: QuotePostUpsertWithWhereUniqueWithoutUserInput | QuotePostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuotePostCreateManyUserInputEnvelope
    set?: QuotePostWhereUniqueInput | QuotePostWhereUniqueInput[]
    disconnect?: QuotePostWhereUniqueInput | QuotePostWhereUniqueInput[]
    delete?: QuotePostWhereUniqueInput | QuotePostWhereUniqueInput[]
    connect?: QuotePostWhereUniqueInput | QuotePostWhereUniqueInput[]
    update?: QuotePostUpdateWithWhereUniqueWithoutUserInput | QuotePostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuotePostUpdateManyWithWhereWithoutUserInput | QuotePostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuotePostScalarWhereInput | QuotePostScalarWhereInput[]
  }

  export type QuoteReplyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuoteReplyCreateWithoutUserInput, QuoteReplyUncheckedCreateWithoutUserInput> | QuoteReplyCreateWithoutUserInput[] | QuoteReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteReplyCreateOrConnectWithoutUserInput | QuoteReplyCreateOrConnectWithoutUserInput[]
    upsert?: QuoteReplyUpsertWithWhereUniqueWithoutUserInput | QuoteReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuoteReplyCreateManyUserInputEnvelope
    set?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    disconnect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    delete?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    connect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    update?: QuoteReplyUpdateWithWhereUniqueWithoutUserInput | QuoteReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuoteReplyUpdateManyWithWhereWithoutUserInput | QuoteReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuoteReplyScalarWhereInput | QuoteReplyScalarWhereInput[]
  }

  export type QuoteLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuoteLikeCreateWithoutUserInput, QuoteLikeUncheckedCreateWithoutUserInput> | QuoteLikeCreateWithoutUserInput[] | QuoteLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteLikeCreateOrConnectWithoutUserInput | QuoteLikeCreateOrConnectWithoutUserInput[]
    upsert?: QuoteLikeUpsertWithWhereUniqueWithoutUserInput | QuoteLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuoteLikeCreateManyUserInputEnvelope
    set?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    disconnect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    delete?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    connect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    update?: QuoteLikeUpdateWithWhereUniqueWithoutUserInput | QuoteLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuoteLikeUpdateManyWithWhereWithoutUserInput | QuoteLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuoteLikeScalarWhereInput | QuoteLikeScalarWhereInput[]
  }

  export type QuoteReplyCreateNestedManyWithoutPostInput = {
    create?: XOR<QuoteReplyCreateWithoutPostInput, QuoteReplyUncheckedCreateWithoutPostInput> | QuoteReplyCreateWithoutPostInput[] | QuoteReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: QuoteReplyCreateOrConnectWithoutPostInput | QuoteReplyCreateOrConnectWithoutPostInput[]
    createMany?: QuoteReplyCreateManyPostInputEnvelope
    connect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
  }

  export type QuoteLikeCreateNestedManyWithoutPostInput = {
    create?: XOR<QuoteLikeCreateWithoutPostInput, QuoteLikeUncheckedCreateWithoutPostInput> | QuoteLikeCreateWithoutPostInput[] | QuoteLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: QuoteLikeCreateOrConnectWithoutPostInput | QuoteLikeCreateOrConnectWithoutPostInput[]
    createMany?: QuoteLikeCreateManyPostInputEnvelope
    connect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutQuotePostInput = {
    create?: XOR<UserCreateWithoutQuotePostInput, UserUncheckedCreateWithoutQuotePostInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuotePostInput
    connect?: UserWhereUniqueInput
  }

  export type QuoteReplyUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<QuoteReplyCreateWithoutPostInput, QuoteReplyUncheckedCreateWithoutPostInput> | QuoteReplyCreateWithoutPostInput[] | QuoteReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: QuoteReplyCreateOrConnectWithoutPostInput | QuoteReplyCreateOrConnectWithoutPostInput[]
    createMany?: QuoteReplyCreateManyPostInputEnvelope
    connect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
  }

  export type QuoteLikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<QuoteLikeCreateWithoutPostInput, QuoteLikeUncheckedCreateWithoutPostInput> | QuoteLikeCreateWithoutPostInput[] | QuoteLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: QuoteLikeCreateOrConnectWithoutPostInput | QuoteLikeCreateOrConnectWithoutPostInput[]
    createMany?: QuoteLikeCreateManyPostInputEnvelope
    connect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuoteReplyUpdateManyWithoutPostNestedInput = {
    create?: XOR<QuoteReplyCreateWithoutPostInput, QuoteReplyUncheckedCreateWithoutPostInput> | QuoteReplyCreateWithoutPostInput[] | QuoteReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: QuoteReplyCreateOrConnectWithoutPostInput | QuoteReplyCreateOrConnectWithoutPostInput[]
    upsert?: QuoteReplyUpsertWithWhereUniqueWithoutPostInput | QuoteReplyUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: QuoteReplyCreateManyPostInputEnvelope
    set?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    disconnect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    delete?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    connect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    update?: QuoteReplyUpdateWithWhereUniqueWithoutPostInput | QuoteReplyUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: QuoteReplyUpdateManyWithWhereWithoutPostInput | QuoteReplyUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: QuoteReplyScalarWhereInput | QuoteReplyScalarWhereInput[]
  }

  export type QuoteLikeUpdateManyWithoutPostNestedInput = {
    create?: XOR<QuoteLikeCreateWithoutPostInput, QuoteLikeUncheckedCreateWithoutPostInput> | QuoteLikeCreateWithoutPostInput[] | QuoteLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: QuoteLikeCreateOrConnectWithoutPostInput | QuoteLikeCreateOrConnectWithoutPostInput[]
    upsert?: QuoteLikeUpsertWithWhereUniqueWithoutPostInput | QuoteLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: QuoteLikeCreateManyPostInputEnvelope
    set?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    disconnect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    delete?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    connect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    update?: QuoteLikeUpdateWithWhereUniqueWithoutPostInput | QuoteLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: QuoteLikeUpdateManyWithWhereWithoutPostInput | QuoteLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: QuoteLikeScalarWhereInput | QuoteLikeScalarWhereInput[]
  }

  export type UserUpdateOneWithoutQuotePostNestedInput = {
    create?: XOR<UserCreateWithoutQuotePostInput, UserUncheckedCreateWithoutQuotePostInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuotePostInput
    upsert?: UserUpsertWithoutQuotePostInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuotePostInput, UserUpdateWithoutQuotePostInput>, UserUncheckedUpdateWithoutQuotePostInput>
  }

  export type QuoteReplyUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<QuoteReplyCreateWithoutPostInput, QuoteReplyUncheckedCreateWithoutPostInput> | QuoteReplyCreateWithoutPostInput[] | QuoteReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: QuoteReplyCreateOrConnectWithoutPostInput | QuoteReplyCreateOrConnectWithoutPostInput[]
    upsert?: QuoteReplyUpsertWithWhereUniqueWithoutPostInput | QuoteReplyUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: QuoteReplyCreateManyPostInputEnvelope
    set?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    disconnect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    delete?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    connect?: QuoteReplyWhereUniqueInput | QuoteReplyWhereUniqueInput[]
    update?: QuoteReplyUpdateWithWhereUniqueWithoutPostInput | QuoteReplyUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: QuoteReplyUpdateManyWithWhereWithoutPostInput | QuoteReplyUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: QuoteReplyScalarWhereInput | QuoteReplyScalarWhereInput[]
  }

  export type QuoteLikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<QuoteLikeCreateWithoutPostInput, QuoteLikeUncheckedCreateWithoutPostInput> | QuoteLikeCreateWithoutPostInput[] | QuoteLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: QuoteLikeCreateOrConnectWithoutPostInput | QuoteLikeCreateOrConnectWithoutPostInput[]
    upsert?: QuoteLikeUpsertWithWhereUniqueWithoutPostInput | QuoteLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: QuoteLikeCreateManyPostInputEnvelope
    set?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    disconnect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    delete?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    connect?: QuoteLikeWhereUniqueInput | QuoteLikeWhereUniqueInput[]
    update?: QuoteLikeUpdateWithWhereUniqueWithoutPostInput | QuoteLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: QuoteLikeUpdateManyWithWhereWithoutPostInput | QuoteLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: QuoteLikeScalarWhereInput | QuoteLikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQuoteReplyInput = {
    create?: XOR<UserCreateWithoutQuoteReplyInput, UserUncheckedCreateWithoutQuoteReplyInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuoteReplyInput
    connect?: UserWhereUniqueInput
  }

  export type QuotePostCreateNestedOneWithoutQuoteReplyInput = {
    create?: XOR<QuotePostCreateWithoutQuoteReplyInput, QuotePostUncheckedCreateWithoutQuoteReplyInput>
    connectOrCreate?: QuotePostCreateOrConnectWithoutQuoteReplyInput
    connect?: QuotePostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutQuoteReplyNestedInput = {
    create?: XOR<UserCreateWithoutQuoteReplyInput, UserUncheckedCreateWithoutQuoteReplyInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuoteReplyInput
    upsert?: UserUpsertWithoutQuoteReplyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuoteReplyInput, UserUpdateWithoutQuoteReplyInput>, UserUncheckedUpdateWithoutQuoteReplyInput>
  }

  export type QuotePostUpdateOneRequiredWithoutQuoteReplyNestedInput = {
    create?: XOR<QuotePostCreateWithoutQuoteReplyInput, QuotePostUncheckedCreateWithoutQuoteReplyInput>
    connectOrCreate?: QuotePostCreateOrConnectWithoutQuoteReplyInput
    upsert?: QuotePostUpsertWithoutQuoteReplyInput
    connect?: QuotePostWhereUniqueInput
    update?: XOR<XOR<QuotePostUpdateToOneWithWhereWithoutQuoteReplyInput, QuotePostUpdateWithoutQuoteReplyInput>, QuotePostUncheckedUpdateWithoutQuoteReplyInput>
  }

  export type UserCreateNestedOneWithoutQuoteLikeInput = {
    create?: XOR<UserCreateWithoutQuoteLikeInput, UserUncheckedCreateWithoutQuoteLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuoteLikeInput
    connect?: UserWhereUniqueInput
  }

  export type QuotePostCreateNestedOneWithoutQuoteLikeInput = {
    create?: XOR<QuotePostCreateWithoutQuoteLikeInput, QuotePostUncheckedCreateWithoutQuoteLikeInput>
    connectOrCreate?: QuotePostCreateOrConnectWithoutQuoteLikeInput
    connect?: QuotePostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutQuoteLikeNestedInput = {
    create?: XOR<UserCreateWithoutQuoteLikeInput, UserUncheckedCreateWithoutQuoteLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuoteLikeInput
    upsert?: UserUpsertWithoutQuoteLikeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuoteLikeInput, UserUpdateWithoutQuoteLikeInput>, UserUncheckedUpdateWithoutQuoteLikeInput>
  }

  export type QuotePostUpdateOneRequiredWithoutQuoteLikeNestedInput = {
    create?: XOR<QuotePostCreateWithoutQuoteLikeInput, QuotePostUncheckedCreateWithoutQuoteLikeInput>
    connectOrCreate?: QuotePostCreateOrConnectWithoutQuoteLikeInput
    upsert?: QuotePostUpsertWithoutQuoteLikeInput
    connect?: QuotePostWhereUniqueInput
    update?: XOR<XOR<QuotePostUpdateToOneWithWhereWithoutQuoteLikeInput, QuotePostUpdateWithoutQuoteLikeInput>, QuotePostUncheckedUpdateWithoutQuoteLikeInput>
  }

  export type CourseCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput> | CourseCreateWithoutCreatedByInput[] | CourseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatedByInput | CourseCreateOrConnectWithoutCreatedByInput[]
    createMany?: CourseCreateManyCreatedByInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput> | CourseCreateWithoutCreatedByInput[] | CourseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatedByInput | CourseCreateOrConnectWithoutCreatedByInput[]
    createMany?: CourseCreateManyCreatedByInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput> | CourseCreateWithoutCreatedByInput[] | CourseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatedByInput | CourseCreateOrConnectWithoutCreatedByInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCreatedByInput | CourseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CourseCreateManyCreatedByInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCreatedByInput | CourseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCreatedByInput | CourseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput> | CourseCreateWithoutCreatedByInput[] | CourseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatedByInput | CourseCreateOrConnectWithoutCreatedByInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCreatedByInput | CourseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CourseCreateManyCreatedByInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCreatedByInput | CourseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCreatedByInput | CourseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseCreatetagsInput = {
    set: string[]
  }

  export type AdminCreateNestedOneWithoutCoursesInput = {
    create?: XOR<AdminCreateWithoutCoursesInput, AdminUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCoursesInput
    connect?: AdminWhereUniqueInput
  }

  export type CourseModuleCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput> | CourseModuleCreateWithoutCourseInput[] | CourseModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseModuleCreateOrConnectWithoutCourseInput | CourseModuleCreateOrConnectWithoutCourseInput[]
    createMany?: CourseModuleCreateManyCourseInputEnvelope
    connect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
  }

  export type CourseModuleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput> | CourseModuleCreateWithoutCourseInput[] | CourseModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseModuleCreateOrConnectWithoutCourseInput | CourseModuleCreateOrConnectWithoutCourseInput[]
    createMany?: CourseModuleCreateManyCourseInputEnvelope
    connect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
  }

  export type EnumEducationLevelFieldUpdateOperationsInput = {
    set?: $Enums.EducationLevel
  }

  export type EnumCourseDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.CourseDifficulty
  }

  export type EnumCourseModeFieldUpdateOperationsInput = {
    set?: $Enums.CourseMode
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCourseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CourseStatus
  }

  export type CourseUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AdminUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<AdminCreateWithoutCoursesInput, AdminUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCoursesInput
    upsert?: AdminUpsertWithoutCoursesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutCoursesInput, AdminUpdateWithoutCoursesInput>, AdminUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseModuleUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput> | CourseModuleCreateWithoutCourseInput[] | CourseModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseModuleCreateOrConnectWithoutCourseInput | CourseModuleCreateOrConnectWithoutCourseInput[]
    upsert?: CourseModuleUpsertWithWhereUniqueWithoutCourseInput | CourseModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseModuleCreateManyCourseInputEnvelope
    set?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    disconnect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    delete?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    connect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    update?: CourseModuleUpdateWithWhereUniqueWithoutCourseInput | CourseModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseModuleUpdateManyWithWhereWithoutCourseInput | CourseModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseModuleScalarWhereInput | CourseModuleScalarWhereInput[]
  }

  export type CourseModuleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput> | CourseModuleCreateWithoutCourseInput[] | CourseModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseModuleCreateOrConnectWithoutCourseInput | CourseModuleCreateOrConnectWithoutCourseInput[]
    upsert?: CourseModuleUpsertWithWhereUniqueWithoutCourseInput | CourseModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseModuleCreateManyCourseInputEnvelope
    set?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    disconnect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    delete?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    connect?: CourseModuleWhereUniqueInput | CourseModuleWhereUniqueInput[]
    update?: CourseModuleUpdateWithWhereUniqueWithoutCourseInput | CourseModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseModuleUpdateManyWithWhereWithoutCourseInput | CourseModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseModuleScalarWhereInput | CourseModuleScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutModulesInput = {
    create?: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModulesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModulesInput
    upsert?: CourseUpsertWithoutModulesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutModulesInput, CourseUpdateWithoutModulesInput>, CourseUncheckedUpdateWithoutModulesInput>
  }

  export type EnumInstitutionTypeFieldUpdateOperationsInput = {
    set?: $Enums.InstitutionType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumEducationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelFilter<$PrismaModel> | $Enums.EducationLevel
  }

  export type NestedEnumCourseDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseDifficulty | EnumCourseDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.CourseDifficulty[] | ListEnumCourseDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseDifficulty[] | ListEnumCourseDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseDifficultyFilter<$PrismaModel> | $Enums.CourseDifficulty
  }

  export type NestedEnumCourseModeFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseMode | EnumCourseModeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseMode[] | ListEnumCourseModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseMode[] | ListEnumCourseModeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseModeFilter<$PrismaModel> | $Enums.CourseMode
  }

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedEnumCourseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusFilter<$PrismaModel> | $Enums.CourseStatus
  }

  export type NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelFilter<$PrismaModel>
  }

  export type NestedEnumCourseDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseDifficulty | EnumCourseDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.CourseDifficulty[] | ListEnumCourseDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseDifficulty[] | ListEnumCourseDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.CourseDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseDifficultyFilter<$PrismaModel>
    _max?: NestedEnumCourseDifficultyFilter<$PrismaModel>
  }

  export type NestedEnumCourseModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseMode | EnumCourseModeFieldRefInput<$PrismaModel>
    in?: $Enums.CourseMode[] | ListEnumCourseModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseMode[] | ListEnumCourseModeFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseModeWithAggregatesFilter<$PrismaModel> | $Enums.CourseMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseModeFilter<$PrismaModel>
    _max?: NestedEnumCourseModeFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CourseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseStatusFilter<$PrismaModel>
    _max?: NestedEnumCourseStatusFilter<$PrismaModel>
  }

  export type NestedEnumInstitutionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InstitutionType | EnumInstitutionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InstitutionType[] | ListEnumInstitutionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstitutionType[] | ListEnumInstitutionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInstitutionTypeFilter<$PrismaModel> | $Enums.InstitutionType
  }

  export type NestedEnumInstitutionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstitutionType | EnumInstitutionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InstitutionType[] | ListEnumInstitutionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstitutionType[] | ListEnumInstitutionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInstitutionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InstitutionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstitutionTypeFilter<$PrismaModel>
    _max?: NestedEnumInstitutionTypeFilter<$PrismaModel>
  }

  export type QuotePostCreateWithoutUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalNetWeight?: number | null
    totalGrossWeight?: number | null
    volumetricWeight?: number | null
    transitInsurance?: boolean | null
    width?: number | null
    height?: number | null
    length?: number | null
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    dangerousGoods?: boolean | null
    status?: string | null
    fromPostalCode?: string | null
    toPostalCode?: string | null
    fromCity?: string | null
    toCity?: string | null
    fromCountry?: string | null
    toCountry?: string | null
    fromAddress?: string | null
    toAddress?: string | null
    fromState?: string | null
    toState?: string | null
    postCategory?: string | null
    shipmentType?: string | null
    shipmentMode?: string | null
    quoteReply?: QuoteReplyCreateNestedManyWithoutPostInput
    quoteLike?: QuoteLikeCreateNestedManyWithoutPostInput
  }

  export type QuotePostUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalNetWeight?: number | null
    totalGrossWeight?: number | null
    volumetricWeight?: number | null
    transitInsurance?: boolean | null
    width?: number | null
    height?: number | null
    length?: number | null
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    dangerousGoods?: boolean | null
    status?: string | null
    fromPostalCode?: string | null
    toPostalCode?: string | null
    fromCity?: string | null
    toCity?: string | null
    fromCountry?: string | null
    toCountry?: string | null
    fromAddress?: string | null
    toAddress?: string | null
    fromState?: string | null
    toState?: string | null
    postCategory?: string | null
    shipmentType?: string | null
    shipmentMode?: string | null
    quoteReply?: QuoteReplyUncheckedCreateNestedManyWithoutPostInput
    quoteLike?: QuoteLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type QuotePostCreateOrConnectWithoutUserInput = {
    where: QuotePostWhereUniqueInput
    create: XOR<QuotePostCreateWithoutUserInput, QuotePostUncheckedCreateWithoutUserInput>
  }

  export type QuotePostCreateManyUserInputEnvelope = {
    data: QuotePostCreateManyUserInput | QuotePostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuoteReplyCreateWithoutUserInput = {
    id?: string
    parentReplyId: string
    createdAt?: Date | string
    post: QuotePostCreateNestedOneWithoutQuoteReplyInput
  }

  export type QuoteReplyUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    parentReplyId: string
    createdAt?: Date | string
  }

  export type QuoteReplyCreateOrConnectWithoutUserInput = {
    where: QuoteReplyWhereUniqueInput
    create: XOR<QuoteReplyCreateWithoutUserInput, QuoteReplyUncheckedCreateWithoutUserInput>
  }

  export type QuoteReplyCreateManyUserInputEnvelope = {
    data: QuoteReplyCreateManyUserInput | QuoteReplyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuoteLikeCreateWithoutUserInput = {
    id?: string
    post: QuotePostCreateNestedOneWithoutQuoteLikeInput
  }

  export type QuoteLikeUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
  }

  export type QuoteLikeCreateOrConnectWithoutUserInput = {
    where: QuoteLikeWhereUniqueInput
    create: XOR<QuoteLikeCreateWithoutUserInput, QuoteLikeUncheckedCreateWithoutUserInput>
  }

  export type QuoteLikeCreateManyUserInputEnvelope = {
    data: QuoteLikeCreateManyUserInput | QuoteLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuotePostUpsertWithWhereUniqueWithoutUserInput = {
    where: QuotePostWhereUniqueInput
    update: XOR<QuotePostUpdateWithoutUserInput, QuotePostUncheckedUpdateWithoutUserInput>
    create: XOR<QuotePostCreateWithoutUserInput, QuotePostUncheckedCreateWithoutUserInput>
  }

  export type QuotePostUpdateWithWhereUniqueWithoutUserInput = {
    where: QuotePostWhereUniqueInput
    data: XOR<QuotePostUpdateWithoutUserInput, QuotePostUncheckedUpdateWithoutUserInput>
  }

  export type QuotePostUpdateManyWithWhereWithoutUserInput = {
    where: QuotePostScalarWhereInput
    data: XOR<QuotePostUpdateManyMutationInput, QuotePostUncheckedUpdateManyWithoutUserInput>
  }

  export type QuotePostScalarWhereInput = {
    AND?: QuotePostScalarWhereInput | QuotePostScalarWhereInput[]
    OR?: QuotePostScalarWhereInput[]
    NOT?: QuotePostScalarWhereInput | QuotePostScalarWhereInput[]
    id?: StringFilter<"QuotePost"> | string
    title?: StringNullableFilter<"QuotePost"> | string | null
    description?: StringNullableFilter<"QuotePost"> | string | null
    userId?: StringNullableFilter<"QuotePost"> | string | null
    categoryId?: StringNullableFilter<"QuotePost"> | string | null
    createdAt?: DateTimeFilter<"QuotePost"> | Date | string
    updatedAt?: DateTimeFilter<"QuotePost"> | Date | string
    totalNetWeight?: FloatNullableFilter<"QuotePost"> | number | null
    totalGrossWeight?: FloatNullableFilter<"QuotePost"> | number | null
    volumetricWeight?: FloatNullableFilter<"QuotePost"> | number | null
    transitInsurance?: BoolNullableFilter<"QuotePost"> | boolean | null
    width?: FloatNullableFilter<"QuotePost"> | number | null
    height?: FloatNullableFilter<"QuotePost"> | number | null
    length?: FloatNullableFilter<"QuotePost"> | number | null
    viewCount?: IntNullableFilter<"QuotePost"> | number | null
    likesCount?: IntNullableFilter<"QuotePost"> | number | null
    commentsCount?: IntNullableFilter<"QuotePost"> | number | null
    dangerousGoods?: BoolNullableFilter<"QuotePost"> | boolean | null
    status?: StringNullableFilter<"QuotePost"> | string | null
    fromPostalCode?: StringNullableFilter<"QuotePost"> | string | null
    toPostalCode?: StringNullableFilter<"QuotePost"> | string | null
    fromCity?: StringNullableFilter<"QuotePost"> | string | null
    toCity?: StringNullableFilter<"QuotePost"> | string | null
    fromCountry?: StringNullableFilter<"QuotePost"> | string | null
    toCountry?: StringNullableFilter<"QuotePost"> | string | null
    fromAddress?: StringNullableFilter<"QuotePost"> | string | null
    toAddress?: StringNullableFilter<"QuotePost"> | string | null
    fromState?: StringNullableFilter<"QuotePost"> | string | null
    toState?: StringNullableFilter<"QuotePost"> | string | null
    postCategory?: StringNullableFilter<"QuotePost"> | string | null
    shipmentType?: StringNullableFilter<"QuotePost"> | string | null
    shipmentMode?: StringNullableFilter<"QuotePost"> | string | null
  }

  export type QuoteReplyUpsertWithWhereUniqueWithoutUserInput = {
    where: QuoteReplyWhereUniqueInput
    update: XOR<QuoteReplyUpdateWithoutUserInput, QuoteReplyUncheckedUpdateWithoutUserInput>
    create: XOR<QuoteReplyCreateWithoutUserInput, QuoteReplyUncheckedCreateWithoutUserInput>
  }

  export type QuoteReplyUpdateWithWhereUniqueWithoutUserInput = {
    where: QuoteReplyWhereUniqueInput
    data: XOR<QuoteReplyUpdateWithoutUserInput, QuoteReplyUncheckedUpdateWithoutUserInput>
  }

  export type QuoteReplyUpdateManyWithWhereWithoutUserInput = {
    where: QuoteReplyScalarWhereInput
    data: XOR<QuoteReplyUpdateManyMutationInput, QuoteReplyUncheckedUpdateManyWithoutUserInput>
  }

  export type QuoteReplyScalarWhereInput = {
    AND?: QuoteReplyScalarWhereInput | QuoteReplyScalarWhereInput[]
    OR?: QuoteReplyScalarWhereInput[]
    NOT?: QuoteReplyScalarWhereInput | QuoteReplyScalarWhereInput[]
    id?: StringFilter<"QuoteReply"> | string
    userId?: StringFilter<"QuoteReply"> | string
    postId?: StringFilter<"QuoteReply"> | string
    parentReplyId?: StringFilter<"QuoteReply"> | string
    createdAt?: DateTimeFilter<"QuoteReply"> | Date | string
  }

  export type QuoteLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: QuoteLikeWhereUniqueInput
    update: XOR<QuoteLikeUpdateWithoutUserInput, QuoteLikeUncheckedUpdateWithoutUserInput>
    create: XOR<QuoteLikeCreateWithoutUserInput, QuoteLikeUncheckedCreateWithoutUserInput>
  }

  export type QuoteLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: QuoteLikeWhereUniqueInput
    data: XOR<QuoteLikeUpdateWithoutUserInput, QuoteLikeUncheckedUpdateWithoutUserInput>
  }

  export type QuoteLikeUpdateManyWithWhereWithoutUserInput = {
    where: QuoteLikeScalarWhereInput
    data: XOR<QuoteLikeUpdateManyMutationInput, QuoteLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type QuoteLikeScalarWhereInput = {
    AND?: QuoteLikeScalarWhereInput | QuoteLikeScalarWhereInput[]
    OR?: QuoteLikeScalarWhereInput[]
    NOT?: QuoteLikeScalarWhereInput | QuoteLikeScalarWhereInput[]
    id?: StringFilter<"QuoteLike"> | string
    userId?: StringFilter<"QuoteLike"> | string
    postId?: StringFilter<"QuoteLike"> | string
  }

  export type QuoteReplyCreateWithoutPostInput = {
    id?: string
    parentReplyId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutQuoteReplyInput
  }

  export type QuoteReplyUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    parentReplyId: string
    createdAt?: Date | string
  }

  export type QuoteReplyCreateOrConnectWithoutPostInput = {
    where: QuoteReplyWhereUniqueInput
    create: XOR<QuoteReplyCreateWithoutPostInput, QuoteReplyUncheckedCreateWithoutPostInput>
  }

  export type QuoteReplyCreateManyPostInputEnvelope = {
    data: QuoteReplyCreateManyPostInput | QuoteReplyCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type QuoteLikeCreateWithoutPostInput = {
    id?: string
    user: UserCreateNestedOneWithoutQuoteLikeInput
  }

  export type QuoteLikeUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
  }

  export type QuoteLikeCreateOrConnectWithoutPostInput = {
    where: QuoteLikeWhereUniqueInput
    create: XOR<QuoteLikeCreateWithoutPostInput, QuoteLikeUncheckedCreateWithoutPostInput>
  }

  export type QuoteLikeCreateManyPostInputEnvelope = {
    data: QuoteLikeCreateManyPostInput | QuoteLikeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutQuotePostInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    verified?: boolean | null
    role?: string | null
    mobileNo?: string | null
    country?: string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    profilePic?: string | null
    bio?: string | null
    online?: boolean | null
    lastSeen?: Date | string | null
    rating?: number | null
    accountType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quoteReply?: QuoteReplyCreateNestedManyWithoutUserInput
    quoteLike?: QuoteLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuotePostInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    verified?: boolean | null
    role?: string | null
    mobileNo?: string | null
    country?: string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    profilePic?: string | null
    bio?: string | null
    online?: boolean | null
    lastSeen?: Date | string | null
    rating?: number | null
    accountType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quoteReply?: QuoteReplyUncheckedCreateNestedManyWithoutUserInput
    quoteLike?: QuoteLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuotePostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuotePostInput, UserUncheckedCreateWithoutQuotePostInput>
  }

  export type QuoteReplyUpsertWithWhereUniqueWithoutPostInput = {
    where: QuoteReplyWhereUniqueInput
    update: XOR<QuoteReplyUpdateWithoutPostInput, QuoteReplyUncheckedUpdateWithoutPostInput>
    create: XOR<QuoteReplyCreateWithoutPostInput, QuoteReplyUncheckedCreateWithoutPostInput>
  }

  export type QuoteReplyUpdateWithWhereUniqueWithoutPostInput = {
    where: QuoteReplyWhereUniqueInput
    data: XOR<QuoteReplyUpdateWithoutPostInput, QuoteReplyUncheckedUpdateWithoutPostInput>
  }

  export type QuoteReplyUpdateManyWithWhereWithoutPostInput = {
    where: QuoteReplyScalarWhereInput
    data: XOR<QuoteReplyUpdateManyMutationInput, QuoteReplyUncheckedUpdateManyWithoutPostInput>
  }

  export type QuoteLikeUpsertWithWhereUniqueWithoutPostInput = {
    where: QuoteLikeWhereUniqueInput
    update: XOR<QuoteLikeUpdateWithoutPostInput, QuoteLikeUncheckedUpdateWithoutPostInput>
    create: XOR<QuoteLikeCreateWithoutPostInput, QuoteLikeUncheckedCreateWithoutPostInput>
  }

  export type QuoteLikeUpdateWithWhereUniqueWithoutPostInput = {
    where: QuoteLikeWhereUniqueInput
    data: XOR<QuoteLikeUpdateWithoutPostInput, QuoteLikeUncheckedUpdateWithoutPostInput>
  }

  export type QuoteLikeUpdateManyWithWhereWithoutPostInput = {
    where: QuoteLikeScalarWhereInput
    data: XOR<QuoteLikeUpdateManyMutationInput, QuoteLikeUncheckedUpdateManyWithoutPostInput>
  }

  export type UserUpsertWithoutQuotePostInput = {
    update: XOR<UserUpdateWithoutQuotePostInput, UserUncheckedUpdateWithoutQuotePostInput>
    create: XOR<UserCreateWithoutQuotePostInput, UserUncheckedCreateWithoutQuotePostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuotePostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuotePostInput, UserUncheckedUpdateWithoutQuotePostInput>
  }

  export type UserUpdateWithoutQuotePostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quoteReply?: QuoteReplyUpdateManyWithoutUserNestedInput
    quoteLike?: QuoteLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuotePostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quoteReply?: QuoteReplyUncheckedUpdateManyWithoutUserNestedInput
    quoteLike?: QuoteLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutQuoteReplyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    verified?: boolean | null
    role?: string | null
    mobileNo?: string | null
    country?: string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    profilePic?: string | null
    bio?: string | null
    online?: boolean | null
    lastSeen?: Date | string | null
    rating?: number | null
    accountType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quotePost?: QuotePostCreateNestedManyWithoutUserInput
    quoteLike?: QuoteLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuoteReplyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    verified?: boolean | null
    role?: string | null
    mobileNo?: string | null
    country?: string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    profilePic?: string | null
    bio?: string | null
    online?: boolean | null
    lastSeen?: Date | string | null
    rating?: number | null
    accountType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quotePost?: QuotePostUncheckedCreateNestedManyWithoutUserInput
    quoteLike?: QuoteLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuoteReplyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuoteReplyInput, UserUncheckedCreateWithoutQuoteReplyInput>
  }

  export type QuotePostCreateWithoutQuoteReplyInput = {
    id?: string
    title?: string | null
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalNetWeight?: number | null
    totalGrossWeight?: number | null
    volumetricWeight?: number | null
    transitInsurance?: boolean | null
    width?: number | null
    height?: number | null
    length?: number | null
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    dangerousGoods?: boolean | null
    status?: string | null
    fromPostalCode?: string | null
    toPostalCode?: string | null
    fromCity?: string | null
    toCity?: string | null
    fromCountry?: string | null
    toCountry?: string | null
    fromAddress?: string | null
    toAddress?: string | null
    fromState?: string | null
    toState?: string | null
    postCategory?: string | null
    shipmentType?: string | null
    shipmentMode?: string | null
    quoteLike?: QuoteLikeCreateNestedManyWithoutPostInput
    user?: UserCreateNestedOneWithoutQuotePostInput
  }

  export type QuotePostUncheckedCreateWithoutQuoteReplyInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalNetWeight?: number | null
    totalGrossWeight?: number | null
    volumetricWeight?: number | null
    transitInsurance?: boolean | null
    width?: number | null
    height?: number | null
    length?: number | null
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    dangerousGoods?: boolean | null
    status?: string | null
    fromPostalCode?: string | null
    toPostalCode?: string | null
    fromCity?: string | null
    toCity?: string | null
    fromCountry?: string | null
    toCountry?: string | null
    fromAddress?: string | null
    toAddress?: string | null
    fromState?: string | null
    toState?: string | null
    postCategory?: string | null
    shipmentType?: string | null
    shipmentMode?: string | null
    quoteLike?: QuoteLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type QuotePostCreateOrConnectWithoutQuoteReplyInput = {
    where: QuotePostWhereUniqueInput
    create: XOR<QuotePostCreateWithoutQuoteReplyInput, QuotePostUncheckedCreateWithoutQuoteReplyInput>
  }

  export type UserUpsertWithoutQuoteReplyInput = {
    update: XOR<UserUpdateWithoutQuoteReplyInput, UserUncheckedUpdateWithoutQuoteReplyInput>
    create: XOR<UserCreateWithoutQuoteReplyInput, UserUncheckedCreateWithoutQuoteReplyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuoteReplyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuoteReplyInput, UserUncheckedUpdateWithoutQuoteReplyInput>
  }

  export type UserUpdateWithoutQuoteReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotePost?: QuotePostUpdateManyWithoutUserNestedInput
    quoteLike?: QuoteLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuoteReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotePost?: QuotePostUncheckedUpdateManyWithoutUserNestedInput
    quoteLike?: QuoteLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuotePostUpsertWithoutQuoteReplyInput = {
    update: XOR<QuotePostUpdateWithoutQuoteReplyInput, QuotePostUncheckedUpdateWithoutQuoteReplyInput>
    create: XOR<QuotePostCreateWithoutQuoteReplyInput, QuotePostUncheckedCreateWithoutQuoteReplyInput>
    where?: QuotePostWhereInput
  }

  export type QuotePostUpdateToOneWithWhereWithoutQuoteReplyInput = {
    where?: QuotePostWhereInput
    data: XOR<QuotePostUpdateWithoutQuoteReplyInput, QuotePostUncheckedUpdateWithoutQuoteReplyInput>
  }

  export type QuotePostUpdateWithoutQuoteReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    totalGrossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    volumetricWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    transitInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    dangerousGoods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fromPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    toPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    fromCity?: NullableStringFieldUpdateOperationsInput | string | null
    toCity?: NullableStringFieldUpdateOperationsInput | string | null
    fromCountry?: NullableStringFieldUpdateOperationsInput | string | null
    toCountry?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromState?: NullableStringFieldUpdateOperationsInput | string | null
    toState?: NullableStringFieldUpdateOperationsInput | string | null
    postCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentMode?: NullableStringFieldUpdateOperationsInput | string | null
    quoteLike?: QuoteLikeUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneWithoutQuotePostNestedInput
  }

  export type QuotePostUncheckedUpdateWithoutQuoteReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    totalGrossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    volumetricWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    transitInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    dangerousGoods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fromPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    toPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    fromCity?: NullableStringFieldUpdateOperationsInput | string | null
    toCity?: NullableStringFieldUpdateOperationsInput | string | null
    fromCountry?: NullableStringFieldUpdateOperationsInput | string | null
    toCountry?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromState?: NullableStringFieldUpdateOperationsInput | string | null
    toState?: NullableStringFieldUpdateOperationsInput | string | null
    postCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentMode?: NullableStringFieldUpdateOperationsInput | string | null
    quoteLike?: QuoteLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutQuoteLikeInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    verified?: boolean | null
    role?: string | null
    mobileNo?: string | null
    country?: string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    profilePic?: string | null
    bio?: string | null
    online?: boolean | null
    lastSeen?: Date | string | null
    rating?: number | null
    accountType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quotePost?: QuotePostCreateNestedManyWithoutUserInput
    quoteReply?: QuoteReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuoteLikeInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    verified?: boolean | null
    role?: string | null
    mobileNo?: string | null
    country?: string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    profilePic?: string | null
    bio?: string | null
    online?: boolean | null
    lastSeen?: Date | string | null
    rating?: number | null
    accountType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    quotePost?: QuotePostUncheckedCreateNestedManyWithoutUserInput
    quoteReply?: QuoteReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuoteLikeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuoteLikeInput, UserUncheckedCreateWithoutQuoteLikeInput>
  }

  export type QuotePostCreateWithoutQuoteLikeInput = {
    id?: string
    title?: string | null
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalNetWeight?: number | null
    totalGrossWeight?: number | null
    volumetricWeight?: number | null
    transitInsurance?: boolean | null
    width?: number | null
    height?: number | null
    length?: number | null
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    dangerousGoods?: boolean | null
    status?: string | null
    fromPostalCode?: string | null
    toPostalCode?: string | null
    fromCity?: string | null
    toCity?: string | null
    fromCountry?: string | null
    toCountry?: string | null
    fromAddress?: string | null
    toAddress?: string | null
    fromState?: string | null
    toState?: string | null
    postCategory?: string | null
    shipmentType?: string | null
    shipmentMode?: string | null
    quoteReply?: QuoteReplyCreateNestedManyWithoutPostInput
    user?: UserCreateNestedOneWithoutQuotePostInput
  }

  export type QuotePostUncheckedCreateWithoutQuoteLikeInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalNetWeight?: number | null
    totalGrossWeight?: number | null
    volumetricWeight?: number | null
    transitInsurance?: boolean | null
    width?: number | null
    height?: number | null
    length?: number | null
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    dangerousGoods?: boolean | null
    status?: string | null
    fromPostalCode?: string | null
    toPostalCode?: string | null
    fromCity?: string | null
    toCity?: string | null
    fromCountry?: string | null
    toCountry?: string | null
    fromAddress?: string | null
    toAddress?: string | null
    fromState?: string | null
    toState?: string | null
    postCategory?: string | null
    shipmentType?: string | null
    shipmentMode?: string | null
    quoteReply?: QuoteReplyUncheckedCreateNestedManyWithoutPostInput
  }

  export type QuotePostCreateOrConnectWithoutQuoteLikeInput = {
    where: QuotePostWhereUniqueInput
    create: XOR<QuotePostCreateWithoutQuoteLikeInput, QuotePostUncheckedCreateWithoutQuoteLikeInput>
  }

  export type UserUpsertWithoutQuoteLikeInput = {
    update: XOR<UserUpdateWithoutQuoteLikeInput, UserUncheckedUpdateWithoutQuoteLikeInput>
    create: XOR<UserCreateWithoutQuoteLikeInput, UserUncheckedCreateWithoutQuoteLikeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuoteLikeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuoteLikeInput, UserUncheckedUpdateWithoutQuoteLikeInput>
  }

  export type UserUpdateWithoutQuoteLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotePost?: QuotePostUpdateManyWithoutUserNestedInput
    quoteReply?: QuoteReplyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuoteLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotePost?: QuotePostUncheckedUpdateManyWithoutUserNestedInput
    quoteReply?: QuoteReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuotePostUpsertWithoutQuoteLikeInput = {
    update: XOR<QuotePostUpdateWithoutQuoteLikeInput, QuotePostUncheckedUpdateWithoutQuoteLikeInput>
    create: XOR<QuotePostCreateWithoutQuoteLikeInput, QuotePostUncheckedCreateWithoutQuoteLikeInput>
    where?: QuotePostWhereInput
  }

  export type QuotePostUpdateToOneWithWhereWithoutQuoteLikeInput = {
    where?: QuotePostWhereInput
    data: XOR<QuotePostUpdateWithoutQuoteLikeInput, QuotePostUncheckedUpdateWithoutQuoteLikeInput>
  }

  export type QuotePostUpdateWithoutQuoteLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    totalGrossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    volumetricWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    transitInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    dangerousGoods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fromPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    toPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    fromCity?: NullableStringFieldUpdateOperationsInput | string | null
    toCity?: NullableStringFieldUpdateOperationsInput | string | null
    fromCountry?: NullableStringFieldUpdateOperationsInput | string | null
    toCountry?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromState?: NullableStringFieldUpdateOperationsInput | string | null
    toState?: NullableStringFieldUpdateOperationsInput | string | null
    postCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentMode?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneWithoutQuotePostNestedInput
  }

  export type QuotePostUncheckedUpdateWithoutQuoteLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    totalGrossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    volumetricWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    transitInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    dangerousGoods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fromPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    toPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    fromCity?: NullableStringFieldUpdateOperationsInput | string | null
    toCity?: NullableStringFieldUpdateOperationsInput | string | null
    fromCountry?: NullableStringFieldUpdateOperationsInput | string | null
    toCountry?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromState?: NullableStringFieldUpdateOperationsInput | string | null
    toState?: NullableStringFieldUpdateOperationsInput | string | null
    postCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentMode?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CourseCreateWithoutCreatedByInput = {
    id?: string
    slug: string
    institution: string
    title: string
    description: string
    instructor: string
    logoUrl: string
    thumbnailUrl: string
    brochureUrl: string
    youtubeShortUrl: string
    educationLevel: $Enums.EducationLevel
    courseDifficulty: $Enums.CourseDifficulty
    mode: $Enums.CourseMode
    currency?: $Enums.Currency
    price: number
    duration: string
    language: string
    status?: $Enums.CourseStatus
    category: string
    enrollmentCount?: number
    tags?: CourseCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: CourseModuleCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCreatedByInput = {
    id?: string
    slug: string
    institution: string
    title: string
    description: string
    instructor: string
    logoUrl: string
    thumbnailUrl: string
    brochureUrl: string
    youtubeShortUrl: string
    educationLevel: $Enums.EducationLevel
    courseDifficulty: $Enums.CourseDifficulty
    mode: $Enums.CourseMode
    currency?: $Enums.Currency
    price: number
    duration: string
    language: string
    status?: $Enums.CourseStatus
    category: string
    enrollmentCount?: number
    tags?: CourseCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: CourseModuleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCreatedByInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput>
  }

  export type CourseCreateManyCreatedByInputEnvelope = {
    data: CourseCreateManyCreatedByInput | CourseCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCreatedByInput, CourseUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CourseCreateWithoutCreatedByInput, CourseUncheckedCreateWithoutCreatedByInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCreatedByInput, CourseUncheckedUpdateWithoutCreatedByInput>
  }

  export type CourseUpdateManyWithWhereWithoutCreatedByInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    slug?: StringFilter<"Course"> | string
    institution?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    logoUrl?: StringFilter<"Course"> | string
    thumbnailUrl?: StringFilter<"Course"> | string
    brochureUrl?: StringFilter<"Course"> | string
    youtubeShortUrl?: StringFilter<"Course"> | string
    educationLevel?: EnumEducationLevelFilter<"Course"> | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFilter<"Course"> | $Enums.CourseDifficulty
    mode?: EnumCourseModeFilter<"Course"> | $Enums.CourseMode
    currency?: EnumCurrencyFilter<"Course"> | $Enums.Currency
    price?: IntFilter<"Course"> | number
    duration?: StringFilter<"Course"> | string
    language?: StringFilter<"Course"> | string
    status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus
    category?: StringFilter<"Course"> | string
    enrollmentCount?: IntFilter<"Course"> | number
    tags?: StringNullableListFilter<"Course">
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    createdById?: StringFilter<"Course"> | string
  }

  export type AdminCreateWithoutCoursesInput = {
    id?: string
    name: string
    email: string
  }

  export type AdminUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    email: string
  }

  export type AdminCreateOrConnectWithoutCoursesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutCoursesInput, AdminUncheckedCreateWithoutCoursesInput>
  }

  export type CourseModuleCreateWithoutCourseInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
  }

  export type CourseModuleUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
  }

  export type CourseModuleCreateOrConnectWithoutCourseInput = {
    where: CourseModuleWhereUniqueInput
    create: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput>
  }

  export type CourseModuleCreateManyCourseInputEnvelope = {
    data: CourseModuleCreateManyCourseInput | CourseModuleCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutCoursesInput = {
    update: XOR<AdminUpdateWithoutCoursesInput, AdminUncheckedUpdateWithoutCoursesInput>
    create: XOR<AdminCreateWithoutCoursesInput, AdminUncheckedCreateWithoutCoursesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutCoursesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutCoursesInput, AdminUncheckedUpdateWithoutCoursesInput>
  }

  export type AdminUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CourseModuleUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseModuleWhereUniqueInput
    update: XOR<CourseModuleUpdateWithoutCourseInput, CourseModuleUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseModuleCreateWithoutCourseInput, CourseModuleUncheckedCreateWithoutCourseInput>
  }

  export type CourseModuleUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseModuleWhereUniqueInput
    data: XOR<CourseModuleUpdateWithoutCourseInput, CourseModuleUncheckedUpdateWithoutCourseInput>
  }

  export type CourseModuleUpdateManyWithWhereWithoutCourseInput = {
    where: CourseModuleScalarWhereInput
    data: XOR<CourseModuleUpdateManyMutationInput, CourseModuleUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseModuleScalarWhereInput = {
    AND?: CourseModuleScalarWhereInput | CourseModuleScalarWhereInput[]
    OR?: CourseModuleScalarWhereInput[]
    NOT?: CourseModuleScalarWhereInput | CourseModuleScalarWhereInput[]
    id?: StringFilter<"CourseModule"> | string
    title?: StringFilter<"CourseModule"> | string
    description?: StringFilter<"CourseModule"> | string
    courseId?: StringFilter<"CourseModule"> | string
    createdAt?: DateTimeFilter<"CourseModule"> | Date | string
  }

  export type CourseCreateWithoutModulesInput = {
    id?: string
    slug: string
    institution: string
    title: string
    description: string
    instructor: string
    logoUrl: string
    thumbnailUrl: string
    brochureUrl: string
    youtubeShortUrl: string
    educationLevel: $Enums.EducationLevel
    courseDifficulty: $Enums.CourseDifficulty
    mode: $Enums.CourseMode
    currency?: $Enums.Currency
    price: number
    duration: string
    language: string
    status?: $Enums.CourseStatus
    category: string
    enrollmentCount?: number
    tags?: CourseCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: AdminCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutModulesInput = {
    id?: string
    slug: string
    institution: string
    title: string
    description: string
    instructor: string
    logoUrl: string
    thumbnailUrl: string
    brochureUrl: string
    youtubeShortUrl: string
    educationLevel: $Enums.EducationLevel
    courseDifficulty: $Enums.CourseDifficulty
    mode: $Enums.CourseMode
    currency?: $Enums.Currency
    price: number
    duration: string
    language: string
    status?: $Enums.CourseStatus
    category: string
    enrollmentCount?: number
    tags?: CourseCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type CourseCreateOrConnectWithoutModulesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
  }

  export type CourseUpsertWithoutModulesInput = {
    update: XOR<CourseUpdateWithoutModulesInput, CourseUncheckedUpdateWithoutModulesInput>
    create: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutModulesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutModulesInput, CourseUncheckedUpdateWithoutModulesInput>
  }

  export type CourseUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    brochureUrl?: StringFieldUpdateOperationsInput | string
    youtubeShortUrl?: StringFieldUpdateOperationsInput | string
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFieldUpdateOperationsInput | $Enums.CourseDifficulty
    mode?: EnumCourseModeFieldUpdateOperationsInput | $Enums.CourseMode
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    category?: StringFieldUpdateOperationsInput | string
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    tags?: CourseUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: AdminUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    brochureUrl?: StringFieldUpdateOperationsInput | string
    youtubeShortUrl?: StringFieldUpdateOperationsInput | string
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFieldUpdateOperationsInput | $Enums.CourseDifficulty
    mode?: EnumCourseModeFieldUpdateOperationsInput | $Enums.CourseMode
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    category?: StringFieldUpdateOperationsInput | string
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    tags?: CourseUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type QuotePostCreateManyUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    totalNetWeight?: number | null
    totalGrossWeight?: number | null
    volumetricWeight?: number | null
    transitInsurance?: boolean | null
    width?: number | null
    height?: number | null
    length?: number | null
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    dangerousGoods?: boolean | null
    status?: string | null
    fromPostalCode?: string | null
    toPostalCode?: string | null
    fromCity?: string | null
    toCity?: string | null
    fromCountry?: string | null
    toCountry?: string | null
    fromAddress?: string | null
    toAddress?: string | null
    fromState?: string | null
    toState?: string | null
    postCategory?: string | null
    shipmentType?: string | null
    shipmentMode?: string | null
  }

  export type QuoteReplyCreateManyUserInput = {
    id?: string
    postId: string
    parentReplyId: string
    createdAt?: Date | string
  }

  export type QuoteLikeCreateManyUserInput = {
    id?: string
    postId: string
  }

  export type QuotePostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    totalGrossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    volumetricWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    transitInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    dangerousGoods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fromPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    toPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    fromCity?: NullableStringFieldUpdateOperationsInput | string | null
    toCity?: NullableStringFieldUpdateOperationsInput | string | null
    fromCountry?: NullableStringFieldUpdateOperationsInput | string | null
    toCountry?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromState?: NullableStringFieldUpdateOperationsInput | string | null
    toState?: NullableStringFieldUpdateOperationsInput | string | null
    postCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentMode?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUpdateManyWithoutPostNestedInput
    quoteLike?: QuoteLikeUpdateManyWithoutPostNestedInput
  }

  export type QuotePostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    totalGrossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    volumetricWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    transitInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    dangerousGoods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fromPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    toPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    fromCity?: NullableStringFieldUpdateOperationsInput | string | null
    toCity?: NullableStringFieldUpdateOperationsInput | string | null
    fromCountry?: NullableStringFieldUpdateOperationsInput | string | null
    toCountry?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromState?: NullableStringFieldUpdateOperationsInput | string | null
    toState?: NullableStringFieldUpdateOperationsInput | string | null
    postCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentMode?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUncheckedUpdateManyWithoutPostNestedInput
    quoteLike?: QuoteLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type QuotePostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    totalGrossWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    volumetricWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    transitInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    dangerousGoods?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    fromPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    toPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    fromCity?: NullableStringFieldUpdateOperationsInput | string | null
    toCity?: NullableStringFieldUpdateOperationsInput | string | null
    fromCountry?: NullableStringFieldUpdateOperationsInput | string | null
    toCountry?: NullableStringFieldUpdateOperationsInput | string | null
    fromAddress?: NullableStringFieldUpdateOperationsInput | string | null
    toAddress?: NullableStringFieldUpdateOperationsInput | string | null
    fromState?: NullableStringFieldUpdateOperationsInput | string | null
    toState?: NullableStringFieldUpdateOperationsInput | string | null
    postCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentMode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteReplyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentReplyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: QuotePostUpdateOneRequiredWithoutQuoteReplyNestedInput
  }

  export type QuoteReplyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteReplyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post?: QuotePostUpdateOneRequiredWithoutQuoteLikeNestedInput
  }

  export type QuoteLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteReplyCreateManyPostInput = {
    id?: string
    userId: string
    parentReplyId: string
    createdAt?: Date | string
  }

  export type QuoteLikeCreateManyPostInput = {
    id?: string
    userId: string
  }

  export type QuoteReplyUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentReplyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuoteReplyNestedInput
  }

  export type QuoteReplyUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteReplyUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteLikeUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutQuoteLikeNestedInput
  }

  export type QuoteLikeUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteLikeUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateManyCreatedByInput = {
    id?: string
    slug: string
    institution: string
    title: string
    description: string
    instructor: string
    logoUrl: string
    thumbnailUrl: string
    brochureUrl: string
    youtubeShortUrl: string
    educationLevel: $Enums.EducationLevel
    courseDifficulty: $Enums.CourseDifficulty
    mode: $Enums.CourseMode
    currency?: $Enums.Currency
    price: number
    duration: string
    language: string
    status?: $Enums.CourseStatus
    category: string
    enrollmentCount?: number
    tags?: CourseCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    brochureUrl?: StringFieldUpdateOperationsInput | string
    youtubeShortUrl?: StringFieldUpdateOperationsInput | string
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFieldUpdateOperationsInput | $Enums.CourseDifficulty
    mode?: EnumCourseModeFieldUpdateOperationsInput | $Enums.CourseMode
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    category?: StringFieldUpdateOperationsInput | string
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    tags?: CourseUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: CourseModuleUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    brochureUrl?: StringFieldUpdateOperationsInput | string
    youtubeShortUrl?: StringFieldUpdateOperationsInput | string
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFieldUpdateOperationsInput | $Enums.CourseDifficulty
    mode?: EnumCourseModeFieldUpdateOperationsInput | $Enums.CourseMode
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    category?: StringFieldUpdateOperationsInput | string
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    tags?: CourseUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: CourseModuleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    brochureUrl?: StringFieldUpdateOperationsInput | string
    youtubeShortUrl?: StringFieldUpdateOperationsInput | string
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    courseDifficulty?: EnumCourseDifficultyFieldUpdateOperationsInput | $Enums.CourseDifficulty
    mode?: EnumCourseModeFieldUpdateOperationsInput | $Enums.CourseMode
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    category?: StringFieldUpdateOperationsInput | string
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    tags?: CourseUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseModuleCreateManyCourseInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
  }

  export type CourseModuleUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseModuleUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseModuleUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}