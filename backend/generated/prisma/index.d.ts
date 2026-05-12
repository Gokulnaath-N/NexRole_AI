
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model Domain
 * 
 */
export type Domain = $Result.DefaultSelection<Prisma.$DomainPayload>
/**
 * Model LearningPath
 * 
 */
export type LearningPath = $Result.DefaultSelection<Prisma.$LearningPathPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Progress
 * 
 */
export type Progress = $Result.DefaultSelection<Prisma.$ProgressPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model QuizAttempt
 * 
 */
export type QuizAttempt = $Result.DefaultSelection<Prisma.$QuizAttemptPayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>
/**
 * Model JobPosting
 * 
 */
export type JobPosting = $Result.DefaultSelection<Prisma.$JobPostingPayload>
/**
 * Model BookmarkedJob
 * 
 */
export type BookmarkedJob = $Result.DefaultSelection<Prisma.$BookmarkedJobPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model InterviewQuestion
 * 
 */
export type InterviewQuestion = $Result.DefaultSelection<Prisma.$InterviewQuestionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  LEARNER: 'LEARNER',
  ADMIN: 'ADMIN',
  INSTRUCTOR: 'INSTRUCTOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ExperienceLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type ExperienceLevel = (typeof ExperienceLevel)[keyof typeof ExperienceLevel]


export const PublishStatus: {
  PUBLISHED: 'PUBLISHED',
  DRAFT: 'DRAFT'
};

export type PublishStatus = (typeof PublishStatus)[keyof typeof PublishStatus]


export const ContentType: {
  VIDEO: 'VIDEO',
  READING: 'READING',
  QUIZ: 'QUIZ',
  PROJECT: 'PROJECT'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const JobStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const NotificationType: {
  STREAK_RISK: 'STREAK_RISK',
  LEVEL_UP: 'LEVEL_UP',
  NEW_JOB: 'NEW_JOB',
  CERT_READY: 'CERT_READY',
  WELCOME: 'WELCOME',
  ACHIEVEMENT: 'ACHIEVEMENT',
  SYSTEM: 'SYSTEM'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const Category: {
  TECHNICAL: 'TECHNICAL',
  BEHAVIORAL: 'BEHAVIORAL',
  SYSTEM_DESIGN: 'SYSTEM_DESIGN',
  DOMAIN_SPECIFIC: 'DOMAIN_SPECIFIC'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ExperienceLevel = $Enums.ExperienceLevel

export const ExperienceLevel: typeof $Enums.ExperienceLevel

export type PublishStatus = $Enums.PublishStatus

export const PublishStatus: typeof $Enums.PublishStatus

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.domain`: Exposes CRUD operations for the **Domain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Domains
    * const domains = await prisma.domain.findMany()
    * ```
    */
  get domain(): Prisma.DomainDelegate<ExtArgs>;

  /**
   * `prisma.learningPath`: Exposes CRUD operations for the **LearningPath** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningPaths
    * const learningPaths = await prisma.learningPath.findMany()
    * ```
    */
  get learningPath(): Prisma.LearningPathDelegate<ExtArgs>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs>;

  /**
   * `prisma.progress`: Exposes CRUD operations for the **Progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresses
    * const progresses = await prisma.progress.findMany()
    * ```
    */
  get progress(): Prisma.ProgressDelegate<ExtArgs>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs>;

  /**
   * `prisma.quizAttempt`: Exposes CRUD operations for the **QuizAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizAttempts
    * const quizAttempts = await prisma.quizAttempt.findMany()
    * ```
    */
  get quizAttempt(): Prisma.QuizAttemptDelegate<ExtArgs>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs>;

  /**
   * `prisma.jobPosting`: Exposes CRUD operations for the **JobPosting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobPostings
    * const jobPostings = await prisma.jobPosting.findMany()
    * ```
    */
  get jobPosting(): Prisma.JobPostingDelegate<ExtArgs>;

  /**
   * `prisma.bookmarkedJob`: Exposes CRUD operations for the **BookmarkedJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookmarkedJobs
    * const bookmarkedJobs = await prisma.bookmarkedJob.findMany()
    * ```
    */
  get bookmarkedJob(): Prisma.BookmarkedJobDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.interviewQuestion`: Exposes CRUD operations for the **InterviewQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewQuestions
    * const interviewQuestions = await prisma.interviewQuestion.findMany()
    * ```
    */
  get interviewQuestion(): Prisma.InterviewQuestionDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Domain: 'Domain',
    LearningPath: 'LearningPath',
    Module: 'Module',
    Enrollment: 'Enrollment',
    Progress: 'Progress',
    Quiz: 'Quiz',
    QuizAttempt: 'QuizAttempt',
    Certificate: 'Certificate',
    JobPosting: 'JobPosting',
    BookmarkedJob: 'BookmarkedJob',
    Notification: 'Notification',
    InterviewQuestion: 'InterviewQuestion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'domain' | 'learningPath' | 'module' | 'enrollment' | 'progress' | 'quiz' | 'quizAttempt' | 'certificate' | 'jobPosting' | 'bookmarkedJob' | 'notification' | 'interviewQuestion'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Domain: {
        payload: Prisma.$DomainPayload<ExtArgs>
        fields: Prisma.DomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findFirst: {
            args: Prisma.DomainFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findMany: {
            args: Prisma.DomainFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          create: {
            args: Prisma.DomainCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          createMany: {
            args: Prisma.DomainCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DomainDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          update: {
            args: Prisma.DomainUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          deleteMany: {
            args: Prisma.DomainDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DomainUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DomainUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          aggregate: {
            args: Prisma.DomainAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDomain>
          }
          groupBy: {
            args: Prisma.DomainGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainCountArgs<ExtArgs>,
            result: $Utils.Optional<DomainCountAggregateOutputType> | number
          }
        }
      }
      LearningPath: {
        payload: Prisma.$LearningPathPayload<ExtArgs>
        fields: Prisma.LearningPathFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningPathFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningPathFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          findFirst: {
            args: Prisma.LearningPathFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningPathFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          findMany: {
            args: Prisma.LearningPathFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>[]
          }
          create: {
            args: Prisma.LearningPathCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          createMany: {
            args: Prisma.LearningPathCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LearningPathDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          update: {
            args: Prisma.LearningPathUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          deleteMany: {
            args: Prisma.LearningPathDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LearningPathUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LearningPathUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          aggregate: {
            args: Prisma.LearningPathAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLearningPath>
          }
          groupBy: {
            args: Prisma.LearningPathGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LearningPathGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningPathCountArgs<ExtArgs>,
            result: $Utils.Optional<LearningPathCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>,
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>,
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Progress: {
        payload: Prisma.$ProgressPayload<ExtArgs>
        fields: Prisma.ProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          findFirst: {
            args: Prisma.ProgressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          findMany: {
            args: Prisma.ProgressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>[]
          }
          create: {
            args: Prisma.ProgressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          createMany: {
            args: Prisma.ProgressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProgressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          update: {
            args: Prisma.ProgressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          deleteMany: {
            args: Prisma.ProgressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProgressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          aggregate: {
            args: Prisma.ProgressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProgress>
          }
          groupBy: {
            args: Prisma.ProgressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressCountArgs<ExtArgs>,
            result: $Utils.Optional<ProgressCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>,
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      QuizAttempt: {
        payload: Prisma.$QuizAttemptPayload<ExtArgs>
        fields: Prisma.QuizAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizAttemptFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizAttemptFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findFirst: {
            args: Prisma.QuizAttemptFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizAttemptFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findMany: {
            args: Prisma.QuizAttemptFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          create: {
            args: Prisma.QuizAttemptCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          createMany: {
            args: Prisma.QuizAttemptCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuizAttemptDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          update: {
            args: Prisma.QuizAttemptUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          deleteMany: {
            args: Prisma.QuizAttemptDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuizAttemptUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuizAttemptUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          aggregate: {
            args: Prisma.QuizAttemptAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuizAttempt>
          }
          groupBy: {
            args: Prisma.QuizAttemptGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuizAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizAttemptCountArgs<ExtArgs>,
            result: $Utils.Optional<QuizAttemptCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>,
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      JobPosting: {
        payload: Prisma.$JobPostingPayload<ExtArgs>
        fields: Prisma.JobPostingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobPostingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobPostingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findFirst: {
            args: Prisma.JobPostingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobPostingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findMany: {
            args: Prisma.JobPostingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          create: {
            args: Prisma.JobPostingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          createMany: {
            args: Prisma.JobPostingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JobPostingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          update: {
            args: Prisma.JobPostingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          deleteMany: {
            args: Prisma.JobPostingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JobPostingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JobPostingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          aggregate: {
            args: Prisma.JobPostingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJobPosting>
          }
          groupBy: {
            args: Prisma.JobPostingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobPostingGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobPostingCountArgs<ExtArgs>,
            result: $Utils.Optional<JobPostingCountAggregateOutputType> | number
          }
        }
      }
      BookmarkedJob: {
        payload: Prisma.$BookmarkedJobPayload<ExtArgs>
        fields: Prisma.BookmarkedJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkedJobFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkedJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkedJobFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkedJobPayload>
          }
          findFirst: {
            args: Prisma.BookmarkedJobFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkedJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkedJobFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkedJobPayload>
          }
          findMany: {
            args: Prisma.BookmarkedJobFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkedJobPayload>[]
          }
          create: {
            args: Prisma.BookmarkedJobCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkedJobPayload>
          }
          createMany: {
            args: Prisma.BookmarkedJobCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookmarkedJobDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkedJobPayload>
          }
          update: {
            args: Prisma.BookmarkedJobUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkedJobPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkedJobDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkedJobUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookmarkedJobUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkedJobPayload>
          }
          aggregate: {
            args: Prisma.BookmarkedJobAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBookmarkedJob>
          }
          groupBy: {
            args: Prisma.BookmarkedJobGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookmarkedJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkedJobCountArgs<ExtArgs>,
            result: $Utils.Optional<BookmarkedJobCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>,
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      InterviewQuestion: {
        payload: Prisma.$InterviewQuestionPayload<ExtArgs>
        fields: Prisma.InterviewQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewQuestionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewQuestionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          findFirst: {
            args: Prisma.InterviewQuestionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewQuestionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          findMany: {
            args: Prisma.InterviewQuestionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>[]
          }
          create: {
            args: Prisma.InterviewQuestionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          createMany: {
            args: Prisma.InterviewQuestionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InterviewQuestionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          update: {
            args: Prisma.InterviewQuestionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          deleteMany: {
            args: Prisma.InterviewQuestionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewQuestionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InterviewQuestionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterviewQuestionPayload>
          }
          aggregate: {
            args: Prisma.InterviewQuestionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInterviewQuestion>
          }
          groupBy: {
            args: Prisma.InterviewQuestionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InterviewQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewQuestionCountArgs<ExtArgs>,
            result: $Utils.Optional<InterviewQuestionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
    bookmarkedJobs: number
    certificates: number
    enrollments: number
    notifications: number
    progressRecords: number
    quizAttempts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarkedJobs?: boolean | UserCountOutputTypeCountBookmarkedJobsArgs
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    progressRecords?: boolean | UserCountOutputTypeCountProgressRecordsArgs
    quizAttempts?: boolean | UserCountOutputTypeCountQuizAttemptsArgs
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
  export type UserCountOutputTypeCountBookmarkedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkedJobWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }



  /**
   * Count Type DomainCountOutputType
   */

  export type DomainCountOutputType = {
    certificates: number
    enrollments: number
    learningPaths: number
    modules: number
  }

  export type DomainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificates?: boolean | DomainCountOutputTypeCountCertificatesArgs
    enrollments?: boolean | DomainCountOutputTypeCountEnrollmentsArgs
    learningPaths?: boolean | DomainCountOutputTypeCountLearningPathsArgs
    modules?: boolean | DomainCountOutputTypeCountModulesArgs
  }

  // Custom InputTypes

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCountOutputType
     */
    select?: DomainCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountLearningPathsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningPathWhereInput
  }


  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }



  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    progressRecords: number
    quizzes: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressRecords?: boolean | ModuleCountOutputTypeCountProgressRecordsArgs
    quizzes?: boolean | ModuleCountOutputTypeCountQuizzesArgs
  }

  // Custom InputTypes

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountProgressRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
  }


  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }



  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    attempts: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | QuizCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }



  /**
   * Count Type JobPostingCountOutputType
   */

  export type JobPostingCountOutputType = {
    bookmarkedJobs: number
  }

  export type JobPostingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarkedJobs?: boolean | JobPostingCountOutputTypeCountBookmarkedJobsArgs
  }

  // Custom InputTypes

  /**
   * JobPostingCountOutputType without action
   */
  export type JobPostingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPostingCountOutputType
     */
    select?: JobPostingCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JobPostingCountOutputType without action
   */
  export type JobPostingCountOutputTypeCountBookmarkedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkedJobWhereInput
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
    xp: number | null
    streak: number | null
    longestStreak: number | null
    weeklyHours: number | null
  }

  export type UserSumAggregateOutputType = {
    xp: number | null
    streak: number | null
    longestStreak: number | null
    weeklyHours: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.UserRole | null
    xp: number | null
    streak: number | null
    longestStreak: number | null
    lastActiveDate: Date | null
    targetRole: string | null
    targetCompany: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    weeklyHours: number | null
    onboardingComplete: boolean | null
    banned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.UserRole | null
    xp: number | null
    streak: number | null
    longestStreak: number | null
    lastActiveDate: Date | null
    targetRole: string | null
    targetCompany: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    weeklyHours: number | null
    onboardingComplete: boolean | null
    banned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    role: number
    xp: number
    streak: number
    longestStreak: number
    lastActiveDate: number
    targetRole: number
    targetCompany: number
    experienceLevel: number
    weeklyHours: number
    onboardingComplete: number
    skills: number
    banned: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    xp?: true
    streak?: true
    longestStreak?: true
    weeklyHours?: true
  }

  export type UserSumAggregateInputType = {
    xp?: true
    streak?: true
    longestStreak?: true
    weeklyHours?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    xp?: true
    streak?: true
    longestStreak?: true
    lastActiveDate?: true
    targetRole?: true
    targetCompany?: true
    experienceLevel?: true
    weeklyHours?: true
    onboardingComplete?: true
    banned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    xp?: true
    streak?: true
    longestStreak?: true
    lastActiveDate?: true
    targetRole?: true
    targetCompany?: true
    experienceLevel?: true
    weeklyHours?: true
    onboardingComplete?: true
    banned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    xp?: true
    streak?: true
    longestStreak?: true
    lastActiveDate?: true
    targetRole?: true
    targetCompany?: true
    experienceLevel?: true
    weeklyHours?: true
    onboardingComplete?: true
    skills?: true
    banned?: true
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
    name: string
    email: string
    image: string | null
    role: $Enums.UserRole
    xp: number
    streak: number
    longestStreak: number
    lastActiveDate: Date | null
    targetRole: string | null
    targetCompany: string | null
    experienceLevel: $Enums.ExperienceLevel
    weeklyHours: number
    onboardingComplete: boolean
    skills: string[]
    banned: boolean
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
    image?: boolean
    role?: boolean
    xp?: boolean
    streak?: boolean
    longestStreak?: boolean
    lastActiveDate?: boolean
    targetRole?: boolean
    targetCompany?: boolean
    experienceLevel?: boolean
    weeklyHours?: boolean
    onboardingComplete?: boolean
    skills?: boolean
    banned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookmarkedJobs?: boolean | User$bookmarkedJobsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    progressRecords?: boolean | User$progressRecordsArgs<ExtArgs>
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    xp?: boolean
    streak?: boolean
    longestStreak?: boolean
    lastActiveDate?: boolean
    targetRole?: boolean
    targetCompany?: boolean
    experienceLevel?: boolean
    weeklyHours?: boolean
    onboardingComplete?: boolean
    skills?: boolean
    banned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarkedJobs?: boolean | User$bookmarkedJobsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    progressRecords?: boolean | User$progressRecordsArgs<ExtArgs>
    quizAttempts?: boolean | User$quizAttemptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookmarkedJobs: Prisma.$BookmarkedJobPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      progressRecords: Prisma.$ProgressPayload<ExtArgs>[]
      quizAttempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      image: string | null
      role: $Enums.UserRole
      xp: number
      streak: number
      longestStreak: number
      lastActiveDate: Date | null
      targetRole: string | null
      targetCompany: string | null
      experienceLevel: $Enums.ExperienceLevel
      weeklyHours: number
      onboardingComplete: boolean
      skills: string[]
      banned: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bookmarkedJobs<T extends User$bookmarkedJobsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarkedJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedJobPayload<ExtArgs>, T, 'findMany'> | Null>;

    certificates<T extends User$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, 'findMany'> | Null>;

    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'> | Null>;

    progressRecords<T extends User$progressRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$progressRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, 'findMany'> | Null>;

    quizAttempts<T extends User$quizAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$quizAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly xp: FieldRef<"User", 'Int'>
    readonly streak: FieldRef<"User", 'Int'>
    readonly longestStreak: FieldRef<"User", 'Int'>
    readonly lastActiveDate: FieldRef<"User", 'DateTime'>
    readonly targetRole: FieldRef<"User", 'String'>
    readonly targetCompany: FieldRef<"User", 'String'>
    readonly experienceLevel: FieldRef<"User", 'ExperienceLevel'>
    readonly weeklyHours: FieldRef<"User", 'Int'>
    readonly onboardingComplete: FieldRef<"User", 'Boolean'>
    readonly skills: FieldRef<"User", 'String[]'>
    readonly banned: FieldRef<"User", 'Boolean'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.bookmarkedJobs
   */
  export type User$bookmarkedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
    where?: BookmarkedJobWhereInput
    orderBy?: BookmarkedJobOrderByWithRelationInput | BookmarkedJobOrderByWithRelationInput[]
    cursor?: BookmarkedJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkedJobScalarFieldEnum | BookmarkedJobScalarFieldEnum[]
  }


  /**
   * User.certificates
   */
  export type User$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }


  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }


  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * User.progressRecords
   */
  export type User$progressRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    where?: ProgressWhereInput
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    cursor?: ProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }


  /**
   * User.quizAttempts
   */
  export type User$quizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Domain
   */

  export type AggregateDomain = {
    _count: DomainCountAggregateOutputType | null
    _avg: DomainAvgAggregateOutputType | null
    _sum: DomainSumAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  export type DomainAvgAggregateOutputType = {
    demandScore: number | null
    jobCount: number | null
    enrollmentCount: number | null
  }

  export type DomainSumAggregateOutputType = {
    demandScore: number | null
    jobCount: number | null
    enrollmentCount: number | null
  }

  export type DomainMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    icon: string | null
    color: string | null
    demandScore: number | null
    jobCount: number | null
    status: $Enums.PublishStatus | null
    enrollmentCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DomainMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    icon: string | null
    color: string | null
    demandScore: number | null
    jobCount: number | null
    status: $Enums.PublishStatus | null
    enrollmentCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DomainCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    icon: number
    color: number
    demandScore: number
    jobCount: number
    tags: number
    status: number
    enrollmentCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DomainAvgAggregateInputType = {
    demandScore?: true
    jobCount?: true
    enrollmentCount?: true
  }

  export type DomainSumAggregateInputType = {
    demandScore?: true
    jobCount?: true
    enrollmentCount?: true
  }

  export type DomainMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    icon?: true
    color?: true
    demandScore?: true
    jobCount?: true
    status?: true
    enrollmentCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DomainMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    icon?: true
    color?: true
    demandScore?: true
    jobCount?: true
    status?: true
    enrollmentCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DomainCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    icon?: true
    color?: true
    demandScore?: true
    jobCount?: true
    tags?: true
    status?: true
    enrollmentCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domain to aggregate.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Domains
    **/
    _count?: true | DomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DomainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DomainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainMaxAggregateInputType
  }

  export type GetDomainAggregateType<T extends DomainAggregateArgs> = {
        [P in keyof T & keyof AggregateDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomain[P]>
      : GetScalarType<T[P], AggregateDomain[P]>
  }




  export type DomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithAggregationInput | DomainOrderByWithAggregationInput[]
    by: DomainScalarFieldEnum[] | DomainScalarFieldEnum
    having?: DomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainCountAggregateInputType | true
    _avg?: DomainAvgAggregateInputType
    _sum?: DomainSumAggregateInputType
    _min?: DomainMinAggregateInputType
    _max?: DomainMaxAggregateInputType
  }

  export type DomainGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore: number
    jobCount: number
    tags: string[]
    status: $Enums.PublishStatus
    enrollmentCount: number
    createdAt: Date
    updatedAt: Date
    _count: DomainCountAggregateOutputType | null
    _avg: DomainAvgAggregateOutputType | null
    _sum: DomainSumAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  type GetDomainGroupByPayload<T extends DomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainGroupByOutputType[P]>
            : GetScalarType<T[P], DomainGroupByOutputType[P]>
        }
      >
    >


  export type DomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    demandScore?: boolean
    jobCount?: boolean
    tags?: boolean
    status?: boolean
    enrollmentCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificates?: boolean | Domain$certificatesArgs<ExtArgs>
    enrollments?: boolean | Domain$enrollmentsArgs<ExtArgs>
    learningPaths?: boolean | Domain$learningPathsArgs<ExtArgs>
    modules?: boolean | Domain$modulesArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    demandScore?: boolean
    jobCount?: boolean
    tags?: boolean
    status?: boolean
    enrollmentCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificates?: boolean | Domain$certificatesArgs<ExtArgs>
    enrollments?: boolean | Domain$enrollmentsArgs<ExtArgs>
    learningPaths?: boolean | Domain$learningPathsArgs<ExtArgs>
    modules?: boolean | Domain$modulesArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Domain"
    objects: {
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      learningPaths: Prisma.$LearningPathPayload<ExtArgs>[]
      modules: Prisma.$ModulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string
      icon: string
      color: string
      demandScore: number
      jobCount: number
      tags: string[]
      status: $Enums.PublishStatus
      enrollmentCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["domain"]>
    composites: {}
  }


  type DomainGetPayload<S extends boolean | null | undefined | DomainDefaultArgs> = $Result.GetResult<Prisma.$DomainPayload, S>

  type DomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DomainFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DomainCountAggregateInputType | true
    }

  export interface DomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Domain'], meta: { name: 'Domain' } }
    /**
     * Find zero or one Domain that matches the filter.
     * @param {DomainFindUniqueArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DomainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DomainFindUniqueArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Domain that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DomainFindUniqueOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DomainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Domain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DomainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindFirstArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Domain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DomainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Domains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Domains
     * const domains = await prisma.domain.findMany()
     * 
     * // Get first 10 Domains
     * const domains = await prisma.domain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainWithIdOnly = await prisma.domain.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DomainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Domain.
     * @param {DomainCreateArgs} args - Arguments to create a Domain.
     * @example
     * // Create one Domain
     * const Domain = await prisma.domain.create({
     *   data: {
     *     // ... data to create a Domain
     *   }
     * })
     * 
    **/
    create<T extends DomainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DomainCreateArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Domains.
     *     @param {DomainCreateManyArgs} args - Arguments to create many Domains.
     *     @example
     *     // Create many Domains
     *     const domain = await prisma.domain.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DomainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Domain.
     * @param {DomainDeleteArgs} args - Arguments to delete one Domain.
     * @example
     * // Delete one Domain
     * const Domain = await prisma.domain.delete({
     *   where: {
     *     // ... filter to delete one Domain
     *   }
     * })
     * 
    **/
    delete<T extends DomainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DomainDeleteArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Domain.
     * @param {DomainUpdateArgs} args - Arguments to update one Domain.
     * @example
     * // Update one Domain
     * const domain = await prisma.domain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DomainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DomainUpdateArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Domains.
     * @param {DomainDeleteManyArgs} args - Arguments to filter Domains to delete.
     * @example
     * // Delete a few Domains
     * const { count } = await prisma.domain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DomainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DomainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DomainUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Domain.
     * @param {DomainUpsertArgs} args - Arguments to update or create a Domain.
     * @example
     * // Update or create a Domain
     * const domain = await prisma.domain.upsert({
     *   create: {
     *     // ... data to create a Domain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Domain we want to update
     *   }
     * })
    **/
    upsert<T extends DomainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DomainUpsertArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCountArgs} args - Arguments to filter Domains to count.
     * @example
     * // Count the number of Domains
     * const count = await prisma.domain.count({
     *   where: {
     *     // ... the filter for the Domains we want to count
     *   }
     * })
    **/
    count<T extends DomainCountArgs>(
      args?: Subset<T, DomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DomainAggregateArgs>(args: Subset<T, DomainAggregateArgs>): Prisma.PrismaPromise<GetDomainAggregateType<T>>

    /**
     * Group by Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainGroupByArgs} args - Group by arguments.
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
      T extends DomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainGroupByArgs['orderBy'] }
        : { orderBy?: DomainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Domain model
   */
  readonly fields: DomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Domain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    certificates<T extends Domain$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, Domain$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, 'findMany'> | Null>;

    enrollments<T extends Domain$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Domain$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    learningPaths<T extends Domain$learningPathsArgs<ExtArgs> = {}>(args?: Subset<T, Domain$learningPathsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, 'findMany'> | Null>;

    modules<T extends Domain$modulesArgs<ExtArgs> = {}>(args?: Subset<T, Domain$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Domain model
   */ 
  interface DomainFieldRefs {
    readonly id: FieldRef<"Domain", 'String'>
    readonly slug: FieldRef<"Domain", 'String'>
    readonly name: FieldRef<"Domain", 'String'>
    readonly description: FieldRef<"Domain", 'String'>
    readonly icon: FieldRef<"Domain", 'String'>
    readonly color: FieldRef<"Domain", 'String'>
    readonly demandScore: FieldRef<"Domain", 'Int'>
    readonly jobCount: FieldRef<"Domain", 'Int'>
    readonly tags: FieldRef<"Domain", 'String[]'>
    readonly status: FieldRef<"Domain", 'PublishStatus'>
    readonly enrollmentCount: FieldRef<"Domain", 'Int'>
    readonly createdAt: FieldRef<"Domain", 'DateTime'>
    readonly updatedAt: FieldRef<"Domain", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Domain findUnique
   */
  export type DomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }


  /**
   * Domain findUniqueOrThrow
   */
  export type DomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }


  /**
   * Domain findFirst
   */
  export type DomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }


  /**
   * Domain findFirstOrThrow
   */
  export type DomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }


  /**
   * Domain findMany
   */
  export type DomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domains to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }


  /**
   * Domain create
   */
  export type DomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to create a Domain.
     */
    data: XOR<DomainCreateInput, DomainUncheckedCreateInput>
  }


  /**
   * Domain createMany
   */
  export type DomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Domain update
   */
  export type DomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to update a Domain.
     */
    data: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
    /**
     * Choose, which Domain to update.
     */
    where: DomainWhereUniqueInput
  }


  /**
   * Domain updateMany
   */
  export type DomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
  }


  /**
   * Domain upsert
   */
  export type DomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The filter to search for the Domain to update in case it exists.
     */
    where: DomainWhereUniqueInput
    /**
     * In case the Domain found by the `where` argument doesn't exist, create a new Domain with this data.
     */
    create: XOR<DomainCreateInput, DomainUncheckedCreateInput>
    /**
     * In case the Domain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
  }


  /**
   * Domain delete
   */
  export type DomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter which Domain to delete.
     */
    where: DomainWhereUniqueInput
  }


  /**
   * Domain deleteMany
   */
  export type DomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domains to delete
     */
    where?: DomainWhereInput
  }


  /**
   * Domain.certificates
   */
  export type Domain$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }


  /**
   * Domain.enrollments
   */
  export type Domain$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }


  /**
   * Domain.learningPaths
   */
  export type Domain$learningPathsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    where?: LearningPathWhereInput
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    cursor?: LearningPathWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningPathScalarFieldEnum | LearningPathScalarFieldEnum[]
  }


  /**
   * Domain.modules
   */
  export type Domain$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }


  /**
   * Domain without action
   */
  export type DomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DomainInclude<ExtArgs> | null
  }



  /**
   * Model LearningPath
   */

  export type AggregateLearningPath = {
    _count: LearningPathCountAggregateOutputType | null
    _avg: LearningPathAvgAggregateOutputType | null
    _sum: LearningPathSumAggregateOutputType | null
    _min: LearningPathMinAggregateOutputType | null
    _max: LearningPathMaxAggregateOutputType | null
  }

  export type LearningPathAvgAggregateOutputType = {
    durationDays: number | null
  }

  export type LearningPathSumAggregateOutputType = {
    durationDays: number | null
  }

  export type LearningPathMinAggregateOutputType = {
    id: string | null
    domainId: string | null
    companyTarget: string | null
    roleTarget: string | null
    durationDays: number | null
    createdAt: Date | null
  }

  export type LearningPathMaxAggregateOutputType = {
    id: string | null
    domainId: string | null
    companyTarget: string | null
    roleTarget: string | null
    durationDays: number | null
    createdAt: Date | null
  }

  export type LearningPathCountAggregateOutputType = {
    id: number
    domainId: number
    companyTarget: number
    roleTarget: number
    durationDays: number
    moduleOrder: number
    createdAt: number
    _all: number
  }


  export type LearningPathAvgAggregateInputType = {
    durationDays?: true
  }

  export type LearningPathSumAggregateInputType = {
    durationDays?: true
  }

  export type LearningPathMinAggregateInputType = {
    id?: true
    domainId?: true
    companyTarget?: true
    roleTarget?: true
    durationDays?: true
    createdAt?: true
  }

  export type LearningPathMaxAggregateInputType = {
    id?: true
    domainId?: true
    companyTarget?: true
    roleTarget?: true
    durationDays?: true
    createdAt?: true
  }

  export type LearningPathCountAggregateInputType = {
    id?: true
    domainId?: true
    companyTarget?: true
    roleTarget?: true
    durationDays?: true
    moduleOrder?: true
    createdAt?: true
    _all?: true
  }

  export type LearningPathAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPath to aggregate.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningPaths
    **/
    _count?: true | LearningPathCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningPathAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningPathSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningPathMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningPathMaxAggregateInputType
  }

  export type GetLearningPathAggregateType<T extends LearningPathAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningPath]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningPath[P]>
      : GetScalarType<T[P], AggregateLearningPath[P]>
  }




  export type LearningPathGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningPathWhereInput
    orderBy?: LearningPathOrderByWithAggregationInput | LearningPathOrderByWithAggregationInput[]
    by: LearningPathScalarFieldEnum[] | LearningPathScalarFieldEnum
    having?: LearningPathScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningPathCountAggregateInputType | true
    _avg?: LearningPathAvgAggregateInputType
    _sum?: LearningPathSumAggregateInputType
    _min?: LearningPathMinAggregateInputType
    _max?: LearningPathMaxAggregateInputType
  }

  export type LearningPathGroupByOutputType = {
    id: string
    domainId: string
    companyTarget: string
    roleTarget: string
    durationDays: number
    moduleOrder: JsonValue
    createdAt: Date
    _count: LearningPathCountAggregateOutputType | null
    _avg: LearningPathAvgAggregateOutputType | null
    _sum: LearningPathSumAggregateOutputType | null
    _min: LearningPathMinAggregateOutputType | null
    _max: LearningPathMaxAggregateOutputType | null
  }

  type GetLearningPathGroupByPayload<T extends LearningPathGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningPathGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningPathGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningPathGroupByOutputType[P]>
            : GetScalarType<T[P], LearningPathGroupByOutputType[P]>
        }
      >
    >


  export type LearningPathSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    companyTarget?: boolean
    roleTarget?: boolean
    durationDays?: boolean
    moduleOrder?: boolean
    createdAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningPath"]>

  export type LearningPathSelectScalar = {
    id?: boolean
    domainId?: boolean
    companyTarget?: boolean
    roleTarget?: boolean
    durationDays?: boolean
    moduleOrder?: boolean
    createdAt?: boolean
  }

  export type LearningPathInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }


  export type $LearningPathPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningPath"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domainId: string
      companyTarget: string
      roleTarget: string
      durationDays: number
      moduleOrder: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["learningPath"]>
    composites: {}
  }


  type LearningPathGetPayload<S extends boolean | null | undefined | LearningPathDefaultArgs> = $Result.GetResult<Prisma.$LearningPathPayload, S>

  type LearningPathCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LearningPathFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LearningPathCountAggregateInputType | true
    }

  export interface LearningPathDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningPath'], meta: { name: 'LearningPath' } }
    /**
     * Find zero or one LearningPath that matches the filter.
     * @param {LearningPathFindUniqueArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LearningPathFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathFindUniqueArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LearningPath that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LearningPathFindUniqueOrThrowArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LearningPathFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LearningPath that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindFirstArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LearningPathFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathFindFirstArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LearningPath that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindFirstOrThrowArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LearningPathFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LearningPaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningPaths
     * const learningPaths = await prisma.learningPath.findMany()
     * 
     * // Get first 10 LearningPaths
     * const learningPaths = await prisma.learningPath.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningPathWithIdOnly = await prisma.learningPath.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LearningPathFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LearningPath.
     * @param {LearningPathCreateArgs} args - Arguments to create a LearningPath.
     * @example
     * // Create one LearningPath
     * const LearningPath = await prisma.learningPath.create({
     *   data: {
     *     // ... data to create a LearningPath
     *   }
     * })
     * 
    **/
    create<T extends LearningPathCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathCreateArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LearningPaths.
     *     @param {LearningPathCreateManyArgs} args - Arguments to create many LearningPaths.
     *     @example
     *     // Create many LearningPaths
     *     const learningPath = await prisma.learningPath.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LearningPathCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LearningPath.
     * @param {LearningPathDeleteArgs} args - Arguments to delete one LearningPath.
     * @example
     * // Delete one LearningPath
     * const LearningPath = await prisma.learningPath.delete({
     *   where: {
     *     // ... filter to delete one LearningPath
     *   }
     * })
     * 
    **/
    delete<T extends LearningPathDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathDeleteArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LearningPath.
     * @param {LearningPathUpdateArgs} args - Arguments to update one LearningPath.
     * @example
     * // Update one LearningPath
     * const learningPath = await prisma.learningPath.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LearningPathUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathUpdateArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LearningPaths.
     * @param {LearningPathDeleteManyArgs} args - Arguments to filter LearningPaths to delete.
     * @example
     * // Delete a few LearningPaths
     * const { count } = await prisma.learningPath.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LearningPathDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningPaths
     * const learningPath = await prisma.learningPath.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LearningPathUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LearningPath.
     * @param {LearningPathUpsertArgs} args - Arguments to update or create a LearningPath.
     * @example
     * // Update or create a LearningPath
     * const learningPath = await prisma.learningPath.upsert({
     *   create: {
     *     // ... data to create a LearningPath
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningPath we want to update
     *   }
     * })
    **/
    upsert<T extends LearningPathUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathUpsertArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LearningPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathCountArgs} args - Arguments to filter LearningPaths to count.
     * @example
     * // Count the number of LearningPaths
     * const count = await prisma.learningPath.count({
     *   where: {
     *     // ... the filter for the LearningPaths we want to count
     *   }
     * })
    **/
    count<T extends LearningPathCountArgs>(
      args?: Subset<T, LearningPathCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningPathCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningPathAggregateArgs>(args: Subset<T, LearningPathAggregateArgs>): Prisma.PrismaPromise<GetLearningPathAggregateType<T>>

    /**
     * Group by LearningPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathGroupByArgs} args - Group by arguments.
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
      T extends LearningPathGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningPathGroupByArgs['orderBy'] }
        : { orderBy?: LearningPathGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningPathGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningPathGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningPath model
   */
  readonly fields: LearningPathFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningPath.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningPathClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LearningPath model
   */ 
  interface LearningPathFieldRefs {
    readonly id: FieldRef<"LearningPath", 'String'>
    readonly domainId: FieldRef<"LearningPath", 'String'>
    readonly companyTarget: FieldRef<"LearningPath", 'String'>
    readonly roleTarget: FieldRef<"LearningPath", 'String'>
    readonly durationDays: FieldRef<"LearningPath", 'Int'>
    readonly moduleOrder: FieldRef<"LearningPath", 'Json'>
    readonly createdAt: FieldRef<"LearningPath", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * LearningPath findUnique
   */
  export type LearningPathFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where: LearningPathWhereUniqueInput
  }


  /**
   * LearningPath findUniqueOrThrow
   */
  export type LearningPathFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where: LearningPathWhereUniqueInput
  }


  /**
   * LearningPath findFirst
   */
  export type LearningPathFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPaths.
     */
    distinct?: LearningPathScalarFieldEnum | LearningPathScalarFieldEnum[]
  }


  /**
   * LearningPath findFirstOrThrow
   */
  export type LearningPathFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPaths.
     */
    distinct?: LearningPathScalarFieldEnum | LearningPathScalarFieldEnum[]
  }


  /**
   * LearningPath findMany
   */
  export type LearningPathFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPaths to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    distinct?: LearningPathScalarFieldEnum | LearningPathScalarFieldEnum[]
  }


  /**
   * LearningPath create
   */
  export type LearningPathCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningPath.
     */
    data: XOR<LearningPathCreateInput, LearningPathUncheckedCreateInput>
  }


  /**
   * LearningPath createMany
   */
  export type LearningPathCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningPaths.
     */
    data: LearningPathCreateManyInput | LearningPathCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LearningPath update
   */
  export type LearningPathUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningPath.
     */
    data: XOR<LearningPathUpdateInput, LearningPathUncheckedUpdateInput>
    /**
     * Choose, which LearningPath to update.
     */
    where: LearningPathWhereUniqueInput
  }


  /**
   * LearningPath updateMany
   */
  export type LearningPathUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningPaths.
     */
    data: XOR<LearningPathUpdateManyMutationInput, LearningPathUncheckedUpdateManyInput>
    /**
     * Filter which LearningPaths to update
     */
    where?: LearningPathWhereInput
  }


  /**
   * LearningPath upsert
   */
  export type LearningPathUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningPath to update in case it exists.
     */
    where: LearningPathWhereUniqueInput
    /**
     * In case the LearningPath found by the `where` argument doesn't exist, create a new LearningPath with this data.
     */
    create: XOR<LearningPathCreateInput, LearningPathUncheckedCreateInput>
    /**
     * In case the LearningPath was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningPathUpdateInput, LearningPathUncheckedUpdateInput>
  }


  /**
   * LearningPath delete
   */
  export type LearningPathDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter which LearningPath to delete.
     */
    where: LearningPathWhereUniqueInput
  }


  /**
   * LearningPath deleteMany
   */
  export type LearningPathDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPaths to delete
     */
    where?: LearningPathWhereInput
  }


  /**
   * LearningPath without action
   */
  export type LearningPathDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
  }



  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    order: number | null
    durationMinutes: number | null
    xpReward: number | null
  }

  export type ModuleSumAggregateOutputType = {
    order: number | null
    durationMinutes: number | null
    xpReward: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    domainId: string | null
    title: string | null
    description: string | null
    content: string | null
    notionPageId: string | null
    order: number | null
    durationMinutes: number | null
    type: $Enums.ContentType | null
    difficulty: $Enums.Difficulty | null
    xpReward: number | null
    status: $Enums.PublishStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    domainId: string | null
    title: string | null
    description: string | null
    content: string | null
    notionPageId: string | null
    order: number | null
    durationMinutes: number | null
    type: $Enums.ContentType | null
    difficulty: $Enums.Difficulty | null
    xpReward: number | null
    status: $Enums.PublishStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    domainId: number
    title: number
    description: number
    content: number
    notionPageId: number
    order: number
    durationMinutes: number
    type: number
    difficulty: number
    xpReward: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    order?: true
    durationMinutes?: true
    xpReward?: true
  }

  export type ModuleSumAggregateInputType = {
    order?: true
    durationMinutes?: true
    xpReward?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    domainId?: true
    title?: true
    description?: true
    content?: true
    notionPageId?: true
    order?: true
    durationMinutes?: true
    type?: true
    difficulty?: true
    xpReward?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    domainId?: true
    title?: true
    description?: true
    content?: true
    notionPageId?: true
    order?: true
    durationMinutes?: true
    type?: true
    difficulty?: true
    xpReward?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    domainId?: true
    title?: true
    description?: true
    content?: true
    notionPageId?: true
    order?: true
    durationMinutes?: true
    type?: true
    difficulty?: true
    xpReward?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    domainId: string
    title: string
    description: string
    content: string
    notionPageId: string | null
    order: number
    durationMinutes: number
    type: $Enums.ContentType
    difficulty: $Enums.Difficulty
    xpReward: number
    status: $Enums.PublishStatus
    createdAt: Date
    updatedAt: Date
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    notionPageId?: boolean
    order?: boolean
    durationMinutes?: boolean
    type?: boolean
    difficulty?: boolean
    xpReward?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    progressRecords?: boolean | Module$progressRecordsArgs<ExtArgs>
    quizzes?: boolean | Module$quizzesArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    domainId?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    notionPageId?: boolean
    order?: boolean
    durationMinutes?: boolean
    type?: boolean
    difficulty?: boolean
    xpReward?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    progressRecords?: boolean | Module$progressRecordsArgs<ExtArgs>
    quizzes?: boolean | Module$quizzesArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
      progressRecords: Prisma.$ProgressPayload<ExtArgs>[]
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domainId: string
      title: string
      description: string
      content: string
      notionPageId: string | null
      order: number
      durationMinutes: number
      type: $Enums.ContentType
      difficulty: $Enums.Difficulty
      xpReward: number
      status: $Enums.PublishStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["module"]>
    composites: {}
  }


  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModuleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>
    ): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Module that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModuleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>
    ): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModuleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
    **/
    create<T extends ModuleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>
    ): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Modules.
     *     @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     *     @example
     *     // Create many Modules
     *     const module = await prisma.module.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModuleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
    **/
    delete<T extends ModuleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>
    ): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModuleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>
    ): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModuleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModuleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
    **/
    upsert<T extends ModuleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>
    ): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
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
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    progressRecords<T extends Module$progressRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Module$progressRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, 'findMany'> | Null>;

    quizzes<T extends Module$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Module$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Module model
   */ 
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'String'>
    readonly domainId: FieldRef<"Module", 'String'>
    readonly title: FieldRef<"Module", 'String'>
    readonly description: FieldRef<"Module", 'String'>
    readonly content: FieldRef<"Module", 'String'>
    readonly notionPageId: FieldRef<"Module", 'String'>
    readonly order: FieldRef<"Module", 'Int'>
    readonly durationMinutes: FieldRef<"Module", 'Int'>
    readonly type: FieldRef<"Module", 'ContentType'>
    readonly difficulty: FieldRef<"Module", 'Difficulty'>
    readonly xpReward: FieldRef<"Module", 'Int'>
    readonly status: FieldRef<"Module", 'PublishStatus'>
    readonly createdAt: FieldRef<"Module", 'DateTime'>
    readonly updatedAt: FieldRef<"Module", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }


  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }


  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }


  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }


  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }


  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }


  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }


  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
  }


  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }


  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }


  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
  }


  /**
   * Module.progressRecords
   */
  export type Module$progressRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    where?: ProgressWhereInput
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    cursor?: ProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }


  /**
   * Module.quizzes
   */
  export type Module$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }


  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude<ExtArgs> | null
  }



  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    domainId: string | null
    currentModuleId: string | null
    completedAt: Date | null
    enrolledAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    domainId: string | null
    currentModuleId: string | null
    completedAt: Date | null
    enrolledAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    userId: number
    domainId: number
    currentModuleId: number
    completedAt: number
    enrolledAt: number
    _all: number
  }


  export type EnrollmentMinAggregateInputType = {
    id?: true
    userId?: true
    domainId?: true
    currentModuleId?: true
    completedAt?: true
    enrolledAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    userId?: true
    domainId?: true
    currentModuleId?: true
    completedAt?: true
    enrolledAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    userId?: true
    domainId?: true
    currentModuleId?: true
    completedAt?: true
    enrolledAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    userId: string
    domainId: string
    currentModuleId: string | null
    completedAt: Date | null
    enrolledAt: Date
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    domainId?: boolean
    currentModuleId?: boolean
    completedAt?: boolean
    enrolledAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    userId?: boolean
    domainId?: boolean
    currentModuleId?: boolean
    completedAt?: boolean
    enrolledAt?: boolean
  }

  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      domainId: string
      currentModuleId: string | null
      completedAt: Date | null
      enrolledAt: Date
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }


  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EnrollmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Enrollment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EnrollmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EnrollmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
    **/
    create<T extends EnrollmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Enrollments.
     *     @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     *     @example
     *     // Create many Enrollments
     *     const enrollment = await prisma.enrollment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EnrollmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
    **/
    delete<T extends EnrollmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EnrollmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EnrollmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EnrollmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
    **/
    upsert<T extends EnrollmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Enrollment model
   */ 
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'String'>
    readonly userId: FieldRef<"Enrollment", 'String'>
    readonly domainId: FieldRef<"Enrollment", 'String'>
    readonly currentModuleId: FieldRef<"Enrollment", 'String'>
    readonly completedAt: FieldRef<"Enrollment", 'DateTime'>
    readonly enrolledAt: FieldRef<"Enrollment", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }


  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }


  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }


  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }


  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
  }


  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }


  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
  }


  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }



  /**
   * Model Progress
   */

  export type AggregateProgress = {
    _count: ProgressCountAggregateOutputType | null
    _avg: ProgressAvgAggregateOutputType | null
    _sum: ProgressSumAggregateOutputType | null
    _min: ProgressMinAggregateOutputType | null
    _max: ProgressMaxAggregateOutputType | null
  }

  export type ProgressAvgAggregateOutputType = {
    timeSpentMinutes: number | null
    score: number | null
  }

  export type ProgressSumAggregateOutputType = {
    timeSpentMinutes: number | null
    score: number | null
  }

  export type ProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    completed: boolean | null
    completedAt: Date | null
    timeSpentMinutes: number | null
    score: number | null
    createdAt: Date | null
  }

  export type ProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    completed: boolean | null
    completedAt: Date | null
    timeSpentMinutes: number | null
    score: number | null
    createdAt: Date | null
  }

  export type ProgressCountAggregateOutputType = {
    id: number
    userId: number
    moduleId: number
    completed: number
    completedAt: number
    timeSpentMinutes: number
    score: number
    createdAt: number
    _all: number
  }


  export type ProgressAvgAggregateInputType = {
    timeSpentMinutes?: true
    score?: true
  }

  export type ProgressSumAggregateInputType = {
    timeSpentMinutes?: true
    score?: true
  }

  export type ProgressMinAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    completed?: true
    completedAt?: true
    timeSpentMinutes?: true
    score?: true
    createdAt?: true
  }

  export type ProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    completed?: true
    completedAt?: true
    timeSpentMinutes?: true
    score?: true
    createdAt?: true
  }

  export type ProgressCountAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    completed?: true
    completedAt?: true
    timeSpentMinutes?: true
    score?: true
    createdAt?: true
    _all?: true
  }

  export type ProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progress to aggregate.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Progresses
    **/
    _count?: true | ProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressMaxAggregateInputType
  }

  export type GetProgressAggregateType<T extends ProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgress[P]>
      : GetScalarType<T[P], AggregateProgress[P]>
  }




  export type ProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
    orderBy?: ProgressOrderByWithAggregationInput | ProgressOrderByWithAggregationInput[]
    by: ProgressScalarFieldEnum[] | ProgressScalarFieldEnum
    having?: ProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressCountAggregateInputType | true
    _avg?: ProgressAvgAggregateInputType
    _sum?: ProgressSumAggregateInputType
    _min?: ProgressMinAggregateInputType
    _max?: ProgressMaxAggregateInputType
  }

  export type ProgressGroupByOutputType = {
    id: string
    userId: string
    moduleId: string
    completed: boolean
    completedAt: Date | null
    timeSpentMinutes: number
    score: number | null
    createdAt: Date
    _count: ProgressCountAggregateOutputType | null
    _avg: ProgressAvgAggregateOutputType | null
    _sum: ProgressSumAggregateOutputType | null
    _min: ProgressMinAggregateOutputType | null
    _max: ProgressMaxAggregateOutputType | null
  }

  type GetProgressGroupByPayload<T extends ProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressGroupByOutputType[P]>
        }
      >
    >


  export type ProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    completed?: boolean
    completedAt?: boolean
    timeSpentMinutes?: boolean
    score?: boolean
    createdAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type ProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    completed?: boolean
    completedAt?: boolean
    timeSpentMinutes?: boolean
    score?: boolean
    createdAt?: boolean
  }

  export type ProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Progress"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      moduleId: string
      completed: boolean
      completedAt: Date | null
      timeSpentMinutes: number
      score: number | null
      createdAt: Date
    }, ExtArgs["result"]["progress"]>
    composites: {}
  }


  type ProgressGetPayload<S extends boolean | null | undefined | ProgressDefaultArgs> = $Result.GetResult<Prisma.$ProgressPayload, S>

  type ProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProgressFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProgressCountAggregateInputType | true
    }

  export interface ProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Progress'], meta: { name: 'Progress' } }
    /**
     * Find zero or one Progress that matches the filter.
     * @param {ProgressFindUniqueArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProgressFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressFindUniqueArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Progress that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProgressFindUniqueOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProgressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindFirstArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProgressFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressFindFirstArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindFirstOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProgressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresses
     * const progresses = await prisma.progress.findMany()
     * 
     * // Get first 10 Progresses
     * const progresses = await prisma.progress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressWithIdOnly = await prisma.progress.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProgressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Progress.
     * @param {ProgressCreateArgs} args - Arguments to create a Progress.
     * @example
     * // Create one Progress
     * const Progress = await prisma.progress.create({
     *   data: {
     *     // ... data to create a Progress
     *   }
     * })
     * 
    **/
    create<T extends ProgressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressCreateArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Progresses.
     *     @param {ProgressCreateManyArgs} args - Arguments to create many Progresses.
     *     @example
     *     // Create many Progresses
     *     const progress = await prisma.progress.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProgressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Progress.
     * @param {ProgressDeleteArgs} args - Arguments to delete one Progress.
     * @example
     * // Delete one Progress
     * const Progress = await prisma.progress.delete({
     *   where: {
     *     // ... filter to delete one Progress
     *   }
     * })
     * 
    **/
    delete<T extends ProgressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressDeleteArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Progress.
     * @param {ProgressUpdateArgs} args - Arguments to update one Progress.
     * @example
     * // Update one Progress
     * const progress = await prisma.progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProgressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpdateArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Progresses.
     * @param {ProgressDeleteManyArgs} args - Arguments to filter Progresses to delete.
     * @example
     * // Delete a few Progresses
     * const { count } = await prisma.progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProgressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresses
     * const progress = await prisma.progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProgressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Progress.
     * @param {ProgressUpsertArgs} args - Arguments to update or create a Progress.
     * @example
     * // Update or create a Progress
     * const progress = await prisma.progress.upsert({
     *   create: {
     *     // ... data to create a Progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progress we want to update
     *   }
     * })
    **/
    upsert<T extends ProgressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpsertArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressCountArgs} args - Arguments to filter Progresses to count.
     * @example
     * // Count the number of Progresses
     * const count = await prisma.progress.count({
     *   where: {
     *     // ... the filter for the Progresses we want to count
     *   }
     * })
    **/
    count<T extends ProgressCountArgs>(
      args?: Subset<T, ProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressAggregateArgs>(args: Subset<T, ProgressAggregateArgs>): Prisma.PrismaPromise<GetProgressAggregateType<T>>

    /**
     * Group by Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressGroupByArgs} args - Group by arguments.
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
      T extends ProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressGroupByArgs['orderBy'] }
        : { orderBy?: ProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Progress model
   */
  readonly fields: ProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Progress model
   */ 
  interface ProgressFieldRefs {
    readonly id: FieldRef<"Progress", 'String'>
    readonly userId: FieldRef<"Progress", 'String'>
    readonly moduleId: FieldRef<"Progress", 'String'>
    readonly completed: FieldRef<"Progress", 'Boolean'>
    readonly completedAt: FieldRef<"Progress", 'DateTime'>
    readonly timeSpentMinutes: FieldRef<"Progress", 'Int'>
    readonly score: FieldRef<"Progress", 'Int'>
    readonly createdAt: FieldRef<"Progress", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Progress findUnique
   */
  export type ProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where: ProgressWhereUniqueInput
  }


  /**
   * Progress findUniqueOrThrow
   */
  export type ProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where: ProgressWhereUniqueInput
  }


  /**
   * Progress findFirst
   */
  export type ProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }


  /**
   * Progress findFirstOrThrow
   */
  export type ProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }


  /**
   * Progress findMany
   */
  export type ProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progresses to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }


  /**
   * Progress create
   */
  export type ProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a Progress.
     */
    data: XOR<ProgressCreateInput, ProgressUncheckedCreateInput>
  }


  /**
   * Progress createMany
   */
  export type ProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Progresses.
     */
    data: ProgressCreateManyInput | ProgressCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Progress update
   */
  export type ProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a Progress.
     */
    data: XOR<ProgressUpdateInput, ProgressUncheckedUpdateInput>
    /**
     * Choose, which Progress to update.
     */
    where: ProgressWhereUniqueInput
  }


  /**
   * Progress updateMany
   */
  export type ProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Progresses.
     */
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyInput>
    /**
     * Filter which Progresses to update
     */
    where?: ProgressWhereInput
  }


  /**
   * Progress upsert
   */
  export type ProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the Progress to update in case it exists.
     */
    where: ProgressWhereUniqueInput
    /**
     * In case the Progress found by the `where` argument doesn't exist, create a new Progress with this data.
     */
    create: XOR<ProgressCreateInput, ProgressUncheckedCreateInput>
    /**
     * In case the Progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressUpdateInput, ProgressUncheckedUpdateInput>
  }


  /**
   * Progress delete
   */
  export type ProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter which Progress to delete.
     */
    where: ProgressWhereUniqueInput
  }


  /**
   * Progress deleteMany
   */
  export type ProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progresses to delete
     */
    where?: ProgressWhereInput
  }


  /**
   * Progress without action
   */
  export type ProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
  }



  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    correctAnswer: number | null
  }

  export type QuizSumAggregateOutputType = {
    correctAnswer: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    moduleId: string | null
    question: string | null
    correctAnswer: number | null
    explanation: string | null
    difficulty: $Enums.Difficulty | null
    createdAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    moduleId: string | null
    question: string | null
    correctAnswer: number | null
    explanation: string | null
    difficulty: $Enums.Difficulty | null
    createdAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    moduleId: number
    question: number
    options: number
    correctAnswer: number
    explanation: number
    difficulty: number
    createdAt: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    correctAnswer?: true
  }

  export type QuizSumAggregateInputType = {
    correctAnswer?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    moduleId?: true
    question?: true
    correctAnswer?: true
    explanation?: true
    difficulty?: true
    createdAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    moduleId?: true
    question?: true
    correctAnswer?: true
    explanation?: true
    difficulty?: true
    createdAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    moduleId?: true
    question?: true
    options?: true
    correctAnswer?: true
    explanation?: true
    difficulty?: true
    createdAt?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    moduleId: string
    question: string
    options: JsonValue
    correctAnswer: number
    explanation: string
    difficulty: $Enums.Difficulty
    createdAt: Date
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    difficulty?: boolean
    createdAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    attempts?: boolean | Quiz$attemptsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    moduleId?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    difficulty?: boolean
    createdAt?: boolean
  }

  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    attempts?: boolean | Quiz$attemptsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
      attempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      moduleId: string
      question: string
      options: Prisma.JsonValue
      correctAnswer: number
      explanation: string
      difficulty: $Enums.Difficulty
      createdAt: Date
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }


  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuizFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Quiz that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuizFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuizFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
    **/
    create<T extends QuizCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuizCreateArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Quizzes.
     *     @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     *     @example
     *     // Create many Quizzes
     *     const quiz = await prisma.quiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuizCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
    **/
    delete<T extends QuizDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuizUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuizDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuizUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
    **/
    upsert<T extends QuizUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    attempts<T extends Quiz$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Quiz model
   */ 
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly moduleId: FieldRef<"Quiz", 'String'>
    readonly question: FieldRef<"Quiz", 'String'>
    readonly options: FieldRef<"Quiz", 'Json'>
    readonly correctAnswer: FieldRef<"Quiz", 'Int'>
    readonly explanation: FieldRef<"Quiz", 'String'>
    readonly difficulty: FieldRef<"Quiz", 'Difficulty'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }


  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }


  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }


  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }


  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }


  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }


  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }


  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
  }


  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }


  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }


  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
  }


  /**
   * Quiz.attempts
   */
  export type Quiz$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }


  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude<ExtArgs> | null
  }



  /**
   * Model QuizAttempt
   */

  export type AggregateQuizAttempt = {
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  export type QuizAttemptAvgAggregateOutputType = {
    selectedAnswer: number | null
  }

  export type QuizAttemptSumAggregateOutputType = {
    selectedAnswer: number | null
  }

  export type QuizAttemptMinAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    selectedAnswer: number | null
    isCorrect: boolean | null
    attemptedAt: Date | null
  }

  export type QuizAttemptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    selectedAnswer: number | null
    isCorrect: boolean | null
    attemptedAt: Date | null
  }

  export type QuizAttemptCountAggregateOutputType = {
    id: number
    userId: number
    quizId: number
    selectedAnswer: number
    isCorrect: number
    attemptedAt: number
    _all: number
  }


  export type QuizAttemptAvgAggregateInputType = {
    selectedAnswer?: true
  }

  export type QuizAttemptSumAggregateInputType = {
    selectedAnswer?: true
  }

  export type QuizAttemptMinAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    selectedAnswer?: true
    isCorrect?: true
    attemptedAt?: true
  }

  export type QuizAttemptMaxAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    selectedAnswer?: true
    isCorrect?: true
    attemptedAt?: true
  }

  export type QuizAttemptCountAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    selectedAnswer?: true
    isCorrect?: true
    attemptedAt?: true
    _all?: true
  }

  export type QuizAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempt to aggregate.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizAttempts
    **/
    _count?: true | QuizAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type GetQuizAttemptAggregateType<T extends QuizAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizAttempt[P]>
      : GetScalarType<T[P], AggregateQuizAttempt[P]>
  }




  export type QuizAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithAggregationInput | QuizAttemptOrderByWithAggregationInput[]
    by: QuizAttemptScalarFieldEnum[] | QuizAttemptScalarFieldEnum
    having?: QuizAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizAttemptCountAggregateInputType | true
    _avg?: QuizAttemptAvgAggregateInputType
    _sum?: QuizAttemptSumAggregateInputType
    _min?: QuizAttemptMinAggregateInputType
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type QuizAttemptGroupByOutputType = {
    id: string
    userId: string
    quizId: string
    selectedAnswer: number
    isCorrect: boolean
    attemptedAt: Date
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  type GetQuizAttemptGroupByPayload<T extends QuizAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
        }
      >
    >


  export type QuizAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    selectedAnswer?: boolean
    isCorrect?: boolean
    attemptedAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectScalar = {
    id?: boolean
    userId?: boolean
    quizId?: boolean
    selectedAnswer?: boolean
    isCorrect?: boolean
    attemptedAt?: boolean
  }

  export type QuizAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $QuizAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizAttempt"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      quizId: string
      selectedAnswer: number
      isCorrect: boolean
      attemptedAt: Date
    }, ExtArgs["result"]["quizAttempt"]>
    composites: {}
  }


  type QuizAttemptGetPayload<S extends boolean | null | undefined | QuizAttemptDefaultArgs> = $Result.GetResult<Prisma.$QuizAttemptPayload, S>

  type QuizAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuizAttemptFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: QuizAttemptCountAggregateInputType | true
    }

  export interface QuizAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizAttempt'], meta: { name: 'QuizAttempt' } }
    /**
     * Find zero or one QuizAttempt that matches the filter.
     * @param {QuizAttemptFindUniqueArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuizAttemptFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuizAttemptFindUniqueArgs<ExtArgs>>
    ): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one QuizAttempt that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuizAttemptFindUniqueOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuizAttemptFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizAttemptFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first QuizAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuizAttemptFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizAttemptFindFirstArgs<ExtArgs>>
    ): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first QuizAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuizAttemptFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizAttemptFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more QuizAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany()
     * 
     * // Get first 10 QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuizAttemptFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizAttemptFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a QuizAttempt.
     * @param {QuizAttemptCreateArgs} args - Arguments to create a QuizAttempt.
     * @example
     * // Create one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.create({
     *   data: {
     *     // ... data to create a QuizAttempt
     *   }
     * })
     * 
    **/
    create<T extends QuizAttemptCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuizAttemptCreateArgs<ExtArgs>>
    ): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many QuizAttempts.
     *     @param {QuizAttemptCreateManyArgs} args - Arguments to create many QuizAttempts.
     *     @example
     *     // Create many QuizAttempts
     *     const quizAttempt = await prisma.quizAttempt.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuizAttemptCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizAttemptCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuizAttempt.
     * @param {QuizAttemptDeleteArgs} args - Arguments to delete one QuizAttempt.
     * @example
     * // Delete one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.delete({
     *   where: {
     *     // ... filter to delete one QuizAttempt
     *   }
     * })
     * 
    **/
    delete<T extends QuizAttemptDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuizAttemptDeleteArgs<ExtArgs>>
    ): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one QuizAttempt.
     * @param {QuizAttemptUpdateArgs} args - Arguments to update one QuizAttempt.
     * @example
     * // Update one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuizAttemptUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuizAttemptUpdateArgs<ExtArgs>>
    ): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more QuizAttempts.
     * @param {QuizAttemptDeleteManyArgs} args - Arguments to filter QuizAttempts to delete.
     * @example
     * // Delete a few QuizAttempts
     * const { count } = await prisma.quizAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuizAttemptDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizAttemptDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuizAttemptUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuizAttemptUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuizAttempt.
     * @param {QuizAttemptUpsertArgs} args - Arguments to update or create a QuizAttempt.
     * @example
     * // Update or create a QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.upsert({
     *   create: {
     *     // ... data to create a QuizAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizAttempt we want to update
     *   }
     * })
    **/
    upsert<T extends QuizAttemptUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuizAttemptUpsertArgs<ExtArgs>>
    ): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptCountArgs} args - Arguments to filter QuizAttempts to count.
     * @example
     * // Count the number of QuizAttempts
     * const count = await prisma.quizAttempt.count({
     *   where: {
     *     // ... the filter for the QuizAttempts we want to count
     *   }
     * })
    **/
    count<T extends QuizAttemptCountArgs>(
      args?: Subset<T, QuizAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAttemptAggregateArgs>(args: Subset<T, QuizAttemptAggregateArgs>): Prisma.PrismaPromise<GetQuizAttemptAggregateType<T>>

    /**
     * Group by QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptGroupByArgs} args - Group by arguments.
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
      T extends QuizAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizAttemptGroupByArgs['orderBy'] }
        : { orderBy?: QuizAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizAttempt model
   */
  readonly fields: QuizAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the QuizAttempt model
   */ 
  interface QuizAttemptFieldRefs {
    readonly id: FieldRef<"QuizAttempt", 'String'>
    readonly userId: FieldRef<"QuizAttempt", 'String'>
    readonly quizId: FieldRef<"QuizAttempt", 'String'>
    readonly selectedAnswer: FieldRef<"QuizAttempt", 'Int'>
    readonly isCorrect: FieldRef<"QuizAttempt", 'Boolean'>
    readonly attemptedAt: FieldRef<"QuizAttempt", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * QuizAttempt findUnique
   */
  export type QuizAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }


  /**
   * QuizAttempt findUniqueOrThrow
   */
  export type QuizAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }


  /**
   * QuizAttempt findFirst
   */
  export type QuizAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }


  /**
   * QuizAttempt findFirstOrThrow
   */
  export type QuizAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }


  /**
   * QuizAttempt findMany
   */
  export type QuizAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempts to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }


  /**
   * QuizAttempt create
   */
  export type QuizAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizAttempt.
     */
    data: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
  }


  /**
   * QuizAttempt createMany
   */
  export type QuizAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * QuizAttempt update
   */
  export type QuizAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizAttempt.
     */
    data: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
    /**
     * Choose, which QuizAttempt to update.
     */
    where: QuizAttemptWhereUniqueInput
  }


  /**
   * QuizAttempt updateMany
   */
  export type QuizAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
  }


  /**
   * QuizAttempt upsert
   */
  export type QuizAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizAttempt to update in case it exists.
     */
    where: QuizAttemptWhereUniqueInput
    /**
     * In case the QuizAttempt found by the `where` argument doesn't exist, create a new QuizAttempt with this data.
     */
    create: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
    /**
     * In case the QuizAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
  }


  /**
   * QuizAttempt delete
   */
  export type QuizAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter which QuizAttempt to delete.
     */
    where: QuizAttemptWhereUniqueInput
  }


  /**
   * QuizAttempt deleteMany
   */
  export type QuizAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempts to delete
     */
    where?: QuizAttemptWhereInput
  }


  /**
   * QuizAttempt without action
   */
  export type QuizAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizAttemptInclude<ExtArgs> | null
  }



  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    domainId: string | null
    verificationCode: string | null
    pdfUrl: string | null
    issuedAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    domainId: string | null
    verificationCode: string | null
    pdfUrl: string | null
    issuedAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    userId: number
    domainId: number
    verificationCode: number
    pdfUrl: number
    issuedAt: number
    _all: number
  }


  export type CertificateMinAggregateInputType = {
    id?: true
    userId?: true
    domainId?: true
    verificationCode?: true
    pdfUrl?: true
    issuedAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    userId?: true
    domainId?: true
    verificationCode?: true
    pdfUrl?: true
    issuedAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    userId?: true
    domainId?: true
    verificationCode?: true
    pdfUrl?: true
    issuedAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    userId: string
    domainId: string
    verificationCode: string
    pdfUrl: string | null
    issuedAt: Date
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    domainId?: boolean
    verificationCode?: boolean
    pdfUrl?: boolean
    issuedAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    userId?: boolean
    domainId?: boolean
    verificationCode?: boolean
    pdfUrl?: boolean
    issuedAt?: boolean
  }

  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      domainId: string
      verificationCode: string
      pdfUrl: string | null
      issuedAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }


  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CertificateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>
    ): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Certificate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CertificateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>
    ): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CertificateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
    **/
    create<T extends CertificateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>
    ): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Certificates.
     *     @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     *     @example
     *     // Create many Certificates
     *     const certificate = await prisma.certificate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CertificateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
    **/
    delete<T extends CertificateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>
    ): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CertificateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>
    ): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CertificateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CertificateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
    **/
    upsert<T extends CertificateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>
    ): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
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
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Certificate model
   */ 
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly userId: FieldRef<"Certificate", 'String'>
    readonly domainId: FieldRef<"Certificate", 'String'>
    readonly verificationCode: FieldRef<"Certificate", 'String'>
    readonly pdfUrl: FieldRef<"Certificate", 'String'>
    readonly issuedAt: FieldRef<"Certificate", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }


  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }


  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }


  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }


  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }


  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }


  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }


  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
  }


  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }


  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }


  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
  }


  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CertificateInclude<ExtArgs> | null
  }



  /**
   * Model JobPosting
   */

  export type AggregateJobPosting = {
    _count: JobPostingCountAggregateOutputType | null
    _avg: JobPostingAvgAggregateOutputType | null
    _sum: JobPostingSumAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  export type JobPostingAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobPostingSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobPostingMinAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    location: string | null
    salaryMin: number | null
    salaryMax: number | null
    domain: string | null
    url: string | null
    status: $Enums.JobStatus | null
    postedAt: Date | null
    expiresAt: Date | null
  }

  export type JobPostingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    location: string | null
    salaryMin: number | null
    salaryMax: number | null
    domain: string | null
    url: string | null
    status: $Enums.JobStatus | null
    postedAt: Date | null
    expiresAt: Date | null
  }

  export type JobPostingCountAggregateOutputType = {
    id: number
    title: number
    company: number
    location: number
    salaryMin: number
    salaryMax: number
    skills: number
    domain: number
    url: number
    status: number
    postedAt: number
    expiresAt: number
    _all: number
  }


  export type JobPostingAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobPostingSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobPostingMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    salaryMin?: true
    salaryMax?: true
    domain?: true
    url?: true
    status?: true
    postedAt?: true
    expiresAt?: true
  }

  export type JobPostingMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    salaryMin?: true
    salaryMax?: true
    domain?: true
    url?: true
    status?: true
    postedAt?: true
    expiresAt?: true
  }

  export type JobPostingCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    salaryMin?: true
    salaryMax?: true
    skills?: true
    domain?: true
    url?: true
    status?: true
    postedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type JobPostingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPosting to aggregate.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobPostings
    **/
    _count?: true | JobPostingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobPostingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobPostingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobPostingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobPostingMaxAggregateInputType
  }

  export type GetJobPostingAggregateType<T extends JobPostingAggregateArgs> = {
        [P in keyof T & keyof AggregateJobPosting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobPosting[P]>
      : GetScalarType<T[P], AggregateJobPosting[P]>
  }




  export type JobPostingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostingWhereInput
    orderBy?: JobPostingOrderByWithAggregationInput | JobPostingOrderByWithAggregationInput[]
    by: JobPostingScalarFieldEnum[] | JobPostingScalarFieldEnum
    having?: JobPostingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobPostingCountAggregateInputType | true
    _avg?: JobPostingAvgAggregateInputType
    _sum?: JobPostingSumAggregateInputType
    _min?: JobPostingMinAggregateInputType
    _max?: JobPostingMaxAggregateInputType
  }

  export type JobPostingGroupByOutputType = {
    id: string
    title: string
    company: string
    location: string
    salaryMin: number
    salaryMax: number
    skills: string[]
    domain: string
    url: string
    status: $Enums.JobStatus
    postedAt: Date
    expiresAt: Date | null
    _count: JobPostingCountAggregateOutputType | null
    _avg: JobPostingAvgAggregateOutputType | null
    _sum: JobPostingSumAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  type GetJobPostingGroupByPayload<T extends JobPostingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobPostingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobPostingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
            : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
        }
      >
    >


  export type JobPostingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    skills?: boolean
    domain?: boolean
    url?: boolean
    status?: boolean
    postedAt?: boolean
    expiresAt?: boolean
    bookmarkedJobs?: boolean | JobPosting$bookmarkedJobsArgs<ExtArgs>
    _count?: boolean | JobPostingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    skills?: boolean
    domain?: boolean
    url?: boolean
    status?: boolean
    postedAt?: boolean
    expiresAt?: boolean
  }

  export type JobPostingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarkedJobs?: boolean | JobPosting$bookmarkedJobsArgs<ExtArgs>
    _count?: boolean | JobPostingCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $JobPostingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobPosting"
    objects: {
      bookmarkedJobs: Prisma.$BookmarkedJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      company: string
      location: string
      salaryMin: number
      salaryMax: number
      skills: string[]
      domain: string
      url: string
      status: $Enums.JobStatus
      postedAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["jobPosting"]>
    composites: {}
  }


  type JobPostingGetPayload<S extends boolean | null | undefined | JobPostingDefaultArgs> = $Result.GetResult<Prisma.$JobPostingPayload, S>

  type JobPostingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobPostingFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: JobPostingCountAggregateInputType | true
    }

  export interface JobPostingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobPosting'], meta: { name: 'JobPosting' } }
    /**
     * Find zero or one JobPosting that matches the filter.
     * @param {JobPostingFindUniqueArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobPostingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingFindUniqueArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one JobPosting that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JobPostingFindUniqueOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobPostingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobPostingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first JobPosting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobPostingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JobPostingFindFirstArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first JobPosting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobPostingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobPostingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more JobPostings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobPostings
     * const jobPostings = await prisma.jobPosting.findMany()
     * 
     * // Get first 10 JobPostings
     * const jobPostings = await prisma.jobPosting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JobPostingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobPostingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a JobPosting.
     * @param {JobPostingCreateArgs} args - Arguments to create a JobPosting.
     * @example
     * // Create one JobPosting
     * const JobPosting = await prisma.jobPosting.create({
     *   data: {
     *     // ... data to create a JobPosting
     *   }
     * })
     * 
    **/
    create<T extends JobPostingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingCreateArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many JobPostings.
     *     @param {JobPostingCreateManyArgs} args - Arguments to create many JobPostings.
     *     @example
     *     // Create many JobPostings
     *     const jobPosting = await prisma.jobPosting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JobPostingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobPostingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobPosting.
     * @param {JobPostingDeleteArgs} args - Arguments to delete one JobPosting.
     * @example
     * // Delete one JobPosting
     * const JobPosting = await prisma.jobPosting.delete({
     *   where: {
     *     // ... filter to delete one JobPosting
     *   }
     * })
     * 
    **/
    delete<T extends JobPostingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingDeleteArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one JobPosting.
     * @param {JobPostingUpdateArgs} args - Arguments to update one JobPosting.
     * @example
     * // Update one JobPosting
     * const jobPosting = await prisma.jobPosting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobPostingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingUpdateArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more JobPostings.
     * @param {JobPostingDeleteManyArgs} args - Arguments to filter JobPostings to delete.
     * @example
     * // Delete a few JobPostings
     * const { count } = await prisma.jobPosting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobPostingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobPostingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobPostingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobPosting.
     * @param {JobPostingUpsertArgs} args - Arguments to update or create a JobPosting.
     * @example
     * // Update or create a JobPosting
     * const jobPosting = await prisma.jobPosting.upsert({
     *   create: {
     *     // ... data to create a JobPosting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobPosting we want to update
     *   }
     * })
    **/
    upsert<T extends JobPostingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingUpsertArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingCountArgs} args - Arguments to filter JobPostings to count.
     * @example
     * // Count the number of JobPostings
     * const count = await prisma.jobPosting.count({
     *   where: {
     *     // ... the filter for the JobPostings we want to count
     *   }
     * })
    **/
    count<T extends JobPostingCountArgs>(
      args?: Subset<T, JobPostingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobPostingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobPostingAggregateArgs>(args: Subset<T, JobPostingAggregateArgs>): Prisma.PrismaPromise<GetJobPostingAggregateType<T>>

    /**
     * Group by JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingGroupByArgs} args - Group by arguments.
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
      T extends JobPostingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobPostingGroupByArgs['orderBy'] }
        : { orderBy?: JobPostingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobPostingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobPostingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobPosting model
   */
  readonly fields: JobPostingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobPosting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobPostingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bookmarkedJobs<T extends JobPosting$bookmarkedJobsArgs<ExtArgs> = {}>(args?: Subset<T, JobPosting$bookmarkedJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedJobPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the JobPosting model
   */ 
  interface JobPostingFieldRefs {
    readonly id: FieldRef<"JobPosting", 'String'>
    readonly title: FieldRef<"JobPosting", 'String'>
    readonly company: FieldRef<"JobPosting", 'String'>
    readonly location: FieldRef<"JobPosting", 'String'>
    readonly salaryMin: FieldRef<"JobPosting", 'Int'>
    readonly salaryMax: FieldRef<"JobPosting", 'Int'>
    readonly skills: FieldRef<"JobPosting", 'String[]'>
    readonly domain: FieldRef<"JobPosting", 'String'>
    readonly url: FieldRef<"JobPosting", 'String'>
    readonly status: FieldRef<"JobPosting", 'JobStatus'>
    readonly postedAt: FieldRef<"JobPosting", 'DateTime'>
    readonly expiresAt: FieldRef<"JobPosting", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * JobPosting findUnique
   */
  export type JobPostingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }


  /**
   * JobPosting findUniqueOrThrow
   */
  export type JobPostingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }


  /**
   * JobPosting findFirst
   */
  export type JobPostingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }


  /**
   * JobPosting findFirstOrThrow
   */
  export type JobPostingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }


  /**
   * JobPosting findMany
   */
  export type JobPostingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPostings to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }


  /**
   * JobPosting create
   */
  export type JobPostingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The data needed to create a JobPosting.
     */
    data: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
  }


  /**
   * JobPosting createMany
   */
  export type JobPostingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobPostings.
     */
    data: JobPostingCreateManyInput | JobPostingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * JobPosting update
   */
  export type JobPostingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The data needed to update a JobPosting.
     */
    data: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
    /**
     * Choose, which JobPosting to update.
     */
    where: JobPostingWhereUniqueInput
  }


  /**
   * JobPosting updateMany
   */
  export type JobPostingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobPostings.
     */
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyInput>
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput
  }


  /**
   * JobPosting upsert
   */
  export type JobPostingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The filter to search for the JobPosting to update in case it exists.
     */
    where: JobPostingWhereUniqueInput
    /**
     * In case the JobPosting found by the `where` argument doesn't exist, create a new JobPosting with this data.
     */
    create: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
    /**
     * In case the JobPosting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
  }


  /**
   * JobPosting delete
   */
  export type JobPostingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter which JobPosting to delete.
     */
    where: JobPostingWhereUniqueInput
  }


  /**
   * JobPosting deleteMany
   */
  export type JobPostingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPostings to delete
     */
    where?: JobPostingWhereInput
  }


  /**
   * JobPosting.bookmarkedJobs
   */
  export type JobPosting$bookmarkedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
    where?: BookmarkedJobWhereInput
    orderBy?: BookmarkedJobOrderByWithRelationInput | BookmarkedJobOrderByWithRelationInput[]
    cursor?: BookmarkedJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkedJobScalarFieldEnum | BookmarkedJobScalarFieldEnum[]
  }


  /**
   * JobPosting without action
   */
  export type JobPostingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
  }



  /**
   * Model BookmarkedJob
   */

  export type AggregateBookmarkedJob = {
    _count: BookmarkedJobCountAggregateOutputType | null
    _min: BookmarkedJobMinAggregateOutputType | null
    _max: BookmarkedJobMaxAggregateOutputType | null
  }

  export type BookmarkedJobMinAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    createdAt: Date | null
  }

  export type BookmarkedJobMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    createdAt: Date | null
  }

  export type BookmarkedJobCountAggregateOutputType = {
    id: number
    userId: number
    jobId: number
    createdAt: number
    _all: number
  }


  export type BookmarkedJobMinAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    createdAt?: true
  }

  export type BookmarkedJobMaxAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    createdAt?: true
  }

  export type BookmarkedJobCountAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    createdAt?: true
    _all?: true
  }

  export type BookmarkedJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarkedJob to aggregate.
     */
    where?: BookmarkedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedJobs to fetch.
     */
    orderBy?: BookmarkedJobOrderByWithRelationInput | BookmarkedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookmarkedJobs
    **/
    _count?: true | BookmarkedJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkedJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkedJobMaxAggregateInputType
  }

  export type GetBookmarkedJobAggregateType<T extends BookmarkedJobAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmarkedJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmarkedJob[P]>
      : GetScalarType<T[P], AggregateBookmarkedJob[P]>
  }




  export type BookmarkedJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkedJobWhereInput
    orderBy?: BookmarkedJobOrderByWithAggregationInput | BookmarkedJobOrderByWithAggregationInput[]
    by: BookmarkedJobScalarFieldEnum[] | BookmarkedJobScalarFieldEnum
    having?: BookmarkedJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkedJobCountAggregateInputType | true
    _min?: BookmarkedJobMinAggregateInputType
    _max?: BookmarkedJobMaxAggregateInputType
  }

  export type BookmarkedJobGroupByOutputType = {
    id: string
    userId: string
    jobId: string
    createdAt: Date
    _count: BookmarkedJobCountAggregateOutputType | null
    _min: BookmarkedJobMinAggregateOutputType | null
    _max: BookmarkedJobMaxAggregateOutputType | null
  }

  type GetBookmarkedJobGroupByPayload<T extends BookmarkedJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkedJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkedJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkedJobGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkedJobGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkedJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobId?: boolean
    createdAt?: boolean
    job?: boolean | JobPostingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkedJob"]>

  export type BookmarkedJobSelectScalar = {
    id?: boolean
    userId?: boolean
    jobId?: boolean
    createdAt?: boolean
  }

  export type BookmarkedJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobPostingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $BookmarkedJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookmarkedJob"
    objects: {
      job: Prisma.$JobPostingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      jobId: string
      createdAt: Date
    }, ExtArgs["result"]["bookmarkedJob"]>
    composites: {}
  }


  type BookmarkedJobGetPayload<S extends boolean | null | undefined | BookmarkedJobDefaultArgs> = $Result.GetResult<Prisma.$BookmarkedJobPayload, S>

  type BookmarkedJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookmarkedJobFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BookmarkedJobCountAggregateInputType | true
    }

  export interface BookmarkedJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookmarkedJob'], meta: { name: 'BookmarkedJob' } }
    /**
     * Find zero or one BookmarkedJob that matches the filter.
     * @param {BookmarkedJobFindUniqueArgs} args - Arguments to find a BookmarkedJob
     * @example
     * // Get one BookmarkedJob
     * const bookmarkedJob = await prisma.bookmarkedJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookmarkedJobFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkedJobFindUniqueArgs<ExtArgs>>
    ): Prisma__BookmarkedJobClient<$Result.GetResult<Prisma.$BookmarkedJobPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BookmarkedJob that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookmarkedJobFindUniqueOrThrowArgs} args - Arguments to find a BookmarkedJob
     * @example
     * // Get one BookmarkedJob
     * const bookmarkedJob = await prisma.bookmarkedJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookmarkedJobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkedJobFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookmarkedJobClient<$Result.GetResult<Prisma.$BookmarkedJobPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BookmarkedJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedJobFindFirstArgs} args - Arguments to find a BookmarkedJob
     * @example
     * // Get one BookmarkedJob
     * const bookmarkedJob = await prisma.bookmarkedJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookmarkedJobFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkedJobFindFirstArgs<ExtArgs>>
    ): Prisma__BookmarkedJobClient<$Result.GetResult<Prisma.$BookmarkedJobPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BookmarkedJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedJobFindFirstOrThrowArgs} args - Arguments to find a BookmarkedJob
     * @example
     * // Get one BookmarkedJob
     * const bookmarkedJob = await prisma.bookmarkedJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookmarkedJobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkedJobFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookmarkedJobClient<$Result.GetResult<Prisma.$BookmarkedJobPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BookmarkedJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedJobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookmarkedJobs
     * const bookmarkedJobs = await prisma.bookmarkedJob.findMany()
     * 
     * // Get first 10 BookmarkedJobs
     * const bookmarkedJobs = await prisma.bookmarkedJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkedJobWithIdOnly = await prisma.bookmarkedJob.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookmarkedJobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkedJobFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedJobPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BookmarkedJob.
     * @param {BookmarkedJobCreateArgs} args - Arguments to create a BookmarkedJob.
     * @example
     * // Create one BookmarkedJob
     * const BookmarkedJob = await prisma.bookmarkedJob.create({
     *   data: {
     *     // ... data to create a BookmarkedJob
     *   }
     * })
     * 
    **/
    create<T extends BookmarkedJobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkedJobCreateArgs<ExtArgs>>
    ): Prisma__BookmarkedJobClient<$Result.GetResult<Prisma.$BookmarkedJobPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BookmarkedJobs.
     *     @param {BookmarkedJobCreateManyArgs} args - Arguments to create many BookmarkedJobs.
     *     @example
     *     // Create many BookmarkedJobs
     *     const bookmarkedJob = await prisma.bookmarkedJob.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookmarkedJobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkedJobCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookmarkedJob.
     * @param {BookmarkedJobDeleteArgs} args - Arguments to delete one BookmarkedJob.
     * @example
     * // Delete one BookmarkedJob
     * const BookmarkedJob = await prisma.bookmarkedJob.delete({
     *   where: {
     *     // ... filter to delete one BookmarkedJob
     *   }
     * })
     * 
    **/
    delete<T extends BookmarkedJobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkedJobDeleteArgs<ExtArgs>>
    ): Prisma__BookmarkedJobClient<$Result.GetResult<Prisma.$BookmarkedJobPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BookmarkedJob.
     * @param {BookmarkedJobUpdateArgs} args - Arguments to update one BookmarkedJob.
     * @example
     * // Update one BookmarkedJob
     * const bookmarkedJob = await prisma.bookmarkedJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookmarkedJobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkedJobUpdateArgs<ExtArgs>>
    ): Prisma__BookmarkedJobClient<$Result.GetResult<Prisma.$BookmarkedJobPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BookmarkedJobs.
     * @param {BookmarkedJobDeleteManyArgs} args - Arguments to filter BookmarkedJobs to delete.
     * @example
     * // Delete a few BookmarkedJobs
     * const { count } = await prisma.bookmarkedJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookmarkedJobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkedJobDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmarkedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookmarkedJobs
     * const bookmarkedJob = await prisma.bookmarkedJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookmarkedJobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkedJobUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookmarkedJob.
     * @param {BookmarkedJobUpsertArgs} args - Arguments to update or create a BookmarkedJob.
     * @example
     * // Update or create a BookmarkedJob
     * const bookmarkedJob = await prisma.bookmarkedJob.upsert({
     *   create: {
     *     // ... data to create a BookmarkedJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookmarkedJob we want to update
     *   }
     * })
    **/
    upsert<T extends BookmarkedJobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkedJobUpsertArgs<ExtArgs>>
    ): Prisma__BookmarkedJobClient<$Result.GetResult<Prisma.$BookmarkedJobPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BookmarkedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedJobCountArgs} args - Arguments to filter BookmarkedJobs to count.
     * @example
     * // Count the number of BookmarkedJobs
     * const count = await prisma.bookmarkedJob.count({
     *   where: {
     *     // ... the filter for the BookmarkedJobs we want to count
     *   }
     * })
    **/
    count<T extends BookmarkedJobCountArgs>(
      args?: Subset<T, BookmarkedJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkedJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookmarkedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarkedJobAggregateArgs>(args: Subset<T, BookmarkedJobAggregateArgs>): Prisma.PrismaPromise<GetBookmarkedJobAggregateType<T>>

    /**
     * Group by BookmarkedJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedJobGroupByArgs} args - Group by arguments.
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
      T extends BookmarkedJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkedJobGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkedJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookmarkedJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkedJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookmarkedJob model
   */
  readonly fields: BookmarkedJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookmarkedJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkedJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job<T extends JobPostingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobPostingDefaultArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BookmarkedJob model
   */ 
  interface BookmarkedJobFieldRefs {
    readonly id: FieldRef<"BookmarkedJob", 'String'>
    readonly userId: FieldRef<"BookmarkedJob", 'String'>
    readonly jobId: FieldRef<"BookmarkedJob", 'String'>
    readonly createdAt: FieldRef<"BookmarkedJob", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * BookmarkedJob findUnique
   */
  export type BookmarkedJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedJob to fetch.
     */
    where: BookmarkedJobWhereUniqueInput
  }


  /**
   * BookmarkedJob findUniqueOrThrow
   */
  export type BookmarkedJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedJob to fetch.
     */
    where: BookmarkedJobWhereUniqueInput
  }


  /**
   * BookmarkedJob findFirst
   */
  export type BookmarkedJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedJob to fetch.
     */
    where?: BookmarkedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedJobs to fetch.
     */
    orderBy?: BookmarkedJobOrderByWithRelationInput | BookmarkedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarkedJobs.
     */
    cursor?: BookmarkedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarkedJobs.
     */
    distinct?: BookmarkedJobScalarFieldEnum | BookmarkedJobScalarFieldEnum[]
  }


  /**
   * BookmarkedJob findFirstOrThrow
   */
  export type BookmarkedJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedJob to fetch.
     */
    where?: BookmarkedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedJobs to fetch.
     */
    orderBy?: BookmarkedJobOrderByWithRelationInput | BookmarkedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarkedJobs.
     */
    cursor?: BookmarkedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarkedJobs.
     */
    distinct?: BookmarkedJobScalarFieldEnum | BookmarkedJobScalarFieldEnum[]
  }


  /**
   * BookmarkedJob findMany
   */
  export type BookmarkedJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedJobs to fetch.
     */
    where?: BookmarkedJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedJobs to fetch.
     */
    orderBy?: BookmarkedJobOrderByWithRelationInput | BookmarkedJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookmarkedJobs.
     */
    cursor?: BookmarkedJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedJobs.
     */
    skip?: number
    distinct?: BookmarkedJobScalarFieldEnum | BookmarkedJobScalarFieldEnum[]
  }


  /**
   * BookmarkedJob create
   */
  export type BookmarkedJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
    /**
     * The data needed to create a BookmarkedJob.
     */
    data: XOR<BookmarkedJobCreateInput, BookmarkedJobUncheckedCreateInput>
  }


  /**
   * BookmarkedJob createMany
   */
  export type BookmarkedJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookmarkedJobs.
     */
    data: BookmarkedJobCreateManyInput | BookmarkedJobCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BookmarkedJob update
   */
  export type BookmarkedJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
    /**
     * The data needed to update a BookmarkedJob.
     */
    data: XOR<BookmarkedJobUpdateInput, BookmarkedJobUncheckedUpdateInput>
    /**
     * Choose, which BookmarkedJob to update.
     */
    where: BookmarkedJobWhereUniqueInput
  }


  /**
   * BookmarkedJob updateMany
   */
  export type BookmarkedJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookmarkedJobs.
     */
    data: XOR<BookmarkedJobUpdateManyMutationInput, BookmarkedJobUncheckedUpdateManyInput>
    /**
     * Filter which BookmarkedJobs to update
     */
    where?: BookmarkedJobWhereInput
  }


  /**
   * BookmarkedJob upsert
   */
  export type BookmarkedJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
    /**
     * The filter to search for the BookmarkedJob to update in case it exists.
     */
    where: BookmarkedJobWhereUniqueInput
    /**
     * In case the BookmarkedJob found by the `where` argument doesn't exist, create a new BookmarkedJob with this data.
     */
    create: XOR<BookmarkedJobCreateInput, BookmarkedJobUncheckedCreateInput>
    /**
     * In case the BookmarkedJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkedJobUpdateInput, BookmarkedJobUncheckedUpdateInput>
  }


  /**
   * BookmarkedJob delete
   */
  export type BookmarkedJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
    /**
     * Filter which BookmarkedJob to delete.
     */
    where: BookmarkedJobWhereUniqueInput
  }


  /**
   * BookmarkedJob deleteMany
   */
  export type BookmarkedJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarkedJobs to delete
     */
    where?: BookmarkedJobWhereInput
  }


  /**
   * BookmarkedJob without action
   */
  export type BookmarkedJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedJob
     */
    select?: BookmarkedJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkedJobInclude<ExtArgs> | null
  }



  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    read: boolean | null
    actionUrl: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    read: boolean | null
    actionUrl: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    read: number
    actionUrl: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    read?: true
    actionUrl?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    read?: true
    actionUrl?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    read?: true
    actionUrl?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    read: boolean
    actionUrl: string | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    actionUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    actionUrl?: boolean
    createdAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.NotificationType
      title: string
      message: string
      read: boolean
      actionUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }


  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Notifications.
     *     @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly actionUrl: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }


  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }


  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
  }



  /**
   * Model InterviewQuestion
   */

  export type AggregateInterviewQuestion = {
    _count: InterviewQuestionCountAggregateOutputType | null
    _min: InterviewQuestionMinAggregateOutputType | null
    _max: InterviewQuestionMaxAggregateOutputType | null
  }

  export type InterviewQuestionMinAggregateOutputType = {
    id: string | null
    role: string | null
    question: string | null
    category: $Enums.Category | null
    difficulty: $Enums.Difficulty | null
    modelAnswer: string | null
    createdAt: Date | null
  }

  export type InterviewQuestionMaxAggregateOutputType = {
    id: string | null
    role: string | null
    question: string | null
    category: $Enums.Category | null
    difficulty: $Enums.Difficulty | null
    modelAnswer: string | null
    createdAt: Date | null
  }

  export type InterviewQuestionCountAggregateOutputType = {
    id: number
    role: number
    question: number
    category: number
    difficulty: number
    modelAnswer: number
    createdAt: number
    _all: number
  }


  export type InterviewQuestionMinAggregateInputType = {
    id?: true
    role?: true
    question?: true
    category?: true
    difficulty?: true
    modelAnswer?: true
    createdAt?: true
  }

  export type InterviewQuestionMaxAggregateInputType = {
    id?: true
    role?: true
    question?: true
    category?: true
    difficulty?: true
    modelAnswer?: true
    createdAt?: true
  }

  export type InterviewQuestionCountAggregateInputType = {
    id?: true
    role?: true
    question?: true
    category?: true
    difficulty?: true
    modelAnswer?: true
    createdAt?: true
    _all?: true
  }

  export type InterviewQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewQuestion to aggregate.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewQuestions
    **/
    _count?: true | InterviewQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewQuestionMaxAggregateInputType
  }

  export type GetInterviewQuestionAggregateType<T extends InterviewQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewQuestion[P]>
      : GetScalarType<T[P], AggregateInterviewQuestion[P]>
  }




  export type InterviewQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewQuestionWhereInput
    orderBy?: InterviewQuestionOrderByWithAggregationInput | InterviewQuestionOrderByWithAggregationInput[]
    by: InterviewQuestionScalarFieldEnum[] | InterviewQuestionScalarFieldEnum
    having?: InterviewQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewQuestionCountAggregateInputType | true
    _min?: InterviewQuestionMinAggregateInputType
    _max?: InterviewQuestionMaxAggregateInputType
  }

  export type InterviewQuestionGroupByOutputType = {
    id: string
    role: string
    question: string
    category: $Enums.Category
    difficulty: $Enums.Difficulty
    modelAnswer: string | null
    createdAt: Date
    _count: InterviewQuestionCountAggregateOutputType | null
    _min: InterviewQuestionMinAggregateOutputType | null
    _max: InterviewQuestionMaxAggregateOutputType | null
  }

  type GetInterviewQuestionGroupByPayload<T extends InterviewQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewQuestionGroupByOutputType[P]>
        }
      >
    >


  export type InterviewQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    question?: boolean
    category?: boolean
    difficulty?: boolean
    modelAnswer?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["interviewQuestion"]>

  export type InterviewQuestionSelectScalar = {
    id?: boolean
    role?: boolean
    question?: boolean
    category?: boolean
    difficulty?: boolean
    modelAnswer?: boolean
    createdAt?: boolean
  }


  export type $InterviewQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewQuestion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      question: string
      category: $Enums.Category
      difficulty: $Enums.Difficulty
      modelAnswer: string | null
      createdAt: Date
    }, ExtArgs["result"]["interviewQuestion"]>
    composites: {}
  }


  type InterviewQuestionGetPayload<S extends boolean | null | undefined | InterviewQuestionDefaultArgs> = $Result.GetResult<Prisma.$InterviewQuestionPayload, S>

  type InterviewQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InterviewQuestionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: InterviewQuestionCountAggregateInputType | true
    }

  export interface InterviewQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewQuestion'], meta: { name: 'InterviewQuestion' } }
    /**
     * Find zero or one InterviewQuestion that matches the filter.
     * @param {InterviewQuestionFindUniqueArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InterviewQuestionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InterviewQuestionFindUniqueArgs<ExtArgs>>
    ): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InterviewQuestion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InterviewQuestionFindUniqueOrThrowArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InterviewQuestionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InterviewQuestionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InterviewQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionFindFirstArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InterviewQuestionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InterviewQuestionFindFirstArgs<ExtArgs>>
    ): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InterviewQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionFindFirstOrThrowArgs} args - Arguments to find a InterviewQuestion
     * @example
     * // Get one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InterviewQuestionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InterviewQuestionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InterviewQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewQuestions
     * const interviewQuestions = await prisma.interviewQuestion.findMany()
     * 
     * // Get first 10 InterviewQuestions
     * const interviewQuestions = await prisma.interviewQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewQuestionWithIdOnly = await prisma.interviewQuestion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InterviewQuestionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InterviewQuestionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InterviewQuestion.
     * @param {InterviewQuestionCreateArgs} args - Arguments to create a InterviewQuestion.
     * @example
     * // Create one InterviewQuestion
     * const InterviewQuestion = await prisma.interviewQuestion.create({
     *   data: {
     *     // ... data to create a InterviewQuestion
     *   }
     * })
     * 
    **/
    create<T extends InterviewQuestionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InterviewQuestionCreateArgs<ExtArgs>>
    ): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InterviewQuestions.
     *     @param {InterviewQuestionCreateManyArgs} args - Arguments to create many InterviewQuestions.
     *     @example
     *     // Create many InterviewQuestions
     *     const interviewQuestion = await prisma.interviewQuestion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InterviewQuestionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InterviewQuestionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InterviewQuestion.
     * @param {InterviewQuestionDeleteArgs} args - Arguments to delete one InterviewQuestion.
     * @example
     * // Delete one InterviewQuestion
     * const InterviewQuestion = await prisma.interviewQuestion.delete({
     *   where: {
     *     // ... filter to delete one InterviewQuestion
     *   }
     * })
     * 
    **/
    delete<T extends InterviewQuestionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InterviewQuestionDeleteArgs<ExtArgs>>
    ): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InterviewQuestion.
     * @param {InterviewQuestionUpdateArgs} args - Arguments to update one InterviewQuestion.
     * @example
     * // Update one InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InterviewQuestionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InterviewQuestionUpdateArgs<ExtArgs>>
    ): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InterviewQuestions.
     * @param {InterviewQuestionDeleteManyArgs} args - Arguments to filter InterviewQuestions to delete.
     * @example
     * // Delete a few InterviewQuestions
     * const { count } = await prisma.interviewQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InterviewQuestionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InterviewQuestionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewQuestions
     * const interviewQuestion = await prisma.interviewQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InterviewQuestionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InterviewQuestionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InterviewQuestion.
     * @param {InterviewQuestionUpsertArgs} args - Arguments to update or create a InterviewQuestion.
     * @example
     * // Update or create a InterviewQuestion
     * const interviewQuestion = await prisma.interviewQuestion.upsert({
     *   create: {
     *     // ... data to create a InterviewQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewQuestion we want to update
     *   }
     * })
    **/
    upsert<T extends InterviewQuestionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InterviewQuestionUpsertArgs<ExtArgs>>
    ): Prisma__InterviewQuestionClient<$Result.GetResult<Prisma.$InterviewQuestionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InterviewQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionCountArgs} args - Arguments to filter InterviewQuestions to count.
     * @example
     * // Count the number of InterviewQuestions
     * const count = await prisma.interviewQuestion.count({
     *   where: {
     *     // ... the filter for the InterviewQuestions we want to count
     *   }
     * })
    **/
    count<T extends InterviewQuestionCountArgs>(
      args?: Subset<T, InterviewQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewQuestionAggregateArgs>(args: Subset<T, InterviewQuestionAggregateArgs>): Prisma.PrismaPromise<GetInterviewQuestionAggregateType<T>>

    /**
     * Group by InterviewQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewQuestionGroupByArgs} args - Group by arguments.
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
      T extends InterviewQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewQuestionGroupByArgs['orderBy'] }
        : { orderBy?: InterviewQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterviewQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewQuestion model
   */
  readonly fields: InterviewQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the InterviewQuestion model
   */ 
  interface InterviewQuestionFieldRefs {
    readonly id: FieldRef<"InterviewQuestion", 'String'>
    readonly role: FieldRef<"InterviewQuestion", 'String'>
    readonly question: FieldRef<"InterviewQuestion", 'String'>
    readonly category: FieldRef<"InterviewQuestion", 'Category'>
    readonly difficulty: FieldRef<"InterviewQuestion", 'Difficulty'>
    readonly modelAnswer: FieldRef<"InterviewQuestion", 'String'>
    readonly createdAt: FieldRef<"InterviewQuestion", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * InterviewQuestion findUnique
   */
  export type InterviewQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where: InterviewQuestionWhereUniqueInput
  }


  /**
   * InterviewQuestion findUniqueOrThrow
   */
  export type InterviewQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where: InterviewQuestionWhereUniqueInput
  }


  /**
   * InterviewQuestion findFirst
   */
  export type InterviewQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewQuestions.
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewQuestions.
     */
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }


  /**
   * InterviewQuestion findFirstOrThrow
   */
  export type InterviewQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Filter, which InterviewQuestion to fetch.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewQuestions.
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewQuestions.
     */
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }


  /**
   * InterviewQuestion findMany
   */
  export type InterviewQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Filter, which InterviewQuestions to fetch.
     */
    where?: InterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewQuestions to fetch.
     */
    orderBy?: InterviewQuestionOrderByWithRelationInput | InterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewQuestions.
     */
    cursor?: InterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewQuestions.
     */
    skip?: number
    distinct?: InterviewQuestionScalarFieldEnum | InterviewQuestionScalarFieldEnum[]
  }


  /**
   * InterviewQuestion create
   */
  export type InterviewQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * The data needed to create a InterviewQuestion.
     */
    data: XOR<InterviewQuestionCreateInput, InterviewQuestionUncheckedCreateInput>
  }


  /**
   * InterviewQuestion createMany
   */
  export type InterviewQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewQuestions.
     */
    data: InterviewQuestionCreateManyInput | InterviewQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * InterviewQuestion update
   */
  export type InterviewQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * The data needed to update a InterviewQuestion.
     */
    data: XOR<InterviewQuestionUpdateInput, InterviewQuestionUncheckedUpdateInput>
    /**
     * Choose, which InterviewQuestion to update.
     */
    where: InterviewQuestionWhereUniqueInput
  }


  /**
   * InterviewQuestion updateMany
   */
  export type InterviewQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewQuestions.
     */
    data: XOR<InterviewQuestionUpdateManyMutationInput, InterviewQuestionUncheckedUpdateManyInput>
    /**
     * Filter which InterviewQuestions to update
     */
    where?: InterviewQuestionWhereInput
  }


  /**
   * InterviewQuestion upsert
   */
  export type InterviewQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * The filter to search for the InterviewQuestion to update in case it exists.
     */
    where: InterviewQuestionWhereUniqueInput
    /**
     * In case the InterviewQuestion found by the `where` argument doesn't exist, create a new InterviewQuestion with this data.
     */
    create: XOR<InterviewQuestionCreateInput, InterviewQuestionUncheckedCreateInput>
    /**
     * In case the InterviewQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewQuestionUpdateInput, InterviewQuestionUncheckedUpdateInput>
  }


  /**
   * InterviewQuestion delete
   */
  export type InterviewQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
    /**
     * Filter which InterviewQuestion to delete.
     */
    where: InterviewQuestionWhereUniqueInput
  }


  /**
   * InterviewQuestion deleteMany
   */
  export type InterviewQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewQuestions to delete
     */
    where?: InterviewQuestionWhereInput
  }


  /**
   * InterviewQuestion without action
   */
  export type InterviewQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewQuestion
     */
    select?: InterviewQuestionSelect<ExtArgs> | null
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
    image: 'image',
    role: 'role',
    xp: 'xp',
    streak: 'streak',
    longestStreak: 'longestStreak',
    lastActiveDate: 'lastActiveDate',
    targetRole: 'targetRole',
    targetCompany: 'targetCompany',
    experienceLevel: 'experienceLevel',
    weeklyHours: 'weeklyHours',
    onboardingComplete: 'onboardingComplete',
    skills: 'skills',
    banned: 'banned',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DomainScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    icon: 'icon',
    color: 'color',
    demandScore: 'demandScore',
    jobCount: 'jobCount',
    tags: 'tags',
    status: 'status',
    enrollmentCount: 'enrollmentCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DomainScalarFieldEnum = (typeof DomainScalarFieldEnum)[keyof typeof DomainScalarFieldEnum]


  export const LearningPathScalarFieldEnum: {
    id: 'id',
    domainId: 'domainId',
    companyTarget: 'companyTarget',
    roleTarget: 'roleTarget',
    durationDays: 'durationDays',
    moduleOrder: 'moduleOrder',
    createdAt: 'createdAt'
  };

  export type LearningPathScalarFieldEnum = (typeof LearningPathScalarFieldEnum)[keyof typeof LearningPathScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    domainId: 'domainId',
    title: 'title',
    description: 'description',
    content: 'content',
    notionPageId: 'notionPageId',
    order: 'order',
    durationMinutes: 'durationMinutes',
    type: 'type',
    difficulty: 'difficulty',
    xpReward: 'xpReward',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    domainId: 'domainId',
    currentModuleId: 'currentModuleId',
    completedAt: 'completedAt',
    enrolledAt: 'enrolledAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const ProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    completed: 'completed',
    completedAt: 'completedAt',
    timeSpentMinutes: 'timeSpentMinutes',
    score: 'score',
    createdAt: 'createdAt'
  };

  export type ProgressScalarFieldEnum = (typeof ProgressScalarFieldEnum)[keyof typeof ProgressScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    moduleId: 'moduleId',
    question: 'question',
    options: 'options',
    correctAnswer: 'correctAnswer',
    explanation: 'explanation',
    difficulty: 'difficulty',
    createdAt: 'createdAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuizAttemptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizId: 'quizId',
    selectedAnswer: 'selectedAnswer',
    isCorrect: 'isCorrect',
    attemptedAt: 'attemptedAt'
  };

  export type QuizAttemptScalarFieldEnum = (typeof QuizAttemptScalarFieldEnum)[keyof typeof QuizAttemptScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    domainId: 'domainId',
    verificationCode: 'verificationCode',
    pdfUrl: 'pdfUrl',
    issuedAt: 'issuedAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const JobPostingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    location: 'location',
    salaryMin: 'salaryMin',
    salaryMax: 'salaryMax',
    skills: 'skills',
    domain: 'domain',
    url: 'url',
    status: 'status',
    postedAt: 'postedAt',
    expiresAt: 'expiresAt'
  };

  export type JobPostingScalarFieldEnum = (typeof JobPostingScalarFieldEnum)[keyof typeof JobPostingScalarFieldEnum]


  export const BookmarkedJobScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jobId: 'jobId',
    createdAt: 'createdAt'
  };

  export type BookmarkedJobScalarFieldEnum = (typeof BookmarkedJobScalarFieldEnum)[keyof typeof BookmarkedJobScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    read: 'read',
    actionUrl: 'actionUrl',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const InterviewQuestionScalarFieldEnum: {
    id: 'id',
    role: 'role',
    question: 'question',
    category: 'category',
    difficulty: 'difficulty',
    modelAnswer: 'modelAnswer',
    createdAt: 'createdAt'
  };

  export type InterviewQuestionScalarFieldEnum = (typeof InterviewQuestionScalarFieldEnum)[keyof typeof InterviewQuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ExperienceLevel'
   */
  export type EnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel'>
    


  /**
   * Reference to a field of type 'ExperienceLevel[]'
   */
  export type ListEnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PublishStatus'
   */
  export type EnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus'>
    


  /**
   * Reference to a field of type 'PublishStatus[]'
   */
  export type ListEnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


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
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    xp?: IntFilter<"User"> | number
    streak?: IntFilter<"User"> | number
    longestStreak?: IntFilter<"User"> | number
    lastActiveDate?: DateTimeNullableFilter<"User"> | Date | string | null
    targetRole?: StringNullableFilter<"User"> | string | null
    targetCompany?: StringNullableFilter<"User"> | string | null
    experienceLevel?: EnumExperienceLevelFilter<"User"> | $Enums.ExperienceLevel
    weeklyHours?: IntFilter<"User"> | number
    onboardingComplete?: BoolFilter<"User"> | boolean
    skills?: StringNullableListFilter<"User">
    banned?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookmarkedJobs?: BookmarkedJobListRelationFilter
    certificates?: CertificateListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    notifications?: NotificationListRelationFilter
    progressRecords?: ProgressListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrderInput | SortOrder
    targetRole?: SortOrderInput | SortOrder
    targetCompany?: SortOrderInput | SortOrder
    experienceLevel?: SortOrder
    weeklyHours?: SortOrder
    onboardingComplete?: SortOrder
    skills?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookmarkedJobs?: BookmarkedJobOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    progressRecords?: ProgressOrderByRelationAggregateInput
    quizAttempts?: QuizAttemptOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    xp?: IntFilter<"User"> | number
    streak?: IntFilter<"User"> | number
    longestStreak?: IntFilter<"User"> | number
    lastActiveDate?: DateTimeNullableFilter<"User"> | Date | string | null
    targetRole?: StringNullableFilter<"User"> | string | null
    targetCompany?: StringNullableFilter<"User"> | string | null
    experienceLevel?: EnumExperienceLevelFilter<"User"> | $Enums.ExperienceLevel
    weeklyHours?: IntFilter<"User"> | number
    onboardingComplete?: BoolFilter<"User"> | boolean
    skills?: StringNullableListFilter<"User">
    banned?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookmarkedJobs?: BookmarkedJobListRelationFilter
    certificates?: CertificateListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    notifications?: NotificationListRelationFilter
    progressRecords?: ProgressListRelationFilter
    quizAttempts?: QuizAttemptListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrderInput | SortOrder
    targetRole?: SortOrderInput | SortOrder
    targetCompany?: SortOrderInput | SortOrder
    experienceLevel?: SortOrder
    weeklyHours?: SortOrder
    onboardingComplete?: SortOrder
    skills?: SortOrder
    banned?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    xp?: IntWithAggregatesFilter<"User"> | number
    streak?: IntWithAggregatesFilter<"User"> | number
    longestStreak?: IntWithAggregatesFilter<"User"> | number
    lastActiveDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    targetRole?: StringNullableWithAggregatesFilter<"User"> | string | null
    targetCompany?: StringNullableWithAggregatesFilter<"User"> | string | null
    experienceLevel?: EnumExperienceLevelWithAggregatesFilter<"User"> | $Enums.ExperienceLevel
    weeklyHours?: IntWithAggregatesFilter<"User"> | number
    onboardingComplete?: BoolWithAggregatesFilter<"User"> | boolean
    skills?: StringNullableListFilter<"User">
    banned?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DomainWhereInput = {
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    id?: StringFilter<"Domain"> | string
    slug?: StringFilter<"Domain"> | string
    name?: StringFilter<"Domain"> | string
    description?: StringFilter<"Domain"> | string
    icon?: StringFilter<"Domain"> | string
    color?: StringFilter<"Domain"> | string
    demandScore?: IntFilter<"Domain"> | number
    jobCount?: IntFilter<"Domain"> | number
    tags?: StringNullableListFilter<"Domain">
    status?: EnumPublishStatusFilter<"Domain"> | $Enums.PublishStatus
    enrollmentCount?: IntFilter<"Domain"> | number
    createdAt?: DateTimeFilter<"Domain"> | Date | string
    updatedAt?: DateTimeFilter<"Domain"> | Date | string
    certificates?: CertificateListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    learningPaths?: LearningPathListRelationFilter
    modules?: ModuleListRelationFilter
  }

  export type DomainOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    demandScore?: SortOrder
    jobCount?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    enrollmentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificates?: CertificateOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    learningPaths?: LearningPathOrderByRelationAggregateInput
    modules?: ModuleOrderByRelationAggregateInput
  }

  export type DomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    name?: StringFilter<"Domain"> | string
    description?: StringFilter<"Domain"> | string
    icon?: StringFilter<"Domain"> | string
    color?: StringFilter<"Domain"> | string
    demandScore?: IntFilter<"Domain"> | number
    jobCount?: IntFilter<"Domain"> | number
    tags?: StringNullableListFilter<"Domain">
    status?: EnumPublishStatusFilter<"Domain"> | $Enums.PublishStatus
    enrollmentCount?: IntFilter<"Domain"> | number
    createdAt?: DateTimeFilter<"Domain"> | Date | string
    updatedAt?: DateTimeFilter<"Domain"> | Date | string
    certificates?: CertificateListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    learningPaths?: LearningPathListRelationFilter
    modules?: ModuleListRelationFilter
  }, "id" | "slug">

  export type DomainOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    demandScore?: SortOrder
    jobCount?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    enrollmentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DomainCountOrderByAggregateInput
    _avg?: DomainAvgOrderByAggregateInput
    _max?: DomainMaxOrderByAggregateInput
    _min?: DomainMinOrderByAggregateInput
    _sum?: DomainSumOrderByAggregateInput
  }

  export type DomainScalarWhereWithAggregatesInput = {
    AND?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    OR?: DomainScalarWhereWithAggregatesInput[]
    NOT?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Domain"> | string
    slug?: StringWithAggregatesFilter<"Domain"> | string
    name?: StringWithAggregatesFilter<"Domain"> | string
    description?: StringWithAggregatesFilter<"Domain"> | string
    icon?: StringWithAggregatesFilter<"Domain"> | string
    color?: StringWithAggregatesFilter<"Domain"> | string
    demandScore?: IntWithAggregatesFilter<"Domain"> | number
    jobCount?: IntWithAggregatesFilter<"Domain"> | number
    tags?: StringNullableListFilter<"Domain">
    status?: EnumPublishStatusWithAggregatesFilter<"Domain"> | $Enums.PublishStatus
    enrollmentCount?: IntWithAggregatesFilter<"Domain"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Domain"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Domain"> | Date | string
  }

  export type LearningPathWhereInput = {
    AND?: LearningPathWhereInput | LearningPathWhereInput[]
    OR?: LearningPathWhereInput[]
    NOT?: LearningPathWhereInput | LearningPathWhereInput[]
    id?: StringFilter<"LearningPath"> | string
    domainId?: StringFilter<"LearningPath"> | string
    companyTarget?: StringFilter<"LearningPath"> | string
    roleTarget?: StringFilter<"LearningPath"> | string
    durationDays?: IntFilter<"LearningPath"> | number
    moduleOrder?: JsonFilter<"LearningPath">
    createdAt?: DateTimeFilter<"LearningPath"> | Date | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
  }

  export type LearningPathOrderByWithRelationInput = {
    id?: SortOrder
    domainId?: SortOrder
    companyTarget?: SortOrder
    roleTarget?: SortOrder
    durationDays?: SortOrder
    moduleOrder?: SortOrder
    createdAt?: SortOrder
    domain?: DomainOrderByWithRelationInput
  }

  export type LearningPathWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningPathWhereInput | LearningPathWhereInput[]
    OR?: LearningPathWhereInput[]
    NOT?: LearningPathWhereInput | LearningPathWhereInput[]
    domainId?: StringFilter<"LearningPath"> | string
    companyTarget?: StringFilter<"LearningPath"> | string
    roleTarget?: StringFilter<"LearningPath"> | string
    durationDays?: IntFilter<"LearningPath"> | number
    moduleOrder?: JsonFilter<"LearningPath">
    createdAt?: DateTimeFilter<"LearningPath"> | Date | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
  }, "id">

  export type LearningPathOrderByWithAggregationInput = {
    id?: SortOrder
    domainId?: SortOrder
    companyTarget?: SortOrder
    roleTarget?: SortOrder
    durationDays?: SortOrder
    moduleOrder?: SortOrder
    createdAt?: SortOrder
    _count?: LearningPathCountOrderByAggregateInput
    _avg?: LearningPathAvgOrderByAggregateInput
    _max?: LearningPathMaxOrderByAggregateInput
    _min?: LearningPathMinOrderByAggregateInput
    _sum?: LearningPathSumOrderByAggregateInput
  }

  export type LearningPathScalarWhereWithAggregatesInput = {
    AND?: LearningPathScalarWhereWithAggregatesInput | LearningPathScalarWhereWithAggregatesInput[]
    OR?: LearningPathScalarWhereWithAggregatesInput[]
    NOT?: LearningPathScalarWhereWithAggregatesInput | LearningPathScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningPath"> | string
    domainId?: StringWithAggregatesFilter<"LearningPath"> | string
    companyTarget?: StringWithAggregatesFilter<"LearningPath"> | string
    roleTarget?: StringWithAggregatesFilter<"LearningPath"> | string
    durationDays?: IntWithAggregatesFilter<"LearningPath"> | number
    moduleOrder?: JsonWithAggregatesFilter<"LearningPath">
    createdAt?: DateTimeWithAggregatesFilter<"LearningPath"> | Date | string
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: StringFilter<"Module"> | string
    domainId?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    content?: StringFilter<"Module"> | string
    notionPageId?: StringNullableFilter<"Module"> | string | null
    order?: IntFilter<"Module"> | number
    durationMinutes?: IntFilter<"Module"> | number
    type?: EnumContentTypeFilter<"Module"> | $Enums.ContentType
    difficulty?: EnumDifficultyFilter<"Module"> | $Enums.Difficulty
    xpReward?: IntFilter<"Module"> | number
    status?: EnumPublishStatusFilter<"Module"> | $Enums.PublishStatus
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    progressRecords?: ProgressListRelationFilter
    quizzes?: QuizListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    notionPageId?: SortOrderInput | SortOrder
    order?: SortOrder
    durationMinutes?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    xpReward?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: DomainOrderByWithRelationInput
    progressRecords?: ProgressOrderByRelationAggregateInput
    quizzes?: QuizOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    domainId?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    content?: StringFilter<"Module"> | string
    notionPageId?: StringNullableFilter<"Module"> | string | null
    order?: IntFilter<"Module"> | number
    durationMinutes?: IntFilter<"Module"> | number
    type?: EnumContentTypeFilter<"Module"> | $Enums.ContentType
    difficulty?: EnumDifficultyFilter<"Module"> | $Enums.Difficulty
    xpReward?: IntFilter<"Module"> | number
    status?: EnumPublishStatusFilter<"Module"> | $Enums.PublishStatus
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    progressRecords?: ProgressListRelationFilter
    quizzes?: QuizListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    notionPageId?: SortOrderInput | SortOrder
    order?: SortOrder
    durationMinutes?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    xpReward?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Module"> | string
    domainId?: StringWithAggregatesFilter<"Module"> | string
    title?: StringWithAggregatesFilter<"Module"> | string
    description?: StringWithAggregatesFilter<"Module"> | string
    content?: StringWithAggregatesFilter<"Module"> | string
    notionPageId?: StringNullableWithAggregatesFilter<"Module"> | string | null
    order?: IntWithAggregatesFilter<"Module"> | number
    durationMinutes?: IntWithAggregatesFilter<"Module"> | number
    type?: EnumContentTypeWithAggregatesFilter<"Module"> | $Enums.ContentType
    difficulty?: EnumDifficultyWithAggregatesFilter<"Module"> | $Enums.Difficulty
    xpReward?: IntWithAggregatesFilter<"Module"> | number
    status?: EnumPublishStatusWithAggregatesFilter<"Module"> | $Enums.PublishStatus
    createdAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    domainId?: StringFilter<"Enrollment"> | string
    currentModuleId?: StringNullableFilter<"Enrollment"> | string | null
    completedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    domainId?: SortOrder
    currentModuleId?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    enrolledAt?: SortOrder
    domain?: DomainOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_domainId?: EnrollmentUserIdDomainIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    userId?: StringFilter<"Enrollment"> | string
    domainId?: StringFilter<"Enrollment"> | string
    currentModuleId?: StringNullableFilter<"Enrollment"> | string | null
    completedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_domainId">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    domainId?: SortOrder
    currentModuleId?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    enrolledAt?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enrollment"> | string
    userId?: StringWithAggregatesFilter<"Enrollment"> | string
    domainId?: StringWithAggregatesFilter<"Enrollment"> | string
    currentModuleId?: StringNullableWithAggregatesFilter<"Enrollment"> | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Enrollment"> | Date | string | null
    enrolledAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
  }

  export type ProgressWhereInput = {
    AND?: ProgressWhereInput | ProgressWhereInput[]
    OR?: ProgressWhereInput[]
    NOT?: ProgressWhereInput | ProgressWhereInput[]
    id?: StringFilter<"Progress"> | string
    userId?: StringFilter<"Progress"> | string
    moduleId?: StringFilter<"Progress"> | string
    completed?: BoolFilter<"Progress"> | boolean
    completedAt?: DateTimeNullableFilter<"Progress"> | Date | string | null
    timeSpentMinutes?: IntFilter<"Progress"> | number
    score?: IntNullableFilter<"Progress"> | number | null
    createdAt?: DateTimeFilter<"Progress"> | Date | string
    module?: XOR<ModuleRelationFilter, ModuleWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    timeSpentMinutes?: SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    module?: ModuleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_moduleId?: ProgressUserIdModuleIdCompoundUniqueInput
    AND?: ProgressWhereInput | ProgressWhereInput[]
    OR?: ProgressWhereInput[]
    NOT?: ProgressWhereInput | ProgressWhereInput[]
    userId?: StringFilter<"Progress"> | string
    moduleId?: StringFilter<"Progress"> | string
    completed?: BoolFilter<"Progress"> | boolean
    completedAt?: DateTimeNullableFilter<"Progress"> | Date | string | null
    timeSpentMinutes?: IntFilter<"Progress"> | number
    score?: IntNullableFilter<"Progress"> | number | null
    createdAt?: DateTimeFilter<"Progress"> | Date | string
    module?: XOR<ModuleRelationFilter, ModuleWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_moduleId">

  export type ProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    timeSpentMinutes?: SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProgressCountOrderByAggregateInput
    _avg?: ProgressAvgOrderByAggregateInput
    _max?: ProgressMaxOrderByAggregateInput
    _min?: ProgressMinOrderByAggregateInput
    _sum?: ProgressSumOrderByAggregateInput
  }

  export type ProgressScalarWhereWithAggregatesInput = {
    AND?: ProgressScalarWhereWithAggregatesInput | ProgressScalarWhereWithAggregatesInput[]
    OR?: ProgressScalarWhereWithAggregatesInput[]
    NOT?: ProgressScalarWhereWithAggregatesInput | ProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Progress"> | string
    userId?: StringWithAggregatesFilter<"Progress"> | string
    moduleId?: StringWithAggregatesFilter<"Progress"> | string
    completed?: BoolWithAggregatesFilter<"Progress"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"Progress"> | Date | string | null
    timeSpentMinutes?: IntWithAggregatesFilter<"Progress"> | number
    score?: IntNullableWithAggregatesFilter<"Progress"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Progress"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    moduleId?: StringFilter<"Quiz"> | string
    question?: StringFilter<"Quiz"> | string
    options?: JsonFilter<"Quiz">
    correctAnswer?: IntFilter<"Quiz"> | number
    explanation?: StringFilter<"Quiz"> | string
    difficulty?: EnumDifficultyFilter<"Quiz"> | $Enums.Difficulty
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    module?: XOR<ModuleRelationFilter, ModuleWhereInput>
    attempts?: QuizAttemptListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    module?: ModuleOrderByWithRelationInput
    attempts?: QuizAttemptOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    moduleId?: StringFilter<"Quiz"> | string
    question?: StringFilter<"Quiz"> | string
    options?: JsonFilter<"Quiz">
    correctAnswer?: IntFilter<"Quiz"> | number
    explanation?: StringFilter<"Quiz"> | string
    difficulty?: EnumDifficultyFilter<"Quiz"> | $Enums.Difficulty
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    module?: XOR<ModuleRelationFilter, ModuleWhereInput>
    attempts?: QuizAttemptListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    moduleId?: StringWithAggregatesFilter<"Quiz"> | string
    question?: StringWithAggregatesFilter<"Quiz"> | string
    options?: JsonWithAggregatesFilter<"Quiz">
    correctAnswer?: IntWithAggregatesFilter<"Quiz"> | number
    explanation?: StringWithAggregatesFilter<"Quiz"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"Quiz"> | $Enums.Difficulty
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
  }

  export type QuizAttemptWhereInput = {
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    id?: StringFilter<"QuizAttempt"> | string
    userId?: StringFilter<"QuizAttempt"> | string
    quizId?: StringFilter<"QuizAttempt"> | string
    selectedAnswer?: IntFilter<"QuizAttempt"> | number
    isCorrect?: BoolFilter<"QuizAttempt"> | boolean
    attemptedAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    quiz?: XOR<QuizRelationFilter, QuizWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type QuizAttemptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    attemptedAt?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type QuizAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    userId?: StringFilter<"QuizAttempt"> | string
    quizId?: StringFilter<"QuizAttempt"> | string
    selectedAnswer?: IntFilter<"QuizAttempt"> | number
    isCorrect?: BoolFilter<"QuizAttempt"> | boolean
    attemptedAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    quiz?: XOR<QuizRelationFilter, QuizWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type QuizAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    attemptedAt?: SortOrder
    _count?: QuizAttemptCountOrderByAggregateInput
    _avg?: QuizAttemptAvgOrderByAggregateInput
    _max?: QuizAttemptMaxOrderByAggregateInput
    _min?: QuizAttemptMinOrderByAggregateInput
    _sum?: QuizAttemptSumOrderByAggregateInput
  }

  export type QuizAttemptScalarWhereWithAggregatesInput = {
    AND?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    OR?: QuizAttemptScalarWhereWithAggregatesInput[]
    NOT?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizAttempt"> | string
    userId?: StringWithAggregatesFilter<"QuizAttempt"> | string
    quizId?: StringWithAggregatesFilter<"QuizAttempt"> | string
    selectedAnswer?: IntWithAggregatesFilter<"QuizAttempt"> | number
    isCorrect?: BoolWithAggregatesFilter<"QuizAttempt"> | boolean
    attemptedAt?: DateTimeWithAggregatesFilter<"QuizAttempt"> | Date | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: StringFilter<"Certificate"> | string
    userId?: StringFilter<"Certificate"> | string
    domainId?: StringFilter<"Certificate"> | string
    verificationCode?: StringFilter<"Certificate"> | string
    pdfUrl?: StringNullableFilter<"Certificate"> | string | null
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    domainId?: SortOrder
    verificationCode?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    issuedAt?: SortOrder
    domain?: DomainOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    verificationCode?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    userId?: StringFilter<"Certificate"> | string
    domainId?: StringFilter<"Certificate"> | string
    pdfUrl?: StringNullableFilter<"Certificate"> | string | null
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "verificationCode">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    domainId?: SortOrder
    verificationCode?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    issuedAt?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificate"> | string
    userId?: StringWithAggregatesFilter<"Certificate"> | string
    domainId?: StringWithAggregatesFilter<"Certificate"> | string
    verificationCode?: StringWithAggregatesFilter<"Certificate"> | string
    pdfUrl?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    issuedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
  }

  export type JobPostingWhereInput = {
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    id?: StringFilter<"JobPosting"> | string
    title?: StringFilter<"JobPosting"> | string
    company?: StringFilter<"JobPosting"> | string
    location?: StringFilter<"JobPosting"> | string
    salaryMin?: IntFilter<"JobPosting"> | number
    salaryMax?: IntFilter<"JobPosting"> | number
    skills?: StringNullableListFilter<"JobPosting">
    domain?: StringFilter<"JobPosting"> | string
    url?: StringFilter<"JobPosting"> | string
    status?: EnumJobStatusFilter<"JobPosting"> | $Enums.JobStatus
    postedAt?: DateTimeFilter<"JobPosting"> | Date | string
    expiresAt?: DateTimeNullableFilter<"JobPosting"> | Date | string | null
    bookmarkedJobs?: BookmarkedJobListRelationFilter
  }

  export type JobPostingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    skills?: SortOrder
    domain?: SortOrder
    url?: SortOrder
    status?: SortOrder
    postedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    bookmarkedJobs?: BookmarkedJobOrderByRelationAggregateInput
  }

  export type JobPostingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    title?: StringFilter<"JobPosting"> | string
    company?: StringFilter<"JobPosting"> | string
    location?: StringFilter<"JobPosting"> | string
    salaryMin?: IntFilter<"JobPosting"> | number
    salaryMax?: IntFilter<"JobPosting"> | number
    skills?: StringNullableListFilter<"JobPosting">
    domain?: StringFilter<"JobPosting"> | string
    url?: StringFilter<"JobPosting"> | string
    status?: EnumJobStatusFilter<"JobPosting"> | $Enums.JobStatus
    postedAt?: DateTimeFilter<"JobPosting"> | Date | string
    expiresAt?: DateTimeNullableFilter<"JobPosting"> | Date | string | null
    bookmarkedJobs?: BookmarkedJobListRelationFilter
  }, "id">

  export type JobPostingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    skills?: SortOrder
    domain?: SortOrder
    url?: SortOrder
    status?: SortOrder
    postedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: JobPostingCountOrderByAggregateInput
    _avg?: JobPostingAvgOrderByAggregateInput
    _max?: JobPostingMaxOrderByAggregateInput
    _min?: JobPostingMinOrderByAggregateInput
    _sum?: JobPostingSumOrderByAggregateInput
  }

  export type JobPostingScalarWhereWithAggregatesInput = {
    AND?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    OR?: JobPostingScalarWhereWithAggregatesInput[]
    NOT?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobPosting"> | string
    title?: StringWithAggregatesFilter<"JobPosting"> | string
    company?: StringWithAggregatesFilter<"JobPosting"> | string
    location?: StringWithAggregatesFilter<"JobPosting"> | string
    salaryMin?: IntWithAggregatesFilter<"JobPosting"> | number
    salaryMax?: IntWithAggregatesFilter<"JobPosting"> | number
    skills?: StringNullableListFilter<"JobPosting">
    domain?: StringWithAggregatesFilter<"JobPosting"> | string
    url?: StringWithAggregatesFilter<"JobPosting"> | string
    status?: EnumJobStatusWithAggregatesFilter<"JobPosting"> | $Enums.JobStatus
    postedAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"JobPosting"> | Date | string | null
  }

  export type BookmarkedJobWhereInput = {
    AND?: BookmarkedJobWhereInput | BookmarkedJobWhereInput[]
    OR?: BookmarkedJobWhereInput[]
    NOT?: BookmarkedJobWhereInput | BookmarkedJobWhereInput[]
    id?: StringFilter<"BookmarkedJob"> | string
    userId?: StringFilter<"BookmarkedJob"> | string
    jobId?: StringFilter<"BookmarkedJob"> | string
    createdAt?: DateTimeFilter<"BookmarkedJob"> | Date | string
    job?: XOR<JobPostingRelationFilter, JobPostingWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BookmarkedJobOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    job?: JobPostingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BookmarkedJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_jobId?: BookmarkedJobUserIdJobIdCompoundUniqueInput
    AND?: BookmarkedJobWhereInput | BookmarkedJobWhereInput[]
    OR?: BookmarkedJobWhereInput[]
    NOT?: BookmarkedJobWhereInput | BookmarkedJobWhereInput[]
    userId?: StringFilter<"BookmarkedJob"> | string
    jobId?: StringFilter<"BookmarkedJob"> | string
    createdAt?: DateTimeFilter<"BookmarkedJob"> | Date | string
    job?: XOR<JobPostingRelationFilter, JobPostingWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_jobId">

  export type BookmarkedJobOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    _count?: BookmarkedJobCountOrderByAggregateInput
    _max?: BookmarkedJobMaxOrderByAggregateInput
    _min?: BookmarkedJobMinOrderByAggregateInput
  }

  export type BookmarkedJobScalarWhereWithAggregatesInput = {
    AND?: BookmarkedJobScalarWhereWithAggregatesInput | BookmarkedJobScalarWhereWithAggregatesInput[]
    OR?: BookmarkedJobScalarWhereWithAggregatesInput[]
    NOT?: BookmarkedJobScalarWhereWithAggregatesInput | BookmarkedJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookmarkedJob"> | string
    userId?: StringWithAggregatesFilter<"BookmarkedJob"> | string
    jobId?: StringWithAggregatesFilter<"BookmarkedJob"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BookmarkedJob"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    actionUrl?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    actionUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    actionUrl?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    actionUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    actionUrl?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type InterviewQuestionWhereInput = {
    AND?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    OR?: InterviewQuestionWhereInput[]
    NOT?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    id?: StringFilter<"InterviewQuestion"> | string
    role?: StringFilter<"InterviewQuestion"> | string
    question?: StringFilter<"InterviewQuestion"> | string
    category?: EnumCategoryFilter<"InterviewQuestion"> | $Enums.Category
    difficulty?: EnumDifficultyFilter<"InterviewQuestion"> | $Enums.Difficulty
    modelAnswer?: StringNullableFilter<"InterviewQuestion"> | string | null
    createdAt?: DateTimeFilter<"InterviewQuestion"> | Date | string
  }

  export type InterviewQuestionOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    question?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    modelAnswer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type InterviewQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    OR?: InterviewQuestionWhereInput[]
    NOT?: InterviewQuestionWhereInput | InterviewQuestionWhereInput[]
    role?: StringFilter<"InterviewQuestion"> | string
    question?: StringFilter<"InterviewQuestion"> | string
    category?: EnumCategoryFilter<"InterviewQuestion"> | $Enums.Category
    difficulty?: EnumDifficultyFilter<"InterviewQuestion"> | $Enums.Difficulty
    modelAnswer?: StringNullableFilter<"InterviewQuestion"> | string | null
    createdAt?: DateTimeFilter<"InterviewQuestion"> | Date | string
  }, "id">

  export type InterviewQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    question?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    modelAnswer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: InterviewQuestionCountOrderByAggregateInput
    _max?: InterviewQuestionMaxOrderByAggregateInput
    _min?: InterviewQuestionMinOrderByAggregateInput
  }

  export type InterviewQuestionScalarWhereWithAggregatesInput = {
    AND?: InterviewQuestionScalarWhereWithAggregatesInput | InterviewQuestionScalarWhereWithAggregatesInput[]
    OR?: InterviewQuestionScalarWhereWithAggregatesInput[]
    NOT?: InterviewQuestionScalarWhereWithAggregatesInput | InterviewQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InterviewQuestion"> | string
    role?: StringWithAggregatesFilter<"InterviewQuestion"> | string
    question?: StringWithAggregatesFilter<"InterviewQuestion"> | string
    category?: EnumCategoryWithAggregatesFilter<"InterviewQuestion"> | $Enums.Category
    difficulty?: EnumDifficultyWithAggregatesFilter<"InterviewQuestion"> | $Enums.Difficulty
    modelAnswer?: StringNullableWithAggregatesFilter<"InterviewQuestion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InterviewQuestion"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    progressRecords?: ProgressCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    progressRecords?: ProgressUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainCreateInput = {
    id?: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore?: number
    jobCount?: number
    tags?: DomainCreatetagsInput | string[]
    status?: $Enums.PublishStatus
    enrollmentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateCreateNestedManyWithoutDomainInput
    enrollments?: EnrollmentCreateNestedManyWithoutDomainInput
    learningPaths?: LearningPathCreateNestedManyWithoutDomainInput
    modules?: ModuleCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore?: number
    jobCount?: number
    tags?: DomainCreatetagsInput | string[]
    status?: $Enums.PublishStatus
    enrollmentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateUncheckedCreateNestedManyWithoutDomainInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutDomainInput
    learningPaths?: LearningPathUncheckedCreateNestedManyWithoutDomainInput
    modules?: ModuleUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUpdateManyWithoutDomainNestedInput
    enrollments?: EnrollmentUpdateManyWithoutDomainNestedInput
    learningPaths?: LearningPathUpdateManyWithoutDomainNestedInput
    modules?: ModuleUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUncheckedUpdateManyWithoutDomainNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutDomainNestedInput
    learningPaths?: LearningPathUncheckedUpdateManyWithoutDomainNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateManyInput = {
    id?: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore?: number
    jobCount?: number
    tags?: DomainCreatetagsInput | string[]
    status?: $Enums.PublishStatus
    enrollmentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathCreateInput = {
    id?: string
    companyTarget: string
    roleTarget: string
    durationDays: number
    moduleOrder: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    domain: DomainCreateNestedOneWithoutLearningPathsInput
  }

  export type LearningPathUncheckedCreateInput = {
    id?: string
    domainId: string
    companyTarget: string
    roleTarget: string
    durationDays: number
    moduleOrder: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LearningPathUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyTarget?: StringFieldUpdateOperationsInput | string
    roleTarget?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    moduleOrder?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutLearningPathsNestedInput
  }

  export type LearningPathUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    companyTarget?: StringFieldUpdateOperationsInput | string
    roleTarget?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    moduleOrder?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathCreateManyInput = {
    id?: string
    domainId: string
    companyTarget: string
    roleTarget: string
    durationDays: number
    moduleOrder: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LearningPathUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyTarget?: StringFieldUpdateOperationsInput | string
    roleTarget?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    moduleOrder?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    companyTarget?: StringFieldUpdateOperationsInput | string
    roleTarget?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    moduleOrder?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateInput = {
    id?: string
    title: string
    description: string
    content: string
    notionPageId?: string | null
    order: number
    durationMinutes?: number
    type?: $Enums.ContentType
    difficulty?: $Enums.Difficulty
    xpReward?: number
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: DomainCreateNestedOneWithoutModulesInput
    progressRecords?: ProgressCreateNestedManyWithoutModuleInput
    quizzes?: QuizCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: string
    domainId: string
    title: string
    description: string
    content: string
    notionPageId?: string | null
    order: number
    durationMinutes?: number
    type?: $Enums.ContentType
    difficulty?: $Enums.Difficulty
    xpReward?: number
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    progressRecords?: ProgressUncheckedCreateNestedManyWithoutModuleInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    xpReward?: IntFieldUpdateOperationsInput | number
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutModulesNestedInput
    progressRecords?: ProgressUpdateManyWithoutModuleNestedInput
    quizzes?: QuizUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    xpReward?: IntFieldUpdateOperationsInput | number
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressRecords?: ProgressUncheckedUpdateManyWithoutModuleNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: string
    domainId: string
    title: string
    description: string
    content: string
    notionPageId?: string | null
    order: number
    durationMinutes?: number
    type?: $Enums.ContentType
    difficulty?: $Enums.Difficulty
    xpReward?: number
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    xpReward?: IntFieldUpdateOperationsInput | number
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    xpReward?: IntFieldUpdateOperationsInput | number
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    id?: string
    currentModuleId?: string | null
    completedAt?: Date | string | null
    enrolledAt?: Date | string
    domain: DomainCreateNestedOneWithoutEnrollmentsInput
    user: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: string
    userId: string
    domainId: string
    currentModuleId?: string | null
    completedAt?: Date | string | null
    enrolledAt?: Date | string
  }

  export type EnrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentModuleId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutEnrollmentsNestedInput
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    currentModuleId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    id?: string
    userId: string
    domainId: string
    currentModuleId?: string | null
    completedAt?: Date | string | null
    enrolledAt?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentModuleId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    currentModuleId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressCreateInput = {
    id?: string
    completed?: boolean
    completedAt?: Date | string | null
    timeSpentMinutes?: number
    score?: number | null
    createdAt?: Date | string
    module: ModuleCreateNestedOneWithoutProgressRecordsInput
    user: UserCreateNestedOneWithoutProgressRecordsInput
  }

  export type ProgressUncheckedCreateInput = {
    id?: string
    userId: string
    moduleId: string
    completed?: boolean
    completedAt?: Date | string | null
    timeSpentMinutes?: number
    score?: number | null
    createdAt?: Date | string
  }

  export type ProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutProgressRecordsNestedInput
    user?: UserUpdateOneRequiredWithoutProgressRecordsNestedInput
  }

  export type ProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressCreateManyInput = {
    id?: string
    userId: string
    moduleId: string
    completed?: boolean
    completedAt?: Date | string | null
    timeSpentMinutes?: number
    score?: number | null
    createdAt?: Date | string
  }

  export type ProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    id?: string
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: number
    explanation: string
    difficulty?: $Enums.Difficulty
    createdAt?: Date | string
    module: ModuleCreateNestedOneWithoutQuizzesInput
    attempts?: QuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    moduleId: string
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: number
    explanation: string
    difficulty?: $Enums.Difficulty
    createdAt?: Date | string
    attempts?: QuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutQuizzesNestedInput
    attempts?: QuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    moduleId: string
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: number
    explanation: string
    difficulty?: $Enums.Difficulty
    createdAt?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateInput = {
    id?: string
    selectedAnswer: number
    isCorrect: boolean
    attemptedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutAttemptsInput
    user: UserCreateNestedOneWithoutQuizAttemptsInput
  }

  export type QuizAttemptUncheckedCreateInput = {
    id?: string
    userId: string
    quizId: string
    selectedAnswer: number
    isCorrect: boolean
    attemptedAt?: Date | string
  }

  export type QuizAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutAttemptsNestedInput
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateManyInput = {
    id?: string
    userId: string
    quizId: string
    selectedAnswer: number
    isCorrect: boolean
    attemptedAt?: Date | string
  }

  export type QuizAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateInput = {
    id?: string
    verificationCode: string
    pdfUrl?: string | null
    issuedAt?: Date | string
    domain: DomainCreateNestedOneWithoutCertificatesInput
    user: UserCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    userId: string
    domainId: string
    verificationCode: string
    pdfUrl?: string | null
    issuedAt?: Date | string
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutCertificatesNestedInput
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyInput = {
    id?: string
    userId: string
    domainId: string
    verificationCode: string
    pdfUrl?: string | null
    issuedAt?: Date | string
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostingCreateInput = {
    id?: string
    title: string
    company: string
    location: string
    salaryMin: number
    salaryMax: number
    skills?: JobPostingCreateskillsInput | string[]
    domain: string
    url: string
    status?: $Enums.JobStatus
    postedAt?: Date | string
    expiresAt?: Date | string | null
    bookmarkedJobs?: BookmarkedJobCreateNestedManyWithoutJobInput
  }

  export type JobPostingUncheckedCreateInput = {
    id?: string
    title: string
    company: string
    location: string
    salaryMin: number
    salaryMax: number
    skills?: JobPostingCreateskillsInput | string[]
    domain: string
    url: string
    status?: $Enums.JobStatus
    postedAt?: Date | string
    expiresAt?: Date | string | null
    bookmarkedJobs?: BookmarkedJobUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobPostingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    skills?: JobPostingUpdateskillsInput | string[]
    domain?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarkedJobs?: BookmarkedJobUpdateManyWithoutJobNestedInput
  }

  export type JobPostingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    skills?: JobPostingUpdateskillsInput | string[]
    domain?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarkedJobs?: BookmarkedJobUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobPostingCreateManyInput = {
    id?: string
    title: string
    company: string
    location: string
    salaryMin: number
    salaryMax: number
    skills?: JobPostingCreateskillsInput | string[]
    domain: string
    url: string
    status?: $Enums.JobStatus
    postedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type JobPostingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    skills?: JobPostingUpdateskillsInput | string[]
    domain?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JobPostingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    skills?: JobPostingUpdateskillsInput | string[]
    domain?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookmarkedJobCreateInput = {
    id?: string
    createdAt?: Date | string
    job: JobPostingCreateNestedOneWithoutBookmarkedJobsInput
    user: UserCreateNestedOneWithoutBookmarkedJobsInput
  }

  export type BookmarkedJobUncheckedCreateInput = {
    id?: string
    userId: string
    jobId: string
    createdAt?: Date | string
  }

  export type BookmarkedJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobPostingUpdateOneRequiredWithoutBookmarkedJobsNestedInput
    user?: UserUpdateOneRequiredWithoutBookmarkedJobsNestedInput
  }

  export type BookmarkedJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedJobCreateManyInput = {
    id?: string
    userId: string
    jobId: string
    createdAt?: Date | string
  }

  export type BookmarkedJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionCreateInput = {
    id?: string
    role: string
    question: string
    category: $Enums.Category
    difficulty?: $Enums.Difficulty
    modelAnswer?: string | null
    createdAt?: Date | string
  }

  export type InterviewQuestionUncheckedCreateInput = {
    id?: string
    role: string
    question: string
    category: $Enums.Category
    difficulty?: $Enums.Difficulty
    modelAnswer?: string | null
    createdAt?: Date | string
  }

  export type InterviewQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    modelAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    modelAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionCreateManyInput = {
    id?: string
    role: string
    question: string
    category: $Enums.Category
    difficulty?: $Enums.Difficulty
    modelAnswer?: string | null
    createdAt?: Date | string
  }

  export type InterviewQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    modelAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    modelAnswer?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type EnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BookmarkedJobListRelationFilter = {
    every?: BookmarkedJobWhereInput
    some?: BookmarkedJobWhereInput
    none?: BookmarkedJobWhereInput
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ProgressListRelationFilter = {
    every?: ProgressWhereInput
    some?: ProgressWhereInput
    none?: ProgressWhereInput
  }

  export type QuizAttemptListRelationFilter = {
    every?: QuizAttemptWhereInput
    some?: QuizAttemptWhereInput
    none?: QuizAttemptWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookmarkedJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrder
    targetRole?: SortOrder
    targetCompany?: SortOrder
    experienceLevel?: SortOrder
    weeklyHours?: SortOrder
    onboardingComplete?: SortOrder
    skills?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    xp?: SortOrder
    streak?: SortOrder
    longestStreak?: SortOrder
    weeklyHours?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrder
    targetRole?: SortOrder
    targetCompany?: SortOrder
    experienceLevel?: SortOrder
    weeklyHours?: SortOrder
    onboardingComplete?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    longestStreak?: SortOrder
    lastActiveDate?: SortOrder
    targetRole?: SortOrder
    targetCompany?: SortOrder
    experienceLevel?: SortOrder
    weeklyHours?: SortOrder
    onboardingComplete?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    xp?: SortOrder
    streak?: SortOrder
    longestStreak?: SortOrder
    weeklyHours?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type EnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type LearningPathListRelationFilter = {
    every?: LearningPathWhereInput
    some?: LearningPathWhereInput
    none?: LearningPathWhereInput
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type LearningPathOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomainCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    demandScore?: SortOrder
    jobCount?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    enrollmentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainAvgOrderByAggregateInput = {
    demandScore?: SortOrder
    jobCount?: SortOrder
    enrollmentCount?: SortOrder
  }

  export type DomainMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    demandScore?: SortOrder
    jobCount?: SortOrder
    status?: SortOrder
    enrollmentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    demandScore?: SortOrder
    jobCount?: SortOrder
    status?: SortOrder
    enrollmentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainSumOrderByAggregateInput = {
    demandScore?: SortOrder
    jobCount?: SortOrder
    enrollmentCount?: SortOrder
  }

  export type EnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DomainRelationFilter = {
    is?: DomainWhereInput
    isNot?: DomainWhereInput
  }

  export type LearningPathCountOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    companyTarget?: SortOrder
    roleTarget?: SortOrder
    durationDays?: SortOrder
    moduleOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningPathAvgOrderByAggregateInput = {
    durationDays?: SortOrder
  }

  export type LearningPathMaxOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    companyTarget?: SortOrder
    roleTarget?: SortOrder
    durationDays?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningPathMinOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    companyTarget?: SortOrder
    roleTarget?: SortOrder
    durationDays?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningPathSumOrderByAggregateInput = {
    durationDays?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    notionPageId?: SortOrder
    order?: SortOrder
    durationMinutes?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    xpReward?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    order?: SortOrder
    durationMinutes?: SortOrder
    xpReward?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    notionPageId?: SortOrder
    order?: SortOrder
    durationMinutes?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    xpReward?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    notionPageId?: SortOrder
    order?: SortOrder
    durationMinutes?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    xpReward?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    order?: SortOrder
    durationMinutes?: SortOrder
    xpReward?: SortOrder
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EnrollmentUserIdDomainIdCompoundUniqueInput = {
    userId: string
    domainId: string
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domainId?: SortOrder
    currentModuleId?: SortOrder
    completedAt?: SortOrder
    enrolledAt?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domainId?: SortOrder
    currentModuleId?: SortOrder
    completedAt?: SortOrder
    enrolledAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domainId?: SortOrder
    currentModuleId?: SortOrder
    completedAt?: SortOrder
    enrolledAt?: SortOrder
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

  export type ModuleRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type ProgressUserIdModuleIdCompoundUniqueInput = {
    userId: string
    moduleId: string
  }

  export type ProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    timeSpentMinutes?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgressAvgOrderByAggregateInput = {
    timeSpentMinutes?: SortOrder
    score?: SortOrder
  }

  export type ProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    timeSpentMinutes?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    timeSpentMinutes?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgressSumOrderByAggregateInput = {
    timeSpentMinutes?: SortOrder
    score?: SortOrder
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

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    correctAnswer?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    correctAnswer?: SortOrder
  }

  export type QuizRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type QuizAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    attemptedAt?: SortOrder
  }

  export type QuizAttemptAvgOrderByAggregateInput = {
    selectedAnswer?: SortOrder
  }

  export type QuizAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    attemptedAt?: SortOrder
  }

  export type QuizAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    attemptedAt?: SortOrder
  }

  export type QuizAttemptSumOrderByAggregateInput = {
    selectedAnswer?: SortOrder
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domainId?: SortOrder
    verificationCode?: SortOrder
    pdfUrl?: SortOrder
    issuedAt?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domainId?: SortOrder
    verificationCode?: SortOrder
    pdfUrl?: SortOrder
    issuedAt?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domainId?: SortOrder
    verificationCode?: SortOrder
    pdfUrl?: SortOrder
    issuedAt?: SortOrder
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type JobPostingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    skills?: SortOrder
    domain?: SortOrder
    url?: SortOrder
    status?: SortOrder
    postedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type JobPostingAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type JobPostingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    domain?: SortOrder
    url?: SortOrder
    status?: SortOrder
    postedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type JobPostingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    domain?: SortOrder
    url?: SortOrder
    status?: SortOrder
    postedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type JobPostingSumOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type JobPostingRelationFilter = {
    is?: JobPostingWhereInput
    isNot?: JobPostingWhereInput
  }

  export type BookmarkedJobUserIdJobIdCompoundUniqueInput = {
    userId: string
    jobId: string
  }

  export type BookmarkedJobCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkedJobMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkedJobMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    actionUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    actionUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    actionUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type InterviewQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    question?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    modelAnswer?: SortOrder
    createdAt?: SortOrder
  }

  export type InterviewQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    question?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    modelAnswer?: SortOrder
    createdAt?: SortOrder
  }

  export type InterviewQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    question?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    modelAnswer?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type UserCreateskillsInput = {
    set: string[]
  }

  export type BookmarkedJobCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkedJobCreateWithoutUserInput, BookmarkedJobUncheckedCreateWithoutUserInput> | BookmarkedJobCreateWithoutUserInput[] | BookmarkedJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkedJobCreateOrConnectWithoutUserInput | BookmarkedJobCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkedJobCreateManyUserInputEnvelope
    connect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type QuizAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type BookmarkedJobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkedJobCreateWithoutUserInput, BookmarkedJobUncheckedCreateWithoutUserInput> | BookmarkedJobCreateWithoutUserInput[] | BookmarkedJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkedJobCreateOrConnectWithoutUserInput | BookmarkedJobCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkedJobCreateManyUserInputEnvelope
    connect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumExperienceLevelFieldUpdateOperationsInput = {
    set?: $Enums.ExperienceLevel
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookmarkedJobUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkedJobCreateWithoutUserInput, BookmarkedJobUncheckedCreateWithoutUserInput> | BookmarkedJobCreateWithoutUserInput[] | BookmarkedJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkedJobCreateOrConnectWithoutUserInput | BookmarkedJobCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkedJobUpsertWithWhereUniqueWithoutUserInput | BookmarkedJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkedJobCreateManyUserInputEnvelope
    set?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    disconnect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    delete?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    connect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    update?: BookmarkedJobUpdateWithWhereUniqueWithoutUserInput | BookmarkedJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkedJobUpdateManyWithWhereWithoutUserInput | BookmarkedJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkedJobScalarWhereInput | BookmarkedJobScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutUserInput | ProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutUserInput | ProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutUserInput | ProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type QuizAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type BookmarkedJobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkedJobCreateWithoutUserInput, BookmarkedJobUncheckedCreateWithoutUserInput> | BookmarkedJobCreateWithoutUserInput[] | BookmarkedJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkedJobCreateOrConnectWithoutUserInput | BookmarkedJobCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkedJobUpsertWithWhereUniqueWithoutUserInput | BookmarkedJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkedJobCreateManyUserInputEnvelope
    set?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    disconnect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    delete?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    connect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    update?: BookmarkedJobUpdateWithWhereUniqueWithoutUserInput | BookmarkedJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkedJobUpdateManyWithWhereWithoutUserInput | BookmarkedJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkedJobScalarWhereInput | BookmarkedJobScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutUserInput | ProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutUserInput | ProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutUserInput | ProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type DomainCreatetagsInput = {
    set: string[]
  }

  export type CertificateCreateNestedManyWithoutDomainInput = {
    create?: XOR<CertificateCreateWithoutDomainInput, CertificateUncheckedCreateWithoutDomainInput> | CertificateCreateWithoutDomainInput[] | CertificateUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutDomainInput | CertificateCreateOrConnectWithoutDomainInput[]
    createMany?: CertificateCreateManyDomainInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutDomainInput = {
    create?: XOR<EnrollmentCreateWithoutDomainInput, EnrollmentUncheckedCreateWithoutDomainInput> | EnrollmentCreateWithoutDomainInput[] | EnrollmentUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutDomainInput | EnrollmentCreateOrConnectWithoutDomainInput[]
    createMany?: EnrollmentCreateManyDomainInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type LearningPathCreateNestedManyWithoutDomainInput = {
    create?: XOR<LearningPathCreateWithoutDomainInput, LearningPathUncheckedCreateWithoutDomainInput> | LearningPathCreateWithoutDomainInput[] | LearningPathUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: LearningPathCreateOrConnectWithoutDomainInput | LearningPathCreateOrConnectWithoutDomainInput[]
    createMany?: LearningPathCreateManyDomainInputEnvelope
    connect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
  }

  export type ModuleCreateNestedManyWithoutDomainInput = {
    create?: XOR<ModuleCreateWithoutDomainInput, ModuleUncheckedCreateWithoutDomainInput> | ModuleCreateWithoutDomainInput[] | ModuleUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutDomainInput | ModuleCreateOrConnectWithoutDomainInput[]
    createMany?: ModuleCreateManyDomainInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<CertificateCreateWithoutDomainInput, CertificateUncheckedCreateWithoutDomainInput> | CertificateCreateWithoutDomainInput[] | CertificateUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutDomainInput | CertificateCreateOrConnectWithoutDomainInput[]
    createMany?: CertificateCreateManyDomainInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<EnrollmentCreateWithoutDomainInput, EnrollmentUncheckedCreateWithoutDomainInput> | EnrollmentCreateWithoutDomainInput[] | EnrollmentUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutDomainInput | EnrollmentCreateOrConnectWithoutDomainInput[]
    createMany?: EnrollmentCreateManyDomainInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type LearningPathUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<LearningPathCreateWithoutDomainInput, LearningPathUncheckedCreateWithoutDomainInput> | LearningPathCreateWithoutDomainInput[] | LearningPathUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: LearningPathCreateOrConnectWithoutDomainInput | LearningPathCreateOrConnectWithoutDomainInput[]
    createMany?: LearningPathCreateManyDomainInputEnvelope
    connect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<ModuleCreateWithoutDomainInput, ModuleUncheckedCreateWithoutDomainInput> | ModuleCreateWithoutDomainInput[] | ModuleUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutDomainInput | ModuleCreateOrConnectWithoutDomainInput[]
    createMany?: ModuleCreateManyDomainInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type DomainUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumPublishStatusFieldUpdateOperationsInput = {
    set?: $Enums.PublishStatus
  }

  export type CertificateUpdateManyWithoutDomainNestedInput = {
    create?: XOR<CertificateCreateWithoutDomainInput, CertificateUncheckedCreateWithoutDomainInput> | CertificateCreateWithoutDomainInput[] | CertificateUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutDomainInput | CertificateCreateOrConnectWithoutDomainInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutDomainInput | CertificateUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: CertificateCreateManyDomainInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutDomainInput | CertificateUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutDomainInput | CertificateUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutDomainNestedInput = {
    create?: XOR<EnrollmentCreateWithoutDomainInput, EnrollmentUncheckedCreateWithoutDomainInput> | EnrollmentCreateWithoutDomainInput[] | EnrollmentUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutDomainInput | EnrollmentCreateOrConnectWithoutDomainInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutDomainInput | EnrollmentUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: EnrollmentCreateManyDomainInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutDomainInput | EnrollmentUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutDomainInput | EnrollmentUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type LearningPathUpdateManyWithoutDomainNestedInput = {
    create?: XOR<LearningPathCreateWithoutDomainInput, LearningPathUncheckedCreateWithoutDomainInput> | LearningPathCreateWithoutDomainInput[] | LearningPathUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: LearningPathCreateOrConnectWithoutDomainInput | LearningPathCreateOrConnectWithoutDomainInput[]
    upsert?: LearningPathUpsertWithWhereUniqueWithoutDomainInput | LearningPathUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: LearningPathCreateManyDomainInputEnvelope
    set?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    disconnect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    delete?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    connect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    update?: LearningPathUpdateWithWhereUniqueWithoutDomainInput | LearningPathUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: LearningPathUpdateManyWithWhereWithoutDomainInput | LearningPathUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: LearningPathScalarWhereInput | LearningPathScalarWhereInput[]
  }

  export type ModuleUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ModuleCreateWithoutDomainInput, ModuleUncheckedCreateWithoutDomainInput> | ModuleCreateWithoutDomainInput[] | ModuleUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutDomainInput | ModuleCreateOrConnectWithoutDomainInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutDomainInput | ModuleUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ModuleCreateManyDomainInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutDomainInput | ModuleUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutDomainInput | ModuleUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<CertificateCreateWithoutDomainInput, CertificateUncheckedCreateWithoutDomainInput> | CertificateCreateWithoutDomainInput[] | CertificateUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutDomainInput | CertificateCreateOrConnectWithoutDomainInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutDomainInput | CertificateUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: CertificateCreateManyDomainInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutDomainInput | CertificateUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutDomainInput | CertificateUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<EnrollmentCreateWithoutDomainInput, EnrollmentUncheckedCreateWithoutDomainInput> | EnrollmentCreateWithoutDomainInput[] | EnrollmentUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutDomainInput | EnrollmentCreateOrConnectWithoutDomainInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutDomainInput | EnrollmentUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: EnrollmentCreateManyDomainInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutDomainInput | EnrollmentUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutDomainInput | EnrollmentUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type LearningPathUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<LearningPathCreateWithoutDomainInput, LearningPathUncheckedCreateWithoutDomainInput> | LearningPathCreateWithoutDomainInput[] | LearningPathUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: LearningPathCreateOrConnectWithoutDomainInput | LearningPathCreateOrConnectWithoutDomainInput[]
    upsert?: LearningPathUpsertWithWhereUniqueWithoutDomainInput | LearningPathUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: LearningPathCreateManyDomainInputEnvelope
    set?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    disconnect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    delete?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    connect?: LearningPathWhereUniqueInput | LearningPathWhereUniqueInput[]
    update?: LearningPathUpdateWithWhereUniqueWithoutDomainInput | LearningPathUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: LearningPathUpdateManyWithWhereWithoutDomainInput | LearningPathUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: LearningPathScalarWhereInput | LearningPathScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ModuleCreateWithoutDomainInput, ModuleUncheckedCreateWithoutDomainInput> | ModuleCreateWithoutDomainInput[] | ModuleUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutDomainInput | ModuleCreateOrConnectWithoutDomainInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutDomainInput | ModuleUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ModuleCreateManyDomainInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutDomainInput | ModuleUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutDomainInput | ModuleUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type DomainCreateNestedOneWithoutLearningPathsInput = {
    create?: XOR<DomainCreateWithoutLearningPathsInput, DomainUncheckedCreateWithoutLearningPathsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutLearningPathsInput
    connect?: DomainWhereUniqueInput
  }

  export type DomainUpdateOneRequiredWithoutLearningPathsNestedInput = {
    create?: XOR<DomainCreateWithoutLearningPathsInput, DomainUncheckedCreateWithoutLearningPathsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutLearningPathsInput
    upsert?: DomainUpsertWithoutLearningPathsInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutLearningPathsInput, DomainUpdateWithoutLearningPathsInput>, DomainUncheckedUpdateWithoutLearningPathsInput>
  }

  export type DomainCreateNestedOneWithoutModulesInput = {
    create?: XOR<DomainCreateWithoutModulesInput, DomainUncheckedCreateWithoutModulesInput>
    connectOrCreate?: DomainCreateOrConnectWithoutModulesInput
    connect?: DomainWhereUniqueInput
  }

  export type ProgressCreateNestedManyWithoutModuleInput = {
    create?: XOR<ProgressCreateWithoutModuleInput, ProgressUncheckedCreateWithoutModuleInput> | ProgressCreateWithoutModuleInput[] | ProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutModuleInput | ProgressCreateOrConnectWithoutModuleInput[]
    createMany?: ProgressCreateManyModuleInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutModuleInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type ProgressUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<ProgressCreateWithoutModuleInput, ProgressUncheckedCreateWithoutModuleInput> | ProgressCreateWithoutModuleInput[] | ProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutModuleInput | ProgressCreateOrConnectWithoutModuleInput[]
    createMany?: ProgressCreateManyModuleInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type DomainUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<DomainCreateWithoutModulesInput, DomainUncheckedCreateWithoutModulesInput>
    connectOrCreate?: DomainCreateOrConnectWithoutModulesInput
    upsert?: DomainUpsertWithoutModulesInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutModulesInput, DomainUpdateWithoutModulesInput>, DomainUncheckedUpdateWithoutModulesInput>
  }

  export type ProgressUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ProgressCreateWithoutModuleInput, ProgressUncheckedCreateWithoutModuleInput> | ProgressCreateWithoutModuleInput[] | ProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutModuleInput | ProgressCreateOrConnectWithoutModuleInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutModuleInput | ProgressUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ProgressCreateManyModuleInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutModuleInput | ProgressUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutModuleInput | ProgressUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutModuleNestedInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutModuleInput | QuizUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutModuleInput | QuizUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutModuleInput | QuizUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type ProgressUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ProgressCreateWithoutModuleInput, ProgressUncheckedCreateWithoutModuleInput> | ProgressCreateWithoutModuleInput[] | ProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutModuleInput | ProgressCreateOrConnectWithoutModuleInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutModuleInput | ProgressUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ProgressCreateManyModuleInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutModuleInput | ProgressUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutModuleInput | ProgressUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutModuleInput | QuizUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutModuleInput | QuizUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutModuleInput | QuizUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type DomainCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<DomainCreateWithoutEnrollmentsInput, DomainUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutEnrollmentsInput
    connect?: DomainWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type DomainUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<DomainCreateWithoutEnrollmentsInput, DomainUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutEnrollmentsInput
    upsert?: DomainUpsertWithoutEnrollmentsInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutEnrollmentsInput, DomainUpdateWithoutEnrollmentsInput>, DomainUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ModuleCreateNestedOneWithoutProgressRecordsInput = {
    create?: XOR<ModuleCreateWithoutProgressRecordsInput, ModuleUncheckedCreateWithoutProgressRecordsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutProgressRecordsInput
    connect?: ModuleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProgressRecordsInput = {
    create?: XOR<UserCreateWithoutProgressRecordsInput, UserUncheckedCreateWithoutProgressRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ModuleUpdateOneRequiredWithoutProgressRecordsNestedInput = {
    create?: XOR<ModuleCreateWithoutProgressRecordsInput, ModuleUncheckedCreateWithoutProgressRecordsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutProgressRecordsInput
    upsert?: ModuleUpsertWithoutProgressRecordsInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutProgressRecordsInput, ModuleUpdateWithoutProgressRecordsInput>, ModuleUncheckedUpdateWithoutProgressRecordsInput>
  }

  export type UserUpdateOneRequiredWithoutProgressRecordsNestedInput = {
    create?: XOR<UserCreateWithoutProgressRecordsInput, UserUncheckedCreateWithoutProgressRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressRecordsInput
    upsert?: UserUpsertWithoutProgressRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressRecordsInput, UserUpdateWithoutProgressRecordsInput>, UserUncheckedUpdateWithoutProgressRecordsInput>
  }

  export type ModuleCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<ModuleCreateWithoutQuizzesInput, ModuleUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutQuizzesInput
    connect?: ModuleWhereUniqueInput
  }

  export type QuizAttemptCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type ModuleUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<ModuleCreateWithoutQuizzesInput, ModuleUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutQuizzesInput
    upsert?: ModuleUpsertWithoutQuizzesInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutQuizzesInput, ModuleUpdateWithoutQuizzesInput>, ModuleUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuizAttemptUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutQuizInput | QuizAttemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutQuizInput | QuizAttemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutQuizInput | QuizAttemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutQuizInput | QuizAttemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutQuizInput | QuizAttemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutQuizInput | QuizAttemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAttemptsInput
    connect?: QuizWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuizAttemptsInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAttemptsInput
    upsert?: QuizUpsertWithoutAttemptsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutAttemptsInput, QuizUpdateWithoutAttemptsInput>, QuizUncheckedUpdateWithoutAttemptsInput>
  }

  export type UserUpdateOneRequiredWithoutQuizAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizAttemptsInput
    upsert?: UserUpsertWithoutQuizAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizAttemptsInput, UserUpdateWithoutQuizAttemptsInput>, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type DomainCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<DomainCreateWithoutCertificatesInput, DomainUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: DomainCreateOrConnectWithoutCertificatesInput
    connect?: DomainWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type DomainUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<DomainCreateWithoutCertificatesInput, DomainUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: DomainCreateOrConnectWithoutCertificatesInput
    upsert?: DomainUpsertWithoutCertificatesInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutCertificatesInput, DomainUpdateWithoutCertificatesInput>, DomainUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    upsert?: UserUpsertWithoutCertificatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificatesInput, UserUpdateWithoutCertificatesInput>, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type JobPostingCreateskillsInput = {
    set: string[]
  }

  export type BookmarkedJobCreateNestedManyWithoutJobInput = {
    create?: XOR<BookmarkedJobCreateWithoutJobInput, BookmarkedJobUncheckedCreateWithoutJobInput> | BookmarkedJobCreateWithoutJobInput[] | BookmarkedJobUncheckedCreateWithoutJobInput[]
    connectOrCreate?: BookmarkedJobCreateOrConnectWithoutJobInput | BookmarkedJobCreateOrConnectWithoutJobInput[]
    createMany?: BookmarkedJobCreateManyJobInputEnvelope
    connect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
  }

  export type BookmarkedJobUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<BookmarkedJobCreateWithoutJobInput, BookmarkedJobUncheckedCreateWithoutJobInput> | BookmarkedJobCreateWithoutJobInput[] | BookmarkedJobUncheckedCreateWithoutJobInput[]
    connectOrCreate?: BookmarkedJobCreateOrConnectWithoutJobInput | BookmarkedJobCreateOrConnectWithoutJobInput[]
    createMany?: BookmarkedJobCreateManyJobInputEnvelope
    connect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
  }

  export type JobPostingUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type BookmarkedJobUpdateManyWithoutJobNestedInput = {
    create?: XOR<BookmarkedJobCreateWithoutJobInput, BookmarkedJobUncheckedCreateWithoutJobInput> | BookmarkedJobCreateWithoutJobInput[] | BookmarkedJobUncheckedCreateWithoutJobInput[]
    connectOrCreate?: BookmarkedJobCreateOrConnectWithoutJobInput | BookmarkedJobCreateOrConnectWithoutJobInput[]
    upsert?: BookmarkedJobUpsertWithWhereUniqueWithoutJobInput | BookmarkedJobUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: BookmarkedJobCreateManyJobInputEnvelope
    set?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    disconnect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    delete?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    connect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    update?: BookmarkedJobUpdateWithWhereUniqueWithoutJobInput | BookmarkedJobUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: BookmarkedJobUpdateManyWithWhereWithoutJobInput | BookmarkedJobUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: BookmarkedJobScalarWhereInput | BookmarkedJobScalarWhereInput[]
  }

  export type BookmarkedJobUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<BookmarkedJobCreateWithoutJobInput, BookmarkedJobUncheckedCreateWithoutJobInput> | BookmarkedJobCreateWithoutJobInput[] | BookmarkedJobUncheckedCreateWithoutJobInput[]
    connectOrCreate?: BookmarkedJobCreateOrConnectWithoutJobInput | BookmarkedJobCreateOrConnectWithoutJobInput[]
    upsert?: BookmarkedJobUpsertWithWhereUniqueWithoutJobInput | BookmarkedJobUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: BookmarkedJobCreateManyJobInputEnvelope
    set?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    disconnect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    delete?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    connect?: BookmarkedJobWhereUniqueInput | BookmarkedJobWhereUniqueInput[]
    update?: BookmarkedJobUpdateWithWhereUniqueWithoutJobInput | BookmarkedJobUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: BookmarkedJobUpdateManyWithWhereWithoutJobInput | BookmarkedJobUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: BookmarkedJobScalarWhereInput | BookmarkedJobScalarWhereInput[]
  }

  export type JobPostingCreateNestedOneWithoutBookmarkedJobsInput = {
    create?: XOR<JobPostingCreateWithoutBookmarkedJobsInput, JobPostingUncheckedCreateWithoutBookmarkedJobsInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutBookmarkedJobsInput
    connect?: JobPostingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookmarkedJobsInput = {
    create?: XOR<UserCreateWithoutBookmarkedJobsInput, UserUncheckedCreateWithoutBookmarkedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarkedJobsInput
    connect?: UserWhereUniqueInput
  }

  export type JobPostingUpdateOneRequiredWithoutBookmarkedJobsNestedInput = {
    create?: XOR<JobPostingCreateWithoutBookmarkedJobsInput, JobPostingUncheckedCreateWithoutBookmarkedJobsInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutBookmarkedJobsInput
    upsert?: JobPostingUpsertWithoutBookmarkedJobsInput
    connect?: JobPostingWhereUniqueInput
    update?: XOR<XOR<JobPostingUpdateToOneWithWhereWithoutBookmarkedJobsInput, JobPostingUpdateWithoutBookmarkedJobsInput>, JobPostingUncheckedUpdateWithoutBookmarkedJobsInput>
  }

  export type UserUpdateOneRequiredWithoutBookmarkedJobsNestedInput = {
    create?: XOR<UserCreateWithoutBookmarkedJobsInput, UserUncheckedCreateWithoutBookmarkedJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarkedJobsInput
    upsert?: UserUpsertWithoutBookmarkedJobsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarkedJobsInput, UserUpdateWithoutBookmarkedJobsInput>, UserUncheckedUpdateWithoutBookmarkedJobsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
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

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type BookmarkedJobCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    job: JobPostingCreateNestedOneWithoutBookmarkedJobsInput
  }

  export type BookmarkedJobUncheckedCreateWithoutUserInput = {
    id?: string
    jobId: string
    createdAt?: Date | string
  }

  export type BookmarkedJobCreateOrConnectWithoutUserInput = {
    where: BookmarkedJobWhereUniqueInput
    create: XOR<BookmarkedJobCreateWithoutUserInput, BookmarkedJobUncheckedCreateWithoutUserInput>
  }

  export type BookmarkedJobCreateManyUserInputEnvelope = {
    data: BookmarkedJobCreateManyUserInput | BookmarkedJobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutUserInput = {
    id?: string
    verificationCode: string
    pdfUrl?: string | null
    issuedAt?: Date | string
    domain: DomainCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutUserInput = {
    id?: string
    domainId: string
    verificationCode: string
    pdfUrl?: string | null
    issuedAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutUserInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateCreateManyUserInputEnvelope = {
    data: CertificateCreateManyUserInput | CertificateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutUserInput = {
    id?: string
    currentModuleId?: string | null
    completedAt?: Date | string | null
    enrolledAt?: Date | string
    domain: DomainCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id?: string
    domainId: string
    currentModuleId?: string | null
    completedAt?: Date | string | null
    enrolledAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: EnrollmentCreateManyUserInput | EnrollmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProgressCreateWithoutUserInput = {
    id?: string
    completed?: boolean
    completedAt?: Date | string | null
    timeSpentMinutes?: number
    score?: number | null
    createdAt?: Date | string
    module: ModuleCreateNestedOneWithoutProgressRecordsInput
  }

  export type ProgressUncheckedCreateWithoutUserInput = {
    id?: string
    moduleId: string
    completed?: boolean
    completedAt?: Date | string | null
    timeSpentMinutes?: number
    score?: number | null
    createdAt?: Date | string
  }

  export type ProgressCreateOrConnectWithoutUserInput = {
    where: ProgressWhereUniqueInput
    create: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput>
  }

  export type ProgressCreateManyUserInputEnvelope = {
    data: ProgressCreateManyUserInput | ProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizAttemptCreateWithoutUserInput = {
    id?: string
    selectedAnswer: number
    isCorrect: boolean
    attemptedAt?: Date | string
    quiz: QuizCreateNestedOneWithoutAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    quizId: string
    selectedAnswer: number
    isCorrect: boolean
    attemptedAt?: Date | string
  }

  export type QuizAttemptCreateOrConnectWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptCreateManyUserInputEnvelope = {
    data: QuizAttemptCreateManyUserInput | QuizAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkedJobUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkedJobWhereUniqueInput
    update: XOR<BookmarkedJobUpdateWithoutUserInput, BookmarkedJobUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkedJobCreateWithoutUserInput, BookmarkedJobUncheckedCreateWithoutUserInput>
  }

  export type BookmarkedJobUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkedJobWhereUniqueInput
    data: XOR<BookmarkedJobUpdateWithoutUserInput, BookmarkedJobUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkedJobUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkedJobScalarWhereInput
    data: XOR<BookmarkedJobUpdateManyMutationInput, BookmarkedJobUncheckedUpdateManyWithoutUserInput>
  }

  export type BookmarkedJobScalarWhereInput = {
    AND?: BookmarkedJobScalarWhereInput | BookmarkedJobScalarWhereInput[]
    OR?: BookmarkedJobScalarWhereInput[]
    NOT?: BookmarkedJobScalarWhereInput | BookmarkedJobScalarWhereInput[]
    id?: StringFilter<"BookmarkedJob"> | string
    userId?: StringFilter<"BookmarkedJob"> | string
    jobId?: StringFilter<"BookmarkedJob"> | string
    createdAt?: DateTimeFilter<"BookmarkedJob"> | Date | string
  }

  export type CertificateUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
  }

  export type CertificateUpdateManyWithWhereWithoutUserInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutUserInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: StringFilter<"Certificate"> | string
    userId?: StringFilter<"Certificate"> | string
    domainId?: StringFilter<"Certificate"> | string
    verificationCode?: StringFilter<"Certificate"> | string
    pdfUrl?: StringNullableFilter<"Certificate"> | string | null
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    domainId?: StringFilter<"Enrollment"> | string
    currentModuleId?: StringNullableFilter<"Enrollment"> | string | null
    completedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    actionUrl?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type ProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgressWhereUniqueInput
    update: XOR<ProgressUpdateWithoutUserInput, ProgressUncheckedUpdateWithoutUserInput>
    create: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput>
  }

  export type ProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgressWhereUniqueInput
    data: XOR<ProgressUpdateWithoutUserInput, ProgressUncheckedUpdateWithoutUserInput>
  }

  export type ProgressUpdateManyWithWhereWithoutUserInput = {
    where: ProgressScalarWhereInput
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgressScalarWhereInput = {
    AND?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
    OR?: ProgressScalarWhereInput[]
    NOT?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
    id?: StringFilter<"Progress"> | string
    userId?: StringFilter<"Progress"> | string
    moduleId?: StringFilter<"Progress"> | string
    completed?: BoolFilter<"Progress"> | boolean
    completedAt?: DateTimeNullableFilter<"Progress"> | Date | string | null
    timeSpentMinutes?: IntFilter<"Progress"> | number
    score?: IntNullableFilter<"Progress"> | number | null
    createdAt?: DateTimeFilter<"Progress"> | Date | string
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutUserInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizAttemptScalarWhereInput = {
    AND?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    OR?: QuizAttemptScalarWhereInput[]
    NOT?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    id?: StringFilter<"QuizAttempt"> | string
    userId?: StringFilter<"QuizAttempt"> | string
    quizId?: StringFilter<"QuizAttempt"> | string
    selectedAnswer?: IntFilter<"QuizAttempt"> | number
    isCorrect?: BoolFilter<"QuizAttempt"> | boolean
    attemptedAt?: DateTimeFilter<"QuizAttempt"> | Date | string
  }

  export type CertificateCreateWithoutDomainInput = {
    id?: string
    verificationCode: string
    pdfUrl?: string | null
    issuedAt?: Date | string
    user: UserCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutDomainInput = {
    id?: string
    userId: string
    verificationCode: string
    pdfUrl?: string | null
    issuedAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutDomainInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutDomainInput, CertificateUncheckedCreateWithoutDomainInput>
  }

  export type CertificateCreateManyDomainInputEnvelope = {
    data: CertificateCreateManyDomainInput | CertificateCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutDomainInput = {
    id?: string
    currentModuleId?: string | null
    completedAt?: Date | string | null
    enrolledAt?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutDomainInput = {
    id?: string
    userId: string
    currentModuleId?: string | null
    completedAt?: Date | string | null
    enrolledAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutDomainInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutDomainInput, EnrollmentUncheckedCreateWithoutDomainInput>
  }

  export type EnrollmentCreateManyDomainInputEnvelope = {
    data: EnrollmentCreateManyDomainInput | EnrollmentCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type LearningPathCreateWithoutDomainInput = {
    id?: string
    companyTarget: string
    roleTarget: string
    durationDays: number
    moduleOrder: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LearningPathUncheckedCreateWithoutDomainInput = {
    id?: string
    companyTarget: string
    roleTarget: string
    durationDays: number
    moduleOrder: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LearningPathCreateOrConnectWithoutDomainInput = {
    where: LearningPathWhereUniqueInput
    create: XOR<LearningPathCreateWithoutDomainInput, LearningPathUncheckedCreateWithoutDomainInput>
  }

  export type LearningPathCreateManyDomainInputEnvelope = {
    data: LearningPathCreateManyDomainInput | LearningPathCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type ModuleCreateWithoutDomainInput = {
    id?: string
    title: string
    description: string
    content: string
    notionPageId?: string | null
    order: number
    durationMinutes?: number
    type?: $Enums.ContentType
    difficulty?: $Enums.Difficulty
    xpReward?: number
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    progressRecords?: ProgressCreateNestedManyWithoutModuleInput
    quizzes?: QuizCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutDomainInput = {
    id?: string
    title: string
    description: string
    content: string
    notionPageId?: string | null
    order: number
    durationMinutes?: number
    type?: $Enums.ContentType
    difficulty?: $Enums.Difficulty
    xpReward?: number
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    progressRecords?: ProgressUncheckedCreateNestedManyWithoutModuleInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutDomainInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutDomainInput, ModuleUncheckedCreateWithoutDomainInput>
  }

  export type ModuleCreateManyDomainInputEnvelope = {
    data: ModuleCreateManyDomainInput | ModuleCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type CertificateUpsertWithWhereUniqueWithoutDomainInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutDomainInput, CertificateUncheckedUpdateWithoutDomainInput>
    create: XOR<CertificateCreateWithoutDomainInput, CertificateUncheckedCreateWithoutDomainInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutDomainInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutDomainInput, CertificateUncheckedUpdateWithoutDomainInput>
  }

  export type CertificateUpdateManyWithWhereWithoutDomainInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutDomainInput>
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutDomainInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutDomainInput, EnrollmentUncheckedUpdateWithoutDomainInput>
    create: XOR<EnrollmentCreateWithoutDomainInput, EnrollmentUncheckedCreateWithoutDomainInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutDomainInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutDomainInput, EnrollmentUncheckedUpdateWithoutDomainInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutDomainInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutDomainInput>
  }

  export type LearningPathUpsertWithWhereUniqueWithoutDomainInput = {
    where: LearningPathWhereUniqueInput
    update: XOR<LearningPathUpdateWithoutDomainInput, LearningPathUncheckedUpdateWithoutDomainInput>
    create: XOR<LearningPathCreateWithoutDomainInput, LearningPathUncheckedCreateWithoutDomainInput>
  }

  export type LearningPathUpdateWithWhereUniqueWithoutDomainInput = {
    where: LearningPathWhereUniqueInput
    data: XOR<LearningPathUpdateWithoutDomainInput, LearningPathUncheckedUpdateWithoutDomainInput>
  }

  export type LearningPathUpdateManyWithWhereWithoutDomainInput = {
    where: LearningPathScalarWhereInput
    data: XOR<LearningPathUpdateManyMutationInput, LearningPathUncheckedUpdateManyWithoutDomainInput>
  }

  export type LearningPathScalarWhereInput = {
    AND?: LearningPathScalarWhereInput | LearningPathScalarWhereInput[]
    OR?: LearningPathScalarWhereInput[]
    NOT?: LearningPathScalarWhereInput | LearningPathScalarWhereInput[]
    id?: StringFilter<"LearningPath"> | string
    domainId?: StringFilter<"LearningPath"> | string
    companyTarget?: StringFilter<"LearningPath"> | string
    roleTarget?: StringFilter<"LearningPath"> | string
    durationDays?: IntFilter<"LearningPath"> | number
    moduleOrder?: JsonFilter<"LearningPath">
    createdAt?: DateTimeFilter<"LearningPath"> | Date | string
  }

  export type ModuleUpsertWithWhereUniqueWithoutDomainInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutDomainInput, ModuleUncheckedUpdateWithoutDomainInput>
    create: XOR<ModuleCreateWithoutDomainInput, ModuleUncheckedCreateWithoutDomainInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutDomainInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutDomainInput, ModuleUncheckedUpdateWithoutDomainInput>
  }

  export type ModuleUpdateManyWithWhereWithoutDomainInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutDomainInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    id?: StringFilter<"Module"> | string
    domainId?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    content?: StringFilter<"Module"> | string
    notionPageId?: StringNullableFilter<"Module"> | string | null
    order?: IntFilter<"Module"> | number
    durationMinutes?: IntFilter<"Module"> | number
    type?: EnumContentTypeFilter<"Module"> | $Enums.ContentType
    difficulty?: EnumDifficultyFilter<"Module"> | $Enums.Difficulty
    xpReward?: IntFilter<"Module"> | number
    status?: EnumPublishStatusFilter<"Module"> | $Enums.PublishStatus
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
  }

  export type DomainCreateWithoutLearningPathsInput = {
    id?: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore?: number
    jobCount?: number
    tags?: DomainCreatetagsInput | string[]
    status?: $Enums.PublishStatus
    enrollmentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateCreateNestedManyWithoutDomainInput
    enrollments?: EnrollmentCreateNestedManyWithoutDomainInput
    modules?: ModuleCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutLearningPathsInput = {
    id?: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore?: number
    jobCount?: number
    tags?: DomainCreatetagsInput | string[]
    status?: $Enums.PublishStatus
    enrollmentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateUncheckedCreateNestedManyWithoutDomainInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutDomainInput
    modules?: ModuleUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutLearningPathsInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutLearningPathsInput, DomainUncheckedCreateWithoutLearningPathsInput>
  }

  export type DomainUpsertWithoutLearningPathsInput = {
    update: XOR<DomainUpdateWithoutLearningPathsInput, DomainUncheckedUpdateWithoutLearningPathsInput>
    create: XOR<DomainCreateWithoutLearningPathsInput, DomainUncheckedCreateWithoutLearningPathsInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutLearningPathsInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutLearningPathsInput, DomainUncheckedUpdateWithoutLearningPathsInput>
  }

  export type DomainUpdateWithoutLearningPathsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUpdateManyWithoutDomainNestedInput
    enrollments?: EnrollmentUpdateManyWithoutDomainNestedInput
    modules?: ModuleUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutLearningPathsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUncheckedUpdateManyWithoutDomainNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutDomainNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateWithoutModulesInput = {
    id?: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore?: number
    jobCount?: number
    tags?: DomainCreatetagsInput | string[]
    status?: $Enums.PublishStatus
    enrollmentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateCreateNestedManyWithoutDomainInput
    enrollments?: EnrollmentCreateNestedManyWithoutDomainInput
    learningPaths?: LearningPathCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutModulesInput = {
    id?: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore?: number
    jobCount?: number
    tags?: DomainCreatetagsInput | string[]
    status?: $Enums.PublishStatus
    enrollmentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateUncheckedCreateNestedManyWithoutDomainInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutDomainInput
    learningPaths?: LearningPathUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutModulesInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutModulesInput, DomainUncheckedCreateWithoutModulesInput>
  }

  export type ProgressCreateWithoutModuleInput = {
    id?: string
    completed?: boolean
    completedAt?: Date | string | null
    timeSpentMinutes?: number
    score?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProgressRecordsInput
  }

  export type ProgressUncheckedCreateWithoutModuleInput = {
    id?: string
    userId: string
    completed?: boolean
    completedAt?: Date | string | null
    timeSpentMinutes?: number
    score?: number | null
    createdAt?: Date | string
  }

  export type ProgressCreateOrConnectWithoutModuleInput = {
    where: ProgressWhereUniqueInput
    create: XOR<ProgressCreateWithoutModuleInput, ProgressUncheckedCreateWithoutModuleInput>
  }

  export type ProgressCreateManyModuleInputEnvelope = {
    data: ProgressCreateManyModuleInput | ProgressCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutModuleInput = {
    id?: string
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: number
    explanation: string
    difficulty?: $Enums.Difficulty
    createdAt?: Date | string
    attempts?: QuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutModuleInput = {
    id?: string
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: number
    explanation: string
    difficulty?: $Enums.Difficulty
    createdAt?: Date | string
    attempts?: QuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutModuleInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput>
  }

  export type QuizCreateManyModuleInputEnvelope = {
    data: QuizCreateManyModuleInput | QuizCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type DomainUpsertWithoutModulesInput = {
    update: XOR<DomainUpdateWithoutModulesInput, DomainUncheckedUpdateWithoutModulesInput>
    create: XOR<DomainCreateWithoutModulesInput, DomainUncheckedCreateWithoutModulesInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutModulesInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutModulesInput, DomainUncheckedUpdateWithoutModulesInput>
  }

  export type DomainUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUpdateManyWithoutDomainNestedInput
    enrollments?: EnrollmentUpdateManyWithoutDomainNestedInput
    learningPaths?: LearningPathUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUncheckedUpdateManyWithoutDomainNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutDomainNestedInput
    learningPaths?: LearningPathUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type ProgressUpsertWithWhereUniqueWithoutModuleInput = {
    where: ProgressWhereUniqueInput
    update: XOR<ProgressUpdateWithoutModuleInput, ProgressUncheckedUpdateWithoutModuleInput>
    create: XOR<ProgressCreateWithoutModuleInput, ProgressUncheckedCreateWithoutModuleInput>
  }

  export type ProgressUpdateWithWhereUniqueWithoutModuleInput = {
    where: ProgressWhereUniqueInput
    data: XOR<ProgressUpdateWithoutModuleInput, ProgressUncheckedUpdateWithoutModuleInput>
  }

  export type ProgressUpdateManyWithWhereWithoutModuleInput = {
    where: ProgressScalarWhereInput
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyWithoutModuleInput>
  }

  export type QuizUpsertWithWhereUniqueWithoutModuleInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutModuleInput, QuizUncheckedUpdateWithoutModuleInput>
    create: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutModuleInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutModuleInput, QuizUncheckedUpdateWithoutModuleInput>
  }

  export type QuizUpdateManyWithWhereWithoutModuleInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutModuleInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    moduleId?: StringFilter<"Quiz"> | string
    question?: StringFilter<"Quiz"> | string
    options?: JsonFilter<"Quiz">
    correctAnswer?: IntFilter<"Quiz"> | number
    explanation?: StringFilter<"Quiz"> | string
    difficulty?: EnumDifficultyFilter<"Quiz"> | $Enums.Difficulty
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
  }

  export type DomainCreateWithoutEnrollmentsInput = {
    id?: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore?: number
    jobCount?: number
    tags?: DomainCreatetagsInput | string[]
    status?: $Enums.PublishStatus
    enrollmentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateCreateNestedManyWithoutDomainInput
    learningPaths?: LearningPathCreateNestedManyWithoutDomainInput
    modules?: ModuleCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore?: number
    jobCount?: number
    tags?: DomainCreatetagsInput | string[]
    status?: $Enums.PublishStatus
    enrollmentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateUncheckedCreateNestedManyWithoutDomainInput
    learningPaths?: LearningPathUncheckedCreateNestedManyWithoutDomainInput
    modules?: ModuleUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutEnrollmentsInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutEnrollmentsInput, DomainUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserCreateWithoutEnrollmentsInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    progressRecords?: ProgressCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    progressRecords?: ProgressUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type DomainUpsertWithoutEnrollmentsInput = {
    update: XOR<DomainUpdateWithoutEnrollmentsInput, DomainUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<DomainCreateWithoutEnrollmentsInput, DomainUncheckedCreateWithoutEnrollmentsInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutEnrollmentsInput, DomainUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type DomainUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUpdateManyWithoutDomainNestedInput
    learningPaths?: LearningPathUpdateManyWithoutDomainNestedInput
    modules?: ModuleUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUncheckedUpdateManyWithoutDomainNestedInput
    learningPaths?: LearningPathUncheckedUpdateManyWithoutDomainNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModuleCreateWithoutProgressRecordsInput = {
    id?: string
    title: string
    description: string
    content: string
    notionPageId?: string | null
    order: number
    durationMinutes?: number
    type?: $Enums.ContentType
    difficulty?: $Enums.Difficulty
    xpReward?: number
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: DomainCreateNestedOneWithoutModulesInput
    quizzes?: QuizCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutProgressRecordsInput = {
    id?: string
    domainId: string
    title: string
    description: string
    content: string
    notionPageId?: string | null
    order: number
    durationMinutes?: number
    type?: $Enums.ContentType
    difficulty?: $Enums.Difficulty
    xpReward?: number
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutProgressRecordsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutProgressRecordsInput, ModuleUncheckedCreateWithoutProgressRecordsInput>
  }

  export type UserCreateWithoutProgressRecordsInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressRecordsInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressRecordsInput, UserUncheckedCreateWithoutProgressRecordsInput>
  }

  export type ModuleUpsertWithoutProgressRecordsInput = {
    update: XOR<ModuleUpdateWithoutProgressRecordsInput, ModuleUncheckedUpdateWithoutProgressRecordsInput>
    create: XOR<ModuleCreateWithoutProgressRecordsInput, ModuleUncheckedCreateWithoutProgressRecordsInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutProgressRecordsInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutProgressRecordsInput, ModuleUncheckedUpdateWithoutProgressRecordsInput>
  }

  export type ModuleUpdateWithoutProgressRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    xpReward?: IntFieldUpdateOperationsInput | number
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutModulesNestedInput
    quizzes?: QuizUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutProgressRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    xpReward?: IntFieldUpdateOperationsInput | number
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type UserUpsertWithoutProgressRecordsInput = {
    update: XOR<UserUpdateWithoutProgressRecordsInput, UserUncheckedUpdateWithoutProgressRecordsInput>
    create: XOR<UserCreateWithoutProgressRecordsInput, UserUncheckedCreateWithoutProgressRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressRecordsInput, UserUncheckedUpdateWithoutProgressRecordsInput>
  }

  export type UserUpdateWithoutProgressRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModuleCreateWithoutQuizzesInput = {
    id?: string
    title: string
    description: string
    content: string
    notionPageId?: string | null
    order: number
    durationMinutes?: number
    type?: $Enums.ContentType
    difficulty?: $Enums.Difficulty
    xpReward?: number
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: DomainCreateNestedOneWithoutModulesInput
    progressRecords?: ProgressCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutQuizzesInput = {
    id?: string
    domainId: string
    title: string
    description: string
    content: string
    notionPageId?: string | null
    order: number
    durationMinutes?: number
    type?: $Enums.ContentType
    difficulty?: $Enums.Difficulty
    xpReward?: number
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    progressRecords?: ProgressUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutQuizzesInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutQuizzesInput, ModuleUncheckedCreateWithoutQuizzesInput>
  }

  export type QuizAttemptCreateWithoutQuizInput = {
    id?: string
    selectedAnswer: number
    isCorrect: boolean
    attemptedAt?: Date | string
    user: UserCreateNestedOneWithoutQuizAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutQuizInput = {
    id?: string
    userId: string
    selectedAnswer: number
    isCorrect: boolean
    attemptedAt?: Date | string
  }

  export type QuizAttemptCreateOrConnectWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput>
  }

  export type QuizAttemptCreateManyQuizInputEnvelope = {
    data: QuizAttemptCreateManyQuizInput | QuizAttemptCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type ModuleUpsertWithoutQuizzesInput = {
    update: XOR<ModuleUpdateWithoutQuizzesInput, ModuleUncheckedUpdateWithoutQuizzesInput>
    create: XOR<ModuleCreateWithoutQuizzesInput, ModuleUncheckedCreateWithoutQuizzesInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutQuizzesInput, ModuleUncheckedUpdateWithoutQuizzesInput>
  }

  export type ModuleUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    xpReward?: IntFieldUpdateOperationsInput | number
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutModulesNestedInput
    progressRecords?: ProgressUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    xpReward?: IntFieldUpdateOperationsInput | number
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressRecords?: ProgressUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutQuizInput, QuizAttemptUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutQuizInput, QuizAttemptUncheckedUpdateWithoutQuizInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutQuizInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutAttemptsInput = {
    id?: string
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: number
    explanation: string
    difficulty?: $Enums.Difficulty
    createdAt?: Date | string
    module: ModuleCreateNestedOneWithoutQuizzesInput
  }

  export type QuizUncheckedCreateWithoutAttemptsInput = {
    id?: string
    moduleId: string
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: number
    explanation: string
    difficulty?: $Enums.Difficulty
    createdAt?: Date | string
  }

  export type QuizCreateOrConnectWithoutAttemptsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
  }

  export type UserCreateWithoutQuizAttemptsInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    progressRecords?: ProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuizAttemptsInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    progressRecords?: ProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuizAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
  }

  export type QuizUpsertWithoutAttemptsInput = {
    update: XOR<QuizUpdateWithoutAttemptsInput, QuizUncheckedUpdateWithoutAttemptsInput>
    create: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutAttemptsInput, QuizUncheckedUpdateWithoutAttemptsInput>
  }

  export type QuizUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutQuizzesNestedInput
  }

  export type QuizUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutQuizAttemptsInput = {
    update: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
    create: XOR<UserCreateWithoutQuizAttemptsInput, UserUncheckedCreateWithoutQuizAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizAttemptsInput, UserUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type UserUpdateWithoutQuizAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DomainCreateWithoutCertificatesInput = {
    id?: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore?: number
    jobCount?: number
    tags?: DomainCreatetagsInput | string[]
    status?: $Enums.PublishStatus
    enrollmentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutDomainInput
    learningPaths?: LearningPathCreateNestedManyWithoutDomainInput
    modules?: ModuleCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutCertificatesInput = {
    id?: string
    slug: string
    name: string
    description: string
    icon: string
    color: string
    demandScore?: number
    jobCount?: number
    tags?: DomainCreatetagsInput | string[]
    status?: $Enums.PublishStatus
    enrollmentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutDomainInput
    learningPaths?: LearningPathUncheckedCreateNestedManyWithoutDomainInput
    modules?: ModuleUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutCertificatesInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutCertificatesInput, DomainUncheckedCreateWithoutCertificatesInput>
  }

  export type UserCreateWithoutCertificatesInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    progressRecords?: ProgressCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCertificatesInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    progressRecords?: ProgressUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
  }

  export type DomainUpsertWithoutCertificatesInput = {
    update: XOR<DomainUpdateWithoutCertificatesInput, DomainUncheckedUpdateWithoutCertificatesInput>
    create: XOR<DomainCreateWithoutCertificatesInput, DomainUncheckedCreateWithoutCertificatesInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutCertificatesInput, DomainUncheckedUpdateWithoutCertificatesInput>
  }

  export type DomainUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutDomainNestedInput
    learningPaths?: LearningPathUpdateManyWithoutDomainNestedInput
    modules?: ModuleUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    demandScore?: IntFieldUpdateOperationsInput | number
    jobCount?: IntFieldUpdateOperationsInput | number
    tags?: DomainUpdatetagsInput | string[]
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutDomainNestedInput
    learningPaths?: LearningPathUncheckedUpdateManyWithoutDomainNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type UserUpsertWithoutCertificatesInput = {
    update: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookmarkedJobCreateWithoutJobInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarkedJobsInput
  }

  export type BookmarkedJobUncheckedCreateWithoutJobInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type BookmarkedJobCreateOrConnectWithoutJobInput = {
    where: BookmarkedJobWhereUniqueInput
    create: XOR<BookmarkedJobCreateWithoutJobInput, BookmarkedJobUncheckedCreateWithoutJobInput>
  }

  export type BookmarkedJobCreateManyJobInputEnvelope = {
    data: BookmarkedJobCreateManyJobInput | BookmarkedJobCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkedJobUpsertWithWhereUniqueWithoutJobInput = {
    where: BookmarkedJobWhereUniqueInput
    update: XOR<BookmarkedJobUpdateWithoutJobInput, BookmarkedJobUncheckedUpdateWithoutJobInput>
    create: XOR<BookmarkedJobCreateWithoutJobInput, BookmarkedJobUncheckedCreateWithoutJobInput>
  }

  export type BookmarkedJobUpdateWithWhereUniqueWithoutJobInput = {
    where: BookmarkedJobWhereUniqueInput
    data: XOR<BookmarkedJobUpdateWithoutJobInput, BookmarkedJobUncheckedUpdateWithoutJobInput>
  }

  export type BookmarkedJobUpdateManyWithWhereWithoutJobInput = {
    where: BookmarkedJobScalarWhereInput
    data: XOR<BookmarkedJobUpdateManyMutationInput, BookmarkedJobUncheckedUpdateManyWithoutJobInput>
  }

  export type JobPostingCreateWithoutBookmarkedJobsInput = {
    id?: string
    title: string
    company: string
    location: string
    salaryMin: number
    salaryMax: number
    skills?: JobPostingCreateskillsInput | string[]
    domain: string
    url: string
    status?: $Enums.JobStatus
    postedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type JobPostingUncheckedCreateWithoutBookmarkedJobsInput = {
    id?: string
    title: string
    company: string
    location: string
    salaryMin: number
    salaryMax: number
    skills?: JobPostingCreateskillsInput | string[]
    domain: string
    url: string
    status?: $Enums.JobStatus
    postedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type JobPostingCreateOrConnectWithoutBookmarkedJobsInput = {
    where: JobPostingWhereUniqueInput
    create: XOR<JobPostingCreateWithoutBookmarkedJobsInput, JobPostingUncheckedCreateWithoutBookmarkedJobsInput>
  }

  export type UserCreateWithoutBookmarkedJobsInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    progressRecords?: ProgressCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookmarkedJobsInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    progressRecords?: ProgressUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookmarkedJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarkedJobsInput, UserUncheckedCreateWithoutBookmarkedJobsInput>
  }

  export type JobPostingUpsertWithoutBookmarkedJobsInput = {
    update: XOR<JobPostingUpdateWithoutBookmarkedJobsInput, JobPostingUncheckedUpdateWithoutBookmarkedJobsInput>
    create: XOR<JobPostingCreateWithoutBookmarkedJobsInput, JobPostingUncheckedCreateWithoutBookmarkedJobsInput>
    where?: JobPostingWhereInput
  }

  export type JobPostingUpdateToOneWithWhereWithoutBookmarkedJobsInput = {
    where?: JobPostingWhereInput
    data: XOR<JobPostingUpdateWithoutBookmarkedJobsInput, JobPostingUncheckedUpdateWithoutBookmarkedJobsInput>
  }

  export type JobPostingUpdateWithoutBookmarkedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    skills?: JobPostingUpdateskillsInput | string[]
    domain?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JobPostingUncheckedUpdateWithoutBookmarkedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    skills?: JobPostingUpdateskillsInput | string[]
    domain?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutBookmarkedJobsInput = {
    update: XOR<UserUpdateWithoutBookmarkedJobsInput, UserUncheckedUpdateWithoutBookmarkedJobsInput>
    create: XOR<UserCreateWithoutBookmarkedJobsInput, UserUncheckedCreateWithoutBookmarkedJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarkedJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarkedJobsInput, UserUncheckedUpdateWithoutBookmarkedJobsInput>
  }

  export type UserUpdateWithoutBookmarkedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarkedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progressRecords?: ProgressCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id: string
    name: string
    email: string
    image?: string | null
    role?: $Enums.UserRole
    xp?: number
    streak?: number
    longestStreak?: number
    lastActiveDate?: Date | string | null
    targetRole?: string | null
    targetCompany?: string | null
    experienceLevel?: $Enums.ExperienceLevel
    weeklyHours?: number
    onboardingComplete?: boolean
    skills?: UserCreateskillsInput | string[]
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progressRecords?: ProgressUncheckedCreateNestedManyWithoutUserInput
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastActiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    targetCompany?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    weeklyHours?: IntFieldUpdateOperationsInput | number
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    skills?: UserUpdateskillsInput | string[]
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedJobs?: BookmarkedJobUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookmarkedJobCreateManyUserInput = {
    id?: string
    jobId: string
    createdAt?: Date | string
  }

  export type CertificateCreateManyUserInput = {
    id?: string
    domainId: string
    verificationCode: string
    pdfUrl?: string | null
    issuedAt?: Date | string
  }

  export type EnrollmentCreateManyUserInput = {
    id?: string
    domainId: string
    currentModuleId?: string | null
    completedAt?: Date | string | null
    enrolledAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    actionUrl?: string | null
    createdAt?: Date | string
  }

  export type ProgressCreateManyUserInput = {
    id?: string
    moduleId: string
    completed?: boolean
    completedAt?: Date | string | null
    timeSpentMinutes?: number
    score?: number | null
    createdAt?: Date | string
  }

  export type QuizAttemptCreateManyUserInput = {
    id?: string
    quizId: string
    selectedAnswer: number
    isCorrect: boolean
    attemptedAt?: Date | string
  }

  export type BookmarkedJobUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobPostingUpdateOneRequiredWithoutBookmarkedJobsNestedInput
  }

  export type BookmarkedJobUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedJobUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentModuleId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    currentModuleId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    domainId?: StringFieldUpdateOperationsInput | string
    currentModuleId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    actionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutProgressRecordsNestedInput
  }

  export type ProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyDomainInput = {
    id?: string
    userId: string
    verificationCode: string
    pdfUrl?: string | null
    issuedAt?: Date | string
  }

  export type EnrollmentCreateManyDomainInput = {
    id?: string
    userId: string
    currentModuleId?: string | null
    completedAt?: Date | string | null
    enrolledAt?: Date | string
  }

  export type LearningPathCreateManyDomainInput = {
    id?: string
    companyTarget: string
    roleTarget: string
    durationDays: number
    moduleOrder: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ModuleCreateManyDomainInput = {
    id?: string
    title: string
    description: string
    content: string
    notionPageId?: string | null
    order: number
    durationMinutes?: number
    type?: $Enums.ContentType
    difficulty?: $Enums.Difficulty
    xpReward?: number
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentModuleId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentModuleId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentModuleId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyTarget?: StringFieldUpdateOperationsInput | string
    roleTarget?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    moduleOrder?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyTarget?: StringFieldUpdateOperationsInput | string
    roleTarget?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    moduleOrder?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyTarget?: StringFieldUpdateOperationsInput | string
    roleTarget?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    moduleOrder?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    xpReward?: IntFieldUpdateOperationsInput | number
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressRecords?: ProgressUpdateManyWithoutModuleNestedInput
    quizzes?: QuizUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    xpReward?: IntFieldUpdateOperationsInput | number
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressRecords?: ProgressUncheckedUpdateManyWithoutModuleNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    notionPageId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    xpReward?: IntFieldUpdateOperationsInput | number
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressCreateManyModuleInput = {
    id?: string
    userId: string
    completed?: boolean
    completedAt?: Date | string | null
    timeSpentMinutes?: number
    score?: number | null
    createdAt?: Date | string
  }

  export type QuizCreateManyModuleInput = {
    id?: string
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: number
    explanation: string
    difficulty?: $Enums.Difficulty
    createdAt?: Date | string
  }

  export type ProgressUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressRecordsNestedInput
  }

  export type ProgressUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: QuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateManyQuizInput = {
    id?: string
    userId: string
    selectedAnswer: number
    isCorrect: boolean
    attemptedAt?: Date | string
  }

  export type QuizAttemptUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedJobCreateManyJobInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type BookmarkedJobUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarkedJobsNestedInput
  }

  export type BookmarkedJobUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedJobUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DomainCountOutputTypeDefaultArgs instead
     */
    export type DomainCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DomainCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModuleCountOutputTypeDefaultArgs instead
     */
    export type ModuleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModuleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuizCountOutputTypeDefaultArgs instead
     */
    export type QuizCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuizCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobPostingCountOutputTypeDefaultArgs instead
     */
    export type JobPostingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobPostingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DomainDefaultArgs instead
     */
    export type DomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DomainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LearningPathDefaultArgs instead
     */
    export type LearningPathArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LearningPathDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModuleDefaultArgs instead
     */
    export type ModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModuleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnrollmentDefaultArgs instead
     */
    export type EnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnrollmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgressDefaultArgs instead
     */
    export type ProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuizDefaultArgs instead
     */
    export type QuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuizDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuizAttemptDefaultArgs instead
     */
    export type QuizAttemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuizAttemptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CertificateDefaultArgs instead
     */
    export type CertificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CertificateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobPostingDefaultArgs instead
     */
    export type JobPostingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobPostingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookmarkedJobDefaultArgs instead
     */
    export type BookmarkedJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookmarkedJobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InterviewQuestionDefaultArgs instead
     */
    export type InterviewQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InterviewQuestionDefaultArgs<ExtArgs>

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