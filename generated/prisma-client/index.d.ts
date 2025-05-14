
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
 * Model GeneralPost
 * 
 */
export type GeneralPost = $Result.DefaultSelection<Prisma.$GeneralPostPayload>

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
   * `prisma.generalPost`: Exposes CRUD operations for the **GeneralPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneralPosts
    * const generalPosts = await prisma.generalPost.findMany()
    * ```
    */
  get generalPost(): Prisma.GeneralPostDelegate<ExtArgs, ClientOptions>;
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
    GeneralPost: 'GeneralPost'
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
      modelProps: "user" | "forumMainCategory" | "forumSubCategory" | "quotePost" | "quoteReply" | "quoteLike" | "generalPost"
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
      GeneralPost: {
        payload: Prisma.$GeneralPostPayload<ExtArgs>
        fields: Prisma.GeneralPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneralPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneralPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPostPayload>
          }
          findFirst: {
            args: Prisma.GeneralPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneralPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPostPayload>
          }
          findMany: {
            args: Prisma.GeneralPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPostPayload>[]
          }
          create: {
            args: Prisma.GeneralPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPostPayload>
          }
          createMany: {
            args: Prisma.GeneralPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneralPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPostPayload>[]
          }
          delete: {
            args: Prisma.GeneralPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPostPayload>
          }
          update: {
            args: Prisma.GeneralPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPostPayload>
          }
          deleteMany: {
            args: Prisma.GeneralPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneralPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneralPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPostPayload>[]
          }
          upsert: {
            args: Prisma.GeneralPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralPostPayload>
          }
          aggregate: {
            args: Prisma.GeneralPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneralPost>
          }
          groupBy: {
            args: Prisma.GeneralPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneralPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneralPostCountArgs<ExtArgs>
            result: $Utils.Optional<GeneralPostCountAggregateOutputType> | number
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
    generalPost?: GeneralPostOmit
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
    generalPost: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotePost?: boolean | UserCountOutputTypeCountQuotePostArgs
    quoteReply?: boolean | UserCountOutputTypeCountQuoteReplyArgs
    quoteLike?: boolean | UserCountOutputTypeCountQuoteLikeArgs
    generalPost?: boolean | UserCountOutputTypeCountGeneralPostArgs
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
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGeneralPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneralPostWhereInput
  }


  /**
   * Count Type ForumMainCategoryCountOutputType
   */

  export type ForumMainCategoryCountOutputType = {
    subCategory: number
  }

  export type ForumMainCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategory?: boolean | ForumMainCategoryCountOutputTypeCountSubCategoryArgs
  }

  // Custom InputTypes
  /**
   * ForumMainCategoryCountOutputType without action
   */
  export type ForumMainCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMainCategoryCountOutputType
     */
    select?: ForumMainCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumMainCategoryCountOutputType without action
   */
  export type ForumMainCategoryCountOutputTypeCountSubCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumSubCategoryWhereInput
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
    generalPost?: boolean | User$generalPostArgs<ExtArgs>
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
    generalPost?: boolean | User$generalPostArgs<ExtArgs>
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
      generalPost: Prisma.$GeneralPostPayload<ExtArgs>[]
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
    generalPost<T extends User$generalPostArgs<ExtArgs> = {}>(args?: Subset<T, User$generalPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.generalPost
   */
  export type User$generalPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostInclude<ExtArgs> | null
    where?: GeneralPostWhereInput
    orderBy?: GeneralPostOrderByWithRelationInput | GeneralPostOrderByWithRelationInput[]
    cursor?: GeneralPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneralPostScalarFieldEnum | GeneralPostScalarFieldEnum[]
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
    subCategory?: boolean | ForumMainCategory$subCategoryArgs<ExtArgs>
    _count?: boolean | ForumMainCategoryCountOutputTypeDefaultArgs<ExtArgs>
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
  export type ForumMainCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategory?: boolean | ForumMainCategory$subCategoryArgs<ExtArgs>
    _count?: boolean | ForumMainCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumMainCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ForumMainCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ForumMainCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumMainCategory"
    objects: {
      subCategory: Prisma.$ForumSubCategoryPayload<ExtArgs>[]
    }
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
    subCategory<T extends ForumMainCategory$subCategoryArgs<ExtArgs> = {}>(args?: Subset<T, ForumMainCategory$subCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumSubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMainCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMainCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMainCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMainCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMainCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMainCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMainCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMainCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMainCategoryInclude<ExtArgs> | null
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
   * ForumMainCategory.subCategory
   */
  export type ForumMainCategory$subCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumSubCategory
     */
    select?: ForumSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumSubCategory
     */
    omit?: ForumSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryInclude<ExtArgs> | null
    where?: ForumSubCategoryWhereInput
    orderBy?: ForumSubCategoryOrderByWithRelationInput | ForumSubCategoryOrderByWithRelationInput[]
    cursor?: ForumSubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumSubCategoryScalarFieldEnum | ForumSubCategoryScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMainCategoryInclude<ExtArgs> | null
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
    mainCategoryId: string | null
  }

  export type ForumSubCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    enabled: boolean | null
    mainCategoryId: string | null
  }

  export type ForumSubCategoryCountAggregateOutputType = {
    id: number
    name: number
    enabled: number
    mainCategoryId: number
    _all: number
  }


  export type ForumSubCategoryMinAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
    mainCategoryId?: true
  }

  export type ForumSubCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
    mainCategoryId?: true
  }

  export type ForumSubCategoryCountAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
    mainCategoryId?: true
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
    mainCategoryId: string
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
    mainCategoryId?: boolean
    mainCategory?: boolean | ForumMainCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumSubCategory"]>

  export type ForumSubCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enabled?: boolean
    mainCategoryId?: boolean
    mainCategory?: boolean | ForumMainCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumSubCategory"]>

  export type ForumSubCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enabled?: boolean
    mainCategoryId?: boolean
    mainCategory?: boolean | ForumMainCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumSubCategory"]>

  export type ForumSubCategorySelectScalar = {
    id?: boolean
    name?: boolean
    enabled?: boolean
    mainCategoryId?: boolean
  }

  export type ForumSubCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "enabled" | "mainCategoryId", ExtArgs["result"]["forumSubCategory"]>
  export type ForumSubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategory?: boolean | ForumMainCategoryDefaultArgs<ExtArgs>
  }
  export type ForumSubCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategory?: boolean | ForumMainCategoryDefaultArgs<ExtArgs>
  }
  export type ForumSubCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategory?: boolean | ForumMainCategoryDefaultArgs<ExtArgs>
  }

  export type $ForumSubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumSubCategory"
    objects: {
      mainCategory: Prisma.$ForumMainCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      enabled: boolean | null
      mainCategoryId: string
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
    mainCategory<T extends ForumMainCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumMainCategoryDefaultArgs<ExtArgs>>): Prisma__ForumMainCategoryClient<$Result.GetResult<Prisma.$ForumMainCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly mainCategoryId: FieldRef<"ForumSubCategory", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumSubCategory.
     */
    data: XOR<ForumSubCategoryCreateInput, ForumSubCategoryUncheckedCreateInput>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumSubCategoryInclude<ExtArgs> | null
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
    name: string | null
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
    rejectionReason: string | null
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
    postMainCategory: string | null
    postSubCategory: string | null
    shipmentType: string | null
  }

  export type QuotePostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    name: string | null
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
    rejectionReason: string | null
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
    postMainCategory: string | null
    postSubCategory: string | null
    shipmentType: string | null
  }

  export type QuotePostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    userId: number
    name: number
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
    rejectionReason: number
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
    postMainCategory: number
    postSubCategory: number
    shipmentType: number
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
    name?: true
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
    rejectionReason?: true
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
    postMainCategory?: true
    postSubCategory?: true
    shipmentType?: true
  }

  export type QuotePostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    name?: true
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
    rejectionReason?: true
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
    postMainCategory?: true
    postSubCategory?: true
    shipmentType?: true
  }

  export type QuotePostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    name?: true
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
    rejectionReason?: true
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
    postMainCategory?: true
    postSubCategory?: true
    shipmentType?: true
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
    userId: string
    name: string | null
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
    rejectionReason: string | null
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
    postMainCategory: string | null
    postSubCategory: string | null
    shipmentType: string | null
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
    name?: boolean
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
    rejectionReason?: boolean
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
    postMainCategory?: boolean
    postSubCategory?: boolean
    shipmentType?: boolean
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
    name?: boolean
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
    rejectionReason?: boolean
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
    postMainCategory?: boolean
    postSubCategory?: boolean
    shipmentType?: boolean
    user?: boolean | QuotePost$userArgs<ExtArgs>
  }, ExtArgs["result"]["quotePost"]>

  export type QuotePostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    name?: boolean
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
    rejectionReason?: boolean
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
    postMainCategory?: boolean
    postSubCategory?: boolean
    shipmentType?: boolean
    user?: boolean | QuotePost$userArgs<ExtArgs>
  }, ExtArgs["result"]["quotePost"]>

  export type QuotePostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    name?: boolean
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
    rejectionReason?: boolean
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
    postMainCategory?: boolean
    postSubCategory?: boolean
    shipmentType?: boolean
  }

  export type QuotePostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "userId" | "name" | "categoryId" | "createdAt" | "updatedAt" | "totalNetWeight" | "totalGrossWeight" | "volumetricWeight" | "transitInsurance" | "width" | "height" | "length" | "viewCount" | "likesCount" | "commentsCount" | "dangerousGoods" | "status" | "rejectionReason" | "fromPostalCode" | "toPostalCode" | "fromCity" | "toCity" | "fromCountry" | "toCountry" | "fromAddress" | "toAddress" | "fromState" | "toState" | "postMainCategory" | "postSubCategory" | "shipmentType", ExtArgs["result"]["quotePost"]>
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
      userId: string
      name: string | null
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
      rejectionReason: string | null
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
      postMainCategory: string | null
      postSubCategory: string | null
      shipmentType: string | null
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
    readonly name: FieldRef<"QuotePost", 'String'>
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
    readonly rejectionReason: FieldRef<"QuotePost", 'String'>
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
    readonly postMainCategory: FieldRef<"QuotePost", 'String'>
    readonly postSubCategory: FieldRef<"QuotePost", 'String'>
    readonly shipmentType: FieldRef<"QuotePost", 'String'>
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
    description: string | null
    createdAt: Date | null
    status: string | null
    rejectionReason: string | null
  }

  export type QuoteReplyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    parentReplyId: string | null
    description: string | null
    createdAt: Date | null
    status: string | null
    rejectionReason: string | null
  }

  export type QuoteReplyCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    parentReplyId: number
    description: number
    createdAt: number
    status: number
    rejectionReason: number
    _all: number
  }


  export type QuoteReplyMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    parentReplyId?: true
    description?: true
    createdAt?: true
    status?: true
    rejectionReason?: true
  }

  export type QuoteReplyMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    parentReplyId?: true
    description?: true
    createdAt?: true
    status?: true
    rejectionReason?: true
  }

  export type QuoteReplyCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    parentReplyId?: true
    description?: true
    createdAt?: true
    status?: true
    rejectionReason?: true
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
    parentReplyId: string | null
    description: string | null
    createdAt: Date
    status: string | null
    rejectionReason: string | null
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
    description?: boolean
    createdAt?: boolean
    status?: boolean
    rejectionReason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteReply"]>

  export type QuoteReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    parentReplyId?: boolean
    description?: boolean
    createdAt?: boolean
    status?: boolean
    rejectionReason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteReply"]>

  export type QuoteReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    parentReplyId?: boolean
    description?: boolean
    createdAt?: boolean
    status?: boolean
    rejectionReason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | QuotePostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteReply"]>

  export type QuoteReplySelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    parentReplyId?: boolean
    description?: boolean
    createdAt?: boolean
    status?: boolean
    rejectionReason?: boolean
  }

  export type QuoteReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "parentReplyId" | "description" | "createdAt" | "status" | "rejectionReason", ExtArgs["result"]["quoteReply"]>
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
      parentReplyId: string | null
      description: string | null
      createdAt: Date
      status: string | null
      rejectionReason: string | null
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
    readonly description: FieldRef<"QuoteReply", 'String'>
    readonly createdAt: FieldRef<"QuoteReply", 'DateTime'>
    readonly status: FieldRef<"QuoteReply", 'String'>
    readonly rejectionReason: FieldRef<"QuoteReply", 'String'>
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
   * Model GeneralPost
   */

  export type AggregateGeneralPost = {
    _count: GeneralPostCountAggregateOutputType | null
    _avg: GeneralPostAvgAggregateOutputType | null
    _sum: GeneralPostSumAggregateOutputType | null
    _min: GeneralPostMinAggregateOutputType | null
    _max: GeneralPostMaxAggregateOutputType | null
  }

  export type GeneralPostAvgAggregateOutputType = {
    viewCount: number | null
    likesCount: number | null
    commentsCount: number | null
  }

  export type GeneralPostSumAggregateOutputType = {
    viewCount: number | null
    likesCount: number | null
    commentsCount: number | null
  }

  export type GeneralPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    viewCount: number | null
    likesCount: number | null
    commentsCount: number | null
    status: string | null
    rejectionReason: string | null
    generalPostMainCategory: string | null
    generalPostSubCategory: string | null
  }

  export type GeneralPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    viewCount: number | null
    likesCount: number | null
    commentsCount: number | null
    status: string | null
    rejectionReason: string | null
    generalPostMainCategory: string | null
    generalPostSubCategory: string | null
  }

  export type GeneralPostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    viewCount: number
    likesCount: number
    commentsCount: number
    status: number
    rejectionReason: number
    generalPostMainCategory: number
    generalPostSubCategory: number
    _all: number
  }


  export type GeneralPostAvgAggregateInputType = {
    viewCount?: true
    likesCount?: true
    commentsCount?: true
  }

  export type GeneralPostSumAggregateInputType = {
    viewCount?: true
    likesCount?: true
    commentsCount?: true
  }

  export type GeneralPostMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    viewCount?: true
    likesCount?: true
    commentsCount?: true
    status?: true
    rejectionReason?: true
    generalPostMainCategory?: true
    generalPostSubCategory?: true
  }

  export type GeneralPostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    viewCount?: true
    likesCount?: true
    commentsCount?: true
    status?: true
    rejectionReason?: true
    generalPostMainCategory?: true
    generalPostSubCategory?: true
  }

  export type GeneralPostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    viewCount?: true
    likesCount?: true
    commentsCount?: true
    status?: true
    rejectionReason?: true
    generalPostMainCategory?: true
    generalPostSubCategory?: true
    _all?: true
  }

  export type GeneralPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralPost to aggregate.
     */
    where?: GeneralPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralPosts to fetch.
     */
    orderBy?: GeneralPostOrderByWithRelationInput | GeneralPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneralPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneralPosts
    **/
    _count?: true | GeneralPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneralPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneralPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneralPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneralPostMaxAggregateInputType
  }

  export type GetGeneralPostAggregateType<T extends GeneralPostAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneralPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneralPost[P]>
      : GetScalarType<T[P], AggregateGeneralPost[P]>
  }




  export type GeneralPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneralPostWhereInput
    orderBy?: GeneralPostOrderByWithAggregationInput | GeneralPostOrderByWithAggregationInput[]
    by: GeneralPostScalarFieldEnum[] | GeneralPostScalarFieldEnum
    having?: GeneralPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneralPostCountAggregateInputType | true
    _avg?: GeneralPostAvgAggregateInputType
    _sum?: GeneralPostSumAggregateInputType
    _min?: GeneralPostMinAggregateInputType
    _max?: GeneralPostMaxAggregateInputType
  }

  export type GeneralPostGroupByOutputType = {
    id: string
    title: string | null
    description: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    viewCount: number | null
    likesCount: number | null
    commentsCount: number | null
    status: string | null
    rejectionReason: string | null
    generalPostMainCategory: string | null
    generalPostSubCategory: string | null
    _count: GeneralPostCountAggregateOutputType | null
    _avg: GeneralPostAvgAggregateOutputType | null
    _sum: GeneralPostSumAggregateOutputType | null
    _min: GeneralPostMinAggregateOutputType | null
    _max: GeneralPostMaxAggregateOutputType | null
  }

  type GetGeneralPostGroupByPayload<T extends GeneralPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneralPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneralPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneralPostGroupByOutputType[P]>
            : GetScalarType<T[P], GeneralPostGroupByOutputType[P]>
        }
      >
    >


  export type GeneralPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    viewCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    status?: boolean
    rejectionReason?: boolean
    generalPostMainCategory?: boolean
    generalPostSubCategory?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generalPost"]>

  export type GeneralPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    viewCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    status?: boolean
    rejectionReason?: boolean
    generalPostMainCategory?: boolean
    generalPostSubCategory?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generalPost"]>

  export type GeneralPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    viewCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    status?: boolean
    rejectionReason?: boolean
    generalPostMainCategory?: boolean
    generalPostSubCategory?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generalPost"]>

  export type GeneralPostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    viewCount?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    status?: boolean
    rejectionReason?: boolean
    generalPostMainCategory?: boolean
    generalPostSubCategory?: boolean
  }

  export type GeneralPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "userId" | "createdAt" | "updatedAt" | "viewCount" | "likesCount" | "commentsCount" | "status" | "rejectionReason" | "generalPostMainCategory" | "generalPostSubCategory", ExtArgs["result"]["generalPost"]>
  export type GeneralPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GeneralPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GeneralPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GeneralPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneralPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      description: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
      viewCount: number | null
      likesCount: number | null
      commentsCount: number | null
      status: string | null
      rejectionReason: string | null
      generalPostMainCategory: string | null
      generalPostSubCategory: string | null
    }, ExtArgs["result"]["generalPost"]>
    composites: {}
  }

  type GeneralPostGetPayload<S extends boolean | null | undefined | GeneralPostDefaultArgs> = $Result.GetResult<Prisma.$GeneralPostPayload, S>

  type GeneralPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneralPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneralPostCountAggregateInputType | true
    }

  export interface GeneralPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneralPost'], meta: { name: 'GeneralPost' } }
    /**
     * Find zero or one GeneralPost that matches the filter.
     * @param {GeneralPostFindUniqueArgs} args - Arguments to find a GeneralPost
     * @example
     * // Get one GeneralPost
     * const generalPost = await prisma.generalPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneralPostFindUniqueArgs>(args: SelectSubset<T, GeneralPostFindUniqueArgs<ExtArgs>>): Prisma__GeneralPostClient<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneralPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneralPostFindUniqueOrThrowArgs} args - Arguments to find a GeneralPost
     * @example
     * // Get one GeneralPost
     * const generalPost = await prisma.generalPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneralPostFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneralPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneralPostClient<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneralPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralPostFindFirstArgs} args - Arguments to find a GeneralPost
     * @example
     * // Get one GeneralPost
     * const generalPost = await prisma.generalPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneralPostFindFirstArgs>(args?: SelectSubset<T, GeneralPostFindFirstArgs<ExtArgs>>): Prisma__GeneralPostClient<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneralPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralPostFindFirstOrThrowArgs} args - Arguments to find a GeneralPost
     * @example
     * // Get one GeneralPost
     * const generalPost = await prisma.generalPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneralPostFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneralPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneralPostClient<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneralPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneralPosts
     * const generalPosts = await prisma.generalPost.findMany()
     * 
     * // Get first 10 GeneralPosts
     * const generalPosts = await prisma.generalPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generalPostWithIdOnly = await prisma.generalPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneralPostFindManyArgs>(args?: SelectSubset<T, GeneralPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneralPost.
     * @param {GeneralPostCreateArgs} args - Arguments to create a GeneralPost.
     * @example
     * // Create one GeneralPost
     * const GeneralPost = await prisma.generalPost.create({
     *   data: {
     *     // ... data to create a GeneralPost
     *   }
     * })
     * 
     */
    create<T extends GeneralPostCreateArgs>(args: SelectSubset<T, GeneralPostCreateArgs<ExtArgs>>): Prisma__GeneralPostClient<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneralPosts.
     * @param {GeneralPostCreateManyArgs} args - Arguments to create many GeneralPosts.
     * @example
     * // Create many GeneralPosts
     * const generalPost = await prisma.generalPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneralPostCreateManyArgs>(args?: SelectSubset<T, GeneralPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneralPosts and returns the data saved in the database.
     * @param {GeneralPostCreateManyAndReturnArgs} args - Arguments to create many GeneralPosts.
     * @example
     * // Create many GeneralPosts
     * const generalPost = await prisma.generalPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneralPosts and only return the `id`
     * const generalPostWithIdOnly = await prisma.generalPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneralPostCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneralPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneralPost.
     * @param {GeneralPostDeleteArgs} args - Arguments to delete one GeneralPost.
     * @example
     * // Delete one GeneralPost
     * const GeneralPost = await prisma.generalPost.delete({
     *   where: {
     *     // ... filter to delete one GeneralPost
     *   }
     * })
     * 
     */
    delete<T extends GeneralPostDeleteArgs>(args: SelectSubset<T, GeneralPostDeleteArgs<ExtArgs>>): Prisma__GeneralPostClient<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneralPost.
     * @param {GeneralPostUpdateArgs} args - Arguments to update one GeneralPost.
     * @example
     * // Update one GeneralPost
     * const generalPost = await prisma.generalPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneralPostUpdateArgs>(args: SelectSubset<T, GeneralPostUpdateArgs<ExtArgs>>): Prisma__GeneralPostClient<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneralPosts.
     * @param {GeneralPostDeleteManyArgs} args - Arguments to filter GeneralPosts to delete.
     * @example
     * // Delete a few GeneralPosts
     * const { count } = await prisma.generalPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneralPostDeleteManyArgs>(args?: SelectSubset<T, GeneralPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneralPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneralPosts
     * const generalPost = await prisma.generalPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneralPostUpdateManyArgs>(args: SelectSubset<T, GeneralPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneralPosts and returns the data updated in the database.
     * @param {GeneralPostUpdateManyAndReturnArgs} args - Arguments to update many GeneralPosts.
     * @example
     * // Update many GeneralPosts
     * const generalPost = await prisma.generalPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneralPosts and only return the `id`
     * const generalPostWithIdOnly = await prisma.generalPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends GeneralPostUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneralPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneralPost.
     * @param {GeneralPostUpsertArgs} args - Arguments to update or create a GeneralPost.
     * @example
     * // Update or create a GeneralPost
     * const generalPost = await prisma.generalPost.upsert({
     *   create: {
     *     // ... data to create a GeneralPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneralPost we want to update
     *   }
     * })
     */
    upsert<T extends GeneralPostUpsertArgs>(args: SelectSubset<T, GeneralPostUpsertArgs<ExtArgs>>): Prisma__GeneralPostClient<$Result.GetResult<Prisma.$GeneralPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneralPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralPostCountArgs} args - Arguments to filter GeneralPosts to count.
     * @example
     * // Count the number of GeneralPosts
     * const count = await prisma.generalPost.count({
     *   where: {
     *     // ... the filter for the GeneralPosts we want to count
     *   }
     * })
    **/
    count<T extends GeneralPostCountArgs>(
      args?: Subset<T, GeneralPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneralPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneralPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneralPostAggregateArgs>(args: Subset<T, GeneralPostAggregateArgs>): Prisma.PrismaPromise<GetGeneralPostAggregateType<T>>

    /**
     * Group by GeneralPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralPostGroupByArgs} args - Group by arguments.
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
      T extends GeneralPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneralPostGroupByArgs['orderBy'] }
        : { orderBy?: GeneralPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneralPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneralPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneralPost model
   */
  readonly fields: GeneralPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneralPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneralPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GeneralPost model
   */
  interface GeneralPostFieldRefs {
    readonly id: FieldRef<"GeneralPost", 'String'>
    readonly title: FieldRef<"GeneralPost", 'String'>
    readonly description: FieldRef<"GeneralPost", 'String'>
    readonly userId: FieldRef<"GeneralPost", 'String'>
    readonly createdAt: FieldRef<"GeneralPost", 'DateTime'>
    readonly updatedAt: FieldRef<"GeneralPost", 'DateTime'>
    readonly viewCount: FieldRef<"GeneralPost", 'Int'>
    readonly likesCount: FieldRef<"GeneralPost", 'Int'>
    readonly commentsCount: FieldRef<"GeneralPost", 'Int'>
    readonly status: FieldRef<"GeneralPost", 'String'>
    readonly rejectionReason: FieldRef<"GeneralPost", 'String'>
    readonly generalPostMainCategory: FieldRef<"GeneralPost", 'String'>
    readonly generalPostSubCategory: FieldRef<"GeneralPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GeneralPost findUnique
   */
  export type GeneralPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostInclude<ExtArgs> | null
    /**
     * Filter, which GeneralPost to fetch.
     */
    where: GeneralPostWhereUniqueInput
  }

  /**
   * GeneralPost findUniqueOrThrow
   */
  export type GeneralPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostInclude<ExtArgs> | null
    /**
     * Filter, which GeneralPost to fetch.
     */
    where: GeneralPostWhereUniqueInput
  }

  /**
   * GeneralPost findFirst
   */
  export type GeneralPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostInclude<ExtArgs> | null
    /**
     * Filter, which GeneralPost to fetch.
     */
    where?: GeneralPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralPosts to fetch.
     */
    orderBy?: GeneralPostOrderByWithRelationInput | GeneralPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralPosts.
     */
    cursor?: GeneralPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralPosts.
     */
    distinct?: GeneralPostScalarFieldEnum | GeneralPostScalarFieldEnum[]
  }

  /**
   * GeneralPost findFirstOrThrow
   */
  export type GeneralPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostInclude<ExtArgs> | null
    /**
     * Filter, which GeneralPost to fetch.
     */
    where?: GeneralPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralPosts to fetch.
     */
    orderBy?: GeneralPostOrderByWithRelationInput | GeneralPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralPosts.
     */
    cursor?: GeneralPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralPosts.
     */
    distinct?: GeneralPostScalarFieldEnum | GeneralPostScalarFieldEnum[]
  }

  /**
   * GeneralPost findMany
   */
  export type GeneralPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostInclude<ExtArgs> | null
    /**
     * Filter, which GeneralPosts to fetch.
     */
    where?: GeneralPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralPosts to fetch.
     */
    orderBy?: GeneralPostOrderByWithRelationInput | GeneralPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneralPosts.
     */
    cursor?: GeneralPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralPosts.
     */
    skip?: number
    distinct?: GeneralPostScalarFieldEnum | GeneralPostScalarFieldEnum[]
  }

  /**
   * GeneralPost create
   */
  export type GeneralPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneralPost.
     */
    data: XOR<GeneralPostCreateInput, GeneralPostUncheckedCreateInput>
  }

  /**
   * GeneralPost createMany
   */
  export type GeneralPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneralPosts.
     */
    data: GeneralPostCreateManyInput | GeneralPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneralPost createManyAndReturn
   */
  export type GeneralPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * The data used to create many GeneralPosts.
     */
    data: GeneralPostCreateManyInput | GeneralPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneralPost update
   */
  export type GeneralPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneralPost.
     */
    data: XOR<GeneralPostUpdateInput, GeneralPostUncheckedUpdateInput>
    /**
     * Choose, which GeneralPost to update.
     */
    where: GeneralPostWhereUniqueInput
  }

  /**
   * GeneralPost updateMany
   */
  export type GeneralPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneralPosts.
     */
    data: XOR<GeneralPostUpdateManyMutationInput, GeneralPostUncheckedUpdateManyInput>
    /**
     * Filter which GeneralPosts to update
     */
    where?: GeneralPostWhereInput
    /**
     * Limit how many GeneralPosts to update.
     */
    limit?: number
  }

  /**
   * GeneralPost updateManyAndReturn
   */
  export type GeneralPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * The data used to update GeneralPosts.
     */
    data: XOR<GeneralPostUpdateManyMutationInput, GeneralPostUncheckedUpdateManyInput>
    /**
     * Filter which GeneralPosts to update
     */
    where?: GeneralPostWhereInput
    /**
     * Limit how many GeneralPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneralPost upsert
   */
  export type GeneralPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneralPost to update in case it exists.
     */
    where: GeneralPostWhereUniqueInput
    /**
     * In case the GeneralPost found by the `where` argument doesn't exist, create a new GeneralPost with this data.
     */
    create: XOR<GeneralPostCreateInput, GeneralPostUncheckedCreateInput>
    /**
     * In case the GeneralPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneralPostUpdateInput, GeneralPostUncheckedUpdateInput>
  }

  /**
   * GeneralPost delete
   */
  export type GeneralPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostInclude<ExtArgs> | null
    /**
     * Filter which GeneralPost to delete.
     */
    where: GeneralPostWhereUniqueInput
  }

  /**
   * GeneralPost deleteMany
   */
  export type GeneralPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralPosts to delete
     */
    where?: GeneralPostWhereInput
    /**
     * Limit how many GeneralPosts to delete.
     */
    limit?: number
  }

  /**
   * GeneralPost without action
   */
  export type GeneralPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralPost
     */
    select?: GeneralPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralPost
     */
    omit?: GeneralPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralPostInclude<ExtArgs> | null
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
    enabled: 'enabled',
    mainCategoryId: 'mainCategoryId'
  };

  export type ForumSubCategoryScalarFieldEnum = (typeof ForumSubCategoryScalarFieldEnum)[keyof typeof ForumSubCategoryScalarFieldEnum]


  export const QuotePostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId',
    name: 'name',
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
    rejectionReason: 'rejectionReason',
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
    postMainCategory: 'postMainCategory',
    postSubCategory: 'postSubCategory',
    shipmentType: 'shipmentType'
  };

  export type QuotePostScalarFieldEnum = (typeof QuotePostScalarFieldEnum)[keyof typeof QuotePostScalarFieldEnum]


  export const QuoteReplyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    parentReplyId: 'parentReplyId',
    description: 'description',
    createdAt: 'createdAt',
    status: 'status',
    rejectionReason: 'rejectionReason'
  };

  export type QuoteReplyScalarFieldEnum = (typeof QuoteReplyScalarFieldEnum)[keyof typeof QuoteReplyScalarFieldEnum]


  export const QuoteLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId'
  };

  export type QuoteLikeScalarFieldEnum = (typeof QuoteLikeScalarFieldEnum)[keyof typeof QuoteLikeScalarFieldEnum]


  export const GeneralPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    viewCount: 'viewCount',
    likesCount: 'likesCount',
    commentsCount: 'commentsCount',
    status: 'status',
    rejectionReason: 'rejectionReason',
    generalPostMainCategory: 'generalPostMainCategory',
    generalPostSubCategory: 'generalPostSubCategory'
  };

  export type GeneralPostScalarFieldEnum = (typeof GeneralPostScalarFieldEnum)[keyof typeof GeneralPostScalarFieldEnum]


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
    generalPost?: GeneralPostListRelationFilter
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
    generalPost?: GeneralPostOrderByRelationAggregateInput
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
    generalPost?: GeneralPostListRelationFilter
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
    subCategory?: ForumSubCategoryListRelationFilter
  }

  export type ForumMainCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    subCategory?: ForumSubCategoryOrderByRelationAggregateInput
  }

  export type ForumMainCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForumMainCategoryWhereInput | ForumMainCategoryWhereInput[]
    OR?: ForumMainCategoryWhereInput[]
    NOT?: ForumMainCategoryWhereInput | ForumMainCategoryWhereInput[]
    name?: StringNullableFilter<"ForumMainCategory"> | string | null
    enabled?: BoolNullableFilter<"ForumMainCategory"> | boolean | null
    subCategory?: ForumSubCategoryListRelationFilter
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
    mainCategoryId?: StringFilter<"ForumSubCategory"> | string
    mainCategory?: XOR<ForumMainCategoryScalarRelationFilter, ForumMainCategoryWhereInput>
  }

  export type ForumSubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    mainCategoryId?: SortOrder
    mainCategory?: ForumMainCategoryOrderByWithRelationInput
  }

  export type ForumSubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForumSubCategoryWhereInput | ForumSubCategoryWhereInput[]
    OR?: ForumSubCategoryWhereInput[]
    NOT?: ForumSubCategoryWhereInput | ForumSubCategoryWhereInput[]
    name?: StringNullableFilter<"ForumSubCategory"> | string | null
    enabled?: BoolNullableFilter<"ForumSubCategory"> | boolean | null
    mainCategoryId?: StringFilter<"ForumSubCategory"> | string
    mainCategory?: XOR<ForumMainCategoryScalarRelationFilter, ForumMainCategoryWhereInput>
  }, "id">

  export type ForumSubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    mainCategoryId?: SortOrder
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
    mainCategoryId?: StringWithAggregatesFilter<"ForumSubCategory"> | string
  }

  export type QuotePostWhereInput = {
    AND?: QuotePostWhereInput | QuotePostWhereInput[]
    OR?: QuotePostWhereInput[]
    NOT?: QuotePostWhereInput | QuotePostWhereInput[]
    id?: StringFilter<"QuotePost"> | string
    title?: StringNullableFilter<"QuotePost"> | string | null
    description?: StringNullableFilter<"QuotePost"> | string | null
    userId?: StringFilter<"QuotePost"> | string
    name?: StringNullableFilter<"QuotePost"> | string | null
    categoryId?: StringNullableFilter<"QuotePost"> | string | null
    createdAt?: DateTimeNullableFilter<"QuotePost"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"QuotePost"> | Date | string | null
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
    rejectionReason?: StringNullableFilter<"QuotePost"> | string | null
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
    postMainCategory?: StringNullableFilter<"QuotePost"> | string | null
    postSubCategory?: StringNullableFilter<"QuotePost"> | string | null
    shipmentType?: StringNullableFilter<"QuotePost"> | string | null
    quoteReply?: QuoteReplyListRelationFilter
    quoteLike?: QuoteLikeListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type QuotePostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
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
    rejectionReason?: SortOrderInput | SortOrder
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
    postMainCategory?: SortOrderInput | SortOrder
    postSubCategory?: SortOrderInput | SortOrder
    shipmentType?: SortOrderInput | SortOrder
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
    userId?: StringFilter<"QuotePost"> | string
    name?: StringNullableFilter<"QuotePost"> | string | null
    categoryId?: StringNullableFilter<"QuotePost"> | string | null
    createdAt?: DateTimeNullableFilter<"QuotePost"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"QuotePost"> | Date | string | null
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
    rejectionReason?: StringNullableFilter<"QuotePost"> | string | null
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
    postMainCategory?: StringNullableFilter<"QuotePost"> | string | null
    postSubCategory?: StringNullableFilter<"QuotePost"> | string | null
    shipmentType?: StringNullableFilter<"QuotePost"> | string | null
    quoteReply?: QuoteReplyListRelationFilter
    quoteLike?: QuoteLikeListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type QuotePostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
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
    rejectionReason?: SortOrderInput | SortOrder
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
    postMainCategory?: SortOrderInput | SortOrder
    postSubCategory?: SortOrderInput | SortOrder
    shipmentType?: SortOrderInput | SortOrder
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
    userId?: StringWithAggregatesFilter<"QuotePost"> | string
    name?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"QuotePost"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"QuotePost"> | Date | string | null
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
    rejectionReason?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
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
    postMainCategory?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    postSubCategory?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
    shipmentType?: StringNullableWithAggregatesFilter<"QuotePost"> | string | null
  }

  export type QuoteReplyWhereInput = {
    AND?: QuoteReplyWhereInput | QuoteReplyWhereInput[]
    OR?: QuoteReplyWhereInput[]
    NOT?: QuoteReplyWhereInput | QuoteReplyWhereInput[]
    id?: StringFilter<"QuoteReply"> | string
    userId?: StringFilter<"QuoteReply"> | string
    postId?: StringFilter<"QuoteReply"> | string
    parentReplyId?: StringNullableFilter<"QuoteReply"> | string | null
    description?: StringNullableFilter<"QuoteReply"> | string | null
    createdAt?: DateTimeFilter<"QuoteReply"> | Date | string
    status?: StringNullableFilter<"QuoteReply"> | string | null
    rejectionReason?: StringNullableFilter<"QuoteReply"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<QuotePostScalarRelationFilter, QuotePostWhereInput>
  }

  export type QuoteReplyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentReplyId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    status?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
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
    parentReplyId?: StringNullableFilter<"QuoteReply"> | string | null
    description?: StringNullableFilter<"QuoteReply"> | string | null
    createdAt?: DateTimeFilter<"QuoteReply"> | Date | string
    status?: StringNullableFilter<"QuoteReply"> | string | null
    rejectionReason?: StringNullableFilter<"QuoteReply"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<QuotePostScalarRelationFilter, QuotePostWhereInput>
  }, "id">

  export type QuoteReplyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentReplyId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    status?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
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
    parentReplyId?: StringNullableWithAggregatesFilter<"QuoteReply"> | string | null
    description?: StringNullableWithAggregatesFilter<"QuoteReply"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuoteReply"> | Date | string
    status?: StringNullableWithAggregatesFilter<"QuoteReply"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"QuoteReply"> | string | null
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

  export type GeneralPostWhereInput = {
    AND?: GeneralPostWhereInput | GeneralPostWhereInput[]
    OR?: GeneralPostWhereInput[]
    NOT?: GeneralPostWhereInput | GeneralPostWhereInput[]
    id?: StringFilter<"GeneralPost"> | string
    title?: StringNullableFilter<"GeneralPost"> | string | null
    description?: StringNullableFilter<"GeneralPost"> | string | null
    userId?: StringFilter<"GeneralPost"> | string
    createdAt?: DateTimeFilter<"GeneralPost"> | Date | string
    updatedAt?: DateTimeFilter<"GeneralPost"> | Date | string
    viewCount?: IntNullableFilter<"GeneralPost"> | number | null
    likesCount?: IntNullableFilter<"GeneralPost"> | number | null
    commentsCount?: IntNullableFilter<"GeneralPost"> | number | null
    status?: StringNullableFilter<"GeneralPost"> | string | null
    rejectionReason?: StringNullableFilter<"GeneralPost"> | string | null
    generalPostMainCategory?: StringNullableFilter<"GeneralPost"> | string | null
    generalPostSubCategory?: StringNullableFilter<"GeneralPost"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GeneralPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    viewCount?: SortOrderInput | SortOrder
    likesCount?: SortOrderInput | SortOrder
    commentsCount?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    generalPostMainCategory?: SortOrderInput | SortOrder
    generalPostSubCategory?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GeneralPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeneralPostWhereInput | GeneralPostWhereInput[]
    OR?: GeneralPostWhereInput[]
    NOT?: GeneralPostWhereInput | GeneralPostWhereInput[]
    title?: StringNullableFilter<"GeneralPost"> | string | null
    description?: StringNullableFilter<"GeneralPost"> | string | null
    userId?: StringFilter<"GeneralPost"> | string
    createdAt?: DateTimeFilter<"GeneralPost"> | Date | string
    updatedAt?: DateTimeFilter<"GeneralPost"> | Date | string
    viewCount?: IntNullableFilter<"GeneralPost"> | number | null
    likesCount?: IntNullableFilter<"GeneralPost"> | number | null
    commentsCount?: IntNullableFilter<"GeneralPost"> | number | null
    status?: StringNullableFilter<"GeneralPost"> | string | null
    rejectionReason?: StringNullableFilter<"GeneralPost"> | string | null
    generalPostMainCategory?: StringNullableFilter<"GeneralPost"> | string | null
    generalPostSubCategory?: StringNullableFilter<"GeneralPost"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GeneralPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    viewCount?: SortOrderInput | SortOrder
    likesCount?: SortOrderInput | SortOrder
    commentsCount?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    generalPostMainCategory?: SortOrderInput | SortOrder
    generalPostSubCategory?: SortOrderInput | SortOrder
    _count?: GeneralPostCountOrderByAggregateInput
    _avg?: GeneralPostAvgOrderByAggregateInput
    _max?: GeneralPostMaxOrderByAggregateInput
    _min?: GeneralPostMinOrderByAggregateInput
    _sum?: GeneralPostSumOrderByAggregateInput
  }

  export type GeneralPostScalarWhereWithAggregatesInput = {
    AND?: GeneralPostScalarWhereWithAggregatesInput | GeneralPostScalarWhereWithAggregatesInput[]
    OR?: GeneralPostScalarWhereWithAggregatesInput[]
    NOT?: GeneralPostScalarWhereWithAggregatesInput | GeneralPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneralPost"> | string
    title?: StringNullableWithAggregatesFilter<"GeneralPost"> | string | null
    description?: StringNullableWithAggregatesFilter<"GeneralPost"> | string | null
    userId?: StringWithAggregatesFilter<"GeneralPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GeneralPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GeneralPost"> | Date | string
    viewCount?: IntNullableWithAggregatesFilter<"GeneralPost"> | number | null
    likesCount?: IntNullableWithAggregatesFilter<"GeneralPost"> | number | null
    commentsCount?: IntNullableWithAggregatesFilter<"GeneralPost"> | number | null
    status?: StringNullableWithAggregatesFilter<"GeneralPost"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"GeneralPost"> | string | null
    generalPostMainCategory?: StringNullableWithAggregatesFilter<"GeneralPost"> | string | null
    generalPostSubCategory?: StringNullableWithAggregatesFilter<"GeneralPost"> | string | null
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
    generalPost?: GeneralPostCreateNestedManyWithoutUserInput
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
    generalPost?: GeneralPostUncheckedCreateNestedManyWithoutUserInput
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
    generalPost?: GeneralPostUpdateManyWithoutUserNestedInput
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
    generalPost?: GeneralPostUncheckedUpdateManyWithoutUserNestedInput
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
    subCategory?: ForumSubCategoryCreateNestedManyWithoutMainCategoryInput
  }

  export type ForumMainCategoryUncheckedCreateInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
    subCategory?: ForumSubCategoryUncheckedCreateNestedManyWithoutMainCategoryInput
  }

  export type ForumMainCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subCategory?: ForumSubCategoryUpdateManyWithoutMainCategoryNestedInput
  }

  export type ForumMainCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subCategory?: ForumSubCategoryUncheckedUpdateManyWithoutMainCategoryNestedInput
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
    mainCategory: ForumMainCategoryCreateNestedOneWithoutSubCategoryInput
  }

  export type ForumSubCategoryUncheckedCreateInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
    mainCategoryId: string
  }

  export type ForumSubCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mainCategory?: ForumMainCategoryUpdateOneRequiredWithoutSubCategoryNestedInput
  }

  export type ForumSubCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mainCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ForumSubCategoryCreateManyInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
    mainCategoryId: string
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
    mainCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type QuotePostCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    name?: string | null
    categoryId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
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
    rejectionReason?: string | null
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
    postMainCategory?: string | null
    postSubCategory?: string | null
    shipmentType?: string | null
    quoteReply?: QuoteReplyCreateNestedManyWithoutPostInput
    quoteLike?: QuoteLikeCreateNestedManyWithoutPostInput
    user?: UserCreateNestedOneWithoutQuotePostInput
  }

  export type QuotePostUncheckedCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId: string
    name?: string | null
    categoryId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
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
    rejectionReason?: string | null
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
    postMainCategory?: string | null
    postSubCategory?: string | null
    shipmentType?: string | null
    quoteReply?: QuoteReplyUncheckedCreateNestedManyWithoutPostInput
    quoteLike?: QuoteLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type QuotePostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    postMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    postSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUpdateManyWithoutPostNestedInput
    quoteLike?: QuoteLikeUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneWithoutQuotePostNestedInput
  }

  export type QuotePostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    postMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    postSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUncheckedUpdateManyWithoutPostNestedInput
    quoteLike?: QuoteLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type QuotePostCreateManyInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId: string
    name?: string | null
    categoryId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
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
    rejectionReason?: string | null
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
    postMainCategory?: string | null
    postSubCategory?: string | null
    shipmentType?: string | null
  }

  export type QuotePostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    postMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    postSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuotePostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    postMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    postSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteReplyCreateInput = {
    id?: string
    parentReplyId?: string | null
    description?: string | null
    createdAt?: Date | string
    status?: string | null
    rejectionReason?: string | null
    user: UserCreateNestedOneWithoutQuoteReplyInput
    post: QuotePostCreateNestedOneWithoutQuoteReplyInput
  }

  export type QuoteReplyUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
    parentReplyId?: string | null
    description?: string | null
    createdAt?: Date | string
    status?: string | null
    rejectionReason?: string | null
  }

  export type QuoteReplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutQuoteReplyNestedInput
    post?: QuotePostUpdateOneRequiredWithoutQuoteReplyNestedInput
  }

  export type QuoteReplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteReplyCreateManyInput = {
    id?: string
    userId: string
    postId: string
    parentReplyId?: string | null
    description?: string | null
    createdAt?: Date | string
    status?: string | null
    rejectionReason?: string | null
  }

  export type QuoteReplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteReplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type GeneralPostCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    status?: string | null
    rejectionReason?: string | null
    generalPostMainCategory?: string | null
    generalPostSubCategory?: string | null
    user: UserCreateNestedOneWithoutGeneralPostInput
  }

  export type GeneralPostUncheckedCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    status?: string | null
    rejectionReason?: string | null
    generalPostMainCategory?: string | null
    generalPostSubCategory?: string | null
  }

  export type GeneralPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGeneralPostNestedInput
  }

  export type GeneralPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneralPostCreateManyInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    status?: string | null
    rejectionReason?: string | null
    generalPostMainCategory?: string | null
    generalPostSubCategory?: string | null
  }

  export type GeneralPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneralPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type GeneralPostListRelationFilter = {
    every?: GeneralPostWhereInput
    some?: GeneralPostWhereInput
    none?: GeneralPostWhereInput
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

  export type GeneralPostOrderByRelationAggregateInput = {
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

  export type ForumSubCategoryListRelationFilter = {
    every?: ForumSubCategoryWhereInput
    some?: ForumSubCategoryWhereInput
    none?: ForumSubCategoryWhereInput
  }

  export type ForumSubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type ForumMainCategoryScalarRelationFilter = {
    is?: ForumMainCategoryWhereInput
    isNot?: ForumMainCategoryWhereInput
  }

  export type ForumSubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    mainCategoryId?: SortOrder
  }

  export type ForumSubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    mainCategoryId?: SortOrder
  }

  export type ForumSubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    mainCategoryId?: SortOrder
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
    name?: SortOrder
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
    rejectionReason?: SortOrder
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
    postMainCategory?: SortOrder
    postSubCategory?: SortOrder
    shipmentType?: SortOrder
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
    name?: SortOrder
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
    rejectionReason?: SortOrder
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
    postMainCategory?: SortOrder
    postSubCategory?: SortOrder
    shipmentType?: SortOrder
  }

  export type QuotePostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    name?: SortOrder
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
    rejectionReason?: SortOrder
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
    postMainCategory?: SortOrder
    postSubCategory?: SortOrder
    shipmentType?: SortOrder
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
    description?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
  }

  export type QuoteReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentReplyId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
  }

  export type QuoteReplyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    parentReplyId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
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

  export type GeneralPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    viewCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    generalPostMainCategory?: SortOrder
    generalPostSubCategory?: SortOrder
  }

  export type GeneralPostAvgOrderByAggregateInput = {
    viewCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
  }

  export type GeneralPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    viewCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    generalPostMainCategory?: SortOrder
    generalPostSubCategory?: SortOrder
  }

  export type GeneralPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    viewCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    generalPostMainCategory?: SortOrder
    generalPostSubCategory?: SortOrder
  }

  export type GeneralPostSumOrderByAggregateInput = {
    viewCount?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
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

  export type GeneralPostCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneralPostCreateWithoutUserInput, GeneralPostUncheckedCreateWithoutUserInput> | GeneralPostCreateWithoutUserInput[] | GeneralPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneralPostCreateOrConnectWithoutUserInput | GeneralPostCreateOrConnectWithoutUserInput[]
    createMany?: GeneralPostCreateManyUserInputEnvelope
    connect?: GeneralPostWhereUniqueInput | GeneralPostWhereUniqueInput[]
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

  export type GeneralPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneralPostCreateWithoutUserInput, GeneralPostUncheckedCreateWithoutUserInput> | GeneralPostCreateWithoutUserInput[] | GeneralPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneralPostCreateOrConnectWithoutUserInput | GeneralPostCreateOrConnectWithoutUserInput[]
    createMany?: GeneralPostCreateManyUserInputEnvelope
    connect?: GeneralPostWhereUniqueInput | GeneralPostWhereUniqueInput[]
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

  export type GeneralPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneralPostCreateWithoutUserInput, GeneralPostUncheckedCreateWithoutUserInput> | GeneralPostCreateWithoutUserInput[] | GeneralPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneralPostCreateOrConnectWithoutUserInput | GeneralPostCreateOrConnectWithoutUserInput[]
    upsert?: GeneralPostUpsertWithWhereUniqueWithoutUserInput | GeneralPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneralPostCreateManyUserInputEnvelope
    set?: GeneralPostWhereUniqueInput | GeneralPostWhereUniqueInput[]
    disconnect?: GeneralPostWhereUniqueInput | GeneralPostWhereUniqueInput[]
    delete?: GeneralPostWhereUniqueInput | GeneralPostWhereUniqueInput[]
    connect?: GeneralPostWhereUniqueInput | GeneralPostWhereUniqueInput[]
    update?: GeneralPostUpdateWithWhereUniqueWithoutUserInput | GeneralPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneralPostUpdateManyWithWhereWithoutUserInput | GeneralPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneralPostScalarWhereInput | GeneralPostScalarWhereInput[]
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

  export type GeneralPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneralPostCreateWithoutUserInput, GeneralPostUncheckedCreateWithoutUserInput> | GeneralPostCreateWithoutUserInput[] | GeneralPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneralPostCreateOrConnectWithoutUserInput | GeneralPostCreateOrConnectWithoutUserInput[]
    upsert?: GeneralPostUpsertWithWhereUniqueWithoutUserInput | GeneralPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneralPostCreateManyUserInputEnvelope
    set?: GeneralPostWhereUniqueInput | GeneralPostWhereUniqueInput[]
    disconnect?: GeneralPostWhereUniqueInput | GeneralPostWhereUniqueInput[]
    delete?: GeneralPostWhereUniqueInput | GeneralPostWhereUniqueInput[]
    connect?: GeneralPostWhereUniqueInput | GeneralPostWhereUniqueInput[]
    update?: GeneralPostUpdateWithWhereUniqueWithoutUserInput | GeneralPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneralPostUpdateManyWithWhereWithoutUserInput | GeneralPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneralPostScalarWhereInput | GeneralPostScalarWhereInput[]
  }

  export type ForumSubCategoryCreateNestedManyWithoutMainCategoryInput = {
    create?: XOR<ForumSubCategoryCreateWithoutMainCategoryInput, ForumSubCategoryUncheckedCreateWithoutMainCategoryInput> | ForumSubCategoryCreateWithoutMainCategoryInput[] | ForumSubCategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: ForumSubCategoryCreateOrConnectWithoutMainCategoryInput | ForumSubCategoryCreateOrConnectWithoutMainCategoryInput[]
    createMany?: ForumSubCategoryCreateManyMainCategoryInputEnvelope
    connect?: ForumSubCategoryWhereUniqueInput | ForumSubCategoryWhereUniqueInput[]
  }

  export type ForumSubCategoryUncheckedCreateNestedManyWithoutMainCategoryInput = {
    create?: XOR<ForumSubCategoryCreateWithoutMainCategoryInput, ForumSubCategoryUncheckedCreateWithoutMainCategoryInput> | ForumSubCategoryCreateWithoutMainCategoryInput[] | ForumSubCategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: ForumSubCategoryCreateOrConnectWithoutMainCategoryInput | ForumSubCategoryCreateOrConnectWithoutMainCategoryInput[]
    createMany?: ForumSubCategoryCreateManyMainCategoryInputEnvelope
    connect?: ForumSubCategoryWhereUniqueInput | ForumSubCategoryWhereUniqueInput[]
  }

  export type ForumSubCategoryUpdateManyWithoutMainCategoryNestedInput = {
    create?: XOR<ForumSubCategoryCreateWithoutMainCategoryInput, ForumSubCategoryUncheckedCreateWithoutMainCategoryInput> | ForumSubCategoryCreateWithoutMainCategoryInput[] | ForumSubCategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: ForumSubCategoryCreateOrConnectWithoutMainCategoryInput | ForumSubCategoryCreateOrConnectWithoutMainCategoryInput[]
    upsert?: ForumSubCategoryUpsertWithWhereUniqueWithoutMainCategoryInput | ForumSubCategoryUpsertWithWhereUniqueWithoutMainCategoryInput[]
    createMany?: ForumSubCategoryCreateManyMainCategoryInputEnvelope
    set?: ForumSubCategoryWhereUniqueInput | ForumSubCategoryWhereUniqueInput[]
    disconnect?: ForumSubCategoryWhereUniqueInput | ForumSubCategoryWhereUniqueInput[]
    delete?: ForumSubCategoryWhereUniqueInput | ForumSubCategoryWhereUniqueInput[]
    connect?: ForumSubCategoryWhereUniqueInput | ForumSubCategoryWhereUniqueInput[]
    update?: ForumSubCategoryUpdateWithWhereUniqueWithoutMainCategoryInput | ForumSubCategoryUpdateWithWhereUniqueWithoutMainCategoryInput[]
    updateMany?: ForumSubCategoryUpdateManyWithWhereWithoutMainCategoryInput | ForumSubCategoryUpdateManyWithWhereWithoutMainCategoryInput[]
    deleteMany?: ForumSubCategoryScalarWhereInput | ForumSubCategoryScalarWhereInput[]
  }

  export type ForumSubCategoryUncheckedUpdateManyWithoutMainCategoryNestedInput = {
    create?: XOR<ForumSubCategoryCreateWithoutMainCategoryInput, ForumSubCategoryUncheckedCreateWithoutMainCategoryInput> | ForumSubCategoryCreateWithoutMainCategoryInput[] | ForumSubCategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: ForumSubCategoryCreateOrConnectWithoutMainCategoryInput | ForumSubCategoryCreateOrConnectWithoutMainCategoryInput[]
    upsert?: ForumSubCategoryUpsertWithWhereUniqueWithoutMainCategoryInput | ForumSubCategoryUpsertWithWhereUniqueWithoutMainCategoryInput[]
    createMany?: ForumSubCategoryCreateManyMainCategoryInputEnvelope
    set?: ForumSubCategoryWhereUniqueInput | ForumSubCategoryWhereUniqueInput[]
    disconnect?: ForumSubCategoryWhereUniqueInput | ForumSubCategoryWhereUniqueInput[]
    delete?: ForumSubCategoryWhereUniqueInput | ForumSubCategoryWhereUniqueInput[]
    connect?: ForumSubCategoryWhereUniqueInput | ForumSubCategoryWhereUniqueInput[]
    update?: ForumSubCategoryUpdateWithWhereUniqueWithoutMainCategoryInput | ForumSubCategoryUpdateWithWhereUniqueWithoutMainCategoryInput[]
    updateMany?: ForumSubCategoryUpdateManyWithWhereWithoutMainCategoryInput | ForumSubCategoryUpdateManyWithWhereWithoutMainCategoryInput[]
    deleteMany?: ForumSubCategoryScalarWhereInput | ForumSubCategoryScalarWhereInput[]
  }

  export type ForumMainCategoryCreateNestedOneWithoutSubCategoryInput = {
    create?: XOR<ForumMainCategoryCreateWithoutSubCategoryInput, ForumMainCategoryUncheckedCreateWithoutSubCategoryInput>
    connectOrCreate?: ForumMainCategoryCreateOrConnectWithoutSubCategoryInput
    connect?: ForumMainCategoryWhereUniqueInput
  }

  export type ForumMainCategoryUpdateOneRequiredWithoutSubCategoryNestedInput = {
    create?: XOR<ForumMainCategoryCreateWithoutSubCategoryInput, ForumMainCategoryUncheckedCreateWithoutSubCategoryInput>
    connectOrCreate?: ForumMainCategoryCreateOrConnectWithoutSubCategoryInput
    upsert?: ForumMainCategoryUpsertWithoutSubCategoryInput
    connect?: ForumMainCategoryWhereUniqueInput
    update?: XOR<XOR<ForumMainCategoryUpdateToOneWithWhereWithoutSubCategoryInput, ForumMainCategoryUpdateWithoutSubCategoryInput>, ForumMainCategoryUncheckedUpdateWithoutSubCategoryInput>
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

  export type UserCreateNestedOneWithoutGeneralPostInput = {
    create?: XOR<UserCreateWithoutGeneralPostInput, UserUncheckedCreateWithoutGeneralPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneralPostInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGeneralPostNestedInput = {
    create?: XOR<UserCreateWithoutGeneralPostInput, UserUncheckedCreateWithoutGeneralPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneralPostInput
    upsert?: UserUpsertWithoutGeneralPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGeneralPostInput, UserUpdateWithoutGeneralPostInput>, UserUncheckedUpdateWithoutGeneralPostInput>
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

  export type QuotePostCreateWithoutUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    name?: string | null
    categoryId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
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
    rejectionReason?: string | null
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
    postMainCategory?: string | null
    postSubCategory?: string | null
    shipmentType?: string | null
    quoteReply?: QuoteReplyCreateNestedManyWithoutPostInput
    quoteLike?: QuoteLikeCreateNestedManyWithoutPostInput
  }

  export type QuotePostUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    name?: string | null
    categoryId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
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
    rejectionReason?: string | null
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
    postMainCategory?: string | null
    postSubCategory?: string | null
    shipmentType?: string | null
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
    parentReplyId?: string | null
    description?: string | null
    createdAt?: Date | string
    status?: string | null
    rejectionReason?: string | null
    post: QuotePostCreateNestedOneWithoutQuoteReplyInput
  }

  export type QuoteReplyUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    parentReplyId?: string | null
    description?: string | null
    createdAt?: Date | string
    status?: string | null
    rejectionReason?: string | null
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

  export type GeneralPostCreateWithoutUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    status?: string | null
    rejectionReason?: string | null
    generalPostMainCategory?: string | null
    generalPostSubCategory?: string | null
  }

  export type GeneralPostUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    status?: string | null
    rejectionReason?: string | null
    generalPostMainCategory?: string | null
    generalPostSubCategory?: string | null
  }

  export type GeneralPostCreateOrConnectWithoutUserInput = {
    where: GeneralPostWhereUniqueInput
    create: XOR<GeneralPostCreateWithoutUserInput, GeneralPostUncheckedCreateWithoutUserInput>
  }

  export type GeneralPostCreateManyUserInputEnvelope = {
    data: GeneralPostCreateManyUserInput | GeneralPostCreateManyUserInput[]
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
    userId?: StringFilter<"QuotePost"> | string
    name?: StringNullableFilter<"QuotePost"> | string | null
    categoryId?: StringNullableFilter<"QuotePost"> | string | null
    createdAt?: DateTimeNullableFilter<"QuotePost"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"QuotePost"> | Date | string | null
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
    rejectionReason?: StringNullableFilter<"QuotePost"> | string | null
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
    postMainCategory?: StringNullableFilter<"QuotePost"> | string | null
    postSubCategory?: StringNullableFilter<"QuotePost"> | string | null
    shipmentType?: StringNullableFilter<"QuotePost"> | string | null
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
    parentReplyId?: StringNullableFilter<"QuoteReply"> | string | null
    description?: StringNullableFilter<"QuoteReply"> | string | null
    createdAt?: DateTimeFilter<"QuoteReply"> | Date | string
    status?: StringNullableFilter<"QuoteReply"> | string | null
    rejectionReason?: StringNullableFilter<"QuoteReply"> | string | null
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

  export type GeneralPostUpsertWithWhereUniqueWithoutUserInput = {
    where: GeneralPostWhereUniqueInput
    update: XOR<GeneralPostUpdateWithoutUserInput, GeneralPostUncheckedUpdateWithoutUserInput>
    create: XOR<GeneralPostCreateWithoutUserInput, GeneralPostUncheckedCreateWithoutUserInput>
  }

  export type GeneralPostUpdateWithWhereUniqueWithoutUserInput = {
    where: GeneralPostWhereUniqueInput
    data: XOR<GeneralPostUpdateWithoutUserInput, GeneralPostUncheckedUpdateWithoutUserInput>
  }

  export type GeneralPostUpdateManyWithWhereWithoutUserInput = {
    where: GeneralPostScalarWhereInput
    data: XOR<GeneralPostUpdateManyMutationInput, GeneralPostUncheckedUpdateManyWithoutUserInput>
  }

  export type GeneralPostScalarWhereInput = {
    AND?: GeneralPostScalarWhereInput | GeneralPostScalarWhereInput[]
    OR?: GeneralPostScalarWhereInput[]
    NOT?: GeneralPostScalarWhereInput | GeneralPostScalarWhereInput[]
    id?: StringFilter<"GeneralPost"> | string
    title?: StringNullableFilter<"GeneralPost"> | string | null
    description?: StringNullableFilter<"GeneralPost"> | string | null
    userId?: StringFilter<"GeneralPost"> | string
    createdAt?: DateTimeFilter<"GeneralPost"> | Date | string
    updatedAt?: DateTimeFilter<"GeneralPost"> | Date | string
    viewCount?: IntNullableFilter<"GeneralPost"> | number | null
    likesCount?: IntNullableFilter<"GeneralPost"> | number | null
    commentsCount?: IntNullableFilter<"GeneralPost"> | number | null
    status?: StringNullableFilter<"GeneralPost"> | string | null
    rejectionReason?: StringNullableFilter<"GeneralPost"> | string | null
    generalPostMainCategory?: StringNullableFilter<"GeneralPost"> | string | null
    generalPostSubCategory?: StringNullableFilter<"GeneralPost"> | string | null
  }

  export type ForumSubCategoryCreateWithoutMainCategoryInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
  }

  export type ForumSubCategoryUncheckedCreateWithoutMainCategoryInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
  }

  export type ForumSubCategoryCreateOrConnectWithoutMainCategoryInput = {
    where: ForumSubCategoryWhereUniqueInput
    create: XOR<ForumSubCategoryCreateWithoutMainCategoryInput, ForumSubCategoryUncheckedCreateWithoutMainCategoryInput>
  }

  export type ForumSubCategoryCreateManyMainCategoryInputEnvelope = {
    data: ForumSubCategoryCreateManyMainCategoryInput | ForumSubCategoryCreateManyMainCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ForumSubCategoryUpsertWithWhereUniqueWithoutMainCategoryInput = {
    where: ForumSubCategoryWhereUniqueInput
    update: XOR<ForumSubCategoryUpdateWithoutMainCategoryInput, ForumSubCategoryUncheckedUpdateWithoutMainCategoryInput>
    create: XOR<ForumSubCategoryCreateWithoutMainCategoryInput, ForumSubCategoryUncheckedCreateWithoutMainCategoryInput>
  }

  export type ForumSubCategoryUpdateWithWhereUniqueWithoutMainCategoryInput = {
    where: ForumSubCategoryWhereUniqueInput
    data: XOR<ForumSubCategoryUpdateWithoutMainCategoryInput, ForumSubCategoryUncheckedUpdateWithoutMainCategoryInput>
  }

  export type ForumSubCategoryUpdateManyWithWhereWithoutMainCategoryInput = {
    where: ForumSubCategoryScalarWhereInput
    data: XOR<ForumSubCategoryUpdateManyMutationInput, ForumSubCategoryUncheckedUpdateManyWithoutMainCategoryInput>
  }

  export type ForumSubCategoryScalarWhereInput = {
    AND?: ForumSubCategoryScalarWhereInput | ForumSubCategoryScalarWhereInput[]
    OR?: ForumSubCategoryScalarWhereInput[]
    NOT?: ForumSubCategoryScalarWhereInput | ForumSubCategoryScalarWhereInput[]
    id?: StringFilter<"ForumSubCategory"> | string
    name?: StringNullableFilter<"ForumSubCategory"> | string | null
    enabled?: BoolNullableFilter<"ForumSubCategory"> | boolean | null
    mainCategoryId?: StringFilter<"ForumSubCategory"> | string
  }

  export type ForumMainCategoryCreateWithoutSubCategoryInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
  }

  export type ForumMainCategoryUncheckedCreateWithoutSubCategoryInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
  }

  export type ForumMainCategoryCreateOrConnectWithoutSubCategoryInput = {
    where: ForumMainCategoryWhereUniqueInput
    create: XOR<ForumMainCategoryCreateWithoutSubCategoryInput, ForumMainCategoryUncheckedCreateWithoutSubCategoryInput>
  }

  export type ForumMainCategoryUpsertWithoutSubCategoryInput = {
    update: XOR<ForumMainCategoryUpdateWithoutSubCategoryInput, ForumMainCategoryUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<ForumMainCategoryCreateWithoutSubCategoryInput, ForumMainCategoryUncheckedCreateWithoutSubCategoryInput>
    where?: ForumMainCategoryWhereInput
  }

  export type ForumMainCategoryUpdateToOneWithWhereWithoutSubCategoryInput = {
    where?: ForumMainCategoryWhereInput
    data: XOR<ForumMainCategoryUpdateWithoutSubCategoryInput, ForumMainCategoryUncheckedUpdateWithoutSubCategoryInput>
  }

  export type ForumMainCategoryUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ForumMainCategoryUncheckedUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuoteReplyCreateWithoutPostInput = {
    id?: string
    parentReplyId?: string | null
    description?: string | null
    createdAt?: Date | string
    status?: string | null
    rejectionReason?: string | null
    user: UserCreateNestedOneWithoutQuoteReplyInput
  }

  export type QuoteReplyUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    parentReplyId?: string | null
    description?: string | null
    createdAt?: Date | string
    status?: string | null
    rejectionReason?: string | null
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
    generalPost?: GeneralPostCreateNestedManyWithoutUserInput
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
    generalPost?: GeneralPostUncheckedCreateNestedManyWithoutUserInput
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
    generalPost?: GeneralPostUpdateManyWithoutUserNestedInput
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
    generalPost?: GeneralPostUncheckedUpdateManyWithoutUserNestedInput
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
    generalPost?: GeneralPostCreateNestedManyWithoutUserInput
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
    generalPost?: GeneralPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuoteReplyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuoteReplyInput, UserUncheckedCreateWithoutQuoteReplyInput>
  }

  export type QuotePostCreateWithoutQuoteReplyInput = {
    id?: string
    title?: string | null
    description?: string | null
    name?: string | null
    categoryId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
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
    rejectionReason?: string | null
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
    postMainCategory?: string | null
    postSubCategory?: string | null
    shipmentType?: string | null
    quoteLike?: QuoteLikeCreateNestedManyWithoutPostInput
    user?: UserCreateNestedOneWithoutQuotePostInput
  }

  export type QuotePostUncheckedCreateWithoutQuoteReplyInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId: string
    name?: string | null
    categoryId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
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
    rejectionReason?: string | null
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
    postMainCategory?: string | null
    postSubCategory?: string | null
    shipmentType?: string | null
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
    generalPost?: GeneralPostUpdateManyWithoutUserNestedInput
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
    generalPost?: GeneralPostUncheckedUpdateManyWithoutUserNestedInput
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    postMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    postSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    quoteLike?: QuoteLikeUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneWithoutQuotePostNestedInput
  }

  export type QuotePostUncheckedUpdateWithoutQuoteReplyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    postMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    postSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
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
    generalPost?: GeneralPostCreateNestedManyWithoutUserInput
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
    generalPost?: GeneralPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuoteLikeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuoteLikeInput, UserUncheckedCreateWithoutQuoteLikeInput>
  }

  export type QuotePostCreateWithoutQuoteLikeInput = {
    id?: string
    title?: string | null
    description?: string | null
    name?: string | null
    categoryId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
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
    rejectionReason?: string | null
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
    postMainCategory?: string | null
    postSubCategory?: string | null
    shipmentType?: string | null
    quoteReply?: QuoteReplyCreateNestedManyWithoutPostInput
    user?: UserCreateNestedOneWithoutQuotePostInput
  }

  export type QuotePostUncheckedCreateWithoutQuoteLikeInput = {
    id?: string
    title?: string | null
    description?: string | null
    userId: string
    name?: string | null
    categoryId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
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
    rejectionReason?: string | null
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
    postMainCategory?: string | null
    postSubCategory?: string | null
    shipmentType?: string | null
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
    generalPost?: GeneralPostUpdateManyWithoutUserNestedInput
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
    generalPost?: GeneralPostUncheckedUpdateManyWithoutUserNestedInput
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    postMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    postSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneWithoutQuotePostNestedInput
  }

  export type QuotePostUncheckedUpdateWithoutQuoteLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    postMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    postSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutGeneralPostInput = {
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

  export type UserUncheckedCreateWithoutGeneralPostInput = {
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

  export type UserCreateOrConnectWithoutGeneralPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGeneralPostInput, UserUncheckedCreateWithoutGeneralPostInput>
  }

  export type UserUpsertWithoutGeneralPostInput = {
    update: XOR<UserUpdateWithoutGeneralPostInput, UserUncheckedUpdateWithoutGeneralPostInput>
    create: XOR<UserCreateWithoutGeneralPostInput, UserUncheckedCreateWithoutGeneralPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGeneralPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGeneralPostInput, UserUncheckedUpdateWithoutGeneralPostInput>
  }

  export type UserUpdateWithoutGeneralPostInput = {
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

  export type UserUncheckedUpdateWithoutGeneralPostInput = {
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

  export type QuotePostCreateManyUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    name?: string | null
    categoryId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
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
    rejectionReason?: string | null
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
    postMainCategory?: string | null
    postSubCategory?: string | null
    shipmentType?: string | null
  }

  export type QuoteReplyCreateManyUserInput = {
    id?: string
    postId: string
    parentReplyId?: string | null
    description?: string | null
    createdAt?: Date | string
    status?: string | null
    rejectionReason?: string | null
  }

  export type QuoteLikeCreateManyUserInput = {
    id?: string
    postId: string
  }

  export type GeneralPostCreateManyUserInput = {
    id?: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    viewCount?: number | null
    likesCount?: number | null
    commentsCount?: number | null
    status?: string | null
    rejectionReason?: string | null
    generalPostMainCategory?: string | null
    generalPostSubCategory?: string | null
  }

  export type QuotePostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    postMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    postSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUpdateManyWithoutPostNestedInput
    quoteLike?: QuoteLikeUpdateManyWithoutPostNestedInput
  }

  export type QuotePostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    postMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    postSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
    quoteReply?: QuoteReplyUncheckedUpdateManyWithoutPostNestedInput
    quoteLike?: QuoteLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type QuotePostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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
    postMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    postSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteReplyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    post?: QuotePostUpdateOneRequiredWithoutQuoteReplyNestedInput
  }

  export type QuoteReplyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteReplyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type GeneralPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneralPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneralPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostMainCategory?: NullableStringFieldUpdateOperationsInput | string | null
    generalPostSubCategory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ForumSubCategoryCreateManyMainCategoryInput = {
    id?: string
    name?: string | null
    enabled?: boolean | null
  }

  export type ForumSubCategoryUpdateWithoutMainCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ForumSubCategoryUncheckedUpdateWithoutMainCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ForumSubCategoryUncheckedUpdateManyWithoutMainCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuoteReplyCreateManyPostInput = {
    id?: string
    userId: string
    parentReplyId?: string | null
    description?: string | null
    createdAt?: Date | string
    status?: string | null
    rejectionReason?: string | null
  }

  export type QuoteLikeCreateManyPostInput = {
    id?: string
    userId: string
  }

  export type QuoteReplyUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutQuoteReplyNestedInput
  }

  export type QuoteReplyUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteReplyUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
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