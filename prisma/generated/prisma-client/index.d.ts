
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
 * Model Reporters
 * 
 */
export type Reporters = $Result.DefaultSelection<Prisma.$ReportersPayload>
/**
 * Model Roade_issues
 * 
 */
export type Roade_issues = $Result.DefaultSelection<Prisma.$Roade_issuesPayload>
/**
 * Model Drainag_issues
 * 
 */
export type Drainag_issues = $Result.DefaultSelection<Prisma.$Drainag_issuesPayload>
/**
 * Model Electricity_issues
 * 
 */
export type Electricity_issues = $Result.DefaultSelection<Prisma.$Electricity_issuesPayload>
/**
 * Model Water_issues
 * 
 */
export type Water_issues = $Result.DefaultSelection<Prisma.$Water_issuesPayload>
/**
 * Model Health_issues
 * 
 */
export type Health_issues = $Result.DefaultSelection<Prisma.$Health_issuesPayload>

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
   * `prisma.reporters`: Exposes CRUD operations for the **Reporters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reporters
    * const reporters = await prisma.reporters.findMany()
    * ```
    */
  get reporters(): Prisma.ReportersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roade_issues`: Exposes CRUD operations for the **Roade_issues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roade_issues
    * const roade_issues = await prisma.roade_issues.findMany()
    * ```
    */
  get roade_issues(): Prisma.Roade_issuesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drainag_issues`: Exposes CRUD operations for the **Drainag_issues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drainag_issues
    * const drainag_issues = await prisma.drainag_issues.findMany()
    * ```
    */
  get drainag_issues(): Prisma.Drainag_issuesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.electricity_issues`: Exposes CRUD operations for the **Electricity_issues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Electricity_issues
    * const electricity_issues = await prisma.electricity_issues.findMany()
    * ```
    */
  get electricity_issues(): Prisma.Electricity_issuesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.water_issues`: Exposes CRUD operations for the **Water_issues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Water_issues
    * const water_issues = await prisma.water_issues.findMany()
    * ```
    */
  get water_issues(): Prisma.Water_issuesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.health_issues`: Exposes CRUD operations for the **Health_issues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Health_issues
    * const health_issues = await prisma.health_issues.findMany()
    * ```
    */
  get health_issues(): Prisma.Health_issuesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Reporters: 'Reporters',
    Roade_issues: 'Roade_issues',
    Drainag_issues: 'Drainag_issues',
    Electricity_issues: 'Electricity_issues',
    Water_issues: 'Water_issues',
    Health_issues: 'Health_issues'
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
      modelProps: "user" | "reporters" | "roade_issues" | "drainag_issues" | "electricity_issues" | "water_issues" | "health_issues"
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
      Reporters: {
        payload: Prisma.$ReportersPayload<ExtArgs>
        fields: Prisma.ReportersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportersPayload>
          }
          findFirst: {
            args: Prisma.ReportersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportersPayload>
          }
          findMany: {
            args: Prisma.ReportersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportersPayload>[]
          }
          create: {
            args: Prisma.ReportersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportersPayload>
          }
          createMany: {
            args: Prisma.ReportersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportersPayload>[]
          }
          delete: {
            args: Prisma.ReportersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportersPayload>
          }
          update: {
            args: Prisma.ReportersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportersPayload>
          }
          deleteMany: {
            args: Prisma.ReportersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportersPayload>[]
          }
          upsert: {
            args: Prisma.ReportersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportersPayload>
          }
          aggregate: {
            args: Prisma.ReportersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReporters>
          }
          groupBy: {
            args: Prisma.ReportersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportersCountArgs<ExtArgs>
            result: $Utils.Optional<ReportersCountAggregateOutputType> | number
          }
        }
      }
      Roade_issues: {
        payload: Prisma.$Roade_issuesPayload<ExtArgs>
        fields: Prisma.Roade_issuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Roade_issuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roade_issuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Roade_issuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roade_issuesPayload>
          }
          findFirst: {
            args: Prisma.Roade_issuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roade_issuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Roade_issuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roade_issuesPayload>
          }
          findMany: {
            args: Prisma.Roade_issuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roade_issuesPayload>[]
          }
          create: {
            args: Prisma.Roade_issuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roade_issuesPayload>
          }
          createMany: {
            args: Prisma.Roade_issuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Roade_issuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roade_issuesPayload>[]
          }
          delete: {
            args: Prisma.Roade_issuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roade_issuesPayload>
          }
          update: {
            args: Prisma.Roade_issuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roade_issuesPayload>
          }
          deleteMany: {
            args: Prisma.Roade_issuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Roade_issuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Roade_issuesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roade_issuesPayload>[]
          }
          upsert: {
            args: Prisma.Roade_issuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roade_issuesPayload>
          }
          aggregate: {
            args: Prisma.Roade_issuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoade_issues>
          }
          groupBy: {
            args: Prisma.Roade_issuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Roade_issuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Roade_issuesCountArgs<ExtArgs>
            result: $Utils.Optional<Roade_issuesCountAggregateOutputType> | number
          }
        }
      }
      Drainag_issues: {
        payload: Prisma.$Drainag_issuesPayload<ExtArgs>
        fields: Prisma.Drainag_issuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Drainag_issuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drainag_issuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Drainag_issuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drainag_issuesPayload>
          }
          findFirst: {
            args: Prisma.Drainag_issuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drainag_issuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Drainag_issuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drainag_issuesPayload>
          }
          findMany: {
            args: Prisma.Drainag_issuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drainag_issuesPayload>[]
          }
          create: {
            args: Prisma.Drainag_issuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drainag_issuesPayload>
          }
          createMany: {
            args: Prisma.Drainag_issuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Drainag_issuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drainag_issuesPayload>[]
          }
          delete: {
            args: Prisma.Drainag_issuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drainag_issuesPayload>
          }
          update: {
            args: Prisma.Drainag_issuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drainag_issuesPayload>
          }
          deleteMany: {
            args: Prisma.Drainag_issuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Drainag_issuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Drainag_issuesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drainag_issuesPayload>[]
          }
          upsert: {
            args: Prisma.Drainag_issuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drainag_issuesPayload>
          }
          aggregate: {
            args: Prisma.Drainag_issuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrainag_issues>
          }
          groupBy: {
            args: Prisma.Drainag_issuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Drainag_issuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Drainag_issuesCountArgs<ExtArgs>
            result: $Utils.Optional<Drainag_issuesCountAggregateOutputType> | number
          }
        }
      }
      Electricity_issues: {
        payload: Prisma.$Electricity_issuesPayload<ExtArgs>
        fields: Prisma.Electricity_issuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Electricity_issuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Electricity_issuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Electricity_issuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Electricity_issuesPayload>
          }
          findFirst: {
            args: Prisma.Electricity_issuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Electricity_issuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Electricity_issuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Electricity_issuesPayload>
          }
          findMany: {
            args: Prisma.Electricity_issuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Electricity_issuesPayload>[]
          }
          create: {
            args: Prisma.Electricity_issuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Electricity_issuesPayload>
          }
          createMany: {
            args: Prisma.Electricity_issuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Electricity_issuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Electricity_issuesPayload>[]
          }
          delete: {
            args: Prisma.Electricity_issuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Electricity_issuesPayload>
          }
          update: {
            args: Prisma.Electricity_issuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Electricity_issuesPayload>
          }
          deleteMany: {
            args: Prisma.Electricity_issuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Electricity_issuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Electricity_issuesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Electricity_issuesPayload>[]
          }
          upsert: {
            args: Prisma.Electricity_issuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Electricity_issuesPayload>
          }
          aggregate: {
            args: Prisma.Electricity_issuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElectricity_issues>
          }
          groupBy: {
            args: Prisma.Electricity_issuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Electricity_issuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Electricity_issuesCountArgs<ExtArgs>
            result: $Utils.Optional<Electricity_issuesCountAggregateOutputType> | number
          }
        }
      }
      Water_issues: {
        payload: Prisma.$Water_issuesPayload<ExtArgs>
        fields: Prisma.Water_issuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Water_issuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Water_issuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Water_issuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Water_issuesPayload>
          }
          findFirst: {
            args: Prisma.Water_issuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Water_issuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Water_issuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Water_issuesPayload>
          }
          findMany: {
            args: Prisma.Water_issuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Water_issuesPayload>[]
          }
          create: {
            args: Prisma.Water_issuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Water_issuesPayload>
          }
          createMany: {
            args: Prisma.Water_issuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Water_issuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Water_issuesPayload>[]
          }
          delete: {
            args: Prisma.Water_issuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Water_issuesPayload>
          }
          update: {
            args: Prisma.Water_issuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Water_issuesPayload>
          }
          deleteMany: {
            args: Prisma.Water_issuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Water_issuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Water_issuesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Water_issuesPayload>[]
          }
          upsert: {
            args: Prisma.Water_issuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Water_issuesPayload>
          }
          aggregate: {
            args: Prisma.Water_issuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWater_issues>
          }
          groupBy: {
            args: Prisma.Water_issuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Water_issuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Water_issuesCountArgs<ExtArgs>
            result: $Utils.Optional<Water_issuesCountAggregateOutputType> | number
          }
        }
      }
      Health_issues: {
        payload: Prisma.$Health_issuesPayload<ExtArgs>
        fields: Prisma.Health_issuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Health_issuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_issuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Health_issuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_issuesPayload>
          }
          findFirst: {
            args: Prisma.Health_issuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_issuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Health_issuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_issuesPayload>
          }
          findMany: {
            args: Prisma.Health_issuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_issuesPayload>[]
          }
          create: {
            args: Prisma.Health_issuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_issuesPayload>
          }
          createMany: {
            args: Prisma.Health_issuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Health_issuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_issuesPayload>[]
          }
          delete: {
            args: Prisma.Health_issuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_issuesPayload>
          }
          update: {
            args: Prisma.Health_issuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_issuesPayload>
          }
          deleteMany: {
            args: Prisma.Health_issuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Health_issuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Health_issuesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_issuesPayload>[]
          }
          upsert: {
            args: Prisma.Health_issuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Health_issuesPayload>
          }
          aggregate: {
            args: Prisma.Health_issuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealth_issues>
          }
          groupBy: {
            args: Prisma.Health_issuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Health_issuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Health_issuesCountArgs<ExtArgs>
            result: $Utils.Optional<Health_issuesCountAggregateOutputType> | number
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
    reporters?: ReportersOmit
    roade_issues?: Roade_issuesOmit
    drainag_issues?: Drainag_issuesOmit
    electricity_issues?: Electricity_issuesOmit
    water_issues?: Water_issuesOmit
    health_issues?: Health_issuesOmit
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
   * Count Type ReportersCountOutputType
   */

  export type ReportersCountOutputType = {
    drainag_issues: number
    electricity_issues: number
    health_issues: number
    roade_issues: number
    water_issues: number
  }

  export type ReportersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drainag_issues?: boolean | ReportersCountOutputTypeCountDrainag_issuesArgs
    electricity_issues?: boolean | ReportersCountOutputTypeCountElectricity_issuesArgs
    health_issues?: boolean | ReportersCountOutputTypeCountHealth_issuesArgs
    roade_issues?: boolean | ReportersCountOutputTypeCountRoade_issuesArgs
    water_issues?: boolean | ReportersCountOutputTypeCountWater_issuesArgs
  }

  // Custom InputTypes
  /**
   * ReportersCountOutputType without action
   */
  export type ReportersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportersCountOutputType
     */
    select?: ReportersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportersCountOutputType without action
   */
  export type ReportersCountOutputTypeCountDrainag_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Drainag_issuesWhereInput
  }

  /**
   * ReportersCountOutputType without action
   */
  export type ReportersCountOutputTypeCountElectricity_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Electricity_issuesWhereInput
  }

  /**
   * ReportersCountOutputType without action
   */
  export type ReportersCountOutputTypeCountHealth_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Health_issuesWhereInput
  }

  /**
   * ReportersCountOutputType without action
   */
  export type ReportersCountOutputTypeCountRoade_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Roade_issuesWhereInput
  }

  /**
   * ReportersCountOutputType without action
   */
  export type ReportersCountOutputTypeCountWater_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Water_issuesWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    picture: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    picture: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    picture: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    picture?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    picture?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    picture?: true
    role?: true
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
    id: number
    email: string
    password: string | null
    name: string | null
    picture: string | null
    role: string
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
    email?: boolean
    password?: boolean
    name?: boolean
    picture?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    picture?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    picture?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    picture?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "picture" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string | null
      name: string | null
      picture: string | null
      role: string
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
  }


  /**
   * Model Reporters
   */

  export type AggregateReporters = {
    _count: ReportersCountAggregateOutputType | null
    _avg: ReportersAvgAggregateOutputType | null
    _sum: ReportersSumAggregateOutputType | null
    _min: ReportersMinAggregateOutputType | null
    _max: ReportersMaxAggregateOutputType | null
  }

  export type ReportersAvgAggregateOutputType = {
    id: number | null
  }

  export type ReportersSumAggregateOutputType = {
    id: number | null
  }

  export type ReportersMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    phone: string | null
    province: string | null
    district: string | null
    subdistrict: string | null
    village: string | null
  }

  export type ReportersMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    phone: string | null
    province: string | null
    district: string | null
    subdistrict: string | null
    village: string | null
  }

  export type ReportersCountAggregateOutputType = {
    id: number
    fullname: number
    phone: number
    province: number
    district: number
    subdistrict: number
    village: number
    _all: number
  }


  export type ReportersAvgAggregateInputType = {
    id?: true
  }

  export type ReportersSumAggregateInputType = {
    id?: true
  }

  export type ReportersMinAggregateInputType = {
    id?: true
    fullname?: true
    phone?: true
    province?: true
    district?: true
    subdistrict?: true
    village?: true
  }

  export type ReportersMaxAggregateInputType = {
    id?: true
    fullname?: true
    phone?: true
    province?: true
    district?: true
    subdistrict?: true
    village?: true
  }

  export type ReportersCountAggregateInputType = {
    id?: true
    fullname?: true
    phone?: true
    province?: true
    district?: true
    subdistrict?: true
    village?: true
    _all?: true
  }

  export type ReportersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reporters to aggregate.
     */
    where?: ReportersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reporters to fetch.
     */
    orderBy?: ReportersOrderByWithRelationInput | ReportersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reporters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reporters
    **/
    _count?: true | ReportersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportersMaxAggregateInputType
  }

  export type GetReportersAggregateType<T extends ReportersAggregateArgs> = {
        [P in keyof T & keyof AggregateReporters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReporters[P]>
      : GetScalarType<T[P], AggregateReporters[P]>
  }




  export type ReportersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportersWhereInput
    orderBy?: ReportersOrderByWithAggregationInput | ReportersOrderByWithAggregationInput[]
    by: ReportersScalarFieldEnum[] | ReportersScalarFieldEnum
    having?: ReportersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportersCountAggregateInputType | true
    _avg?: ReportersAvgAggregateInputType
    _sum?: ReportersSumAggregateInputType
    _min?: ReportersMinAggregateInputType
    _max?: ReportersMaxAggregateInputType
  }

  export type ReportersGroupByOutputType = {
    id: number
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    _count: ReportersCountAggregateOutputType | null
    _avg: ReportersAvgAggregateOutputType | null
    _sum: ReportersSumAggregateOutputType | null
    _min: ReportersMinAggregateOutputType | null
    _max: ReportersMaxAggregateOutputType | null
  }

  type GetReportersGroupByPayload<T extends ReportersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportersGroupByOutputType[P]>
            : GetScalarType<T[P], ReportersGroupByOutputType[P]>
        }
      >
    >


  export type ReportersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    phone?: boolean
    province?: boolean
    district?: boolean
    subdistrict?: boolean
    village?: boolean
    drainag_issues?: boolean | Reporters$drainag_issuesArgs<ExtArgs>
    electricity_issues?: boolean | Reporters$electricity_issuesArgs<ExtArgs>
    health_issues?: boolean | Reporters$health_issuesArgs<ExtArgs>
    roade_issues?: boolean | Reporters$roade_issuesArgs<ExtArgs>
    water_issues?: boolean | Reporters$water_issuesArgs<ExtArgs>
    _count?: boolean | ReportersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporters"]>

  export type ReportersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    phone?: boolean
    province?: boolean
    district?: boolean
    subdistrict?: boolean
    village?: boolean
  }, ExtArgs["result"]["reporters"]>

  export type ReportersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    phone?: boolean
    province?: boolean
    district?: boolean
    subdistrict?: boolean
    village?: boolean
  }, ExtArgs["result"]["reporters"]>

  export type ReportersSelectScalar = {
    id?: boolean
    fullname?: boolean
    phone?: boolean
    province?: boolean
    district?: boolean
    subdistrict?: boolean
    village?: boolean
  }

  export type ReportersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "phone" | "province" | "district" | "subdistrict" | "village", ExtArgs["result"]["reporters"]>
  export type ReportersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drainag_issues?: boolean | Reporters$drainag_issuesArgs<ExtArgs>
    electricity_issues?: boolean | Reporters$electricity_issuesArgs<ExtArgs>
    health_issues?: boolean | Reporters$health_issuesArgs<ExtArgs>
    roade_issues?: boolean | Reporters$roade_issuesArgs<ExtArgs>
    water_issues?: boolean | Reporters$water_issuesArgs<ExtArgs>
    _count?: boolean | ReportersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReportersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReportersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReportersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reporters"
    objects: {
      drainag_issues: Prisma.$Drainag_issuesPayload<ExtArgs>[]
      electricity_issues: Prisma.$Electricity_issuesPayload<ExtArgs>[]
      health_issues: Prisma.$Health_issuesPayload<ExtArgs>[]
      roade_issues: Prisma.$Roade_issuesPayload<ExtArgs>[]
      water_issues: Prisma.$Water_issuesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      phone: string
      province: string
      district: string
      subdistrict: string
      village: string
    }, ExtArgs["result"]["reporters"]>
    composites: {}
  }

  type ReportersGetPayload<S extends boolean | null | undefined | ReportersDefaultArgs> = $Result.GetResult<Prisma.$ReportersPayload, S>

  type ReportersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportersCountAggregateInputType | true
    }

  export interface ReportersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reporters'], meta: { name: 'Reporters' } }
    /**
     * Find zero or one Reporters that matches the filter.
     * @param {ReportersFindUniqueArgs} args - Arguments to find a Reporters
     * @example
     * // Get one Reporters
     * const reporters = await prisma.reporters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportersFindUniqueArgs>(args: SelectSubset<T, ReportersFindUniqueArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reporters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportersFindUniqueOrThrowArgs} args - Arguments to find a Reporters
     * @example
     * // Get one Reporters
     * const reporters = await prisma.reporters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportersFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reporters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportersFindFirstArgs} args - Arguments to find a Reporters
     * @example
     * // Get one Reporters
     * const reporters = await prisma.reporters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportersFindFirstArgs>(args?: SelectSubset<T, ReportersFindFirstArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reporters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportersFindFirstOrThrowArgs} args - Arguments to find a Reporters
     * @example
     * // Get one Reporters
     * const reporters = await prisma.reporters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportersFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reporters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reporters
     * const reporters = await prisma.reporters.findMany()
     * 
     * // Get first 10 Reporters
     * const reporters = await prisma.reporters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportersWithIdOnly = await prisma.reporters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportersFindManyArgs>(args?: SelectSubset<T, ReportersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reporters.
     * @param {ReportersCreateArgs} args - Arguments to create a Reporters.
     * @example
     * // Create one Reporters
     * const Reporters = await prisma.reporters.create({
     *   data: {
     *     // ... data to create a Reporters
     *   }
     * })
     * 
     */
    create<T extends ReportersCreateArgs>(args: SelectSubset<T, ReportersCreateArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reporters.
     * @param {ReportersCreateManyArgs} args - Arguments to create many Reporters.
     * @example
     * // Create many Reporters
     * const reporters = await prisma.reporters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportersCreateManyArgs>(args?: SelectSubset<T, ReportersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reporters and returns the data saved in the database.
     * @param {ReportersCreateManyAndReturnArgs} args - Arguments to create many Reporters.
     * @example
     * // Create many Reporters
     * const reporters = await prisma.reporters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reporters and only return the `id`
     * const reportersWithIdOnly = await prisma.reporters.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportersCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reporters.
     * @param {ReportersDeleteArgs} args - Arguments to delete one Reporters.
     * @example
     * // Delete one Reporters
     * const Reporters = await prisma.reporters.delete({
     *   where: {
     *     // ... filter to delete one Reporters
     *   }
     * })
     * 
     */
    delete<T extends ReportersDeleteArgs>(args: SelectSubset<T, ReportersDeleteArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reporters.
     * @param {ReportersUpdateArgs} args - Arguments to update one Reporters.
     * @example
     * // Update one Reporters
     * const reporters = await prisma.reporters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportersUpdateArgs>(args: SelectSubset<T, ReportersUpdateArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reporters.
     * @param {ReportersDeleteManyArgs} args - Arguments to filter Reporters to delete.
     * @example
     * // Delete a few Reporters
     * const { count } = await prisma.reporters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportersDeleteManyArgs>(args?: SelectSubset<T, ReportersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reporters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reporters
     * const reporters = await prisma.reporters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportersUpdateManyArgs>(args: SelectSubset<T, ReportersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reporters and returns the data updated in the database.
     * @param {ReportersUpdateManyAndReturnArgs} args - Arguments to update many Reporters.
     * @example
     * // Update many Reporters
     * const reporters = await prisma.reporters.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reporters and only return the `id`
     * const reportersWithIdOnly = await prisma.reporters.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportersUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reporters.
     * @param {ReportersUpsertArgs} args - Arguments to update or create a Reporters.
     * @example
     * // Update or create a Reporters
     * const reporters = await prisma.reporters.upsert({
     *   create: {
     *     // ... data to create a Reporters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reporters we want to update
     *   }
     * })
     */
    upsert<T extends ReportersUpsertArgs>(args: SelectSubset<T, ReportersUpsertArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reporters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportersCountArgs} args - Arguments to filter Reporters to count.
     * @example
     * // Count the number of Reporters
     * const count = await prisma.reporters.count({
     *   where: {
     *     // ... the filter for the Reporters we want to count
     *   }
     * })
    **/
    count<T extends ReportersCountArgs>(
      args?: Subset<T, ReportersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reporters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportersAggregateArgs>(args: Subset<T, ReportersAggregateArgs>): Prisma.PrismaPromise<GetReportersAggregateType<T>>

    /**
     * Group by Reporters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportersGroupByArgs} args - Group by arguments.
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
      T extends ReportersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportersGroupByArgs['orderBy'] }
        : { orderBy?: ReportersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reporters model
   */
  readonly fields: ReportersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reporters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drainag_issues<T extends Reporters$drainag_issuesArgs<ExtArgs> = {}>(args?: Subset<T, Reporters$drainag_issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    electricity_issues<T extends Reporters$electricity_issuesArgs<ExtArgs> = {}>(args?: Subset<T, Reporters$electricity_issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    health_issues<T extends Reporters$health_issuesArgs<ExtArgs> = {}>(args?: Subset<T, Reporters$health_issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roade_issues<T extends Reporters$roade_issuesArgs<ExtArgs> = {}>(args?: Subset<T, Reporters$roade_issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    water_issues<T extends Reporters$water_issuesArgs<ExtArgs> = {}>(args?: Subset<T, Reporters$water_issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reporters model
   */
  interface ReportersFieldRefs {
    readonly id: FieldRef<"Reporters", 'Int'>
    readonly fullname: FieldRef<"Reporters", 'String'>
    readonly phone: FieldRef<"Reporters", 'String'>
    readonly province: FieldRef<"Reporters", 'String'>
    readonly district: FieldRef<"Reporters", 'String'>
    readonly subdistrict: FieldRef<"Reporters", 'String'>
    readonly village: FieldRef<"Reporters", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reporters findUnique
   */
  export type ReportersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportersInclude<ExtArgs> | null
    /**
     * Filter, which Reporters to fetch.
     */
    where: ReportersWhereUniqueInput
  }

  /**
   * Reporters findUniqueOrThrow
   */
  export type ReportersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportersInclude<ExtArgs> | null
    /**
     * Filter, which Reporters to fetch.
     */
    where: ReportersWhereUniqueInput
  }

  /**
   * Reporters findFirst
   */
  export type ReportersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportersInclude<ExtArgs> | null
    /**
     * Filter, which Reporters to fetch.
     */
    where?: ReportersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reporters to fetch.
     */
    orderBy?: ReportersOrderByWithRelationInput | ReportersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reporters.
     */
    cursor?: ReportersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reporters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reporters.
     */
    distinct?: ReportersScalarFieldEnum | ReportersScalarFieldEnum[]
  }

  /**
   * Reporters findFirstOrThrow
   */
  export type ReportersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportersInclude<ExtArgs> | null
    /**
     * Filter, which Reporters to fetch.
     */
    where?: ReportersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reporters to fetch.
     */
    orderBy?: ReportersOrderByWithRelationInput | ReportersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reporters.
     */
    cursor?: ReportersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reporters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reporters.
     */
    distinct?: ReportersScalarFieldEnum | ReportersScalarFieldEnum[]
  }

  /**
   * Reporters findMany
   */
  export type ReportersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportersInclude<ExtArgs> | null
    /**
     * Filter, which Reporters to fetch.
     */
    where?: ReportersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reporters to fetch.
     */
    orderBy?: ReportersOrderByWithRelationInput | ReportersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reporters.
     */
    cursor?: ReportersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reporters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reporters.
     */
    skip?: number
    distinct?: ReportersScalarFieldEnum | ReportersScalarFieldEnum[]
  }

  /**
   * Reporters create
   */
  export type ReportersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportersInclude<ExtArgs> | null
    /**
     * The data needed to create a Reporters.
     */
    data: XOR<ReportersCreateInput, ReportersUncheckedCreateInput>
  }

  /**
   * Reporters createMany
   */
  export type ReportersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reporters.
     */
    data: ReportersCreateManyInput | ReportersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reporters createManyAndReturn
   */
  export type ReportersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * The data used to create many Reporters.
     */
    data: ReportersCreateManyInput | ReportersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reporters update
   */
  export type ReportersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportersInclude<ExtArgs> | null
    /**
     * The data needed to update a Reporters.
     */
    data: XOR<ReportersUpdateInput, ReportersUncheckedUpdateInput>
    /**
     * Choose, which Reporters to update.
     */
    where: ReportersWhereUniqueInput
  }

  /**
   * Reporters updateMany
   */
  export type ReportersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reporters.
     */
    data: XOR<ReportersUpdateManyMutationInput, ReportersUncheckedUpdateManyInput>
    /**
     * Filter which Reporters to update
     */
    where?: ReportersWhereInput
    /**
     * Limit how many Reporters to update.
     */
    limit?: number
  }

  /**
   * Reporters updateManyAndReturn
   */
  export type ReportersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * The data used to update Reporters.
     */
    data: XOR<ReportersUpdateManyMutationInput, ReportersUncheckedUpdateManyInput>
    /**
     * Filter which Reporters to update
     */
    where?: ReportersWhereInput
    /**
     * Limit how many Reporters to update.
     */
    limit?: number
  }

  /**
   * Reporters upsert
   */
  export type ReportersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportersInclude<ExtArgs> | null
    /**
     * The filter to search for the Reporters to update in case it exists.
     */
    where: ReportersWhereUniqueInput
    /**
     * In case the Reporters found by the `where` argument doesn't exist, create a new Reporters with this data.
     */
    create: XOR<ReportersCreateInput, ReportersUncheckedCreateInput>
    /**
     * In case the Reporters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportersUpdateInput, ReportersUncheckedUpdateInput>
  }

  /**
   * Reporters delete
   */
  export type ReportersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportersInclude<ExtArgs> | null
    /**
     * Filter which Reporters to delete.
     */
    where: ReportersWhereUniqueInput
  }

  /**
   * Reporters deleteMany
   */
  export type ReportersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reporters to delete
     */
    where?: ReportersWhereInput
    /**
     * Limit how many Reporters to delete.
     */
    limit?: number
  }

  /**
   * Reporters.drainag_issues
   */
  export type Reporters$drainag_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesInclude<ExtArgs> | null
    where?: Drainag_issuesWhereInput
    orderBy?: Drainag_issuesOrderByWithRelationInput | Drainag_issuesOrderByWithRelationInput[]
    cursor?: Drainag_issuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Drainag_issuesScalarFieldEnum | Drainag_issuesScalarFieldEnum[]
  }

  /**
   * Reporters.electricity_issues
   */
  export type Reporters$electricity_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesInclude<ExtArgs> | null
    where?: Electricity_issuesWhereInput
    orderBy?: Electricity_issuesOrderByWithRelationInput | Electricity_issuesOrderByWithRelationInput[]
    cursor?: Electricity_issuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Electricity_issuesScalarFieldEnum | Electricity_issuesScalarFieldEnum[]
  }

  /**
   * Reporters.health_issues
   */
  export type Reporters$health_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesInclude<ExtArgs> | null
    where?: Health_issuesWhereInput
    orderBy?: Health_issuesOrderByWithRelationInput | Health_issuesOrderByWithRelationInput[]
    cursor?: Health_issuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Health_issuesScalarFieldEnum | Health_issuesScalarFieldEnum[]
  }

  /**
   * Reporters.roade_issues
   */
  export type Reporters$roade_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesInclude<ExtArgs> | null
    where?: Roade_issuesWhereInput
    orderBy?: Roade_issuesOrderByWithRelationInput | Roade_issuesOrderByWithRelationInput[]
    cursor?: Roade_issuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Roade_issuesScalarFieldEnum | Roade_issuesScalarFieldEnum[]
  }

  /**
   * Reporters.water_issues
   */
  export type Reporters$water_issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesInclude<ExtArgs> | null
    where?: Water_issuesWhereInput
    orderBy?: Water_issuesOrderByWithRelationInput | Water_issuesOrderByWithRelationInput[]
    cursor?: Water_issuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Water_issuesScalarFieldEnum | Water_issuesScalarFieldEnum[]
  }

  /**
   * Reporters without action
   */
  export type ReportersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporters
     */
    select?: ReportersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporters
     */
    omit?: ReportersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportersInclude<ExtArgs> | null
  }


  /**
   * Model Roade_issues
   */

  export type AggregateRoade_issues = {
    _count: Roade_issuesCountAggregateOutputType | null
    _avg: Roade_issuesAvgAggregateOutputType | null
    _sum: Roade_issuesSumAggregateOutputType | null
    _min: Roade_issuesMinAggregateOutputType | null
    _max: Roade_issuesMaxAggregateOutputType | null
  }

  export type Roade_issuesAvgAggregateOutputType = {
    id: number | null
    report_id: number | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
  }

  export type Roade_issuesSumAggregateOutputType = {
    id: number | null
    report_id: number | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
  }

  export type Roade_issuesMinAggregateOutputType = {
    id: number | null
    report_id: number | null
    sub_issue: string | null
    description: string | null
    image_url: string | null
    status: string | null
    resolution_detail: string | null
    update_at: Date | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
    resolved_a: Date | null
  }

  export type Roade_issuesMaxAggregateOutputType = {
    id: number | null
    report_id: number | null
    sub_issue: string | null
    description: string | null
    image_url: string | null
    status: string | null
    resolution_detail: string | null
    update_at: Date | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
    resolved_a: Date | null
  }

  export type Roade_issuesCountAggregateOutputType = {
    id: number
    report_id: number
    sub_issue: number
    description: number
    image_url: number
    status: number
    resolution_detail: number
    update_at: number
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: number
    resolved_a: number
    _all: number
  }


  export type Roade_issuesAvgAggregateInputType = {
    id?: true
    report_id?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
  }

  export type Roade_issuesSumAggregateInputType = {
    id?: true
    report_id?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
  }

  export type Roade_issuesMinAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
  }

  export type Roade_issuesMaxAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
  }

  export type Roade_issuesCountAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
    _all?: true
  }

  export type Roade_issuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roade_issues to aggregate.
     */
    where?: Roade_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roade_issues to fetch.
     */
    orderBy?: Roade_issuesOrderByWithRelationInput | Roade_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Roade_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roade_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roade_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roade_issues
    **/
    _count?: true | Roade_issuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Roade_issuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Roade_issuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Roade_issuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Roade_issuesMaxAggregateInputType
  }

  export type GetRoade_issuesAggregateType<T extends Roade_issuesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoade_issues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoade_issues[P]>
      : GetScalarType<T[P], AggregateRoade_issues[P]>
  }




  export type Roade_issuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Roade_issuesWhereInput
    orderBy?: Roade_issuesOrderByWithAggregationInput | Roade_issuesOrderByWithAggregationInput[]
    by: Roade_issuesScalarFieldEnum[] | Roade_issuesScalarFieldEnum
    having?: Roade_issuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Roade_issuesCountAggregateInputType | true
    _avg?: Roade_issuesAvgAggregateInputType
    _sum?: Roade_issuesSumAggregateInputType
    _min?: Roade_issuesMinAggregateInputType
    _max?: Roade_issuesMaxAggregateInputType
  }

  export type Roade_issuesGroupByOutputType = {
    id: number
    report_id: number
    sub_issue: string
    description: string | null
    image_url: string | null
    status: string
    resolution_detail: string | null
    update_at: Date
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal
    resolved_a: Date | null
    _count: Roade_issuesCountAggregateOutputType | null
    _avg: Roade_issuesAvgAggregateOutputType | null
    _sum: Roade_issuesSumAggregateOutputType | null
    _min: Roade_issuesMinAggregateOutputType | null
    _max: Roade_issuesMaxAggregateOutputType | null
  }

  type GetRoade_issuesGroupByPayload<T extends Roade_issuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Roade_issuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Roade_issuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Roade_issuesGroupByOutputType[P]>
            : GetScalarType<T[P], Roade_issuesGroupByOutputType[P]>
        }
      >
    >


  export type Roade_issuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roade_issues"]>

  export type Roade_issuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roade_issues"]>

  export type Roade_issuesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roade_issues"]>

  export type Roade_issuesSelectScalar = {
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
  }

  export type Roade_issuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "report_id" | "sub_issue" | "description" | "image_url" | "status" | "resolution_detail" | "update_at" | "severity" | "affected_people" | "urgency" | "economic_impact" | "total_score" | "resolved_a", ExtArgs["result"]["roade_issues"]>
  export type Roade_issuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }
  export type Roade_issuesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }
  export type Roade_issuesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }

  export type $Roade_issuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roade_issues"
    objects: {
      report: Prisma.$ReportersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      report_id: number
      sub_issue: string
      description: string | null
      image_url: string | null
      status: string
      resolution_detail: string | null
      update_at: Date
      severity: number
      affected_people: number
      urgency: number
      economic_impact: number
      total_score: Prisma.Decimal
      resolved_a: Date | null
    }, ExtArgs["result"]["roade_issues"]>
    composites: {}
  }

  type Roade_issuesGetPayload<S extends boolean | null | undefined | Roade_issuesDefaultArgs> = $Result.GetResult<Prisma.$Roade_issuesPayload, S>

  type Roade_issuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Roade_issuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Roade_issuesCountAggregateInputType | true
    }

  export interface Roade_issuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roade_issues'], meta: { name: 'Roade_issues' } }
    /**
     * Find zero or one Roade_issues that matches the filter.
     * @param {Roade_issuesFindUniqueArgs} args - Arguments to find a Roade_issues
     * @example
     * // Get one Roade_issues
     * const roade_issues = await prisma.roade_issues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Roade_issuesFindUniqueArgs>(args: SelectSubset<T, Roade_issuesFindUniqueArgs<ExtArgs>>): Prisma__Roade_issuesClient<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roade_issues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Roade_issuesFindUniqueOrThrowArgs} args - Arguments to find a Roade_issues
     * @example
     * // Get one Roade_issues
     * const roade_issues = await prisma.roade_issues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Roade_issuesFindUniqueOrThrowArgs>(args: SelectSubset<T, Roade_issuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Roade_issuesClient<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roade_issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roade_issuesFindFirstArgs} args - Arguments to find a Roade_issues
     * @example
     * // Get one Roade_issues
     * const roade_issues = await prisma.roade_issues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Roade_issuesFindFirstArgs>(args?: SelectSubset<T, Roade_issuesFindFirstArgs<ExtArgs>>): Prisma__Roade_issuesClient<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roade_issues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roade_issuesFindFirstOrThrowArgs} args - Arguments to find a Roade_issues
     * @example
     * // Get one Roade_issues
     * const roade_issues = await prisma.roade_issues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Roade_issuesFindFirstOrThrowArgs>(args?: SelectSubset<T, Roade_issuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Roade_issuesClient<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roade_issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roade_issuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roade_issues
     * const roade_issues = await prisma.roade_issues.findMany()
     * 
     * // Get first 10 Roade_issues
     * const roade_issues = await prisma.roade_issues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roade_issuesWithIdOnly = await prisma.roade_issues.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Roade_issuesFindManyArgs>(args?: SelectSubset<T, Roade_issuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roade_issues.
     * @param {Roade_issuesCreateArgs} args - Arguments to create a Roade_issues.
     * @example
     * // Create one Roade_issues
     * const Roade_issues = await prisma.roade_issues.create({
     *   data: {
     *     // ... data to create a Roade_issues
     *   }
     * })
     * 
     */
    create<T extends Roade_issuesCreateArgs>(args: SelectSubset<T, Roade_issuesCreateArgs<ExtArgs>>): Prisma__Roade_issuesClient<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roade_issues.
     * @param {Roade_issuesCreateManyArgs} args - Arguments to create many Roade_issues.
     * @example
     * // Create many Roade_issues
     * const roade_issues = await prisma.roade_issues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Roade_issuesCreateManyArgs>(args?: SelectSubset<T, Roade_issuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roade_issues and returns the data saved in the database.
     * @param {Roade_issuesCreateManyAndReturnArgs} args - Arguments to create many Roade_issues.
     * @example
     * // Create many Roade_issues
     * const roade_issues = await prisma.roade_issues.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roade_issues and only return the `id`
     * const roade_issuesWithIdOnly = await prisma.roade_issues.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Roade_issuesCreateManyAndReturnArgs>(args?: SelectSubset<T, Roade_issuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roade_issues.
     * @param {Roade_issuesDeleteArgs} args - Arguments to delete one Roade_issues.
     * @example
     * // Delete one Roade_issues
     * const Roade_issues = await prisma.roade_issues.delete({
     *   where: {
     *     // ... filter to delete one Roade_issues
     *   }
     * })
     * 
     */
    delete<T extends Roade_issuesDeleteArgs>(args: SelectSubset<T, Roade_issuesDeleteArgs<ExtArgs>>): Prisma__Roade_issuesClient<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roade_issues.
     * @param {Roade_issuesUpdateArgs} args - Arguments to update one Roade_issues.
     * @example
     * // Update one Roade_issues
     * const roade_issues = await prisma.roade_issues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Roade_issuesUpdateArgs>(args: SelectSubset<T, Roade_issuesUpdateArgs<ExtArgs>>): Prisma__Roade_issuesClient<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roade_issues.
     * @param {Roade_issuesDeleteManyArgs} args - Arguments to filter Roade_issues to delete.
     * @example
     * // Delete a few Roade_issues
     * const { count } = await prisma.roade_issues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Roade_issuesDeleteManyArgs>(args?: SelectSubset<T, Roade_issuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roade_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roade_issuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roade_issues
     * const roade_issues = await prisma.roade_issues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Roade_issuesUpdateManyArgs>(args: SelectSubset<T, Roade_issuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roade_issues and returns the data updated in the database.
     * @param {Roade_issuesUpdateManyAndReturnArgs} args - Arguments to update many Roade_issues.
     * @example
     * // Update many Roade_issues
     * const roade_issues = await prisma.roade_issues.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roade_issues and only return the `id`
     * const roade_issuesWithIdOnly = await prisma.roade_issues.updateManyAndReturn({
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
    updateManyAndReturn<T extends Roade_issuesUpdateManyAndReturnArgs>(args: SelectSubset<T, Roade_issuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roade_issues.
     * @param {Roade_issuesUpsertArgs} args - Arguments to update or create a Roade_issues.
     * @example
     * // Update or create a Roade_issues
     * const roade_issues = await prisma.roade_issues.upsert({
     *   create: {
     *     // ... data to create a Roade_issues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roade_issues we want to update
     *   }
     * })
     */
    upsert<T extends Roade_issuesUpsertArgs>(args: SelectSubset<T, Roade_issuesUpsertArgs<ExtArgs>>): Prisma__Roade_issuesClient<$Result.GetResult<Prisma.$Roade_issuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roade_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roade_issuesCountArgs} args - Arguments to filter Roade_issues to count.
     * @example
     * // Count the number of Roade_issues
     * const count = await prisma.roade_issues.count({
     *   where: {
     *     // ... the filter for the Roade_issues we want to count
     *   }
     * })
    **/
    count<T extends Roade_issuesCountArgs>(
      args?: Subset<T, Roade_issuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Roade_issuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roade_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roade_issuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Roade_issuesAggregateArgs>(args: Subset<T, Roade_issuesAggregateArgs>): Prisma.PrismaPromise<GetRoade_issuesAggregateType<T>>

    /**
     * Group by Roade_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roade_issuesGroupByArgs} args - Group by arguments.
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
      T extends Roade_issuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Roade_issuesGroupByArgs['orderBy'] }
        : { orderBy?: Roade_issuesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Roade_issuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoade_issuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roade_issues model
   */
  readonly fields: Roade_issuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roade_issues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Roade_issuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportersDefaultArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Roade_issues model
   */
  interface Roade_issuesFieldRefs {
    readonly id: FieldRef<"Roade_issues", 'Int'>
    readonly report_id: FieldRef<"Roade_issues", 'Int'>
    readonly sub_issue: FieldRef<"Roade_issues", 'String'>
    readonly description: FieldRef<"Roade_issues", 'String'>
    readonly image_url: FieldRef<"Roade_issues", 'String'>
    readonly status: FieldRef<"Roade_issues", 'String'>
    readonly resolution_detail: FieldRef<"Roade_issues", 'String'>
    readonly update_at: FieldRef<"Roade_issues", 'DateTime'>
    readonly severity: FieldRef<"Roade_issues", 'Int'>
    readonly affected_people: FieldRef<"Roade_issues", 'Int'>
    readonly urgency: FieldRef<"Roade_issues", 'Int'>
    readonly economic_impact: FieldRef<"Roade_issues", 'Int'>
    readonly total_score: FieldRef<"Roade_issues", 'Decimal'>
    readonly resolved_a: FieldRef<"Roade_issues", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roade_issues findUnique
   */
  export type Roade_issuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Roade_issues to fetch.
     */
    where: Roade_issuesWhereUniqueInput
  }

  /**
   * Roade_issues findUniqueOrThrow
   */
  export type Roade_issuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Roade_issues to fetch.
     */
    where: Roade_issuesWhereUniqueInput
  }

  /**
   * Roade_issues findFirst
   */
  export type Roade_issuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Roade_issues to fetch.
     */
    where?: Roade_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roade_issues to fetch.
     */
    orderBy?: Roade_issuesOrderByWithRelationInput | Roade_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roade_issues.
     */
    cursor?: Roade_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roade_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roade_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roade_issues.
     */
    distinct?: Roade_issuesScalarFieldEnum | Roade_issuesScalarFieldEnum[]
  }

  /**
   * Roade_issues findFirstOrThrow
   */
  export type Roade_issuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Roade_issues to fetch.
     */
    where?: Roade_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roade_issues to fetch.
     */
    orderBy?: Roade_issuesOrderByWithRelationInput | Roade_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roade_issues.
     */
    cursor?: Roade_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roade_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roade_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roade_issues.
     */
    distinct?: Roade_issuesScalarFieldEnum | Roade_issuesScalarFieldEnum[]
  }

  /**
   * Roade_issues findMany
   */
  export type Roade_issuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Roade_issues to fetch.
     */
    where?: Roade_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roade_issues to fetch.
     */
    orderBy?: Roade_issuesOrderByWithRelationInput | Roade_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roade_issues.
     */
    cursor?: Roade_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roade_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roade_issues.
     */
    skip?: number
    distinct?: Roade_issuesScalarFieldEnum | Roade_issuesScalarFieldEnum[]
  }

  /**
   * Roade_issues create
   */
  export type Roade_issuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roade_issues.
     */
    data: XOR<Roade_issuesCreateInput, Roade_issuesUncheckedCreateInput>
  }

  /**
   * Roade_issues createMany
   */
  export type Roade_issuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roade_issues.
     */
    data: Roade_issuesCreateManyInput | Roade_issuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roade_issues createManyAndReturn
   */
  export type Roade_issuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * The data used to create many Roade_issues.
     */
    data: Roade_issuesCreateManyInput | Roade_issuesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roade_issues update
   */
  export type Roade_issuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roade_issues.
     */
    data: XOR<Roade_issuesUpdateInput, Roade_issuesUncheckedUpdateInput>
    /**
     * Choose, which Roade_issues to update.
     */
    where: Roade_issuesWhereUniqueInput
  }

  /**
   * Roade_issues updateMany
   */
  export type Roade_issuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roade_issues.
     */
    data: XOR<Roade_issuesUpdateManyMutationInput, Roade_issuesUncheckedUpdateManyInput>
    /**
     * Filter which Roade_issues to update
     */
    where?: Roade_issuesWhereInput
    /**
     * Limit how many Roade_issues to update.
     */
    limit?: number
  }

  /**
   * Roade_issues updateManyAndReturn
   */
  export type Roade_issuesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * The data used to update Roade_issues.
     */
    data: XOR<Roade_issuesUpdateManyMutationInput, Roade_issuesUncheckedUpdateManyInput>
    /**
     * Filter which Roade_issues to update
     */
    where?: Roade_issuesWhereInput
    /**
     * Limit how many Roade_issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roade_issues upsert
   */
  export type Roade_issuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roade_issues to update in case it exists.
     */
    where: Roade_issuesWhereUniqueInput
    /**
     * In case the Roade_issues found by the `where` argument doesn't exist, create a new Roade_issues with this data.
     */
    create: XOR<Roade_issuesCreateInput, Roade_issuesUncheckedCreateInput>
    /**
     * In case the Roade_issues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Roade_issuesUpdateInput, Roade_issuesUncheckedUpdateInput>
  }

  /**
   * Roade_issues delete
   */
  export type Roade_issuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesInclude<ExtArgs> | null
    /**
     * Filter which Roade_issues to delete.
     */
    where: Roade_issuesWhereUniqueInput
  }

  /**
   * Roade_issues deleteMany
   */
  export type Roade_issuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roade_issues to delete
     */
    where?: Roade_issuesWhereInput
    /**
     * Limit how many Roade_issues to delete.
     */
    limit?: number
  }

  /**
   * Roade_issues without action
   */
  export type Roade_issuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roade_issues
     */
    select?: Roade_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roade_issues
     */
    omit?: Roade_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roade_issuesInclude<ExtArgs> | null
  }


  /**
   * Model Drainag_issues
   */

  export type AggregateDrainag_issues = {
    _count: Drainag_issuesCountAggregateOutputType | null
    _avg: Drainag_issuesAvgAggregateOutputType | null
    _sum: Drainag_issuesSumAggregateOutputType | null
    _min: Drainag_issuesMinAggregateOutputType | null
    _max: Drainag_issuesMaxAggregateOutputType | null
  }

  export type Drainag_issuesAvgAggregateOutputType = {
    id: number | null
    report_id: number | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
  }

  export type Drainag_issuesSumAggregateOutputType = {
    id: number | null
    report_id: number | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
  }

  export type Drainag_issuesMinAggregateOutputType = {
    id: number | null
    report_id: number | null
    sub_issue: string | null
    description: string | null
    image_url: string | null
    status: string | null
    resolution_detail: string | null
    update_at: Date | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
    resolved_a: Date | null
  }

  export type Drainag_issuesMaxAggregateOutputType = {
    id: number | null
    report_id: number | null
    sub_issue: string | null
    description: string | null
    image_url: string | null
    status: string | null
    resolution_detail: string | null
    update_at: Date | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
    resolved_a: Date | null
  }

  export type Drainag_issuesCountAggregateOutputType = {
    id: number
    report_id: number
    sub_issue: number
    description: number
    image_url: number
    status: number
    resolution_detail: number
    update_at: number
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: number
    resolved_a: number
    _all: number
  }


  export type Drainag_issuesAvgAggregateInputType = {
    id?: true
    report_id?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
  }

  export type Drainag_issuesSumAggregateInputType = {
    id?: true
    report_id?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
  }

  export type Drainag_issuesMinAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
  }

  export type Drainag_issuesMaxAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
  }

  export type Drainag_issuesCountAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
    _all?: true
  }

  export type Drainag_issuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drainag_issues to aggregate.
     */
    where?: Drainag_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drainag_issues to fetch.
     */
    orderBy?: Drainag_issuesOrderByWithRelationInput | Drainag_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Drainag_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drainag_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drainag_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drainag_issues
    **/
    _count?: true | Drainag_issuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Drainag_issuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Drainag_issuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Drainag_issuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Drainag_issuesMaxAggregateInputType
  }

  export type GetDrainag_issuesAggregateType<T extends Drainag_issuesAggregateArgs> = {
        [P in keyof T & keyof AggregateDrainag_issues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrainag_issues[P]>
      : GetScalarType<T[P], AggregateDrainag_issues[P]>
  }




  export type Drainag_issuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Drainag_issuesWhereInput
    orderBy?: Drainag_issuesOrderByWithAggregationInput | Drainag_issuesOrderByWithAggregationInput[]
    by: Drainag_issuesScalarFieldEnum[] | Drainag_issuesScalarFieldEnum
    having?: Drainag_issuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Drainag_issuesCountAggregateInputType | true
    _avg?: Drainag_issuesAvgAggregateInputType
    _sum?: Drainag_issuesSumAggregateInputType
    _min?: Drainag_issuesMinAggregateInputType
    _max?: Drainag_issuesMaxAggregateInputType
  }

  export type Drainag_issuesGroupByOutputType = {
    id: number
    report_id: number
    sub_issue: string
    description: string | null
    image_url: string | null
    status: string
    resolution_detail: string | null
    update_at: Date
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal
    resolved_a: Date | null
    _count: Drainag_issuesCountAggregateOutputType | null
    _avg: Drainag_issuesAvgAggregateOutputType | null
    _sum: Drainag_issuesSumAggregateOutputType | null
    _min: Drainag_issuesMinAggregateOutputType | null
    _max: Drainag_issuesMaxAggregateOutputType | null
  }

  type GetDrainag_issuesGroupByPayload<T extends Drainag_issuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Drainag_issuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Drainag_issuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Drainag_issuesGroupByOutputType[P]>
            : GetScalarType<T[P], Drainag_issuesGroupByOutputType[P]>
        }
      >
    >


  export type Drainag_issuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drainag_issues"]>

  export type Drainag_issuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drainag_issues"]>

  export type Drainag_issuesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drainag_issues"]>

  export type Drainag_issuesSelectScalar = {
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
  }

  export type Drainag_issuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "report_id" | "sub_issue" | "description" | "image_url" | "status" | "resolution_detail" | "update_at" | "severity" | "affected_people" | "urgency" | "economic_impact" | "total_score" | "resolved_a", ExtArgs["result"]["drainag_issues"]>
  export type Drainag_issuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }
  export type Drainag_issuesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }
  export type Drainag_issuesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }

  export type $Drainag_issuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drainag_issues"
    objects: {
      report: Prisma.$ReportersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      report_id: number
      sub_issue: string
      description: string | null
      image_url: string | null
      status: string
      resolution_detail: string | null
      update_at: Date
      severity: number
      affected_people: number
      urgency: number
      economic_impact: number
      total_score: Prisma.Decimal
      resolved_a: Date | null
    }, ExtArgs["result"]["drainag_issues"]>
    composites: {}
  }

  type Drainag_issuesGetPayload<S extends boolean | null | undefined | Drainag_issuesDefaultArgs> = $Result.GetResult<Prisma.$Drainag_issuesPayload, S>

  type Drainag_issuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Drainag_issuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Drainag_issuesCountAggregateInputType | true
    }

  export interface Drainag_issuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drainag_issues'], meta: { name: 'Drainag_issues' } }
    /**
     * Find zero or one Drainag_issues that matches the filter.
     * @param {Drainag_issuesFindUniqueArgs} args - Arguments to find a Drainag_issues
     * @example
     * // Get one Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Drainag_issuesFindUniqueArgs>(args: SelectSubset<T, Drainag_issuesFindUniqueArgs<ExtArgs>>): Prisma__Drainag_issuesClient<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drainag_issues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Drainag_issuesFindUniqueOrThrowArgs} args - Arguments to find a Drainag_issues
     * @example
     * // Get one Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Drainag_issuesFindUniqueOrThrowArgs>(args: SelectSubset<T, Drainag_issuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Drainag_issuesClient<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drainag_issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drainag_issuesFindFirstArgs} args - Arguments to find a Drainag_issues
     * @example
     * // Get one Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Drainag_issuesFindFirstArgs>(args?: SelectSubset<T, Drainag_issuesFindFirstArgs<ExtArgs>>): Prisma__Drainag_issuesClient<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drainag_issues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drainag_issuesFindFirstOrThrowArgs} args - Arguments to find a Drainag_issues
     * @example
     * // Get one Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Drainag_issuesFindFirstOrThrowArgs>(args?: SelectSubset<T, Drainag_issuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Drainag_issuesClient<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drainag_issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drainag_issuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.findMany()
     * 
     * // Get first 10 Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drainag_issuesWithIdOnly = await prisma.drainag_issues.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Drainag_issuesFindManyArgs>(args?: SelectSubset<T, Drainag_issuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drainag_issues.
     * @param {Drainag_issuesCreateArgs} args - Arguments to create a Drainag_issues.
     * @example
     * // Create one Drainag_issues
     * const Drainag_issues = await prisma.drainag_issues.create({
     *   data: {
     *     // ... data to create a Drainag_issues
     *   }
     * })
     * 
     */
    create<T extends Drainag_issuesCreateArgs>(args: SelectSubset<T, Drainag_issuesCreateArgs<ExtArgs>>): Prisma__Drainag_issuesClient<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drainag_issues.
     * @param {Drainag_issuesCreateManyArgs} args - Arguments to create many Drainag_issues.
     * @example
     * // Create many Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Drainag_issuesCreateManyArgs>(args?: SelectSubset<T, Drainag_issuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drainag_issues and returns the data saved in the database.
     * @param {Drainag_issuesCreateManyAndReturnArgs} args - Arguments to create many Drainag_issues.
     * @example
     * // Create many Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drainag_issues and only return the `id`
     * const drainag_issuesWithIdOnly = await prisma.drainag_issues.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Drainag_issuesCreateManyAndReturnArgs>(args?: SelectSubset<T, Drainag_issuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drainag_issues.
     * @param {Drainag_issuesDeleteArgs} args - Arguments to delete one Drainag_issues.
     * @example
     * // Delete one Drainag_issues
     * const Drainag_issues = await prisma.drainag_issues.delete({
     *   where: {
     *     // ... filter to delete one Drainag_issues
     *   }
     * })
     * 
     */
    delete<T extends Drainag_issuesDeleteArgs>(args: SelectSubset<T, Drainag_issuesDeleteArgs<ExtArgs>>): Prisma__Drainag_issuesClient<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drainag_issues.
     * @param {Drainag_issuesUpdateArgs} args - Arguments to update one Drainag_issues.
     * @example
     * // Update one Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Drainag_issuesUpdateArgs>(args: SelectSubset<T, Drainag_issuesUpdateArgs<ExtArgs>>): Prisma__Drainag_issuesClient<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drainag_issues.
     * @param {Drainag_issuesDeleteManyArgs} args - Arguments to filter Drainag_issues to delete.
     * @example
     * // Delete a few Drainag_issues
     * const { count } = await prisma.drainag_issues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Drainag_issuesDeleteManyArgs>(args?: SelectSubset<T, Drainag_issuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drainag_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drainag_issuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Drainag_issuesUpdateManyArgs>(args: SelectSubset<T, Drainag_issuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drainag_issues and returns the data updated in the database.
     * @param {Drainag_issuesUpdateManyAndReturnArgs} args - Arguments to update many Drainag_issues.
     * @example
     * // Update many Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drainag_issues and only return the `id`
     * const drainag_issuesWithIdOnly = await prisma.drainag_issues.updateManyAndReturn({
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
    updateManyAndReturn<T extends Drainag_issuesUpdateManyAndReturnArgs>(args: SelectSubset<T, Drainag_issuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drainag_issues.
     * @param {Drainag_issuesUpsertArgs} args - Arguments to update or create a Drainag_issues.
     * @example
     * // Update or create a Drainag_issues
     * const drainag_issues = await prisma.drainag_issues.upsert({
     *   create: {
     *     // ... data to create a Drainag_issues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drainag_issues we want to update
     *   }
     * })
     */
    upsert<T extends Drainag_issuesUpsertArgs>(args: SelectSubset<T, Drainag_issuesUpsertArgs<ExtArgs>>): Prisma__Drainag_issuesClient<$Result.GetResult<Prisma.$Drainag_issuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drainag_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drainag_issuesCountArgs} args - Arguments to filter Drainag_issues to count.
     * @example
     * // Count the number of Drainag_issues
     * const count = await prisma.drainag_issues.count({
     *   where: {
     *     // ... the filter for the Drainag_issues we want to count
     *   }
     * })
    **/
    count<T extends Drainag_issuesCountArgs>(
      args?: Subset<T, Drainag_issuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Drainag_issuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drainag_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drainag_issuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Drainag_issuesAggregateArgs>(args: Subset<T, Drainag_issuesAggregateArgs>): Prisma.PrismaPromise<GetDrainag_issuesAggregateType<T>>

    /**
     * Group by Drainag_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drainag_issuesGroupByArgs} args - Group by arguments.
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
      T extends Drainag_issuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Drainag_issuesGroupByArgs['orderBy'] }
        : { orderBy?: Drainag_issuesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Drainag_issuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrainag_issuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drainag_issues model
   */
  readonly fields: Drainag_issuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drainag_issues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Drainag_issuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportersDefaultArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Drainag_issues model
   */
  interface Drainag_issuesFieldRefs {
    readonly id: FieldRef<"Drainag_issues", 'Int'>
    readonly report_id: FieldRef<"Drainag_issues", 'Int'>
    readonly sub_issue: FieldRef<"Drainag_issues", 'String'>
    readonly description: FieldRef<"Drainag_issues", 'String'>
    readonly image_url: FieldRef<"Drainag_issues", 'String'>
    readonly status: FieldRef<"Drainag_issues", 'String'>
    readonly resolution_detail: FieldRef<"Drainag_issues", 'String'>
    readonly update_at: FieldRef<"Drainag_issues", 'DateTime'>
    readonly severity: FieldRef<"Drainag_issues", 'Int'>
    readonly affected_people: FieldRef<"Drainag_issues", 'Int'>
    readonly urgency: FieldRef<"Drainag_issues", 'Int'>
    readonly economic_impact: FieldRef<"Drainag_issues", 'Int'>
    readonly total_score: FieldRef<"Drainag_issues", 'Decimal'>
    readonly resolved_a: FieldRef<"Drainag_issues", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Drainag_issues findUnique
   */
  export type Drainag_issuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Drainag_issues to fetch.
     */
    where: Drainag_issuesWhereUniqueInput
  }

  /**
   * Drainag_issues findUniqueOrThrow
   */
  export type Drainag_issuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Drainag_issues to fetch.
     */
    where: Drainag_issuesWhereUniqueInput
  }

  /**
   * Drainag_issues findFirst
   */
  export type Drainag_issuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Drainag_issues to fetch.
     */
    where?: Drainag_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drainag_issues to fetch.
     */
    orderBy?: Drainag_issuesOrderByWithRelationInput | Drainag_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drainag_issues.
     */
    cursor?: Drainag_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drainag_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drainag_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drainag_issues.
     */
    distinct?: Drainag_issuesScalarFieldEnum | Drainag_issuesScalarFieldEnum[]
  }

  /**
   * Drainag_issues findFirstOrThrow
   */
  export type Drainag_issuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Drainag_issues to fetch.
     */
    where?: Drainag_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drainag_issues to fetch.
     */
    orderBy?: Drainag_issuesOrderByWithRelationInput | Drainag_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drainag_issues.
     */
    cursor?: Drainag_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drainag_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drainag_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drainag_issues.
     */
    distinct?: Drainag_issuesScalarFieldEnum | Drainag_issuesScalarFieldEnum[]
  }

  /**
   * Drainag_issues findMany
   */
  export type Drainag_issuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Drainag_issues to fetch.
     */
    where?: Drainag_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drainag_issues to fetch.
     */
    orderBy?: Drainag_issuesOrderByWithRelationInput | Drainag_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drainag_issues.
     */
    cursor?: Drainag_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drainag_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drainag_issues.
     */
    skip?: number
    distinct?: Drainag_issuesScalarFieldEnum | Drainag_issuesScalarFieldEnum[]
  }

  /**
   * Drainag_issues create
   */
  export type Drainag_issuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesInclude<ExtArgs> | null
    /**
     * The data needed to create a Drainag_issues.
     */
    data: XOR<Drainag_issuesCreateInput, Drainag_issuesUncheckedCreateInput>
  }

  /**
   * Drainag_issues createMany
   */
  export type Drainag_issuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drainag_issues.
     */
    data: Drainag_issuesCreateManyInput | Drainag_issuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drainag_issues createManyAndReturn
   */
  export type Drainag_issuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * The data used to create many Drainag_issues.
     */
    data: Drainag_issuesCreateManyInput | Drainag_issuesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Drainag_issues update
   */
  export type Drainag_issuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesInclude<ExtArgs> | null
    /**
     * The data needed to update a Drainag_issues.
     */
    data: XOR<Drainag_issuesUpdateInput, Drainag_issuesUncheckedUpdateInput>
    /**
     * Choose, which Drainag_issues to update.
     */
    where: Drainag_issuesWhereUniqueInput
  }

  /**
   * Drainag_issues updateMany
   */
  export type Drainag_issuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drainag_issues.
     */
    data: XOR<Drainag_issuesUpdateManyMutationInput, Drainag_issuesUncheckedUpdateManyInput>
    /**
     * Filter which Drainag_issues to update
     */
    where?: Drainag_issuesWhereInput
    /**
     * Limit how many Drainag_issues to update.
     */
    limit?: number
  }

  /**
   * Drainag_issues updateManyAndReturn
   */
  export type Drainag_issuesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * The data used to update Drainag_issues.
     */
    data: XOR<Drainag_issuesUpdateManyMutationInput, Drainag_issuesUncheckedUpdateManyInput>
    /**
     * Filter which Drainag_issues to update
     */
    where?: Drainag_issuesWhereInput
    /**
     * Limit how many Drainag_issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Drainag_issues upsert
   */
  export type Drainag_issuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesInclude<ExtArgs> | null
    /**
     * The filter to search for the Drainag_issues to update in case it exists.
     */
    where: Drainag_issuesWhereUniqueInput
    /**
     * In case the Drainag_issues found by the `where` argument doesn't exist, create a new Drainag_issues with this data.
     */
    create: XOR<Drainag_issuesCreateInput, Drainag_issuesUncheckedCreateInput>
    /**
     * In case the Drainag_issues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Drainag_issuesUpdateInput, Drainag_issuesUncheckedUpdateInput>
  }

  /**
   * Drainag_issues delete
   */
  export type Drainag_issuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesInclude<ExtArgs> | null
    /**
     * Filter which Drainag_issues to delete.
     */
    where: Drainag_issuesWhereUniqueInput
  }

  /**
   * Drainag_issues deleteMany
   */
  export type Drainag_issuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drainag_issues to delete
     */
    where?: Drainag_issuesWhereInput
    /**
     * Limit how many Drainag_issues to delete.
     */
    limit?: number
  }

  /**
   * Drainag_issues without action
   */
  export type Drainag_issuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drainag_issues
     */
    select?: Drainag_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drainag_issues
     */
    omit?: Drainag_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drainag_issuesInclude<ExtArgs> | null
  }


  /**
   * Model Electricity_issues
   */

  export type AggregateElectricity_issues = {
    _count: Electricity_issuesCountAggregateOutputType | null
    _avg: Electricity_issuesAvgAggregateOutputType | null
    _sum: Electricity_issuesSumAggregateOutputType | null
    _min: Electricity_issuesMinAggregateOutputType | null
    _max: Electricity_issuesMaxAggregateOutputType | null
  }

  export type Electricity_issuesAvgAggregateOutputType = {
    id: number | null
    report_id: number | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
  }

  export type Electricity_issuesSumAggregateOutputType = {
    id: number | null
    report_id: number | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
  }

  export type Electricity_issuesMinAggregateOutputType = {
    id: number | null
    report_id: number | null
    sub_issue: string | null
    description: string | null
    image_url: string | null
    status: string | null
    resolution_detail: string | null
    update_at: Date | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
    resolved_a: Date | null
  }

  export type Electricity_issuesMaxAggregateOutputType = {
    id: number | null
    report_id: number | null
    sub_issue: string | null
    description: string | null
    image_url: string | null
    status: string | null
    resolution_detail: string | null
    update_at: Date | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
    resolved_a: Date | null
  }

  export type Electricity_issuesCountAggregateOutputType = {
    id: number
    report_id: number
    sub_issue: number
    description: number
    image_url: number
    status: number
    resolution_detail: number
    update_at: number
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: number
    resolved_a: number
    _all: number
  }


  export type Electricity_issuesAvgAggregateInputType = {
    id?: true
    report_id?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
  }

  export type Electricity_issuesSumAggregateInputType = {
    id?: true
    report_id?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
  }

  export type Electricity_issuesMinAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
  }

  export type Electricity_issuesMaxAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
  }

  export type Electricity_issuesCountAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
    _all?: true
  }

  export type Electricity_issuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Electricity_issues to aggregate.
     */
    where?: Electricity_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Electricity_issues to fetch.
     */
    orderBy?: Electricity_issuesOrderByWithRelationInput | Electricity_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Electricity_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Electricity_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Electricity_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Electricity_issues
    **/
    _count?: true | Electricity_issuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Electricity_issuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Electricity_issuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Electricity_issuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Electricity_issuesMaxAggregateInputType
  }

  export type GetElectricity_issuesAggregateType<T extends Electricity_issuesAggregateArgs> = {
        [P in keyof T & keyof AggregateElectricity_issues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElectricity_issues[P]>
      : GetScalarType<T[P], AggregateElectricity_issues[P]>
  }




  export type Electricity_issuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Electricity_issuesWhereInput
    orderBy?: Electricity_issuesOrderByWithAggregationInput | Electricity_issuesOrderByWithAggregationInput[]
    by: Electricity_issuesScalarFieldEnum[] | Electricity_issuesScalarFieldEnum
    having?: Electricity_issuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Electricity_issuesCountAggregateInputType | true
    _avg?: Electricity_issuesAvgAggregateInputType
    _sum?: Electricity_issuesSumAggregateInputType
    _min?: Electricity_issuesMinAggregateInputType
    _max?: Electricity_issuesMaxAggregateInputType
  }

  export type Electricity_issuesGroupByOutputType = {
    id: number
    report_id: number
    sub_issue: string
    description: string | null
    image_url: string | null
    status: string
    resolution_detail: string | null
    update_at: Date
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal
    resolved_a: Date | null
    _count: Electricity_issuesCountAggregateOutputType | null
    _avg: Electricity_issuesAvgAggregateOutputType | null
    _sum: Electricity_issuesSumAggregateOutputType | null
    _min: Electricity_issuesMinAggregateOutputType | null
    _max: Electricity_issuesMaxAggregateOutputType | null
  }

  type GetElectricity_issuesGroupByPayload<T extends Electricity_issuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Electricity_issuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Electricity_issuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Electricity_issuesGroupByOutputType[P]>
            : GetScalarType<T[P], Electricity_issuesGroupByOutputType[P]>
        }
      >
    >


  export type Electricity_issuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electricity_issues"]>

  export type Electricity_issuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electricity_issues"]>

  export type Electricity_issuesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electricity_issues"]>

  export type Electricity_issuesSelectScalar = {
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
  }

  export type Electricity_issuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "report_id" | "sub_issue" | "description" | "image_url" | "status" | "resolution_detail" | "update_at" | "severity" | "affected_people" | "urgency" | "economic_impact" | "total_score" | "resolved_a", ExtArgs["result"]["electricity_issues"]>
  export type Electricity_issuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }
  export type Electricity_issuesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }
  export type Electricity_issuesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }

  export type $Electricity_issuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Electricity_issues"
    objects: {
      report: Prisma.$ReportersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      report_id: number
      sub_issue: string
      description: string | null
      image_url: string | null
      status: string
      resolution_detail: string | null
      update_at: Date
      severity: number
      affected_people: number
      urgency: number
      economic_impact: number
      total_score: Prisma.Decimal
      resolved_a: Date | null
    }, ExtArgs["result"]["electricity_issues"]>
    composites: {}
  }

  type Electricity_issuesGetPayload<S extends boolean | null | undefined | Electricity_issuesDefaultArgs> = $Result.GetResult<Prisma.$Electricity_issuesPayload, S>

  type Electricity_issuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Electricity_issuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Electricity_issuesCountAggregateInputType | true
    }

  export interface Electricity_issuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Electricity_issues'], meta: { name: 'Electricity_issues' } }
    /**
     * Find zero or one Electricity_issues that matches the filter.
     * @param {Electricity_issuesFindUniqueArgs} args - Arguments to find a Electricity_issues
     * @example
     * // Get one Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Electricity_issuesFindUniqueArgs>(args: SelectSubset<T, Electricity_issuesFindUniqueArgs<ExtArgs>>): Prisma__Electricity_issuesClient<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Electricity_issues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Electricity_issuesFindUniqueOrThrowArgs} args - Arguments to find a Electricity_issues
     * @example
     * // Get one Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Electricity_issuesFindUniqueOrThrowArgs>(args: SelectSubset<T, Electricity_issuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Electricity_issuesClient<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Electricity_issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Electricity_issuesFindFirstArgs} args - Arguments to find a Electricity_issues
     * @example
     * // Get one Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Electricity_issuesFindFirstArgs>(args?: SelectSubset<T, Electricity_issuesFindFirstArgs<ExtArgs>>): Prisma__Electricity_issuesClient<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Electricity_issues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Electricity_issuesFindFirstOrThrowArgs} args - Arguments to find a Electricity_issues
     * @example
     * // Get one Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Electricity_issuesFindFirstOrThrowArgs>(args?: SelectSubset<T, Electricity_issuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Electricity_issuesClient<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Electricity_issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Electricity_issuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.findMany()
     * 
     * // Get first 10 Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const electricity_issuesWithIdOnly = await prisma.electricity_issues.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Electricity_issuesFindManyArgs>(args?: SelectSubset<T, Electricity_issuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Electricity_issues.
     * @param {Electricity_issuesCreateArgs} args - Arguments to create a Electricity_issues.
     * @example
     * // Create one Electricity_issues
     * const Electricity_issues = await prisma.electricity_issues.create({
     *   data: {
     *     // ... data to create a Electricity_issues
     *   }
     * })
     * 
     */
    create<T extends Electricity_issuesCreateArgs>(args: SelectSubset<T, Electricity_issuesCreateArgs<ExtArgs>>): Prisma__Electricity_issuesClient<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Electricity_issues.
     * @param {Electricity_issuesCreateManyArgs} args - Arguments to create many Electricity_issues.
     * @example
     * // Create many Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Electricity_issuesCreateManyArgs>(args?: SelectSubset<T, Electricity_issuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Electricity_issues and returns the data saved in the database.
     * @param {Electricity_issuesCreateManyAndReturnArgs} args - Arguments to create many Electricity_issues.
     * @example
     * // Create many Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Electricity_issues and only return the `id`
     * const electricity_issuesWithIdOnly = await prisma.electricity_issues.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Electricity_issuesCreateManyAndReturnArgs>(args?: SelectSubset<T, Electricity_issuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Electricity_issues.
     * @param {Electricity_issuesDeleteArgs} args - Arguments to delete one Electricity_issues.
     * @example
     * // Delete one Electricity_issues
     * const Electricity_issues = await prisma.electricity_issues.delete({
     *   where: {
     *     // ... filter to delete one Electricity_issues
     *   }
     * })
     * 
     */
    delete<T extends Electricity_issuesDeleteArgs>(args: SelectSubset<T, Electricity_issuesDeleteArgs<ExtArgs>>): Prisma__Electricity_issuesClient<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Electricity_issues.
     * @param {Electricity_issuesUpdateArgs} args - Arguments to update one Electricity_issues.
     * @example
     * // Update one Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Electricity_issuesUpdateArgs>(args: SelectSubset<T, Electricity_issuesUpdateArgs<ExtArgs>>): Prisma__Electricity_issuesClient<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Electricity_issues.
     * @param {Electricity_issuesDeleteManyArgs} args - Arguments to filter Electricity_issues to delete.
     * @example
     * // Delete a few Electricity_issues
     * const { count } = await prisma.electricity_issues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Electricity_issuesDeleteManyArgs>(args?: SelectSubset<T, Electricity_issuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Electricity_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Electricity_issuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Electricity_issuesUpdateManyArgs>(args: SelectSubset<T, Electricity_issuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Electricity_issues and returns the data updated in the database.
     * @param {Electricity_issuesUpdateManyAndReturnArgs} args - Arguments to update many Electricity_issues.
     * @example
     * // Update many Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Electricity_issues and only return the `id`
     * const electricity_issuesWithIdOnly = await prisma.electricity_issues.updateManyAndReturn({
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
    updateManyAndReturn<T extends Electricity_issuesUpdateManyAndReturnArgs>(args: SelectSubset<T, Electricity_issuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Electricity_issues.
     * @param {Electricity_issuesUpsertArgs} args - Arguments to update or create a Electricity_issues.
     * @example
     * // Update or create a Electricity_issues
     * const electricity_issues = await prisma.electricity_issues.upsert({
     *   create: {
     *     // ... data to create a Electricity_issues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Electricity_issues we want to update
     *   }
     * })
     */
    upsert<T extends Electricity_issuesUpsertArgs>(args: SelectSubset<T, Electricity_issuesUpsertArgs<ExtArgs>>): Prisma__Electricity_issuesClient<$Result.GetResult<Prisma.$Electricity_issuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Electricity_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Electricity_issuesCountArgs} args - Arguments to filter Electricity_issues to count.
     * @example
     * // Count the number of Electricity_issues
     * const count = await prisma.electricity_issues.count({
     *   where: {
     *     // ... the filter for the Electricity_issues we want to count
     *   }
     * })
    **/
    count<T extends Electricity_issuesCountArgs>(
      args?: Subset<T, Electricity_issuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Electricity_issuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Electricity_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Electricity_issuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Electricity_issuesAggregateArgs>(args: Subset<T, Electricity_issuesAggregateArgs>): Prisma.PrismaPromise<GetElectricity_issuesAggregateType<T>>

    /**
     * Group by Electricity_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Electricity_issuesGroupByArgs} args - Group by arguments.
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
      T extends Electricity_issuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Electricity_issuesGroupByArgs['orderBy'] }
        : { orderBy?: Electricity_issuesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Electricity_issuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectricity_issuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Electricity_issues model
   */
  readonly fields: Electricity_issuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Electricity_issues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Electricity_issuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportersDefaultArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Electricity_issues model
   */
  interface Electricity_issuesFieldRefs {
    readonly id: FieldRef<"Electricity_issues", 'Int'>
    readonly report_id: FieldRef<"Electricity_issues", 'Int'>
    readonly sub_issue: FieldRef<"Electricity_issues", 'String'>
    readonly description: FieldRef<"Electricity_issues", 'String'>
    readonly image_url: FieldRef<"Electricity_issues", 'String'>
    readonly status: FieldRef<"Electricity_issues", 'String'>
    readonly resolution_detail: FieldRef<"Electricity_issues", 'String'>
    readonly update_at: FieldRef<"Electricity_issues", 'DateTime'>
    readonly severity: FieldRef<"Electricity_issues", 'Int'>
    readonly affected_people: FieldRef<"Electricity_issues", 'Int'>
    readonly urgency: FieldRef<"Electricity_issues", 'Int'>
    readonly economic_impact: FieldRef<"Electricity_issues", 'Int'>
    readonly total_score: FieldRef<"Electricity_issues", 'Decimal'>
    readonly resolved_a: FieldRef<"Electricity_issues", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Electricity_issues findUnique
   */
  export type Electricity_issuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Electricity_issues to fetch.
     */
    where: Electricity_issuesWhereUniqueInput
  }

  /**
   * Electricity_issues findUniqueOrThrow
   */
  export type Electricity_issuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Electricity_issues to fetch.
     */
    where: Electricity_issuesWhereUniqueInput
  }

  /**
   * Electricity_issues findFirst
   */
  export type Electricity_issuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Electricity_issues to fetch.
     */
    where?: Electricity_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Electricity_issues to fetch.
     */
    orderBy?: Electricity_issuesOrderByWithRelationInput | Electricity_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Electricity_issues.
     */
    cursor?: Electricity_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Electricity_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Electricity_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Electricity_issues.
     */
    distinct?: Electricity_issuesScalarFieldEnum | Electricity_issuesScalarFieldEnum[]
  }

  /**
   * Electricity_issues findFirstOrThrow
   */
  export type Electricity_issuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Electricity_issues to fetch.
     */
    where?: Electricity_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Electricity_issues to fetch.
     */
    orderBy?: Electricity_issuesOrderByWithRelationInput | Electricity_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Electricity_issues.
     */
    cursor?: Electricity_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Electricity_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Electricity_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Electricity_issues.
     */
    distinct?: Electricity_issuesScalarFieldEnum | Electricity_issuesScalarFieldEnum[]
  }

  /**
   * Electricity_issues findMany
   */
  export type Electricity_issuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Electricity_issues to fetch.
     */
    where?: Electricity_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Electricity_issues to fetch.
     */
    orderBy?: Electricity_issuesOrderByWithRelationInput | Electricity_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Electricity_issues.
     */
    cursor?: Electricity_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Electricity_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Electricity_issues.
     */
    skip?: number
    distinct?: Electricity_issuesScalarFieldEnum | Electricity_issuesScalarFieldEnum[]
  }

  /**
   * Electricity_issues create
   */
  export type Electricity_issuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesInclude<ExtArgs> | null
    /**
     * The data needed to create a Electricity_issues.
     */
    data: XOR<Electricity_issuesCreateInput, Electricity_issuesUncheckedCreateInput>
  }

  /**
   * Electricity_issues createMany
   */
  export type Electricity_issuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Electricity_issues.
     */
    data: Electricity_issuesCreateManyInput | Electricity_issuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Electricity_issues createManyAndReturn
   */
  export type Electricity_issuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * The data used to create many Electricity_issues.
     */
    data: Electricity_issuesCreateManyInput | Electricity_issuesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Electricity_issues update
   */
  export type Electricity_issuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesInclude<ExtArgs> | null
    /**
     * The data needed to update a Electricity_issues.
     */
    data: XOR<Electricity_issuesUpdateInput, Electricity_issuesUncheckedUpdateInput>
    /**
     * Choose, which Electricity_issues to update.
     */
    where: Electricity_issuesWhereUniqueInput
  }

  /**
   * Electricity_issues updateMany
   */
  export type Electricity_issuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Electricity_issues.
     */
    data: XOR<Electricity_issuesUpdateManyMutationInput, Electricity_issuesUncheckedUpdateManyInput>
    /**
     * Filter which Electricity_issues to update
     */
    where?: Electricity_issuesWhereInput
    /**
     * Limit how many Electricity_issues to update.
     */
    limit?: number
  }

  /**
   * Electricity_issues updateManyAndReturn
   */
  export type Electricity_issuesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * The data used to update Electricity_issues.
     */
    data: XOR<Electricity_issuesUpdateManyMutationInput, Electricity_issuesUncheckedUpdateManyInput>
    /**
     * Filter which Electricity_issues to update
     */
    where?: Electricity_issuesWhereInput
    /**
     * Limit how many Electricity_issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Electricity_issues upsert
   */
  export type Electricity_issuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesInclude<ExtArgs> | null
    /**
     * The filter to search for the Electricity_issues to update in case it exists.
     */
    where: Electricity_issuesWhereUniqueInput
    /**
     * In case the Electricity_issues found by the `where` argument doesn't exist, create a new Electricity_issues with this data.
     */
    create: XOR<Electricity_issuesCreateInput, Electricity_issuesUncheckedCreateInput>
    /**
     * In case the Electricity_issues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Electricity_issuesUpdateInput, Electricity_issuesUncheckedUpdateInput>
  }

  /**
   * Electricity_issues delete
   */
  export type Electricity_issuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesInclude<ExtArgs> | null
    /**
     * Filter which Electricity_issues to delete.
     */
    where: Electricity_issuesWhereUniqueInput
  }

  /**
   * Electricity_issues deleteMany
   */
  export type Electricity_issuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Electricity_issues to delete
     */
    where?: Electricity_issuesWhereInput
    /**
     * Limit how many Electricity_issues to delete.
     */
    limit?: number
  }

  /**
   * Electricity_issues without action
   */
  export type Electricity_issuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Electricity_issues
     */
    select?: Electricity_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Electricity_issues
     */
    omit?: Electricity_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Electricity_issuesInclude<ExtArgs> | null
  }


  /**
   * Model Water_issues
   */

  export type AggregateWater_issues = {
    _count: Water_issuesCountAggregateOutputType | null
    _avg: Water_issuesAvgAggregateOutputType | null
    _sum: Water_issuesSumAggregateOutputType | null
    _min: Water_issuesMinAggregateOutputType | null
    _max: Water_issuesMaxAggregateOutputType | null
  }

  export type Water_issuesAvgAggregateOutputType = {
    id: number | null
    report_id: number | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
  }

  export type Water_issuesSumAggregateOutputType = {
    id: number | null
    report_id: number | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
  }

  export type Water_issuesMinAggregateOutputType = {
    id: number | null
    report_id: number | null
    sub_issue: string | null
    description: string | null
    image_url: string | null
    status: string | null
    resolution_detail: string | null
    update_at: Date | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
    resolved_a: Date | null
  }

  export type Water_issuesMaxAggregateOutputType = {
    id: number | null
    report_id: number | null
    sub_issue: string | null
    description: string | null
    image_url: string | null
    status: string | null
    resolution_detail: string | null
    update_at: Date | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
    resolved_a: Date | null
  }

  export type Water_issuesCountAggregateOutputType = {
    id: number
    report_id: number
    sub_issue: number
    description: number
    image_url: number
    status: number
    resolution_detail: number
    update_at: number
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: number
    resolved_a: number
    _all: number
  }


  export type Water_issuesAvgAggregateInputType = {
    id?: true
    report_id?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
  }

  export type Water_issuesSumAggregateInputType = {
    id?: true
    report_id?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
  }

  export type Water_issuesMinAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
  }

  export type Water_issuesMaxAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
  }

  export type Water_issuesCountAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
    _all?: true
  }

  export type Water_issuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Water_issues to aggregate.
     */
    where?: Water_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Water_issues to fetch.
     */
    orderBy?: Water_issuesOrderByWithRelationInput | Water_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Water_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Water_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Water_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Water_issues
    **/
    _count?: true | Water_issuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Water_issuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Water_issuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Water_issuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Water_issuesMaxAggregateInputType
  }

  export type GetWater_issuesAggregateType<T extends Water_issuesAggregateArgs> = {
        [P in keyof T & keyof AggregateWater_issues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWater_issues[P]>
      : GetScalarType<T[P], AggregateWater_issues[P]>
  }




  export type Water_issuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Water_issuesWhereInput
    orderBy?: Water_issuesOrderByWithAggregationInput | Water_issuesOrderByWithAggregationInput[]
    by: Water_issuesScalarFieldEnum[] | Water_issuesScalarFieldEnum
    having?: Water_issuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Water_issuesCountAggregateInputType | true
    _avg?: Water_issuesAvgAggregateInputType
    _sum?: Water_issuesSumAggregateInputType
    _min?: Water_issuesMinAggregateInputType
    _max?: Water_issuesMaxAggregateInputType
  }

  export type Water_issuesGroupByOutputType = {
    id: number
    report_id: number
    sub_issue: string
    description: string | null
    image_url: string | null
    status: string
    resolution_detail: string | null
    update_at: Date
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal
    resolved_a: Date | null
    _count: Water_issuesCountAggregateOutputType | null
    _avg: Water_issuesAvgAggregateOutputType | null
    _sum: Water_issuesSumAggregateOutputType | null
    _min: Water_issuesMinAggregateOutputType | null
    _max: Water_issuesMaxAggregateOutputType | null
  }

  type GetWater_issuesGroupByPayload<T extends Water_issuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Water_issuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Water_issuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Water_issuesGroupByOutputType[P]>
            : GetScalarType<T[P], Water_issuesGroupByOutputType[P]>
        }
      >
    >


  export type Water_issuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["water_issues"]>

  export type Water_issuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["water_issues"]>

  export type Water_issuesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["water_issues"]>

  export type Water_issuesSelectScalar = {
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
  }

  export type Water_issuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "report_id" | "sub_issue" | "description" | "image_url" | "status" | "resolution_detail" | "update_at" | "severity" | "affected_people" | "urgency" | "economic_impact" | "total_score" | "resolved_a", ExtArgs["result"]["water_issues"]>
  export type Water_issuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }
  export type Water_issuesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }
  export type Water_issuesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }

  export type $Water_issuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Water_issues"
    objects: {
      report: Prisma.$ReportersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      report_id: number
      sub_issue: string
      description: string | null
      image_url: string | null
      status: string
      resolution_detail: string | null
      update_at: Date
      severity: number
      affected_people: number
      urgency: number
      economic_impact: number
      total_score: Prisma.Decimal
      resolved_a: Date | null
    }, ExtArgs["result"]["water_issues"]>
    composites: {}
  }

  type Water_issuesGetPayload<S extends boolean | null | undefined | Water_issuesDefaultArgs> = $Result.GetResult<Prisma.$Water_issuesPayload, S>

  type Water_issuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Water_issuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Water_issuesCountAggregateInputType | true
    }

  export interface Water_issuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Water_issues'], meta: { name: 'Water_issues' } }
    /**
     * Find zero or one Water_issues that matches the filter.
     * @param {Water_issuesFindUniqueArgs} args - Arguments to find a Water_issues
     * @example
     * // Get one Water_issues
     * const water_issues = await prisma.water_issues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Water_issuesFindUniqueArgs>(args: SelectSubset<T, Water_issuesFindUniqueArgs<ExtArgs>>): Prisma__Water_issuesClient<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Water_issues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Water_issuesFindUniqueOrThrowArgs} args - Arguments to find a Water_issues
     * @example
     * // Get one Water_issues
     * const water_issues = await prisma.water_issues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Water_issuesFindUniqueOrThrowArgs>(args: SelectSubset<T, Water_issuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Water_issuesClient<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Water_issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Water_issuesFindFirstArgs} args - Arguments to find a Water_issues
     * @example
     * // Get one Water_issues
     * const water_issues = await prisma.water_issues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Water_issuesFindFirstArgs>(args?: SelectSubset<T, Water_issuesFindFirstArgs<ExtArgs>>): Prisma__Water_issuesClient<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Water_issues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Water_issuesFindFirstOrThrowArgs} args - Arguments to find a Water_issues
     * @example
     * // Get one Water_issues
     * const water_issues = await prisma.water_issues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Water_issuesFindFirstOrThrowArgs>(args?: SelectSubset<T, Water_issuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Water_issuesClient<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Water_issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Water_issuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Water_issues
     * const water_issues = await prisma.water_issues.findMany()
     * 
     * // Get first 10 Water_issues
     * const water_issues = await prisma.water_issues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const water_issuesWithIdOnly = await prisma.water_issues.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Water_issuesFindManyArgs>(args?: SelectSubset<T, Water_issuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Water_issues.
     * @param {Water_issuesCreateArgs} args - Arguments to create a Water_issues.
     * @example
     * // Create one Water_issues
     * const Water_issues = await prisma.water_issues.create({
     *   data: {
     *     // ... data to create a Water_issues
     *   }
     * })
     * 
     */
    create<T extends Water_issuesCreateArgs>(args: SelectSubset<T, Water_issuesCreateArgs<ExtArgs>>): Prisma__Water_issuesClient<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Water_issues.
     * @param {Water_issuesCreateManyArgs} args - Arguments to create many Water_issues.
     * @example
     * // Create many Water_issues
     * const water_issues = await prisma.water_issues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Water_issuesCreateManyArgs>(args?: SelectSubset<T, Water_issuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Water_issues and returns the data saved in the database.
     * @param {Water_issuesCreateManyAndReturnArgs} args - Arguments to create many Water_issues.
     * @example
     * // Create many Water_issues
     * const water_issues = await prisma.water_issues.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Water_issues and only return the `id`
     * const water_issuesWithIdOnly = await prisma.water_issues.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Water_issuesCreateManyAndReturnArgs>(args?: SelectSubset<T, Water_issuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Water_issues.
     * @param {Water_issuesDeleteArgs} args - Arguments to delete one Water_issues.
     * @example
     * // Delete one Water_issues
     * const Water_issues = await prisma.water_issues.delete({
     *   where: {
     *     // ... filter to delete one Water_issues
     *   }
     * })
     * 
     */
    delete<T extends Water_issuesDeleteArgs>(args: SelectSubset<T, Water_issuesDeleteArgs<ExtArgs>>): Prisma__Water_issuesClient<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Water_issues.
     * @param {Water_issuesUpdateArgs} args - Arguments to update one Water_issues.
     * @example
     * // Update one Water_issues
     * const water_issues = await prisma.water_issues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Water_issuesUpdateArgs>(args: SelectSubset<T, Water_issuesUpdateArgs<ExtArgs>>): Prisma__Water_issuesClient<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Water_issues.
     * @param {Water_issuesDeleteManyArgs} args - Arguments to filter Water_issues to delete.
     * @example
     * // Delete a few Water_issues
     * const { count } = await prisma.water_issues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Water_issuesDeleteManyArgs>(args?: SelectSubset<T, Water_issuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Water_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Water_issuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Water_issues
     * const water_issues = await prisma.water_issues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Water_issuesUpdateManyArgs>(args: SelectSubset<T, Water_issuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Water_issues and returns the data updated in the database.
     * @param {Water_issuesUpdateManyAndReturnArgs} args - Arguments to update many Water_issues.
     * @example
     * // Update many Water_issues
     * const water_issues = await prisma.water_issues.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Water_issues and only return the `id`
     * const water_issuesWithIdOnly = await prisma.water_issues.updateManyAndReturn({
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
    updateManyAndReturn<T extends Water_issuesUpdateManyAndReturnArgs>(args: SelectSubset<T, Water_issuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Water_issues.
     * @param {Water_issuesUpsertArgs} args - Arguments to update or create a Water_issues.
     * @example
     * // Update or create a Water_issues
     * const water_issues = await prisma.water_issues.upsert({
     *   create: {
     *     // ... data to create a Water_issues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Water_issues we want to update
     *   }
     * })
     */
    upsert<T extends Water_issuesUpsertArgs>(args: SelectSubset<T, Water_issuesUpsertArgs<ExtArgs>>): Prisma__Water_issuesClient<$Result.GetResult<Prisma.$Water_issuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Water_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Water_issuesCountArgs} args - Arguments to filter Water_issues to count.
     * @example
     * // Count the number of Water_issues
     * const count = await prisma.water_issues.count({
     *   where: {
     *     // ... the filter for the Water_issues we want to count
     *   }
     * })
    **/
    count<T extends Water_issuesCountArgs>(
      args?: Subset<T, Water_issuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Water_issuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Water_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Water_issuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Water_issuesAggregateArgs>(args: Subset<T, Water_issuesAggregateArgs>): Prisma.PrismaPromise<GetWater_issuesAggregateType<T>>

    /**
     * Group by Water_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Water_issuesGroupByArgs} args - Group by arguments.
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
      T extends Water_issuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Water_issuesGroupByArgs['orderBy'] }
        : { orderBy?: Water_issuesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Water_issuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWater_issuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Water_issues model
   */
  readonly fields: Water_issuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Water_issues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Water_issuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportersDefaultArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Water_issues model
   */
  interface Water_issuesFieldRefs {
    readonly id: FieldRef<"Water_issues", 'Int'>
    readonly report_id: FieldRef<"Water_issues", 'Int'>
    readonly sub_issue: FieldRef<"Water_issues", 'String'>
    readonly description: FieldRef<"Water_issues", 'String'>
    readonly image_url: FieldRef<"Water_issues", 'String'>
    readonly status: FieldRef<"Water_issues", 'String'>
    readonly resolution_detail: FieldRef<"Water_issues", 'String'>
    readonly update_at: FieldRef<"Water_issues", 'DateTime'>
    readonly severity: FieldRef<"Water_issues", 'Int'>
    readonly affected_people: FieldRef<"Water_issues", 'Int'>
    readonly urgency: FieldRef<"Water_issues", 'Int'>
    readonly economic_impact: FieldRef<"Water_issues", 'Int'>
    readonly total_score: FieldRef<"Water_issues", 'Decimal'>
    readonly resolved_a: FieldRef<"Water_issues", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Water_issues findUnique
   */
  export type Water_issuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Water_issues to fetch.
     */
    where: Water_issuesWhereUniqueInput
  }

  /**
   * Water_issues findUniqueOrThrow
   */
  export type Water_issuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Water_issues to fetch.
     */
    where: Water_issuesWhereUniqueInput
  }

  /**
   * Water_issues findFirst
   */
  export type Water_issuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Water_issues to fetch.
     */
    where?: Water_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Water_issues to fetch.
     */
    orderBy?: Water_issuesOrderByWithRelationInput | Water_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Water_issues.
     */
    cursor?: Water_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Water_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Water_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Water_issues.
     */
    distinct?: Water_issuesScalarFieldEnum | Water_issuesScalarFieldEnum[]
  }

  /**
   * Water_issues findFirstOrThrow
   */
  export type Water_issuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Water_issues to fetch.
     */
    where?: Water_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Water_issues to fetch.
     */
    orderBy?: Water_issuesOrderByWithRelationInput | Water_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Water_issues.
     */
    cursor?: Water_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Water_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Water_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Water_issues.
     */
    distinct?: Water_issuesScalarFieldEnum | Water_issuesScalarFieldEnum[]
  }

  /**
   * Water_issues findMany
   */
  export type Water_issuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Water_issues to fetch.
     */
    where?: Water_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Water_issues to fetch.
     */
    orderBy?: Water_issuesOrderByWithRelationInput | Water_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Water_issues.
     */
    cursor?: Water_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Water_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Water_issues.
     */
    skip?: number
    distinct?: Water_issuesScalarFieldEnum | Water_issuesScalarFieldEnum[]
  }

  /**
   * Water_issues create
   */
  export type Water_issuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesInclude<ExtArgs> | null
    /**
     * The data needed to create a Water_issues.
     */
    data: XOR<Water_issuesCreateInput, Water_issuesUncheckedCreateInput>
  }

  /**
   * Water_issues createMany
   */
  export type Water_issuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Water_issues.
     */
    data: Water_issuesCreateManyInput | Water_issuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Water_issues createManyAndReturn
   */
  export type Water_issuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * The data used to create many Water_issues.
     */
    data: Water_issuesCreateManyInput | Water_issuesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Water_issues update
   */
  export type Water_issuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesInclude<ExtArgs> | null
    /**
     * The data needed to update a Water_issues.
     */
    data: XOR<Water_issuesUpdateInput, Water_issuesUncheckedUpdateInput>
    /**
     * Choose, which Water_issues to update.
     */
    where: Water_issuesWhereUniqueInput
  }

  /**
   * Water_issues updateMany
   */
  export type Water_issuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Water_issues.
     */
    data: XOR<Water_issuesUpdateManyMutationInput, Water_issuesUncheckedUpdateManyInput>
    /**
     * Filter which Water_issues to update
     */
    where?: Water_issuesWhereInput
    /**
     * Limit how many Water_issues to update.
     */
    limit?: number
  }

  /**
   * Water_issues updateManyAndReturn
   */
  export type Water_issuesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * The data used to update Water_issues.
     */
    data: XOR<Water_issuesUpdateManyMutationInput, Water_issuesUncheckedUpdateManyInput>
    /**
     * Filter which Water_issues to update
     */
    where?: Water_issuesWhereInput
    /**
     * Limit how many Water_issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Water_issues upsert
   */
  export type Water_issuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesInclude<ExtArgs> | null
    /**
     * The filter to search for the Water_issues to update in case it exists.
     */
    where: Water_issuesWhereUniqueInput
    /**
     * In case the Water_issues found by the `where` argument doesn't exist, create a new Water_issues with this data.
     */
    create: XOR<Water_issuesCreateInput, Water_issuesUncheckedCreateInput>
    /**
     * In case the Water_issues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Water_issuesUpdateInput, Water_issuesUncheckedUpdateInput>
  }

  /**
   * Water_issues delete
   */
  export type Water_issuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesInclude<ExtArgs> | null
    /**
     * Filter which Water_issues to delete.
     */
    where: Water_issuesWhereUniqueInput
  }

  /**
   * Water_issues deleteMany
   */
  export type Water_issuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Water_issues to delete
     */
    where?: Water_issuesWhereInput
    /**
     * Limit how many Water_issues to delete.
     */
    limit?: number
  }

  /**
   * Water_issues without action
   */
  export type Water_issuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Water_issues
     */
    select?: Water_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Water_issues
     */
    omit?: Water_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Water_issuesInclude<ExtArgs> | null
  }


  /**
   * Model Health_issues
   */

  export type AggregateHealth_issues = {
    _count: Health_issuesCountAggregateOutputType | null
    _avg: Health_issuesAvgAggregateOutputType | null
    _sum: Health_issuesSumAggregateOutputType | null
    _min: Health_issuesMinAggregateOutputType | null
    _max: Health_issuesMaxAggregateOutputType | null
  }

  export type Health_issuesAvgAggregateOutputType = {
    id: number | null
    report_id: number | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
  }

  export type Health_issuesSumAggregateOutputType = {
    id: number | null
    report_id: number | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
  }

  export type Health_issuesMinAggregateOutputType = {
    id: number | null
    report_id: number | null
    sub_issue: string | null
    description: string | null
    image_url: string | null
    status: string | null
    resolution_detail: string | null
    update_at: Date | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
    resolved_a: Date | null
  }

  export type Health_issuesMaxAggregateOutputType = {
    id: number | null
    report_id: number | null
    sub_issue: string | null
    description: string | null
    image_url: string | null
    status: string | null
    resolution_detail: string | null
    update_at: Date | null
    severity: number | null
    affected_people: number | null
    urgency: number | null
    economic_impact: number | null
    total_score: Decimal | null
    resolved_a: Date | null
  }

  export type Health_issuesCountAggregateOutputType = {
    id: number
    report_id: number
    sub_issue: number
    description: number
    image_url: number
    status: number
    resolution_detail: number
    update_at: number
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: number
    resolved_a: number
    _all: number
  }


  export type Health_issuesAvgAggregateInputType = {
    id?: true
    report_id?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
  }

  export type Health_issuesSumAggregateInputType = {
    id?: true
    report_id?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
  }

  export type Health_issuesMinAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
  }

  export type Health_issuesMaxAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
  }

  export type Health_issuesCountAggregateInputType = {
    id?: true
    report_id?: true
    sub_issue?: true
    description?: true
    image_url?: true
    status?: true
    resolution_detail?: true
    update_at?: true
    severity?: true
    affected_people?: true
    urgency?: true
    economic_impact?: true
    total_score?: true
    resolved_a?: true
    _all?: true
  }

  export type Health_issuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Health_issues to aggregate.
     */
    where?: Health_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health_issues to fetch.
     */
    orderBy?: Health_issuesOrderByWithRelationInput | Health_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Health_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Health_issues
    **/
    _count?: true | Health_issuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Health_issuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Health_issuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Health_issuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Health_issuesMaxAggregateInputType
  }

  export type GetHealth_issuesAggregateType<T extends Health_issuesAggregateArgs> = {
        [P in keyof T & keyof AggregateHealth_issues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealth_issues[P]>
      : GetScalarType<T[P], AggregateHealth_issues[P]>
  }




  export type Health_issuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Health_issuesWhereInput
    orderBy?: Health_issuesOrderByWithAggregationInput | Health_issuesOrderByWithAggregationInput[]
    by: Health_issuesScalarFieldEnum[] | Health_issuesScalarFieldEnum
    having?: Health_issuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Health_issuesCountAggregateInputType | true
    _avg?: Health_issuesAvgAggregateInputType
    _sum?: Health_issuesSumAggregateInputType
    _min?: Health_issuesMinAggregateInputType
    _max?: Health_issuesMaxAggregateInputType
  }

  export type Health_issuesGroupByOutputType = {
    id: number
    report_id: number
    sub_issue: string
    description: string | null
    image_url: string | null
    status: string
    resolution_detail: string | null
    update_at: Date
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal
    resolved_a: Date | null
    _count: Health_issuesCountAggregateOutputType | null
    _avg: Health_issuesAvgAggregateOutputType | null
    _sum: Health_issuesSumAggregateOutputType | null
    _min: Health_issuesMinAggregateOutputType | null
    _max: Health_issuesMaxAggregateOutputType | null
  }

  type GetHealth_issuesGroupByPayload<T extends Health_issuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Health_issuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Health_issuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Health_issuesGroupByOutputType[P]>
            : GetScalarType<T[P], Health_issuesGroupByOutputType[P]>
        }
      >
    >


  export type Health_issuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["health_issues"]>

  export type Health_issuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["health_issues"]>

  export type Health_issuesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["health_issues"]>

  export type Health_issuesSelectScalar = {
    id?: boolean
    report_id?: boolean
    sub_issue?: boolean
    description?: boolean
    image_url?: boolean
    status?: boolean
    resolution_detail?: boolean
    update_at?: boolean
    severity?: boolean
    affected_people?: boolean
    urgency?: boolean
    economic_impact?: boolean
    total_score?: boolean
    resolved_a?: boolean
  }

  export type Health_issuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "report_id" | "sub_issue" | "description" | "image_url" | "status" | "resolution_detail" | "update_at" | "severity" | "affected_people" | "urgency" | "economic_impact" | "total_score" | "resolved_a", ExtArgs["result"]["health_issues"]>
  export type Health_issuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }
  export type Health_issuesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }
  export type Health_issuesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportersDefaultArgs<ExtArgs>
  }

  export type $Health_issuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Health_issues"
    objects: {
      report: Prisma.$ReportersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      report_id: number
      sub_issue: string
      description: string | null
      image_url: string | null
      status: string
      resolution_detail: string | null
      update_at: Date
      severity: number
      affected_people: number
      urgency: number
      economic_impact: number
      total_score: Prisma.Decimal
      resolved_a: Date | null
    }, ExtArgs["result"]["health_issues"]>
    composites: {}
  }

  type Health_issuesGetPayload<S extends boolean | null | undefined | Health_issuesDefaultArgs> = $Result.GetResult<Prisma.$Health_issuesPayload, S>

  type Health_issuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Health_issuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Health_issuesCountAggregateInputType | true
    }

  export interface Health_issuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Health_issues'], meta: { name: 'Health_issues' } }
    /**
     * Find zero or one Health_issues that matches the filter.
     * @param {Health_issuesFindUniqueArgs} args - Arguments to find a Health_issues
     * @example
     * // Get one Health_issues
     * const health_issues = await prisma.health_issues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Health_issuesFindUniqueArgs>(args: SelectSubset<T, Health_issuesFindUniqueArgs<ExtArgs>>): Prisma__Health_issuesClient<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Health_issues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Health_issuesFindUniqueOrThrowArgs} args - Arguments to find a Health_issues
     * @example
     * // Get one Health_issues
     * const health_issues = await prisma.health_issues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Health_issuesFindUniqueOrThrowArgs>(args: SelectSubset<T, Health_issuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Health_issuesClient<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health_issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_issuesFindFirstArgs} args - Arguments to find a Health_issues
     * @example
     * // Get one Health_issues
     * const health_issues = await prisma.health_issues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Health_issuesFindFirstArgs>(args?: SelectSubset<T, Health_issuesFindFirstArgs<ExtArgs>>): Prisma__Health_issuesClient<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health_issues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_issuesFindFirstOrThrowArgs} args - Arguments to find a Health_issues
     * @example
     * // Get one Health_issues
     * const health_issues = await prisma.health_issues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Health_issuesFindFirstOrThrowArgs>(args?: SelectSubset<T, Health_issuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Health_issuesClient<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Health_issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_issuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Health_issues
     * const health_issues = await prisma.health_issues.findMany()
     * 
     * // Get first 10 Health_issues
     * const health_issues = await prisma.health_issues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const health_issuesWithIdOnly = await prisma.health_issues.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Health_issuesFindManyArgs>(args?: SelectSubset<T, Health_issuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Health_issues.
     * @param {Health_issuesCreateArgs} args - Arguments to create a Health_issues.
     * @example
     * // Create one Health_issues
     * const Health_issues = await prisma.health_issues.create({
     *   data: {
     *     // ... data to create a Health_issues
     *   }
     * })
     * 
     */
    create<T extends Health_issuesCreateArgs>(args: SelectSubset<T, Health_issuesCreateArgs<ExtArgs>>): Prisma__Health_issuesClient<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Health_issues.
     * @param {Health_issuesCreateManyArgs} args - Arguments to create many Health_issues.
     * @example
     * // Create many Health_issues
     * const health_issues = await prisma.health_issues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Health_issuesCreateManyArgs>(args?: SelectSubset<T, Health_issuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Health_issues and returns the data saved in the database.
     * @param {Health_issuesCreateManyAndReturnArgs} args - Arguments to create many Health_issues.
     * @example
     * // Create many Health_issues
     * const health_issues = await prisma.health_issues.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Health_issues and only return the `id`
     * const health_issuesWithIdOnly = await prisma.health_issues.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Health_issuesCreateManyAndReturnArgs>(args?: SelectSubset<T, Health_issuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Health_issues.
     * @param {Health_issuesDeleteArgs} args - Arguments to delete one Health_issues.
     * @example
     * // Delete one Health_issues
     * const Health_issues = await prisma.health_issues.delete({
     *   where: {
     *     // ... filter to delete one Health_issues
     *   }
     * })
     * 
     */
    delete<T extends Health_issuesDeleteArgs>(args: SelectSubset<T, Health_issuesDeleteArgs<ExtArgs>>): Prisma__Health_issuesClient<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Health_issues.
     * @param {Health_issuesUpdateArgs} args - Arguments to update one Health_issues.
     * @example
     * // Update one Health_issues
     * const health_issues = await prisma.health_issues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Health_issuesUpdateArgs>(args: SelectSubset<T, Health_issuesUpdateArgs<ExtArgs>>): Prisma__Health_issuesClient<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Health_issues.
     * @param {Health_issuesDeleteManyArgs} args - Arguments to filter Health_issues to delete.
     * @example
     * // Delete a few Health_issues
     * const { count } = await prisma.health_issues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Health_issuesDeleteManyArgs>(args?: SelectSubset<T, Health_issuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Health_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_issuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Health_issues
     * const health_issues = await prisma.health_issues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Health_issuesUpdateManyArgs>(args: SelectSubset<T, Health_issuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Health_issues and returns the data updated in the database.
     * @param {Health_issuesUpdateManyAndReturnArgs} args - Arguments to update many Health_issues.
     * @example
     * // Update many Health_issues
     * const health_issues = await prisma.health_issues.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Health_issues and only return the `id`
     * const health_issuesWithIdOnly = await prisma.health_issues.updateManyAndReturn({
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
    updateManyAndReturn<T extends Health_issuesUpdateManyAndReturnArgs>(args: SelectSubset<T, Health_issuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Health_issues.
     * @param {Health_issuesUpsertArgs} args - Arguments to update or create a Health_issues.
     * @example
     * // Update or create a Health_issues
     * const health_issues = await prisma.health_issues.upsert({
     *   create: {
     *     // ... data to create a Health_issues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Health_issues we want to update
     *   }
     * })
     */
    upsert<T extends Health_issuesUpsertArgs>(args: SelectSubset<T, Health_issuesUpsertArgs<ExtArgs>>): Prisma__Health_issuesClient<$Result.GetResult<Prisma.$Health_issuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Health_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_issuesCountArgs} args - Arguments to filter Health_issues to count.
     * @example
     * // Count the number of Health_issues
     * const count = await prisma.health_issues.count({
     *   where: {
     *     // ... the filter for the Health_issues we want to count
     *   }
     * })
    **/
    count<T extends Health_issuesCountArgs>(
      args?: Subset<T, Health_issuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Health_issuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Health_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_issuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Health_issuesAggregateArgs>(args: Subset<T, Health_issuesAggregateArgs>): Prisma.PrismaPromise<GetHealth_issuesAggregateType<T>>

    /**
     * Group by Health_issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_issuesGroupByArgs} args - Group by arguments.
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
      T extends Health_issuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Health_issuesGroupByArgs['orderBy'] }
        : { orderBy?: Health_issuesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Health_issuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealth_issuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Health_issues model
   */
  readonly fields: Health_issuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Health_issues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Health_issuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportersDefaultArgs<ExtArgs>>): Prisma__ReportersClient<$Result.GetResult<Prisma.$ReportersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Health_issues model
   */
  interface Health_issuesFieldRefs {
    readonly id: FieldRef<"Health_issues", 'Int'>
    readonly report_id: FieldRef<"Health_issues", 'Int'>
    readonly sub_issue: FieldRef<"Health_issues", 'String'>
    readonly description: FieldRef<"Health_issues", 'String'>
    readonly image_url: FieldRef<"Health_issues", 'String'>
    readonly status: FieldRef<"Health_issues", 'String'>
    readonly resolution_detail: FieldRef<"Health_issues", 'String'>
    readonly update_at: FieldRef<"Health_issues", 'DateTime'>
    readonly severity: FieldRef<"Health_issues", 'Int'>
    readonly affected_people: FieldRef<"Health_issues", 'Int'>
    readonly urgency: FieldRef<"Health_issues", 'Int'>
    readonly economic_impact: FieldRef<"Health_issues", 'Int'>
    readonly total_score: FieldRef<"Health_issues", 'Decimal'>
    readonly resolved_a: FieldRef<"Health_issues", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Health_issues findUnique
   */
  export type Health_issuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Health_issues to fetch.
     */
    where: Health_issuesWhereUniqueInput
  }

  /**
   * Health_issues findUniqueOrThrow
   */
  export type Health_issuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Health_issues to fetch.
     */
    where: Health_issuesWhereUniqueInput
  }

  /**
   * Health_issues findFirst
   */
  export type Health_issuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Health_issues to fetch.
     */
    where?: Health_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health_issues to fetch.
     */
    orderBy?: Health_issuesOrderByWithRelationInput | Health_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Health_issues.
     */
    cursor?: Health_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Health_issues.
     */
    distinct?: Health_issuesScalarFieldEnum | Health_issuesScalarFieldEnum[]
  }

  /**
   * Health_issues findFirstOrThrow
   */
  export type Health_issuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Health_issues to fetch.
     */
    where?: Health_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health_issues to fetch.
     */
    orderBy?: Health_issuesOrderByWithRelationInput | Health_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Health_issues.
     */
    cursor?: Health_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health_issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Health_issues.
     */
    distinct?: Health_issuesScalarFieldEnum | Health_issuesScalarFieldEnum[]
  }

  /**
   * Health_issues findMany
   */
  export type Health_issuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesInclude<ExtArgs> | null
    /**
     * Filter, which Health_issues to fetch.
     */
    where?: Health_issuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health_issues to fetch.
     */
    orderBy?: Health_issuesOrderByWithRelationInput | Health_issuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Health_issues.
     */
    cursor?: Health_issuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health_issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health_issues.
     */
    skip?: number
    distinct?: Health_issuesScalarFieldEnum | Health_issuesScalarFieldEnum[]
  }

  /**
   * Health_issues create
   */
  export type Health_issuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesInclude<ExtArgs> | null
    /**
     * The data needed to create a Health_issues.
     */
    data: XOR<Health_issuesCreateInput, Health_issuesUncheckedCreateInput>
  }

  /**
   * Health_issues createMany
   */
  export type Health_issuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Health_issues.
     */
    data: Health_issuesCreateManyInput | Health_issuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Health_issues createManyAndReturn
   */
  export type Health_issuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * The data used to create many Health_issues.
     */
    data: Health_issuesCreateManyInput | Health_issuesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Health_issues update
   */
  export type Health_issuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesInclude<ExtArgs> | null
    /**
     * The data needed to update a Health_issues.
     */
    data: XOR<Health_issuesUpdateInput, Health_issuesUncheckedUpdateInput>
    /**
     * Choose, which Health_issues to update.
     */
    where: Health_issuesWhereUniqueInput
  }

  /**
   * Health_issues updateMany
   */
  export type Health_issuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Health_issues.
     */
    data: XOR<Health_issuesUpdateManyMutationInput, Health_issuesUncheckedUpdateManyInput>
    /**
     * Filter which Health_issues to update
     */
    where?: Health_issuesWhereInput
    /**
     * Limit how many Health_issues to update.
     */
    limit?: number
  }

  /**
   * Health_issues updateManyAndReturn
   */
  export type Health_issuesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * The data used to update Health_issues.
     */
    data: XOR<Health_issuesUpdateManyMutationInput, Health_issuesUncheckedUpdateManyInput>
    /**
     * Filter which Health_issues to update
     */
    where?: Health_issuesWhereInput
    /**
     * Limit how many Health_issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Health_issues upsert
   */
  export type Health_issuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesInclude<ExtArgs> | null
    /**
     * The filter to search for the Health_issues to update in case it exists.
     */
    where: Health_issuesWhereUniqueInput
    /**
     * In case the Health_issues found by the `where` argument doesn't exist, create a new Health_issues with this data.
     */
    create: XOR<Health_issuesCreateInput, Health_issuesUncheckedCreateInput>
    /**
     * In case the Health_issues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Health_issuesUpdateInput, Health_issuesUncheckedUpdateInput>
  }

  /**
   * Health_issues delete
   */
  export type Health_issuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesInclude<ExtArgs> | null
    /**
     * Filter which Health_issues to delete.
     */
    where: Health_issuesWhereUniqueInput
  }

  /**
   * Health_issues deleteMany
   */
  export type Health_issuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Health_issues to delete
     */
    where?: Health_issuesWhereInput
    /**
     * Limit how many Health_issues to delete.
     */
    limit?: number
  }

  /**
   * Health_issues without action
   */
  export type Health_issuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health_issues
     */
    select?: Health_issuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health_issues
     */
    omit?: Health_issuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Health_issuesInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    picture: 'picture',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReportersScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    phone: 'phone',
    province: 'province',
    district: 'district',
    subdistrict: 'subdistrict',
    village: 'village'
  };

  export type ReportersScalarFieldEnum = (typeof ReportersScalarFieldEnum)[keyof typeof ReportersScalarFieldEnum]


  export const Roade_issuesScalarFieldEnum: {
    id: 'id',
    report_id: 'report_id',
    sub_issue: 'sub_issue',
    description: 'description',
    image_url: 'image_url',
    status: 'status',
    resolution_detail: 'resolution_detail',
    update_at: 'update_at',
    severity: 'severity',
    affected_people: 'affected_people',
    urgency: 'urgency',
    economic_impact: 'economic_impact',
    total_score: 'total_score',
    resolved_a: 'resolved_a'
  };

  export type Roade_issuesScalarFieldEnum = (typeof Roade_issuesScalarFieldEnum)[keyof typeof Roade_issuesScalarFieldEnum]


  export const Drainag_issuesScalarFieldEnum: {
    id: 'id',
    report_id: 'report_id',
    sub_issue: 'sub_issue',
    description: 'description',
    image_url: 'image_url',
    status: 'status',
    resolution_detail: 'resolution_detail',
    update_at: 'update_at',
    severity: 'severity',
    affected_people: 'affected_people',
    urgency: 'urgency',
    economic_impact: 'economic_impact',
    total_score: 'total_score',
    resolved_a: 'resolved_a'
  };

  export type Drainag_issuesScalarFieldEnum = (typeof Drainag_issuesScalarFieldEnum)[keyof typeof Drainag_issuesScalarFieldEnum]


  export const Electricity_issuesScalarFieldEnum: {
    id: 'id',
    report_id: 'report_id',
    sub_issue: 'sub_issue',
    description: 'description',
    image_url: 'image_url',
    status: 'status',
    resolution_detail: 'resolution_detail',
    update_at: 'update_at',
    severity: 'severity',
    affected_people: 'affected_people',
    urgency: 'urgency',
    economic_impact: 'economic_impact',
    total_score: 'total_score',
    resolved_a: 'resolved_a'
  };

  export type Electricity_issuesScalarFieldEnum = (typeof Electricity_issuesScalarFieldEnum)[keyof typeof Electricity_issuesScalarFieldEnum]


  export const Water_issuesScalarFieldEnum: {
    id: 'id',
    report_id: 'report_id',
    sub_issue: 'sub_issue',
    description: 'description',
    image_url: 'image_url',
    status: 'status',
    resolution_detail: 'resolution_detail',
    update_at: 'update_at',
    severity: 'severity',
    affected_people: 'affected_people',
    urgency: 'urgency',
    economic_impact: 'economic_impact',
    total_score: 'total_score',
    resolved_a: 'resolved_a'
  };

  export type Water_issuesScalarFieldEnum = (typeof Water_issuesScalarFieldEnum)[keyof typeof Water_issuesScalarFieldEnum]


  export const Health_issuesScalarFieldEnum: {
    id: 'id',
    report_id: 'report_id',
    sub_issue: 'sub_issue',
    description: 'description',
    image_url: 'image_url',
    status: 'status',
    resolution_detail: 'resolution_detail',
    update_at: 'update_at',
    severity: 'severity',
    affected_people: 'affected_people',
    urgency: 'urgency',
    economic_impact: 'economic_impact',
    total_score: 'total_score',
    resolved_a: 'resolved_a'
  };

  export type Health_issuesScalarFieldEnum = (typeof Health_issuesScalarFieldEnum)[keyof typeof Health_issuesScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type ReportersWhereInput = {
    AND?: ReportersWhereInput | ReportersWhereInput[]
    OR?: ReportersWhereInput[]
    NOT?: ReportersWhereInput | ReportersWhereInput[]
    id?: IntFilter<"Reporters"> | number
    fullname?: StringFilter<"Reporters"> | string
    phone?: StringFilter<"Reporters"> | string
    province?: StringFilter<"Reporters"> | string
    district?: StringFilter<"Reporters"> | string
    subdistrict?: StringFilter<"Reporters"> | string
    village?: StringFilter<"Reporters"> | string
    drainag_issues?: Drainag_issuesListRelationFilter
    electricity_issues?: Electricity_issuesListRelationFilter
    health_issues?: Health_issuesListRelationFilter
    roade_issues?: Roade_issuesListRelationFilter
    water_issues?: Water_issuesListRelationFilter
  }

  export type ReportersOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    district?: SortOrder
    subdistrict?: SortOrder
    village?: SortOrder
    drainag_issues?: Drainag_issuesOrderByRelationAggregateInput
    electricity_issues?: Electricity_issuesOrderByRelationAggregateInput
    health_issues?: Health_issuesOrderByRelationAggregateInput
    roade_issues?: Roade_issuesOrderByRelationAggregateInput
    water_issues?: Water_issuesOrderByRelationAggregateInput
  }

  export type ReportersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportersWhereInput | ReportersWhereInput[]
    OR?: ReportersWhereInput[]
    NOT?: ReportersWhereInput | ReportersWhereInput[]
    fullname?: StringFilter<"Reporters"> | string
    phone?: StringFilter<"Reporters"> | string
    province?: StringFilter<"Reporters"> | string
    district?: StringFilter<"Reporters"> | string
    subdistrict?: StringFilter<"Reporters"> | string
    village?: StringFilter<"Reporters"> | string
    drainag_issues?: Drainag_issuesListRelationFilter
    electricity_issues?: Electricity_issuesListRelationFilter
    health_issues?: Health_issuesListRelationFilter
    roade_issues?: Roade_issuesListRelationFilter
    water_issues?: Water_issuesListRelationFilter
  }, "id">

  export type ReportersOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    district?: SortOrder
    subdistrict?: SortOrder
    village?: SortOrder
    _count?: ReportersCountOrderByAggregateInput
    _avg?: ReportersAvgOrderByAggregateInput
    _max?: ReportersMaxOrderByAggregateInput
    _min?: ReportersMinOrderByAggregateInput
    _sum?: ReportersSumOrderByAggregateInput
  }

  export type ReportersScalarWhereWithAggregatesInput = {
    AND?: ReportersScalarWhereWithAggregatesInput | ReportersScalarWhereWithAggregatesInput[]
    OR?: ReportersScalarWhereWithAggregatesInput[]
    NOT?: ReportersScalarWhereWithAggregatesInput | ReportersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reporters"> | number
    fullname?: StringWithAggregatesFilter<"Reporters"> | string
    phone?: StringWithAggregatesFilter<"Reporters"> | string
    province?: StringWithAggregatesFilter<"Reporters"> | string
    district?: StringWithAggregatesFilter<"Reporters"> | string
    subdistrict?: StringWithAggregatesFilter<"Reporters"> | string
    village?: StringWithAggregatesFilter<"Reporters"> | string
  }

  export type Roade_issuesWhereInput = {
    AND?: Roade_issuesWhereInput | Roade_issuesWhereInput[]
    OR?: Roade_issuesWhereInput[]
    NOT?: Roade_issuesWhereInput | Roade_issuesWhereInput[]
    id?: IntFilter<"Roade_issues"> | number
    report_id?: IntFilter<"Roade_issues"> | number
    sub_issue?: StringFilter<"Roade_issues"> | string
    description?: StringNullableFilter<"Roade_issues"> | string | null
    image_url?: StringNullableFilter<"Roade_issues"> | string | null
    status?: StringFilter<"Roade_issues"> | string
    resolution_detail?: StringNullableFilter<"Roade_issues"> | string | null
    update_at?: DateTimeFilter<"Roade_issues"> | Date | string
    severity?: IntFilter<"Roade_issues"> | number
    affected_people?: IntFilter<"Roade_issues"> | number
    urgency?: IntFilter<"Roade_issues"> | number
    economic_impact?: IntFilter<"Roade_issues"> | number
    total_score?: DecimalFilter<"Roade_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Roade_issues"> | Date | string | null
    report?: XOR<ReportersScalarRelationFilter, ReportersWhereInput>
  }

  export type Roade_issuesOrderByWithRelationInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution_detail?: SortOrderInput | SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrderInput | SortOrder
    report?: ReportersOrderByWithRelationInput
  }

  export type Roade_issuesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Roade_issuesWhereInput | Roade_issuesWhereInput[]
    OR?: Roade_issuesWhereInput[]
    NOT?: Roade_issuesWhereInput | Roade_issuesWhereInput[]
    report_id?: IntFilter<"Roade_issues"> | number
    sub_issue?: StringFilter<"Roade_issues"> | string
    description?: StringNullableFilter<"Roade_issues"> | string | null
    image_url?: StringNullableFilter<"Roade_issues"> | string | null
    status?: StringFilter<"Roade_issues"> | string
    resolution_detail?: StringNullableFilter<"Roade_issues"> | string | null
    update_at?: DateTimeFilter<"Roade_issues"> | Date | string
    severity?: IntFilter<"Roade_issues"> | number
    affected_people?: IntFilter<"Roade_issues"> | number
    urgency?: IntFilter<"Roade_issues"> | number
    economic_impact?: IntFilter<"Roade_issues"> | number
    total_score?: DecimalFilter<"Roade_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Roade_issues"> | Date | string | null
    report?: XOR<ReportersScalarRelationFilter, ReportersWhereInput>
  }, "id">

  export type Roade_issuesOrderByWithAggregationInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution_detail?: SortOrderInput | SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrderInput | SortOrder
    _count?: Roade_issuesCountOrderByAggregateInput
    _avg?: Roade_issuesAvgOrderByAggregateInput
    _max?: Roade_issuesMaxOrderByAggregateInput
    _min?: Roade_issuesMinOrderByAggregateInput
    _sum?: Roade_issuesSumOrderByAggregateInput
  }

  export type Roade_issuesScalarWhereWithAggregatesInput = {
    AND?: Roade_issuesScalarWhereWithAggregatesInput | Roade_issuesScalarWhereWithAggregatesInput[]
    OR?: Roade_issuesScalarWhereWithAggregatesInput[]
    NOT?: Roade_issuesScalarWhereWithAggregatesInput | Roade_issuesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roade_issues"> | number
    report_id?: IntWithAggregatesFilter<"Roade_issues"> | number
    sub_issue?: StringWithAggregatesFilter<"Roade_issues"> | string
    description?: StringNullableWithAggregatesFilter<"Roade_issues"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Roade_issues"> | string | null
    status?: StringWithAggregatesFilter<"Roade_issues"> | string
    resolution_detail?: StringNullableWithAggregatesFilter<"Roade_issues"> | string | null
    update_at?: DateTimeWithAggregatesFilter<"Roade_issues"> | Date | string
    severity?: IntWithAggregatesFilter<"Roade_issues"> | number
    affected_people?: IntWithAggregatesFilter<"Roade_issues"> | number
    urgency?: IntWithAggregatesFilter<"Roade_issues"> | number
    economic_impact?: IntWithAggregatesFilter<"Roade_issues"> | number
    total_score?: DecimalWithAggregatesFilter<"Roade_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableWithAggregatesFilter<"Roade_issues"> | Date | string | null
  }

  export type Drainag_issuesWhereInput = {
    AND?: Drainag_issuesWhereInput | Drainag_issuesWhereInput[]
    OR?: Drainag_issuesWhereInput[]
    NOT?: Drainag_issuesWhereInput | Drainag_issuesWhereInput[]
    id?: IntFilter<"Drainag_issues"> | number
    report_id?: IntFilter<"Drainag_issues"> | number
    sub_issue?: StringFilter<"Drainag_issues"> | string
    description?: StringNullableFilter<"Drainag_issues"> | string | null
    image_url?: StringNullableFilter<"Drainag_issues"> | string | null
    status?: StringFilter<"Drainag_issues"> | string
    resolution_detail?: StringNullableFilter<"Drainag_issues"> | string | null
    update_at?: DateTimeFilter<"Drainag_issues"> | Date | string
    severity?: IntFilter<"Drainag_issues"> | number
    affected_people?: IntFilter<"Drainag_issues"> | number
    urgency?: IntFilter<"Drainag_issues"> | number
    economic_impact?: IntFilter<"Drainag_issues"> | number
    total_score?: DecimalFilter<"Drainag_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Drainag_issues"> | Date | string | null
    report?: XOR<ReportersScalarRelationFilter, ReportersWhereInput>
  }

  export type Drainag_issuesOrderByWithRelationInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution_detail?: SortOrderInput | SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrderInput | SortOrder
    report?: ReportersOrderByWithRelationInput
  }

  export type Drainag_issuesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Drainag_issuesWhereInput | Drainag_issuesWhereInput[]
    OR?: Drainag_issuesWhereInput[]
    NOT?: Drainag_issuesWhereInput | Drainag_issuesWhereInput[]
    report_id?: IntFilter<"Drainag_issues"> | number
    sub_issue?: StringFilter<"Drainag_issues"> | string
    description?: StringNullableFilter<"Drainag_issues"> | string | null
    image_url?: StringNullableFilter<"Drainag_issues"> | string | null
    status?: StringFilter<"Drainag_issues"> | string
    resolution_detail?: StringNullableFilter<"Drainag_issues"> | string | null
    update_at?: DateTimeFilter<"Drainag_issues"> | Date | string
    severity?: IntFilter<"Drainag_issues"> | number
    affected_people?: IntFilter<"Drainag_issues"> | number
    urgency?: IntFilter<"Drainag_issues"> | number
    economic_impact?: IntFilter<"Drainag_issues"> | number
    total_score?: DecimalFilter<"Drainag_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Drainag_issues"> | Date | string | null
    report?: XOR<ReportersScalarRelationFilter, ReportersWhereInput>
  }, "id">

  export type Drainag_issuesOrderByWithAggregationInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution_detail?: SortOrderInput | SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrderInput | SortOrder
    _count?: Drainag_issuesCountOrderByAggregateInput
    _avg?: Drainag_issuesAvgOrderByAggregateInput
    _max?: Drainag_issuesMaxOrderByAggregateInput
    _min?: Drainag_issuesMinOrderByAggregateInput
    _sum?: Drainag_issuesSumOrderByAggregateInput
  }

  export type Drainag_issuesScalarWhereWithAggregatesInput = {
    AND?: Drainag_issuesScalarWhereWithAggregatesInput | Drainag_issuesScalarWhereWithAggregatesInput[]
    OR?: Drainag_issuesScalarWhereWithAggregatesInput[]
    NOT?: Drainag_issuesScalarWhereWithAggregatesInput | Drainag_issuesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Drainag_issues"> | number
    report_id?: IntWithAggregatesFilter<"Drainag_issues"> | number
    sub_issue?: StringWithAggregatesFilter<"Drainag_issues"> | string
    description?: StringNullableWithAggregatesFilter<"Drainag_issues"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Drainag_issues"> | string | null
    status?: StringWithAggregatesFilter<"Drainag_issues"> | string
    resolution_detail?: StringNullableWithAggregatesFilter<"Drainag_issues"> | string | null
    update_at?: DateTimeWithAggregatesFilter<"Drainag_issues"> | Date | string
    severity?: IntWithAggregatesFilter<"Drainag_issues"> | number
    affected_people?: IntWithAggregatesFilter<"Drainag_issues"> | number
    urgency?: IntWithAggregatesFilter<"Drainag_issues"> | number
    economic_impact?: IntWithAggregatesFilter<"Drainag_issues"> | number
    total_score?: DecimalWithAggregatesFilter<"Drainag_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableWithAggregatesFilter<"Drainag_issues"> | Date | string | null
  }

  export type Electricity_issuesWhereInput = {
    AND?: Electricity_issuesWhereInput | Electricity_issuesWhereInput[]
    OR?: Electricity_issuesWhereInput[]
    NOT?: Electricity_issuesWhereInput | Electricity_issuesWhereInput[]
    id?: IntFilter<"Electricity_issues"> | number
    report_id?: IntFilter<"Electricity_issues"> | number
    sub_issue?: StringFilter<"Electricity_issues"> | string
    description?: StringNullableFilter<"Electricity_issues"> | string | null
    image_url?: StringNullableFilter<"Electricity_issues"> | string | null
    status?: StringFilter<"Electricity_issues"> | string
    resolution_detail?: StringNullableFilter<"Electricity_issues"> | string | null
    update_at?: DateTimeFilter<"Electricity_issues"> | Date | string
    severity?: IntFilter<"Electricity_issues"> | number
    affected_people?: IntFilter<"Electricity_issues"> | number
    urgency?: IntFilter<"Electricity_issues"> | number
    economic_impact?: IntFilter<"Electricity_issues"> | number
    total_score?: DecimalFilter<"Electricity_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Electricity_issues"> | Date | string | null
    report?: XOR<ReportersScalarRelationFilter, ReportersWhereInput>
  }

  export type Electricity_issuesOrderByWithRelationInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution_detail?: SortOrderInput | SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrderInput | SortOrder
    report?: ReportersOrderByWithRelationInput
  }

  export type Electricity_issuesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Electricity_issuesWhereInput | Electricity_issuesWhereInput[]
    OR?: Electricity_issuesWhereInput[]
    NOT?: Electricity_issuesWhereInput | Electricity_issuesWhereInput[]
    report_id?: IntFilter<"Electricity_issues"> | number
    sub_issue?: StringFilter<"Electricity_issues"> | string
    description?: StringNullableFilter<"Electricity_issues"> | string | null
    image_url?: StringNullableFilter<"Electricity_issues"> | string | null
    status?: StringFilter<"Electricity_issues"> | string
    resolution_detail?: StringNullableFilter<"Electricity_issues"> | string | null
    update_at?: DateTimeFilter<"Electricity_issues"> | Date | string
    severity?: IntFilter<"Electricity_issues"> | number
    affected_people?: IntFilter<"Electricity_issues"> | number
    urgency?: IntFilter<"Electricity_issues"> | number
    economic_impact?: IntFilter<"Electricity_issues"> | number
    total_score?: DecimalFilter<"Electricity_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Electricity_issues"> | Date | string | null
    report?: XOR<ReportersScalarRelationFilter, ReportersWhereInput>
  }, "id">

  export type Electricity_issuesOrderByWithAggregationInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution_detail?: SortOrderInput | SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrderInput | SortOrder
    _count?: Electricity_issuesCountOrderByAggregateInput
    _avg?: Electricity_issuesAvgOrderByAggregateInput
    _max?: Electricity_issuesMaxOrderByAggregateInput
    _min?: Electricity_issuesMinOrderByAggregateInput
    _sum?: Electricity_issuesSumOrderByAggregateInput
  }

  export type Electricity_issuesScalarWhereWithAggregatesInput = {
    AND?: Electricity_issuesScalarWhereWithAggregatesInput | Electricity_issuesScalarWhereWithAggregatesInput[]
    OR?: Electricity_issuesScalarWhereWithAggregatesInput[]
    NOT?: Electricity_issuesScalarWhereWithAggregatesInput | Electricity_issuesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Electricity_issues"> | number
    report_id?: IntWithAggregatesFilter<"Electricity_issues"> | number
    sub_issue?: StringWithAggregatesFilter<"Electricity_issues"> | string
    description?: StringNullableWithAggregatesFilter<"Electricity_issues"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Electricity_issues"> | string | null
    status?: StringWithAggregatesFilter<"Electricity_issues"> | string
    resolution_detail?: StringNullableWithAggregatesFilter<"Electricity_issues"> | string | null
    update_at?: DateTimeWithAggregatesFilter<"Electricity_issues"> | Date | string
    severity?: IntWithAggregatesFilter<"Electricity_issues"> | number
    affected_people?: IntWithAggregatesFilter<"Electricity_issues"> | number
    urgency?: IntWithAggregatesFilter<"Electricity_issues"> | number
    economic_impact?: IntWithAggregatesFilter<"Electricity_issues"> | number
    total_score?: DecimalWithAggregatesFilter<"Electricity_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableWithAggregatesFilter<"Electricity_issues"> | Date | string | null
  }

  export type Water_issuesWhereInput = {
    AND?: Water_issuesWhereInput | Water_issuesWhereInput[]
    OR?: Water_issuesWhereInput[]
    NOT?: Water_issuesWhereInput | Water_issuesWhereInput[]
    id?: IntFilter<"Water_issues"> | number
    report_id?: IntFilter<"Water_issues"> | number
    sub_issue?: StringFilter<"Water_issues"> | string
    description?: StringNullableFilter<"Water_issues"> | string | null
    image_url?: StringNullableFilter<"Water_issues"> | string | null
    status?: StringFilter<"Water_issues"> | string
    resolution_detail?: StringNullableFilter<"Water_issues"> | string | null
    update_at?: DateTimeFilter<"Water_issues"> | Date | string
    severity?: IntFilter<"Water_issues"> | number
    affected_people?: IntFilter<"Water_issues"> | number
    urgency?: IntFilter<"Water_issues"> | number
    economic_impact?: IntFilter<"Water_issues"> | number
    total_score?: DecimalFilter<"Water_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Water_issues"> | Date | string | null
    report?: XOR<ReportersScalarRelationFilter, ReportersWhereInput>
  }

  export type Water_issuesOrderByWithRelationInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution_detail?: SortOrderInput | SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrderInput | SortOrder
    report?: ReportersOrderByWithRelationInput
  }

  export type Water_issuesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Water_issuesWhereInput | Water_issuesWhereInput[]
    OR?: Water_issuesWhereInput[]
    NOT?: Water_issuesWhereInput | Water_issuesWhereInput[]
    report_id?: IntFilter<"Water_issues"> | number
    sub_issue?: StringFilter<"Water_issues"> | string
    description?: StringNullableFilter<"Water_issues"> | string | null
    image_url?: StringNullableFilter<"Water_issues"> | string | null
    status?: StringFilter<"Water_issues"> | string
    resolution_detail?: StringNullableFilter<"Water_issues"> | string | null
    update_at?: DateTimeFilter<"Water_issues"> | Date | string
    severity?: IntFilter<"Water_issues"> | number
    affected_people?: IntFilter<"Water_issues"> | number
    urgency?: IntFilter<"Water_issues"> | number
    economic_impact?: IntFilter<"Water_issues"> | number
    total_score?: DecimalFilter<"Water_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Water_issues"> | Date | string | null
    report?: XOR<ReportersScalarRelationFilter, ReportersWhereInput>
  }, "id">

  export type Water_issuesOrderByWithAggregationInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution_detail?: SortOrderInput | SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrderInput | SortOrder
    _count?: Water_issuesCountOrderByAggregateInput
    _avg?: Water_issuesAvgOrderByAggregateInput
    _max?: Water_issuesMaxOrderByAggregateInput
    _min?: Water_issuesMinOrderByAggregateInput
    _sum?: Water_issuesSumOrderByAggregateInput
  }

  export type Water_issuesScalarWhereWithAggregatesInput = {
    AND?: Water_issuesScalarWhereWithAggregatesInput | Water_issuesScalarWhereWithAggregatesInput[]
    OR?: Water_issuesScalarWhereWithAggregatesInput[]
    NOT?: Water_issuesScalarWhereWithAggregatesInput | Water_issuesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Water_issues"> | number
    report_id?: IntWithAggregatesFilter<"Water_issues"> | number
    sub_issue?: StringWithAggregatesFilter<"Water_issues"> | string
    description?: StringNullableWithAggregatesFilter<"Water_issues"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Water_issues"> | string | null
    status?: StringWithAggregatesFilter<"Water_issues"> | string
    resolution_detail?: StringNullableWithAggregatesFilter<"Water_issues"> | string | null
    update_at?: DateTimeWithAggregatesFilter<"Water_issues"> | Date | string
    severity?: IntWithAggregatesFilter<"Water_issues"> | number
    affected_people?: IntWithAggregatesFilter<"Water_issues"> | number
    urgency?: IntWithAggregatesFilter<"Water_issues"> | number
    economic_impact?: IntWithAggregatesFilter<"Water_issues"> | number
    total_score?: DecimalWithAggregatesFilter<"Water_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableWithAggregatesFilter<"Water_issues"> | Date | string | null
  }

  export type Health_issuesWhereInput = {
    AND?: Health_issuesWhereInput | Health_issuesWhereInput[]
    OR?: Health_issuesWhereInput[]
    NOT?: Health_issuesWhereInput | Health_issuesWhereInput[]
    id?: IntFilter<"Health_issues"> | number
    report_id?: IntFilter<"Health_issues"> | number
    sub_issue?: StringFilter<"Health_issues"> | string
    description?: StringNullableFilter<"Health_issues"> | string | null
    image_url?: StringNullableFilter<"Health_issues"> | string | null
    status?: StringFilter<"Health_issues"> | string
    resolution_detail?: StringNullableFilter<"Health_issues"> | string | null
    update_at?: DateTimeFilter<"Health_issues"> | Date | string
    severity?: IntFilter<"Health_issues"> | number
    affected_people?: IntFilter<"Health_issues"> | number
    urgency?: IntFilter<"Health_issues"> | number
    economic_impact?: IntFilter<"Health_issues"> | number
    total_score?: DecimalFilter<"Health_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Health_issues"> | Date | string | null
    report?: XOR<ReportersScalarRelationFilter, ReportersWhereInput>
  }

  export type Health_issuesOrderByWithRelationInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution_detail?: SortOrderInput | SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrderInput | SortOrder
    report?: ReportersOrderByWithRelationInput
  }

  export type Health_issuesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Health_issuesWhereInput | Health_issuesWhereInput[]
    OR?: Health_issuesWhereInput[]
    NOT?: Health_issuesWhereInput | Health_issuesWhereInput[]
    report_id?: IntFilter<"Health_issues"> | number
    sub_issue?: StringFilter<"Health_issues"> | string
    description?: StringNullableFilter<"Health_issues"> | string | null
    image_url?: StringNullableFilter<"Health_issues"> | string | null
    status?: StringFilter<"Health_issues"> | string
    resolution_detail?: StringNullableFilter<"Health_issues"> | string | null
    update_at?: DateTimeFilter<"Health_issues"> | Date | string
    severity?: IntFilter<"Health_issues"> | number
    affected_people?: IntFilter<"Health_issues"> | number
    urgency?: IntFilter<"Health_issues"> | number
    economic_impact?: IntFilter<"Health_issues"> | number
    total_score?: DecimalFilter<"Health_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Health_issues"> | Date | string | null
    report?: XOR<ReportersScalarRelationFilter, ReportersWhereInput>
  }, "id">

  export type Health_issuesOrderByWithAggregationInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution_detail?: SortOrderInput | SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrderInput | SortOrder
    _count?: Health_issuesCountOrderByAggregateInput
    _avg?: Health_issuesAvgOrderByAggregateInput
    _max?: Health_issuesMaxOrderByAggregateInput
    _min?: Health_issuesMinOrderByAggregateInput
    _sum?: Health_issuesSumOrderByAggregateInput
  }

  export type Health_issuesScalarWhereWithAggregatesInput = {
    AND?: Health_issuesScalarWhereWithAggregatesInput | Health_issuesScalarWhereWithAggregatesInput[]
    OR?: Health_issuesScalarWhereWithAggregatesInput[]
    NOT?: Health_issuesScalarWhereWithAggregatesInput | Health_issuesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Health_issues"> | number
    report_id?: IntWithAggregatesFilter<"Health_issues"> | number
    sub_issue?: StringWithAggregatesFilter<"Health_issues"> | string
    description?: StringNullableWithAggregatesFilter<"Health_issues"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Health_issues"> | string | null
    status?: StringWithAggregatesFilter<"Health_issues"> | string
    resolution_detail?: StringNullableWithAggregatesFilter<"Health_issues"> | string | null
    update_at?: DateTimeWithAggregatesFilter<"Health_issues"> | Date | string
    severity?: IntWithAggregatesFilter<"Health_issues"> | number
    affected_people?: IntWithAggregatesFilter<"Health_issues"> | number
    urgency?: IntWithAggregatesFilter<"Health_issues"> | number
    economic_impact?: IntWithAggregatesFilter<"Health_issues"> | number
    total_score?: DecimalWithAggregatesFilter<"Health_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableWithAggregatesFilter<"Health_issues"> | Date | string | null
  }

  export type UserCreateInput = {
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ReportersCreateInput = {
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    drainag_issues?: Drainag_issuesCreateNestedManyWithoutReportInput
    electricity_issues?: Electricity_issuesCreateNestedManyWithoutReportInput
    health_issues?: Health_issuesCreateNestedManyWithoutReportInput
    roade_issues?: Roade_issuesCreateNestedManyWithoutReportInput
    water_issues?: Water_issuesCreateNestedManyWithoutReportInput
  }

  export type ReportersUncheckedCreateInput = {
    id?: number
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    drainag_issues?: Drainag_issuesUncheckedCreateNestedManyWithoutReportInput
    electricity_issues?: Electricity_issuesUncheckedCreateNestedManyWithoutReportInput
    health_issues?: Health_issuesUncheckedCreateNestedManyWithoutReportInput
    roade_issues?: Roade_issuesUncheckedCreateNestedManyWithoutReportInput
    water_issues?: Water_issuesUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportersUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    drainag_issues?: Drainag_issuesUpdateManyWithoutReportNestedInput
    electricity_issues?: Electricity_issuesUpdateManyWithoutReportNestedInput
    health_issues?: Health_issuesUpdateManyWithoutReportNestedInput
    roade_issues?: Roade_issuesUpdateManyWithoutReportNestedInput
    water_issues?: Water_issuesUpdateManyWithoutReportNestedInput
  }

  export type ReportersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    drainag_issues?: Drainag_issuesUncheckedUpdateManyWithoutReportNestedInput
    electricity_issues?: Electricity_issuesUncheckedUpdateManyWithoutReportNestedInput
    health_issues?: Health_issuesUncheckedUpdateManyWithoutReportNestedInput
    roade_issues?: Roade_issuesUncheckedUpdateManyWithoutReportNestedInput
    water_issues?: Water_issuesUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportersCreateManyInput = {
    id?: number
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
  }

  export type ReportersUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
  }

  export type ReportersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
  }

  export type Roade_issuesCreateInput = {
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
    report: ReportersCreateNestedOneWithoutRoade_issuesInput
  }

  export type Roade_issuesUncheckedCreateInput = {
    id?: number
    report_id: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Roade_issuesUpdateInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ReportersUpdateOneRequiredWithoutRoade_issuesNestedInput
  }

  export type Roade_issuesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Roade_issuesCreateManyInput = {
    id?: number
    report_id: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Roade_issuesUpdateManyMutationInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Roade_issuesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Drainag_issuesCreateInput = {
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
    report: ReportersCreateNestedOneWithoutDrainag_issuesInput
  }

  export type Drainag_issuesUncheckedCreateInput = {
    id?: number
    report_id: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Drainag_issuesUpdateInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ReportersUpdateOneRequiredWithoutDrainag_issuesNestedInput
  }

  export type Drainag_issuesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Drainag_issuesCreateManyInput = {
    id?: number
    report_id: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Drainag_issuesUpdateManyMutationInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Drainag_issuesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Electricity_issuesCreateInput = {
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
    report: ReportersCreateNestedOneWithoutElectricity_issuesInput
  }

  export type Electricity_issuesUncheckedCreateInput = {
    id?: number
    report_id: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Electricity_issuesUpdateInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ReportersUpdateOneRequiredWithoutElectricity_issuesNestedInput
  }

  export type Electricity_issuesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Electricity_issuesCreateManyInput = {
    id?: number
    report_id: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Electricity_issuesUpdateManyMutationInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Electricity_issuesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Water_issuesCreateInput = {
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
    report: ReportersCreateNestedOneWithoutWater_issuesInput
  }

  export type Water_issuesUncheckedCreateInput = {
    id?: number
    report_id: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Water_issuesUpdateInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ReportersUpdateOneRequiredWithoutWater_issuesNestedInput
  }

  export type Water_issuesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Water_issuesCreateManyInput = {
    id?: number
    report_id: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Water_issuesUpdateManyMutationInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Water_issuesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Health_issuesCreateInput = {
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
    report: ReportersCreateNestedOneWithoutHealth_issuesInput
  }

  export type Health_issuesUncheckedCreateInput = {
    id?: number
    report_id: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Health_issuesUpdateInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ReportersUpdateOneRequiredWithoutHealth_issuesNestedInput
  }

  export type Health_issuesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Health_issuesCreateManyInput = {
    id?: number
    report_id: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Health_issuesUpdateManyMutationInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Health_issuesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    report_id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type Drainag_issuesListRelationFilter = {
    every?: Drainag_issuesWhereInput
    some?: Drainag_issuesWhereInput
    none?: Drainag_issuesWhereInput
  }

  export type Electricity_issuesListRelationFilter = {
    every?: Electricity_issuesWhereInput
    some?: Electricity_issuesWhereInput
    none?: Electricity_issuesWhereInput
  }

  export type Health_issuesListRelationFilter = {
    every?: Health_issuesWhereInput
    some?: Health_issuesWhereInput
    none?: Health_issuesWhereInput
  }

  export type Roade_issuesListRelationFilter = {
    every?: Roade_issuesWhereInput
    some?: Roade_issuesWhereInput
    none?: Roade_issuesWhereInput
  }

  export type Water_issuesListRelationFilter = {
    every?: Water_issuesWhereInput
    some?: Water_issuesWhereInput
    none?: Water_issuesWhereInput
  }

  export type Drainag_issuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Electricity_issuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Health_issuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Roade_issuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Water_issuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportersCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    district?: SortOrder
    subdistrict?: SortOrder
    village?: SortOrder
  }

  export type ReportersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReportersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    district?: SortOrder
    subdistrict?: SortOrder
    village?: SortOrder
  }

  export type ReportersMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    province?: SortOrder
    district?: SortOrder
    subdistrict?: SortOrder
    village?: SortOrder
  }

  export type ReportersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type ReportersScalarRelationFilter = {
    is?: ReportersWhereInput
    isNot?: ReportersWhereInput
  }

  export type Roade_issuesCountOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Roade_issuesAvgOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
  }

  export type Roade_issuesMaxOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Roade_issuesMinOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Roade_issuesSumOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type Drainag_issuesCountOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Drainag_issuesAvgOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
  }

  export type Drainag_issuesMaxOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Drainag_issuesMinOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Drainag_issuesSumOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
  }

  export type Electricity_issuesCountOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Electricity_issuesAvgOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
  }

  export type Electricity_issuesMaxOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Electricity_issuesMinOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Electricity_issuesSumOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
  }

  export type Water_issuesCountOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Water_issuesAvgOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
  }

  export type Water_issuesMaxOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Water_issuesMinOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Water_issuesSumOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
  }

  export type Health_issuesCountOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Health_issuesAvgOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
  }

  export type Health_issuesMaxOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Health_issuesMinOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    sub_issue?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    resolution_detail?: SortOrder
    update_at?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
    resolved_a?: SortOrder
  }

  export type Health_issuesSumOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    severity?: SortOrder
    affected_people?: SortOrder
    urgency?: SortOrder
    economic_impact?: SortOrder
    total_score?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Drainag_issuesCreateNestedManyWithoutReportInput = {
    create?: XOR<Drainag_issuesCreateWithoutReportInput, Drainag_issuesUncheckedCreateWithoutReportInput> | Drainag_issuesCreateWithoutReportInput[] | Drainag_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Drainag_issuesCreateOrConnectWithoutReportInput | Drainag_issuesCreateOrConnectWithoutReportInput[]
    createMany?: Drainag_issuesCreateManyReportInputEnvelope
    connect?: Drainag_issuesWhereUniqueInput | Drainag_issuesWhereUniqueInput[]
  }

  export type Electricity_issuesCreateNestedManyWithoutReportInput = {
    create?: XOR<Electricity_issuesCreateWithoutReportInput, Electricity_issuesUncheckedCreateWithoutReportInput> | Electricity_issuesCreateWithoutReportInput[] | Electricity_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Electricity_issuesCreateOrConnectWithoutReportInput | Electricity_issuesCreateOrConnectWithoutReportInput[]
    createMany?: Electricity_issuesCreateManyReportInputEnvelope
    connect?: Electricity_issuesWhereUniqueInput | Electricity_issuesWhereUniqueInput[]
  }

  export type Health_issuesCreateNestedManyWithoutReportInput = {
    create?: XOR<Health_issuesCreateWithoutReportInput, Health_issuesUncheckedCreateWithoutReportInput> | Health_issuesCreateWithoutReportInput[] | Health_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Health_issuesCreateOrConnectWithoutReportInput | Health_issuesCreateOrConnectWithoutReportInput[]
    createMany?: Health_issuesCreateManyReportInputEnvelope
    connect?: Health_issuesWhereUniqueInput | Health_issuesWhereUniqueInput[]
  }

  export type Roade_issuesCreateNestedManyWithoutReportInput = {
    create?: XOR<Roade_issuesCreateWithoutReportInput, Roade_issuesUncheckedCreateWithoutReportInput> | Roade_issuesCreateWithoutReportInput[] | Roade_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Roade_issuesCreateOrConnectWithoutReportInput | Roade_issuesCreateOrConnectWithoutReportInput[]
    createMany?: Roade_issuesCreateManyReportInputEnvelope
    connect?: Roade_issuesWhereUniqueInput | Roade_issuesWhereUniqueInput[]
  }

  export type Water_issuesCreateNestedManyWithoutReportInput = {
    create?: XOR<Water_issuesCreateWithoutReportInput, Water_issuesUncheckedCreateWithoutReportInput> | Water_issuesCreateWithoutReportInput[] | Water_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Water_issuesCreateOrConnectWithoutReportInput | Water_issuesCreateOrConnectWithoutReportInput[]
    createMany?: Water_issuesCreateManyReportInputEnvelope
    connect?: Water_issuesWhereUniqueInput | Water_issuesWhereUniqueInput[]
  }

  export type Drainag_issuesUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<Drainag_issuesCreateWithoutReportInput, Drainag_issuesUncheckedCreateWithoutReportInput> | Drainag_issuesCreateWithoutReportInput[] | Drainag_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Drainag_issuesCreateOrConnectWithoutReportInput | Drainag_issuesCreateOrConnectWithoutReportInput[]
    createMany?: Drainag_issuesCreateManyReportInputEnvelope
    connect?: Drainag_issuesWhereUniqueInput | Drainag_issuesWhereUniqueInput[]
  }

  export type Electricity_issuesUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<Electricity_issuesCreateWithoutReportInput, Electricity_issuesUncheckedCreateWithoutReportInput> | Electricity_issuesCreateWithoutReportInput[] | Electricity_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Electricity_issuesCreateOrConnectWithoutReportInput | Electricity_issuesCreateOrConnectWithoutReportInput[]
    createMany?: Electricity_issuesCreateManyReportInputEnvelope
    connect?: Electricity_issuesWhereUniqueInput | Electricity_issuesWhereUniqueInput[]
  }

  export type Health_issuesUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<Health_issuesCreateWithoutReportInput, Health_issuesUncheckedCreateWithoutReportInput> | Health_issuesCreateWithoutReportInput[] | Health_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Health_issuesCreateOrConnectWithoutReportInput | Health_issuesCreateOrConnectWithoutReportInput[]
    createMany?: Health_issuesCreateManyReportInputEnvelope
    connect?: Health_issuesWhereUniqueInput | Health_issuesWhereUniqueInput[]
  }

  export type Roade_issuesUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<Roade_issuesCreateWithoutReportInput, Roade_issuesUncheckedCreateWithoutReportInput> | Roade_issuesCreateWithoutReportInput[] | Roade_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Roade_issuesCreateOrConnectWithoutReportInput | Roade_issuesCreateOrConnectWithoutReportInput[]
    createMany?: Roade_issuesCreateManyReportInputEnvelope
    connect?: Roade_issuesWhereUniqueInput | Roade_issuesWhereUniqueInput[]
  }

  export type Water_issuesUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<Water_issuesCreateWithoutReportInput, Water_issuesUncheckedCreateWithoutReportInput> | Water_issuesCreateWithoutReportInput[] | Water_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Water_issuesCreateOrConnectWithoutReportInput | Water_issuesCreateOrConnectWithoutReportInput[]
    createMany?: Water_issuesCreateManyReportInputEnvelope
    connect?: Water_issuesWhereUniqueInput | Water_issuesWhereUniqueInput[]
  }

  export type Drainag_issuesUpdateManyWithoutReportNestedInput = {
    create?: XOR<Drainag_issuesCreateWithoutReportInput, Drainag_issuesUncheckedCreateWithoutReportInput> | Drainag_issuesCreateWithoutReportInput[] | Drainag_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Drainag_issuesCreateOrConnectWithoutReportInput | Drainag_issuesCreateOrConnectWithoutReportInput[]
    upsert?: Drainag_issuesUpsertWithWhereUniqueWithoutReportInput | Drainag_issuesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: Drainag_issuesCreateManyReportInputEnvelope
    set?: Drainag_issuesWhereUniqueInput | Drainag_issuesWhereUniqueInput[]
    disconnect?: Drainag_issuesWhereUniqueInput | Drainag_issuesWhereUniqueInput[]
    delete?: Drainag_issuesWhereUniqueInput | Drainag_issuesWhereUniqueInput[]
    connect?: Drainag_issuesWhereUniqueInput | Drainag_issuesWhereUniqueInput[]
    update?: Drainag_issuesUpdateWithWhereUniqueWithoutReportInput | Drainag_issuesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: Drainag_issuesUpdateManyWithWhereWithoutReportInput | Drainag_issuesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: Drainag_issuesScalarWhereInput | Drainag_issuesScalarWhereInput[]
  }

  export type Electricity_issuesUpdateManyWithoutReportNestedInput = {
    create?: XOR<Electricity_issuesCreateWithoutReportInput, Electricity_issuesUncheckedCreateWithoutReportInput> | Electricity_issuesCreateWithoutReportInput[] | Electricity_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Electricity_issuesCreateOrConnectWithoutReportInput | Electricity_issuesCreateOrConnectWithoutReportInput[]
    upsert?: Electricity_issuesUpsertWithWhereUniqueWithoutReportInput | Electricity_issuesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: Electricity_issuesCreateManyReportInputEnvelope
    set?: Electricity_issuesWhereUniqueInput | Electricity_issuesWhereUniqueInput[]
    disconnect?: Electricity_issuesWhereUniqueInput | Electricity_issuesWhereUniqueInput[]
    delete?: Electricity_issuesWhereUniqueInput | Electricity_issuesWhereUniqueInput[]
    connect?: Electricity_issuesWhereUniqueInput | Electricity_issuesWhereUniqueInput[]
    update?: Electricity_issuesUpdateWithWhereUniqueWithoutReportInput | Electricity_issuesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: Electricity_issuesUpdateManyWithWhereWithoutReportInput | Electricity_issuesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: Electricity_issuesScalarWhereInput | Electricity_issuesScalarWhereInput[]
  }

  export type Health_issuesUpdateManyWithoutReportNestedInput = {
    create?: XOR<Health_issuesCreateWithoutReportInput, Health_issuesUncheckedCreateWithoutReportInput> | Health_issuesCreateWithoutReportInput[] | Health_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Health_issuesCreateOrConnectWithoutReportInput | Health_issuesCreateOrConnectWithoutReportInput[]
    upsert?: Health_issuesUpsertWithWhereUniqueWithoutReportInput | Health_issuesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: Health_issuesCreateManyReportInputEnvelope
    set?: Health_issuesWhereUniqueInput | Health_issuesWhereUniqueInput[]
    disconnect?: Health_issuesWhereUniqueInput | Health_issuesWhereUniqueInput[]
    delete?: Health_issuesWhereUniqueInput | Health_issuesWhereUniqueInput[]
    connect?: Health_issuesWhereUniqueInput | Health_issuesWhereUniqueInput[]
    update?: Health_issuesUpdateWithWhereUniqueWithoutReportInput | Health_issuesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: Health_issuesUpdateManyWithWhereWithoutReportInput | Health_issuesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: Health_issuesScalarWhereInput | Health_issuesScalarWhereInput[]
  }

  export type Roade_issuesUpdateManyWithoutReportNestedInput = {
    create?: XOR<Roade_issuesCreateWithoutReportInput, Roade_issuesUncheckedCreateWithoutReportInput> | Roade_issuesCreateWithoutReportInput[] | Roade_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Roade_issuesCreateOrConnectWithoutReportInput | Roade_issuesCreateOrConnectWithoutReportInput[]
    upsert?: Roade_issuesUpsertWithWhereUniqueWithoutReportInput | Roade_issuesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: Roade_issuesCreateManyReportInputEnvelope
    set?: Roade_issuesWhereUniqueInput | Roade_issuesWhereUniqueInput[]
    disconnect?: Roade_issuesWhereUniqueInput | Roade_issuesWhereUniqueInput[]
    delete?: Roade_issuesWhereUniqueInput | Roade_issuesWhereUniqueInput[]
    connect?: Roade_issuesWhereUniqueInput | Roade_issuesWhereUniqueInput[]
    update?: Roade_issuesUpdateWithWhereUniqueWithoutReportInput | Roade_issuesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: Roade_issuesUpdateManyWithWhereWithoutReportInput | Roade_issuesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: Roade_issuesScalarWhereInput | Roade_issuesScalarWhereInput[]
  }

  export type Water_issuesUpdateManyWithoutReportNestedInput = {
    create?: XOR<Water_issuesCreateWithoutReportInput, Water_issuesUncheckedCreateWithoutReportInput> | Water_issuesCreateWithoutReportInput[] | Water_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Water_issuesCreateOrConnectWithoutReportInput | Water_issuesCreateOrConnectWithoutReportInput[]
    upsert?: Water_issuesUpsertWithWhereUniqueWithoutReportInput | Water_issuesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: Water_issuesCreateManyReportInputEnvelope
    set?: Water_issuesWhereUniqueInput | Water_issuesWhereUniqueInput[]
    disconnect?: Water_issuesWhereUniqueInput | Water_issuesWhereUniqueInput[]
    delete?: Water_issuesWhereUniqueInput | Water_issuesWhereUniqueInput[]
    connect?: Water_issuesWhereUniqueInput | Water_issuesWhereUniqueInput[]
    update?: Water_issuesUpdateWithWhereUniqueWithoutReportInput | Water_issuesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: Water_issuesUpdateManyWithWhereWithoutReportInput | Water_issuesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: Water_issuesScalarWhereInput | Water_issuesScalarWhereInput[]
  }

  export type Drainag_issuesUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<Drainag_issuesCreateWithoutReportInput, Drainag_issuesUncheckedCreateWithoutReportInput> | Drainag_issuesCreateWithoutReportInput[] | Drainag_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Drainag_issuesCreateOrConnectWithoutReportInput | Drainag_issuesCreateOrConnectWithoutReportInput[]
    upsert?: Drainag_issuesUpsertWithWhereUniqueWithoutReportInput | Drainag_issuesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: Drainag_issuesCreateManyReportInputEnvelope
    set?: Drainag_issuesWhereUniqueInput | Drainag_issuesWhereUniqueInput[]
    disconnect?: Drainag_issuesWhereUniqueInput | Drainag_issuesWhereUniqueInput[]
    delete?: Drainag_issuesWhereUniqueInput | Drainag_issuesWhereUniqueInput[]
    connect?: Drainag_issuesWhereUniqueInput | Drainag_issuesWhereUniqueInput[]
    update?: Drainag_issuesUpdateWithWhereUniqueWithoutReportInput | Drainag_issuesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: Drainag_issuesUpdateManyWithWhereWithoutReportInput | Drainag_issuesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: Drainag_issuesScalarWhereInput | Drainag_issuesScalarWhereInput[]
  }

  export type Electricity_issuesUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<Electricity_issuesCreateWithoutReportInput, Electricity_issuesUncheckedCreateWithoutReportInput> | Electricity_issuesCreateWithoutReportInput[] | Electricity_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Electricity_issuesCreateOrConnectWithoutReportInput | Electricity_issuesCreateOrConnectWithoutReportInput[]
    upsert?: Electricity_issuesUpsertWithWhereUniqueWithoutReportInput | Electricity_issuesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: Electricity_issuesCreateManyReportInputEnvelope
    set?: Electricity_issuesWhereUniqueInput | Electricity_issuesWhereUniqueInput[]
    disconnect?: Electricity_issuesWhereUniqueInput | Electricity_issuesWhereUniqueInput[]
    delete?: Electricity_issuesWhereUniqueInput | Electricity_issuesWhereUniqueInput[]
    connect?: Electricity_issuesWhereUniqueInput | Electricity_issuesWhereUniqueInput[]
    update?: Electricity_issuesUpdateWithWhereUniqueWithoutReportInput | Electricity_issuesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: Electricity_issuesUpdateManyWithWhereWithoutReportInput | Electricity_issuesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: Electricity_issuesScalarWhereInput | Electricity_issuesScalarWhereInput[]
  }

  export type Health_issuesUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<Health_issuesCreateWithoutReportInput, Health_issuesUncheckedCreateWithoutReportInput> | Health_issuesCreateWithoutReportInput[] | Health_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Health_issuesCreateOrConnectWithoutReportInput | Health_issuesCreateOrConnectWithoutReportInput[]
    upsert?: Health_issuesUpsertWithWhereUniqueWithoutReportInput | Health_issuesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: Health_issuesCreateManyReportInputEnvelope
    set?: Health_issuesWhereUniqueInput | Health_issuesWhereUniqueInput[]
    disconnect?: Health_issuesWhereUniqueInput | Health_issuesWhereUniqueInput[]
    delete?: Health_issuesWhereUniqueInput | Health_issuesWhereUniqueInput[]
    connect?: Health_issuesWhereUniqueInput | Health_issuesWhereUniqueInput[]
    update?: Health_issuesUpdateWithWhereUniqueWithoutReportInput | Health_issuesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: Health_issuesUpdateManyWithWhereWithoutReportInput | Health_issuesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: Health_issuesScalarWhereInput | Health_issuesScalarWhereInput[]
  }

  export type Roade_issuesUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<Roade_issuesCreateWithoutReportInput, Roade_issuesUncheckedCreateWithoutReportInput> | Roade_issuesCreateWithoutReportInput[] | Roade_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Roade_issuesCreateOrConnectWithoutReportInput | Roade_issuesCreateOrConnectWithoutReportInput[]
    upsert?: Roade_issuesUpsertWithWhereUniqueWithoutReportInput | Roade_issuesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: Roade_issuesCreateManyReportInputEnvelope
    set?: Roade_issuesWhereUniqueInput | Roade_issuesWhereUniqueInput[]
    disconnect?: Roade_issuesWhereUniqueInput | Roade_issuesWhereUniqueInput[]
    delete?: Roade_issuesWhereUniqueInput | Roade_issuesWhereUniqueInput[]
    connect?: Roade_issuesWhereUniqueInput | Roade_issuesWhereUniqueInput[]
    update?: Roade_issuesUpdateWithWhereUniqueWithoutReportInput | Roade_issuesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: Roade_issuesUpdateManyWithWhereWithoutReportInput | Roade_issuesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: Roade_issuesScalarWhereInput | Roade_issuesScalarWhereInput[]
  }

  export type Water_issuesUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<Water_issuesCreateWithoutReportInput, Water_issuesUncheckedCreateWithoutReportInput> | Water_issuesCreateWithoutReportInput[] | Water_issuesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: Water_issuesCreateOrConnectWithoutReportInput | Water_issuesCreateOrConnectWithoutReportInput[]
    upsert?: Water_issuesUpsertWithWhereUniqueWithoutReportInput | Water_issuesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: Water_issuesCreateManyReportInputEnvelope
    set?: Water_issuesWhereUniqueInput | Water_issuesWhereUniqueInput[]
    disconnect?: Water_issuesWhereUniqueInput | Water_issuesWhereUniqueInput[]
    delete?: Water_issuesWhereUniqueInput | Water_issuesWhereUniqueInput[]
    connect?: Water_issuesWhereUniqueInput | Water_issuesWhereUniqueInput[]
    update?: Water_issuesUpdateWithWhereUniqueWithoutReportInput | Water_issuesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: Water_issuesUpdateManyWithWhereWithoutReportInput | Water_issuesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: Water_issuesScalarWhereInput | Water_issuesScalarWhereInput[]
  }

  export type ReportersCreateNestedOneWithoutRoade_issuesInput = {
    create?: XOR<ReportersCreateWithoutRoade_issuesInput, ReportersUncheckedCreateWithoutRoade_issuesInput>
    connectOrCreate?: ReportersCreateOrConnectWithoutRoade_issuesInput
    connect?: ReportersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ReportersUpdateOneRequiredWithoutRoade_issuesNestedInput = {
    create?: XOR<ReportersCreateWithoutRoade_issuesInput, ReportersUncheckedCreateWithoutRoade_issuesInput>
    connectOrCreate?: ReportersCreateOrConnectWithoutRoade_issuesInput
    upsert?: ReportersUpsertWithoutRoade_issuesInput
    connect?: ReportersWhereUniqueInput
    update?: XOR<XOR<ReportersUpdateToOneWithWhereWithoutRoade_issuesInput, ReportersUpdateWithoutRoade_issuesInput>, ReportersUncheckedUpdateWithoutRoade_issuesInput>
  }

  export type ReportersCreateNestedOneWithoutDrainag_issuesInput = {
    create?: XOR<ReportersCreateWithoutDrainag_issuesInput, ReportersUncheckedCreateWithoutDrainag_issuesInput>
    connectOrCreate?: ReportersCreateOrConnectWithoutDrainag_issuesInput
    connect?: ReportersWhereUniqueInput
  }

  export type ReportersUpdateOneRequiredWithoutDrainag_issuesNestedInput = {
    create?: XOR<ReportersCreateWithoutDrainag_issuesInput, ReportersUncheckedCreateWithoutDrainag_issuesInput>
    connectOrCreate?: ReportersCreateOrConnectWithoutDrainag_issuesInput
    upsert?: ReportersUpsertWithoutDrainag_issuesInput
    connect?: ReportersWhereUniqueInput
    update?: XOR<XOR<ReportersUpdateToOneWithWhereWithoutDrainag_issuesInput, ReportersUpdateWithoutDrainag_issuesInput>, ReportersUncheckedUpdateWithoutDrainag_issuesInput>
  }

  export type ReportersCreateNestedOneWithoutElectricity_issuesInput = {
    create?: XOR<ReportersCreateWithoutElectricity_issuesInput, ReportersUncheckedCreateWithoutElectricity_issuesInput>
    connectOrCreate?: ReportersCreateOrConnectWithoutElectricity_issuesInput
    connect?: ReportersWhereUniqueInput
  }

  export type ReportersUpdateOneRequiredWithoutElectricity_issuesNestedInput = {
    create?: XOR<ReportersCreateWithoutElectricity_issuesInput, ReportersUncheckedCreateWithoutElectricity_issuesInput>
    connectOrCreate?: ReportersCreateOrConnectWithoutElectricity_issuesInput
    upsert?: ReportersUpsertWithoutElectricity_issuesInput
    connect?: ReportersWhereUniqueInput
    update?: XOR<XOR<ReportersUpdateToOneWithWhereWithoutElectricity_issuesInput, ReportersUpdateWithoutElectricity_issuesInput>, ReportersUncheckedUpdateWithoutElectricity_issuesInput>
  }

  export type ReportersCreateNestedOneWithoutWater_issuesInput = {
    create?: XOR<ReportersCreateWithoutWater_issuesInput, ReportersUncheckedCreateWithoutWater_issuesInput>
    connectOrCreate?: ReportersCreateOrConnectWithoutWater_issuesInput
    connect?: ReportersWhereUniqueInput
  }

  export type ReportersUpdateOneRequiredWithoutWater_issuesNestedInput = {
    create?: XOR<ReportersCreateWithoutWater_issuesInput, ReportersUncheckedCreateWithoutWater_issuesInput>
    connectOrCreate?: ReportersCreateOrConnectWithoutWater_issuesInput
    upsert?: ReportersUpsertWithoutWater_issuesInput
    connect?: ReportersWhereUniqueInput
    update?: XOR<XOR<ReportersUpdateToOneWithWhereWithoutWater_issuesInput, ReportersUpdateWithoutWater_issuesInput>, ReportersUncheckedUpdateWithoutWater_issuesInput>
  }

  export type ReportersCreateNestedOneWithoutHealth_issuesInput = {
    create?: XOR<ReportersCreateWithoutHealth_issuesInput, ReportersUncheckedCreateWithoutHealth_issuesInput>
    connectOrCreate?: ReportersCreateOrConnectWithoutHealth_issuesInput
    connect?: ReportersWhereUniqueInput
  }

  export type ReportersUpdateOneRequiredWithoutHealth_issuesNestedInput = {
    create?: XOR<ReportersCreateWithoutHealth_issuesInput, ReportersUncheckedCreateWithoutHealth_issuesInput>
    connectOrCreate?: ReportersCreateOrConnectWithoutHealth_issuesInput
    upsert?: ReportersUpsertWithoutHealth_issuesInput
    connect?: ReportersWhereUniqueInput
    update?: XOR<XOR<ReportersUpdateToOneWithWhereWithoutHealth_issuesInput, ReportersUpdateWithoutHealth_issuesInput>, ReportersUncheckedUpdateWithoutHealth_issuesInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type Drainag_issuesCreateWithoutReportInput = {
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Drainag_issuesUncheckedCreateWithoutReportInput = {
    id?: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Drainag_issuesCreateOrConnectWithoutReportInput = {
    where: Drainag_issuesWhereUniqueInput
    create: XOR<Drainag_issuesCreateWithoutReportInput, Drainag_issuesUncheckedCreateWithoutReportInput>
  }

  export type Drainag_issuesCreateManyReportInputEnvelope = {
    data: Drainag_issuesCreateManyReportInput | Drainag_issuesCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type Electricity_issuesCreateWithoutReportInput = {
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Electricity_issuesUncheckedCreateWithoutReportInput = {
    id?: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Electricity_issuesCreateOrConnectWithoutReportInput = {
    where: Electricity_issuesWhereUniqueInput
    create: XOR<Electricity_issuesCreateWithoutReportInput, Electricity_issuesUncheckedCreateWithoutReportInput>
  }

  export type Electricity_issuesCreateManyReportInputEnvelope = {
    data: Electricity_issuesCreateManyReportInput | Electricity_issuesCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type Health_issuesCreateWithoutReportInput = {
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Health_issuesUncheckedCreateWithoutReportInput = {
    id?: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Health_issuesCreateOrConnectWithoutReportInput = {
    where: Health_issuesWhereUniqueInput
    create: XOR<Health_issuesCreateWithoutReportInput, Health_issuesUncheckedCreateWithoutReportInput>
  }

  export type Health_issuesCreateManyReportInputEnvelope = {
    data: Health_issuesCreateManyReportInput | Health_issuesCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type Roade_issuesCreateWithoutReportInput = {
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Roade_issuesUncheckedCreateWithoutReportInput = {
    id?: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Roade_issuesCreateOrConnectWithoutReportInput = {
    where: Roade_issuesWhereUniqueInput
    create: XOR<Roade_issuesCreateWithoutReportInput, Roade_issuesUncheckedCreateWithoutReportInput>
  }

  export type Roade_issuesCreateManyReportInputEnvelope = {
    data: Roade_issuesCreateManyReportInput | Roade_issuesCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type Water_issuesCreateWithoutReportInput = {
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Water_issuesUncheckedCreateWithoutReportInput = {
    id?: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Water_issuesCreateOrConnectWithoutReportInput = {
    where: Water_issuesWhereUniqueInput
    create: XOR<Water_issuesCreateWithoutReportInput, Water_issuesUncheckedCreateWithoutReportInput>
  }

  export type Water_issuesCreateManyReportInputEnvelope = {
    data: Water_issuesCreateManyReportInput | Water_issuesCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type Drainag_issuesUpsertWithWhereUniqueWithoutReportInput = {
    where: Drainag_issuesWhereUniqueInput
    update: XOR<Drainag_issuesUpdateWithoutReportInput, Drainag_issuesUncheckedUpdateWithoutReportInput>
    create: XOR<Drainag_issuesCreateWithoutReportInput, Drainag_issuesUncheckedCreateWithoutReportInput>
  }

  export type Drainag_issuesUpdateWithWhereUniqueWithoutReportInput = {
    where: Drainag_issuesWhereUniqueInput
    data: XOR<Drainag_issuesUpdateWithoutReportInput, Drainag_issuesUncheckedUpdateWithoutReportInput>
  }

  export type Drainag_issuesUpdateManyWithWhereWithoutReportInput = {
    where: Drainag_issuesScalarWhereInput
    data: XOR<Drainag_issuesUpdateManyMutationInput, Drainag_issuesUncheckedUpdateManyWithoutReportInput>
  }

  export type Drainag_issuesScalarWhereInput = {
    AND?: Drainag_issuesScalarWhereInput | Drainag_issuesScalarWhereInput[]
    OR?: Drainag_issuesScalarWhereInput[]
    NOT?: Drainag_issuesScalarWhereInput | Drainag_issuesScalarWhereInput[]
    id?: IntFilter<"Drainag_issues"> | number
    report_id?: IntFilter<"Drainag_issues"> | number
    sub_issue?: StringFilter<"Drainag_issues"> | string
    description?: StringNullableFilter<"Drainag_issues"> | string | null
    image_url?: StringNullableFilter<"Drainag_issues"> | string | null
    status?: StringFilter<"Drainag_issues"> | string
    resolution_detail?: StringNullableFilter<"Drainag_issues"> | string | null
    update_at?: DateTimeFilter<"Drainag_issues"> | Date | string
    severity?: IntFilter<"Drainag_issues"> | number
    affected_people?: IntFilter<"Drainag_issues"> | number
    urgency?: IntFilter<"Drainag_issues"> | number
    economic_impact?: IntFilter<"Drainag_issues"> | number
    total_score?: DecimalFilter<"Drainag_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Drainag_issues"> | Date | string | null
  }

  export type Electricity_issuesUpsertWithWhereUniqueWithoutReportInput = {
    where: Electricity_issuesWhereUniqueInput
    update: XOR<Electricity_issuesUpdateWithoutReportInput, Electricity_issuesUncheckedUpdateWithoutReportInput>
    create: XOR<Electricity_issuesCreateWithoutReportInput, Electricity_issuesUncheckedCreateWithoutReportInput>
  }

  export type Electricity_issuesUpdateWithWhereUniqueWithoutReportInput = {
    where: Electricity_issuesWhereUniqueInput
    data: XOR<Electricity_issuesUpdateWithoutReportInput, Electricity_issuesUncheckedUpdateWithoutReportInput>
  }

  export type Electricity_issuesUpdateManyWithWhereWithoutReportInput = {
    where: Electricity_issuesScalarWhereInput
    data: XOR<Electricity_issuesUpdateManyMutationInput, Electricity_issuesUncheckedUpdateManyWithoutReportInput>
  }

  export type Electricity_issuesScalarWhereInput = {
    AND?: Electricity_issuesScalarWhereInput | Electricity_issuesScalarWhereInput[]
    OR?: Electricity_issuesScalarWhereInput[]
    NOT?: Electricity_issuesScalarWhereInput | Electricity_issuesScalarWhereInput[]
    id?: IntFilter<"Electricity_issues"> | number
    report_id?: IntFilter<"Electricity_issues"> | number
    sub_issue?: StringFilter<"Electricity_issues"> | string
    description?: StringNullableFilter<"Electricity_issues"> | string | null
    image_url?: StringNullableFilter<"Electricity_issues"> | string | null
    status?: StringFilter<"Electricity_issues"> | string
    resolution_detail?: StringNullableFilter<"Electricity_issues"> | string | null
    update_at?: DateTimeFilter<"Electricity_issues"> | Date | string
    severity?: IntFilter<"Electricity_issues"> | number
    affected_people?: IntFilter<"Electricity_issues"> | number
    urgency?: IntFilter<"Electricity_issues"> | number
    economic_impact?: IntFilter<"Electricity_issues"> | number
    total_score?: DecimalFilter<"Electricity_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Electricity_issues"> | Date | string | null
  }

  export type Health_issuesUpsertWithWhereUniqueWithoutReportInput = {
    where: Health_issuesWhereUniqueInput
    update: XOR<Health_issuesUpdateWithoutReportInput, Health_issuesUncheckedUpdateWithoutReportInput>
    create: XOR<Health_issuesCreateWithoutReportInput, Health_issuesUncheckedCreateWithoutReportInput>
  }

  export type Health_issuesUpdateWithWhereUniqueWithoutReportInput = {
    where: Health_issuesWhereUniqueInput
    data: XOR<Health_issuesUpdateWithoutReportInput, Health_issuesUncheckedUpdateWithoutReportInput>
  }

  export type Health_issuesUpdateManyWithWhereWithoutReportInput = {
    where: Health_issuesScalarWhereInput
    data: XOR<Health_issuesUpdateManyMutationInput, Health_issuesUncheckedUpdateManyWithoutReportInput>
  }

  export type Health_issuesScalarWhereInput = {
    AND?: Health_issuesScalarWhereInput | Health_issuesScalarWhereInput[]
    OR?: Health_issuesScalarWhereInput[]
    NOT?: Health_issuesScalarWhereInput | Health_issuesScalarWhereInput[]
    id?: IntFilter<"Health_issues"> | number
    report_id?: IntFilter<"Health_issues"> | number
    sub_issue?: StringFilter<"Health_issues"> | string
    description?: StringNullableFilter<"Health_issues"> | string | null
    image_url?: StringNullableFilter<"Health_issues"> | string | null
    status?: StringFilter<"Health_issues"> | string
    resolution_detail?: StringNullableFilter<"Health_issues"> | string | null
    update_at?: DateTimeFilter<"Health_issues"> | Date | string
    severity?: IntFilter<"Health_issues"> | number
    affected_people?: IntFilter<"Health_issues"> | number
    urgency?: IntFilter<"Health_issues"> | number
    economic_impact?: IntFilter<"Health_issues"> | number
    total_score?: DecimalFilter<"Health_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Health_issues"> | Date | string | null
  }

  export type Roade_issuesUpsertWithWhereUniqueWithoutReportInput = {
    where: Roade_issuesWhereUniqueInput
    update: XOR<Roade_issuesUpdateWithoutReportInput, Roade_issuesUncheckedUpdateWithoutReportInput>
    create: XOR<Roade_issuesCreateWithoutReportInput, Roade_issuesUncheckedCreateWithoutReportInput>
  }

  export type Roade_issuesUpdateWithWhereUniqueWithoutReportInput = {
    where: Roade_issuesWhereUniqueInput
    data: XOR<Roade_issuesUpdateWithoutReportInput, Roade_issuesUncheckedUpdateWithoutReportInput>
  }

  export type Roade_issuesUpdateManyWithWhereWithoutReportInput = {
    where: Roade_issuesScalarWhereInput
    data: XOR<Roade_issuesUpdateManyMutationInput, Roade_issuesUncheckedUpdateManyWithoutReportInput>
  }

  export type Roade_issuesScalarWhereInput = {
    AND?: Roade_issuesScalarWhereInput | Roade_issuesScalarWhereInput[]
    OR?: Roade_issuesScalarWhereInput[]
    NOT?: Roade_issuesScalarWhereInput | Roade_issuesScalarWhereInput[]
    id?: IntFilter<"Roade_issues"> | number
    report_id?: IntFilter<"Roade_issues"> | number
    sub_issue?: StringFilter<"Roade_issues"> | string
    description?: StringNullableFilter<"Roade_issues"> | string | null
    image_url?: StringNullableFilter<"Roade_issues"> | string | null
    status?: StringFilter<"Roade_issues"> | string
    resolution_detail?: StringNullableFilter<"Roade_issues"> | string | null
    update_at?: DateTimeFilter<"Roade_issues"> | Date | string
    severity?: IntFilter<"Roade_issues"> | number
    affected_people?: IntFilter<"Roade_issues"> | number
    urgency?: IntFilter<"Roade_issues"> | number
    economic_impact?: IntFilter<"Roade_issues"> | number
    total_score?: DecimalFilter<"Roade_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Roade_issues"> | Date | string | null
  }

  export type Water_issuesUpsertWithWhereUniqueWithoutReportInput = {
    where: Water_issuesWhereUniqueInput
    update: XOR<Water_issuesUpdateWithoutReportInput, Water_issuesUncheckedUpdateWithoutReportInput>
    create: XOR<Water_issuesCreateWithoutReportInput, Water_issuesUncheckedCreateWithoutReportInput>
  }

  export type Water_issuesUpdateWithWhereUniqueWithoutReportInput = {
    where: Water_issuesWhereUniqueInput
    data: XOR<Water_issuesUpdateWithoutReportInput, Water_issuesUncheckedUpdateWithoutReportInput>
  }

  export type Water_issuesUpdateManyWithWhereWithoutReportInput = {
    where: Water_issuesScalarWhereInput
    data: XOR<Water_issuesUpdateManyMutationInput, Water_issuesUncheckedUpdateManyWithoutReportInput>
  }

  export type Water_issuesScalarWhereInput = {
    AND?: Water_issuesScalarWhereInput | Water_issuesScalarWhereInput[]
    OR?: Water_issuesScalarWhereInput[]
    NOT?: Water_issuesScalarWhereInput | Water_issuesScalarWhereInput[]
    id?: IntFilter<"Water_issues"> | number
    report_id?: IntFilter<"Water_issues"> | number
    sub_issue?: StringFilter<"Water_issues"> | string
    description?: StringNullableFilter<"Water_issues"> | string | null
    image_url?: StringNullableFilter<"Water_issues"> | string | null
    status?: StringFilter<"Water_issues"> | string
    resolution_detail?: StringNullableFilter<"Water_issues"> | string | null
    update_at?: DateTimeFilter<"Water_issues"> | Date | string
    severity?: IntFilter<"Water_issues"> | number
    affected_people?: IntFilter<"Water_issues"> | number
    urgency?: IntFilter<"Water_issues"> | number
    economic_impact?: IntFilter<"Water_issues"> | number
    total_score?: DecimalFilter<"Water_issues"> | Decimal | DecimalJsLike | number | string
    resolved_a?: DateTimeNullableFilter<"Water_issues"> | Date | string | null
  }

  export type ReportersCreateWithoutRoade_issuesInput = {
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    drainag_issues?: Drainag_issuesCreateNestedManyWithoutReportInput
    electricity_issues?: Electricity_issuesCreateNestedManyWithoutReportInput
    health_issues?: Health_issuesCreateNestedManyWithoutReportInput
    water_issues?: Water_issuesCreateNestedManyWithoutReportInput
  }

  export type ReportersUncheckedCreateWithoutRoade_issuesInput = {
    id?: number
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    drainag_issues?: Drainag_issuesUncheckedCreateNestedManyWithoutReportInput
    electricity_issues?: Electricity_issuesUncheckedCreateNestedManyWithoutReportInput
    health_issues?: Health_issuesUncheckedCreateNestedManyWithoutReportInput
    water_issues?: Water_issuesUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportersCreateOrConnectWithoutRoade_issuesInput = {
    where: ReportersWhereUniqueInput
    create: XOR<ReportersCreateWithoutRoade_issuesInput, ReportersUncheckedCreateWithoutRoade_issuesInput>
  }

  export type ReportersUpsertWithoutRoade_issuesInput = {
    update: XOR<ReportersUpdateWithoutRoade_issuesInput, ReportersUncheckedUpdateWithoutRoade_issuesInput>
    create: XOR<ReportersCreateWithoutRoade_issuesInput, ReportersUncheckedCreateWithoutRoade_issuesInput>
    where?: ReportersWhereInput
  }

  export type ReportersUpdateToOneWithWhereWithoutRoade_issuesInput = {
    where?: ReportersWhereInput
    data: XOR<ReportersUpdateWithoutRoade_issuesInput, ReportersUncheckedUpdateWithoutRoade_issuesInput>
  }

  export type ReportersUpdateWithoutRoade_issuesInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    drainag_issues?: Drainag_issuesUpdateManyWithoutReportNestedInput
    electricity_issues?: Electricity_issuesUpdateManyWithoutReportNestedInput
    health_issues?: Health_issuesUpdateManyWithoutReportNestedInput
    water_issues?: Water_issuesUpdateManyWithoutReportNestedInput
  }

  export type ReportersUncheckedUpdateWithoutRoade_issuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    drainag_issues?: Drainag_issuesUncheckedUpdateManyWithoutReportNestedInput
    electricity_issues?: Electricity_issuesUncheckedUpdateManyWithoutReportNestedInput
    health_issues?: Health_issuesUncheckedUpdateManyWithoutReportNestedInput
    water_issues?: Water_issuesUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportersCreateWithoutDrainag_issuesInput = {
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    electricity_issues?: Electricity_issuesCreateNestedManyWithoutReportInput
    health_issues?: Health_issuesCreateNestedManyWithoutReportInput
    roade_issues?: Roade_issuesCreateNestedManyWithoutReportInput
    water_issues?: Water_issuesCreateNestedManyWithoutReportInput
  }

  export type ReportersUncheckedCreateWithoutDrainag_issuesInput = {
    id?: number
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    electricity_issues?: Electricity_issuesUncheckedCreateNestedManyWithoutReportInput
    health_issues?: Health_issuesUncheckedCreateNestedManyWithoutReportInput
    roade_issues?: Roade_issuesUncheckedCreateNestedManyWithoutReportInput
    water_issues?: Water_issuesUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportersCreateOrConnectWithoutDrainag_issuesInput = {
    where: ReportersWhereUniqueInput
    create: XOR<ReportersCreateWithoutDrainag_issuesInput, ReportersUncheckedCreateWithoutDrainag_issuesInput>
  }

  export type ReportersUpsertWithoutDrainag_issuesInput = {
    update: XOR<ReportersUpdateWithoutDrainag_issuesInput, ReportersUncheckedUpdateWithoutDrainag_issuesInput>
    create: XOR<ReportersCreateWithoutDrainag_issuesInput, ReportersUncheckedCreateWithoutDrainag_issuesInput>
    where?: ReportersWhereInput
  }

  export type ReportersUpdateToOneWithWhereWithoutDrainag_issuesInput = {
    where?: ReportersWhereInput
    data: XOR<ReportersUpdateWithoutDrainag_issuesInput, ReportersUncheckedUpdateWithoutDrainag_issuesInput>
  }

  export type ReportersUpdateWithoutDrainag_issuesInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    electricity_issues?: Electricity_issuesUpdateManyWithoutReportNestedInput
    health_issues?: Health_issuesUpdateManyWithoutReportNestedInput
    roade_issues?: Roade_issuesUpdateManyWithoutReportNestedInput
    water_issues?: Water_issuesUpdateManyWithoutReportNestedInput
  }

  export type ReportersUncheckedUpdateWithoutDrainag_issuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    electricity_issues?: Electricity_issuesUncheckedUpdateManyWithoutReportNestedInput
    health_issues?: Health_issuesUncheckedUpdateManyWithoutReportNestedInput
    roade_issues?: Roade_issuesUncheckedUpdateManyWithoutReportNestedInput
    water_issues?: Water_issuesUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportersCreateWithoutElectricity_issuesInput = {
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    drainag_issues?: Drainag_issuesCreateNestedManyWithoutReportInput
    health_issues?: Health_issuesCreateNestedManyWithoutReportInput
    roade_issues?: Roade_issuesCreateNestedManyWithoutReportInput
    water_issues?: Water_issuesCreateNestedManyWithoutReportInput
  }

  export type ReportersUncheckedCreateWithoutElectricity_issuesInput = {
    id?: number
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    drainag_issues?: Drainag_issuesUncheckedCreateNestedManyWithoutReportInput
    health_issues?: Health_issuesUncheckedCreateNestedManyWithoutReportInput
    roade_issues?: Roade_issuesUncheckedCreateNestedManyWithoutReportInput
    water_issues?: Water_issuesUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportersCreateOrConnectWithoutElectricity_issuesInput = {
    where: ReportersWhereUniqueInput
    create: XOR<ReportersCreateWithoutElectricity_issuesInput, ReportersUncheckedCreateWithoutElectricity_issuesInput>
  }

  export type ReportersUpsertWithoutElectricity_issuesInput = {
    update: XOR<ReportersUpdateWithoutElectricity_issuesInput, ReportersUncheckedUpdateWithoutElectricity_issuesInput>
    create: XOR<ReportersCreateWithoutElectricity_issuesInput, ReportersUncheckedCreateWithoutElectricity_issuesInput>
    where?: ReportersWhereInput
  }

  export type ReportersUpdateToOneWithWhereWithoutElectricity_issuesInput = {
    where?: ReportersWhereInput
    data: XOR<ReportersUpdateWithoutElectricity_issuesInput, ReportersUncheckedUpdateWithoutElectricity_issuesInput>
  }

  export type ReportersUpdateWithoutElectricity_issuesInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    drainag_issues?: Drainag_issuesUpdateManyWithoutReportNestedInput
    health_issues?: Health_issuesUpdateManyWithoutReportNestedInput
    roade_issues?: Roade_issuesUpdateManyWithoutReportNestedInput
    water_issues?: Water_issuesUpdateManyWithoutReportNestedInput
  }

  export type ReportersUncheckedUpdateWithoutElectricity_issuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    drainag_issues?: Drainag_issuesUncheckedUpdateManyWithoutReportNestedInput
    health_issues?: Health_issuesUncheckedUpdateManyWithoutReportNestedInput
    roade_issues?: Roade_issuesUncheckedUpdateManyWithoutReportNestedInput
    water_issues?: Water_issuesUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportersCreateWithoutWater_issuesInput = {
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    drainag_issues?: Drainag_issuesCreateNestedManyWithoutReportInput
    electricity_issues?: Electricity_issuesCreateNestedManyWithoutReportInput
    health_issues?: Health_issuesCreateNestedManyWithoutReportInput
    roade_issues?: Roade_issuesCreateNestedManyWithoutReportInput
  }

  export type ReportersUncheckedCreateWithoutWater_issuesInput = {
    id?: number
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    drainag_issues?: Drainag_issuesUncheckedCreateNestedManyWithoutReportInput
    electricity_issues?: Electricity_issuesUncheckedCreateNestedManyWithoutReportInput
    health_issues?: Health_issuesUncheckedCreateNestedManyWithoutReportInput
    roade_issues?: Roade_issuesUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportersCreateOrConnectWithoutWater_issuesInput = {
    where: ReportersWhereUniqueInput
    create: XOR<ReportersCreateWithoutWater_issuesInput, ReportersUncheckedCreateWithoutWater_issuesInput>
  }

  export type ReportersUpsertWithoutWater_issuesInput = {
    update: XOR<ReportersUpdateWithoutWater_issuesInput, ReportersUncheckedUpdateWithoutWater_issuesInput>
    create: XOR<ReportersCreateWithoutWater_issuesInput, ReportersUncheckedCreateWithoutWater_issuesInput>
    where?: ReportersWhereInput
  }

  export type ReportersUpdateToOneWithWhereWithoutWater_issuesInput = {
    where?: ReportersWhereInput
    data: XOR<ReportersUpdateWithoutWater_issuesInput, ReportersUncheckedUpdateWithoutWater_issuesInput>
  }

  export type ReportersUpdateWithoutWater_issuesInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    drainag_issues?: Drainag_issuesUpdateManyWithoutReportNestedInput
    electricity_issues?: Electricity_issuesUpdateManyWithoutReportNestedInput
    health_issues?: Health_issuesUpdateManyWithoutReportNestedInput
    roade_issues?: Roade_issuesUpdateManyWithoutReportNestedInput
  }

  export type ReportersUncheckedUpdateWithoutWater_issuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    drainag_issues?: Drainag_issuesUncheckedUpdateManyWithoutReportNestedInput
    electricity_issues?: Electricity_issuesUncheckedUpdateManyWithoutReportNestedInput
    health_issues?: Health_issuesUncheckedUpdateManyWithoutReportNestedInput
    roade_issues?: Roade_issuesUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportersCreateWithoutHealth_issuesInput = {
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    drainag_issues?: Drainag_issuesCreateNestedManyWithoutReportInput
    electricity_issues?: Electricity_issuesCreateNestedManyWithoutReportInput
    roade_issues?: Roade_issuesCreateNestedManyWithoutReportInput
    water_issues?: Water_issuesCreateNestedManyWithoutReportInput
  }

  export type ReportersUncheckedCreateWithoutHealth_issuesInput = {
    id?: number
    fullname: string
    phone: string
    province: string
    district: string
    subdistrict: string
    village: string
    drainag_issues?: Drainag_issuesUncheckedCreateNestedManyWithoutReportInput
    electricity_issues?: Electricity_issuesUncheckedCreateNestedManyWithoutReportInput
    roade_issues?: Roade_issuesUncheckedCreateNestedManyWithoutReportInput
    water_issues?: Water_issuesUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportersCreateOrConnectWithoutHealth_issuesInput = {
    where: ReportersWhereUniqueInput
    create: XOR<ReportersCreateWithoutHealth_issuesInput, ReportersUncheckedCreateWithoutHealth_issuesInput>
  }

  export type ReportersUpsertWithoutHealth_issuesInput = {
    update: XOR<ReportersUpdateWithoutHealth_issuesInput, ReportersUncheckedUpdateWithoutHealth_issuesInput>
    create: XOR<ReportersCreateWithoutHealth_issuesInput, ReportersUncheckedCreateWithoutHealth_issuesInput>
    where?: ReportersWhereInput
  }

  export type ReportersUpdateToOneWithWhereWithoutHealth_issuesInput = {
    where?: ReportersWhereInput
    data: XOR<ReportersUpdateWithoutHealth_issuesInput, ReportersUncheckedUpdateWithoutHealth_issuesInput>
  }

  export type ReportersUpdateWithoutHealth_issuesInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    drainag_issues?: Drainag_issuesUpdateManyWithoutReportNestedInput
    electricity_issues?: Electricity_issuesUpdateManyWithoutReportNestedInput
    roade_issues?: Roade_issuesUpdateManyWithoutReportNestedInput
    water_issues?: Water_issuesUpdateManyWithoutReportNestedInput
  }

  export type ReportersUncheckedUpdateWithoutHealth_issuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    drainag_issues?: Drainag_issuesUncheckedUpdateManyWithoutReportNestedInput
    electricity_issues?: Electricity_issuesUncheckedUpdateManyWithoutReportNestedInput
    roade_issues?: Roade_issuesUncheckedUpdateManyWithoutReportNestedInput
    water_issues?: Water_issuesUncheckedUpdateManyWithoutReportNestedInput
  }

  export type Drainag_issuesCreateManyReportInput = {
    id?: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Electricity_issuesCreateManyReportInput = {
    id?: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Health_issuesCreateManyReportInput = {
    id?: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Roade_issuesCreateManyReportInput = {
    id?: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Water_issuesCreateManyReportInput = {
    id?: number
    sub_issue: string
    description?: string | null
    image_url?: string | null
    status: string
    resolution_detail?: string | null
    update_at?: Date | string
    severity: number
    affected_people: number
    urgency: number
    economic_impact: number
    total_score: Decimal | DecimalJsLike | number | string
    resolved_a?: Date | string | null
  }

  export type Drainag_issuesUpdateWithoutReportInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Drainag_issuesUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Drainag_issuesUncheckedUpdateManyWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Electricity_issuesUpdateWithoutReportInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Electricity_issuesUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Electricity_issuesUncheckedUpdateManyWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Health_issuesUpdateWithoutReportInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Health_issuesUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Health_issuesUncheckedUpdateManyWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Roade_issuesUpdateWithoutReportInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Roade_issuesUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Roade_issuesUncheckedUpdateManyWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Water_issuesUpdateWithoutReportInput = {
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Water_issuesUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Water_issuesUncheckedUpdateManyWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    sub_issue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolution_detail?: NullableStringFieldUpdateOperationsInput | string | null
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: IntFieldUpdateOperationsInput | number
    affected_people?: IntFieldUpdateOperationsInput | number
    urgency?: IntFieldUpdateOperationsInput | number
    economic_impact?: IntFieldUpdateOperationsInput | number
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resolved_a?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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