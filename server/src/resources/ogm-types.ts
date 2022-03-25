import { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: any;
};

export type Query = {
  __typename?: "Query";
  getUsers?: Maybe<UserOutput>;
  loginSuccessOutputs: Array<LoginSuccessOutput>;
  loginSuccessOutputsAggregate: LoginSuccessOutputAggregateSelection;
  posts: Array<Post>;
  postsAggregate: PostAggregateSelection;
  postOutputs: Array<PostOutput>;
  postOutputsAggregate: PostOutputAggregateSelection;
  signUpSuccessOutputs: Array<SignUpSuccessOutput>;
  signUpSuccessOutputsAggregate: SignUpSuccessOutputAggregateSelection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  userOutputs: Array<UserOutput>;
  userOutputsAggregate: UserOutputAggregateSelection;
};

export type QueryGetUsersArgs = {
  input?: InputMaybe<UserInput>;
};

export type QueryLoginSuccessOutputsArgs = {
  where?: InputMaybe<LoginSuccessOutputWhere>;
  options?: InputMaybe<LoginSuccessOutputOptions>;
};

export type QueryLoginSuccessOutputsAggregateArgs = {
  where?: InputMaybe<LoginSuccessOutputWhere>;
};

export type QueryPostsArgs = {
  where?: InputMaybe<PostWhere>;
  options?: InputMaybe<PostOptions>;
  fulltext?: InputMaybe<PostFulltext>;
};

export type QueryPostsAggregateArgs = {
  where?: InputMaybe<PostWhere>;
  fulltext?: InputMaybe<PostFulltext>;
};

export type QueryPostOutputsArgs = {
  where?: InputMaybe<PostOutputWhere>;
  options?: InputMaybe<PostOutputOptions>;
};

export type QueryPostOutputsAggregateArgs = {
  where?: InputMaybe<PostOutputWhere>;
};

export type QuerySignUpSuccessOutputsArgs = {
  where?: InputMaybe<SignUpSuccessOutputWhere>;
  options?: InputMaybe<SignUpSuccessOutputOptions>;
};

export type QuerySignUpSuccessOutputsAggregateArgs = {
  where?: InputMaybe<SignUpSuccessOutputWhere>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryUserOutputsArgs = {
  where?: InputMaybe<UserOutputWhere>;
  options?: InputMaybe<UserOutputOptions>;
};

export type QueryUserOutputsAggregateArgs = {
  where?: InputMaybe<UserOutputWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  login?: Maybe<LoginSuccessOutput>;
  makePost?: Maybe<PostOutput>;
  refreshToken?: Maybe<LoginSuccessOutput>;
  signUp?: Maybe<SignUpSuccessOutput>;
  createLoginSuccessOutputs: CreateLoginSuccessOutputsMutationResponse;
  deleteLoginSuccessOutputs: DeleteInfo;
  updateLoginSuccessOutputs: UpdateLoginSuccessOutputsMutationResponse;
  createPosts: CreatePostsMutationResponse;
  deletePosts: DeleteInfo;
  updatePosts: UpdatePostsMutationResponse;
  createPostOutputs: CreatePostOutputsMutationResponse;
  deletePostOutputs: DeleteInfo;
  updatePostOutputs: UpdatePostOutputsMutationResponse;
  createSignUpSuccessOutputs: CreateSignUpSuccessOutputsMutationResponse;
  deleteSignUpSuccessOutputs: DeleteInfo;
  updateSignUpSuccessOutputs: UpdateSignUpSuccessOutputsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createUserOutputs: CreateUserOutputsMutationResponse;
  deleteUserOutputs: DeleteInfo;
  updateUserOutputs: UpdateUserOutputsMutationResponse;
};

export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};

export type MutationMakePostArgs = {
  input?: InputMaybe<PostInput>;
};

export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};

export type MutationSignUpArgs = {
  input?: InputMaybe<SignupInput>;
};

export type MutationCreateLoginSuccessOutputsArgs = {
  input: Array<LoginSuccessOutputCreateInput>;
};

export type MutationDeleteLoginSuccessOutputsArgs = {
  where?: InputMaybe<LoginSuccessOutputWhere>;
};

export type MutationUpdateLoginSuccessOutputsArgs = {
  where?: InputMaybe<LoginSuccessOutputWhere>;
  update?: InputMaybe<LoginSuccessOutputUpdateInput>;
};

export type MutationCreatePostsArgs = {
  input: Array<PostCreateInput>;
};

export type MutationDeletePostsArgs = {
  where?: InputMaybe<PostWhere>;
  delete?: InputMaybe<PostDeleteInput>;
};

export type MutationUpdatePostsArgs = {
  where?: InputMaybe<PostWhere>;
  update?: InputMaybe<PostUpdateInput>;
  connect?: InputMaybe<PostConnectInput>;
  disconnect?: InputMaybe<PostDisconnectInput>;
  create?: InputMaybe<PostRelationInput>;
  delete?: InputMaybe<PostDeleteInput>;
  connectOrCreate?: InputMaybe<PostConnectOrCreateInput>;
};

export type MutationCreatePostOutputsArgs = {
  input: Array<PostOutputCreateInput>;
};

export type MutationDeletePostOutputsArgs = {
  where?: InputMaybe<PostOutputWhere>;
};

export type MutationUpdatePostOutputsArgs = {
  where?: InputMaybe<PostOutputWhere>;
  update?: InputMaybe<PostOutputUpdateInput>;
};

export type MutationCreateSignUpSuccessOutputsArgs = {
  input: Array<SignUpSuccessOutputCreateInput>;
};

export type MutationDeleteSignUpSuccessOutputsArgs = {
  where?: InputMaybe<SignUpSuccessOutputWhere>;
};

export type MutationUpdateSignUpSuccessOutputsArgs = {
  where?: InputMaybe<SignUpSuccessOutputWhere>;
  update?: InputMaybe<SignUpSuccessOutputUpdateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
  connect?: InputMaybe<UserConnectInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
};

export type MutationCreateUserOutputsArgs = {
  input: Array<UserOutputCreateInput>;
};

export type MutationDeleteUserOutputsArgs = {
  where?: InputMaybe<UserOutputWhere>;
};

export type MutationUpdateUserOutputsArgs = {
  where?: InputMaybe<UserOutputWhere>;
  update?: InputMaybe<UserOutputUpdateInput>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type CreateInfo = {
  __typename?: "CreateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
};

export type CreateLoginSuccessOutputsMutationResponse = {
  __typename?: "CreateLoginSuccessOutputsMutationResponse";
  info: CreateInfo;
  loginSuccessOutputs: Array<LoginSuccessOutput>;
};

export type CreatePostOutputsMutationResponse = {
  __typename?: "CreatePostOutputsMutationResponse";
  info: CreateInfo;
  postOutputs: Array<PostOutput>;
};

export type CreatePostsMutationResponse = {
  __typename?: "CreatePostsMutationResponse";
  info: CreateInfo;
  posts: Array<Post>;
};

export type CreateSignUpSuccessOutputsMutationResponse = {
  __typename?: "CreateSignUpSuccessOutputsMutationResponse";
  info: CreateInfo;
  signUpSuccessOutputs: Array<SignUpSuccessOutput>;
};

export type CreateUserOutputsMutationResponse = {
  __typename?: "CreateUserOutputsMutationResponse";
  info: CreateInfo;
  userOutputs: Array<UserOutput>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: "DateTimeAggregateSelectionNonNullable";
  min: Scalars["DateTime"];
  max: Scalars["DateTime"];
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: "DateTimeAggregateSelectionNullable";
  min?: Maybe<Scalars["DateTime"]>;
  max?: Maybe<Scalars["DateTime"]>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type FloatAggregateSelectionNullable = {
  __typename?: "FloatAggregateSelectionNullable";
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  average?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"];
  longest: Scalars["ID"];
};

export type IdAggregateSelectionNullable = {
  __typename?: "IDAggregateSelectionNullable";
  shortest?: Maybe<Scalars["ID"]>;
  longest?: Maybe<Scalars["ID"]>;
};

export type LoginSuccessOutput = {
  __typename?: "LoginSuccessOutput";
  accessKey?: Maybe<Scalars["String"]>;
  accessToken: Scalars["String"];
  refreshToken: Scalars["String"];
};

export type LoginSuccessOutputAggregateSelection = {
  __typename?: "LoginSuccessOutputAggregateSelection";
  count: Scalars["Int"];
  accessKey: StringAggregateSelectionNullable;
  accessToken: StringAggregateSelectionNonNullable;
  refreshToken: StringAggregateSelectionNonNullable;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type Post = {
  __typename?: "Post";
  content: Scalars["String"];
  deletedBy?: Maybe<Scalars["ID"]>;
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  lastModifiedAt: Scalars["DateTime"];
  createdBy: User;
  createdByAggregate?: Maybe<PostUserCreatedByAggregationSelection>;
  createdByConnection: PostCreatedByConnection;
};

export type PostCreatedByArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type PostCreatedByAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type PostCreatedByConnectionArgs = {
  where?: InputMaybe<PostCreatedByConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<PostCreatedByConnectionSort>>;
};

export type PostAggregateSelection = {
  __typename?: "PostAggregateSelection";
  count: Scalars["Int"];
  content: StringAggregateSelectionNonNullable;
  deletedBy: IdAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  deletedAt: DateTimeAggregateSelectionNullable;
  lastModifiedAt: DateTimeAggregateSelectionNonNullable;
};

export type PostCreatedByConnection = {
  __typename?: "PostCreatedByConnection";
  edges: Array<PostCreatedByRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type PostCreatedByRelationship = {
  __typename?: "PostCreatedByRelationship";
  cursor: Scalars["String"];
  node: User;
};

export type PostOutput = {
  __typename?: "PostOutput";
  content: Scalars["String"];
};

export type PostOutputAggregateSelection = {
  __typename?: "PostOutputAggregateSelection";
  count: Scalars["Int"];
  content: StringAggregateSelectionNonNullable;
};

export type PostUserCreatedByAggregationSelection = {
  __typename?: "PostUserCreatedByAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<PostUserCreatedByNodeAggregateSelection>;
};

export type PostUserCreatedByNodeAggregateSelection = {
  __typename?: "PostUserCreatedByNodeAggregateSelection";
  deletedAt: FloatAggregateSelectionNullable;
  deletedBy: FloatAggregateSelectionNullable;
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  lastModifiedBy: IdAggregateSelectionNullable;
  password: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  lastModifiedAt: DateTimeAggregateSelectionNonNullable;
};

export type SignUpSuccessOutput = {
  __typename?: "SignUpSuccessOutput";
  success: Scalars["Boolean"];
};

export type SignUpSuccessOutputAggregateSelection = {
  __typename?: "SignUpSuccessOutputAggregateSelection";
  count: Scalars["Int"];
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"];
  longest: Scalars["String"];
};

export type StringAggregateSelectionNullable = {
  __typename?: "StringAggregateSelectionNullable";
  shortest?: Maybe<Scalars["String"]>;
  longest?: Maybe<Scalars["String"]>;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  nodesDeleted: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type UpdateLoginSuccessOutputsMutationResponse = {
  __typename?: "UpdateLoginSuccessOutputsMutationResponse";
  info: UpdateInfo;
  loginSuccessOutputs: Array<LoginSuccessOutput>;
};

export type UpdatePostOutputsMutationResponse = {
  __typename?: "UpdatePostOutputsMutationResponse";
  info: UpdateInfo;
  postOutputs: Array<PostOutput>;
};

export type UpdatePostsMutationResponse = {
  __typename?: "UpdatePostsMutationResponse";
  info: UpdateInfo;
  posts: Array<Post>;
};

export type UpdateSignUpSuccessOutputsMutationResponse = {
  __typename?: "UpdateSignUpSuccessOutputsMutationResponse";
  info: UpdateInfo;
  signUpSuccessOutputs: Array<SignUpSuccessOutput>;
};

export type UpdateUserOutputsMutationResponse = {
  __typename?: "UpdateUserOutputsMutationResponse";
  info: UpdateInfo;
  userOutputs: Array<UserOutput>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  deletedAt?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email: Scalars["String"];
  id: Scalars["ID"];
  lastModifiedBy?: Maybe<Scalars["ID"]>;
  password: Scalars["String"];
  createdAt: Scalars["DateTime"];
  lastModifiedAt: Scalars["DateTime"];
  friends?: Maybe<User>;
  friendsAggregate?: Maybe<UserUserFriendsAggregationSelection>;
  posts?: Maybe<Post>;
  postsAggregate?: Maybe<UserPostPostsAggregationSelection>;
  friendsConnection: UserFriendsConnection;
  postsConnection: UserPostsConnection;
};

export type UserFriendsArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserFriendsAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserPostsArgs = {
  where?: InputMaybe<PostWhere>;
  options?: InputMaybe<PostOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserPostsAggregateArgs = {
  where?: InputMaybe<PostWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserFriendsConnectionArgs = {
  where?: InputMaybe<UserFriendsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserFriendsConnectionSort>>;
};

export type UserPostsConnectionArgs = {
  where?: InputMaybe<UserPostsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserPostsConnectionSort>>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"];
  deletedAt: FloatAggregateSelectionNullable;
  deletedBy: FloatAggregateSelectionNullable;
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  lastModifiedBy: IdAggregateSelectionNullable;
  password: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  lastModifiedAt: DateTimeAggregateSelectionNonNullable;
};

export type UserFriendsConnection = {
  __typename?: "UserFriendsConnection";
  edges: Array<UserFriendsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserFriendsRelationship = {
  __typename?: "UserFriendsRelationship";
  cursor: Scalars["String"];
  node: User;
};

export type UserOutput = {
  __typename?: "UserOutput";
  id: Scalars["ID"];
};

export type UserOutputAggregateSelection = {
  __typename?: "UserOutputAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
};

export type UserPostPostsAggregationSelection = {
  __typename?: "UserPostPostsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserPostPostsNodeAggregateSelection>;
};

export type UserPostPostsNodeAggregateSelection = {
  __typename?: "UserPostPostsNodeAggregateSelection";
  content: StringAggregateSelectionNonNullable;
  deletedBy: IdAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  deletedAt: DateTimeAggregateSelectionNullable;
  lastModifiedAt: DateTimeAggregateSelectionNonNullable;
};

export type UserPostsConnection = {
  __typename?: "UserPostsConnection";
  edges: Array<UserPostsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserPostsRelationship = {
  __typename?: "UserPostsRelationship";
  cursor: Scalars["String"];
  node: Post;
};

export type UserUserFriendsAggregationSelection = {
  __typename?: "UserUserFriendsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserUserFriendsNodeAggregateSelection>;
};

export type UserUserFriendsNodeAggregateSelection = {
  __typename?: "UserUserFriendsNodeAggregateSelection";
  deletedAt: FloatAggregateSelectionNullable;
  deletedBy: FloatAggregateSelectionNullable;
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  lastModifiedBy: IdAggregateSelectionNullable;
  password: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  lastModifiedAt: DateTimeAggregateSelectionNonNullable;
};

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginSuccessOutputCreateInput = {
  accessKey?: InputMaybe<Scalars["String"]>;
  accessToken: Scalars["String"];
  refreshToken: Scalars["String"];
};

export type LoginSuccessOutputOptions = {
  /** Specify one or more LoginSuccessOutputSort objects to sort LoginSuccessOutputs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LoginSuccessOutputSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

/** Fields to sort LoginSuccessOutputs by. The order in which sorts are applied is not guaranteed when specifying many fields in one LoginSuccessOutputSort object. */
export type LoginSuccessOutputSort = {
  accessKey?: InputMaybe<SortDirection>;
  accessToken?: InputMaybe<SortDirection>;
  refreshToken?: InputMaybe<SortDirection>;
};

export type LoginSuccessOutputUpdateInput = {
  accessKey?: InputMaybe<Scalars["String"]>;
  accessToken?: InputMaybe<Scalars["String"]>;
  refreshToken?: InputMaybe<Scalars["String"]>;
};

export type LoginSuccessOutputWhere = {
  OR?: InputMaybe<Array<LoginSuccessOutputWhere>>;
  AND?: InputMaybe<Array<LoginSuccessOutputWhere>>;
  accessKey?: InputMaybe<Scalars["String"]>;
  accessKey_NOT?: InputMaybe<Scalars["String"]>;
  accessKey_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  accessKey_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  accessKey_CONTAINS?: InputMaybe<Scalars["String"]>;
  accessKey_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  accessKey_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  accessKey_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  accessKey_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  accessKey_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  accessToken?: InputMaybe<Scalars["String"]>;
  accessToken_NOT?: InputMaybe<Scalars["String"]>;
  accessToken_IN?: InputMaybe<Array<Scalars["String"]>>;
  accessToken_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  accessToken_CONTAINS?: InputMaybe<Scalars["String"]>;
  accessToken_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  accessToken_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  accessToken_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  accessToken_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  accessToken_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  refreshToken?: InputMaybe<Scalars["String"]>;
  refreshToken_NOT?: InputMaybe<Scalars["String"]>;
  refreshToken_IN?: InputMaybe<Array<Scalars["String"]>>;
  refreshToken_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  refreshToken_CONTAINS?: InputMaybe<Scalars["String"]>;
  refreshToken_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  refreshToken_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  refreshToken_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  refreshToken_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  refreshToken_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
};

export type PostConnectInput = {
  createdBy?: InputMaybe<PostCreatedByConnectFieldInput>;
};

export type PostConnectOrCreateInput = {
  createdBy?: InputMaybe<PostCreatedByConnectOrCreateFieldInput>;
};

export type PostConnectOrCreateWhere = {
  node: PostUniqueWhere;
};

export type PostConnectWhere = {
  node: PostWhere;
};

export type PostCreatedByAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<PostCreatedByAggregateInput>>;
  OR?: InputMaybe<Array<PostCreatedByAggregateInput>>;
  node?: InputMaybe<PostCreatedByNodeAggregationWhereInput>;
};

export type PostCreatedByConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  connect?: InputMaybe<UserConnectInput>;
};

export type PostCreatedByConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type PostCreatedByConnectionWhere = {
  AND?: InputMaybe<Array<PostCreatedByConnectionWhere>>;
  OR?: InputMaybe<Array<PostCreatedByConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
  node_NOT?: InputMaybe<UserWhere>;
};

export type PostCreatedByConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: PostCreatedByConnectOrCreateFieldInputOnCreate;
};

export type PostCreatedByConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type PostCreatedByCreateFieldInput = {
  node: UserCreateInput;
};

export type PostCreatedByDeleteFieldInput = {
  where?: InputMaybe<PostCreatedByConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type PostCreatedByDisconnectFieldInput = {
  where?: InputMaybe<PostCreatedByConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type PostCreatedByFieldInput = {
  create?: InputMaybe<PostCreatedByCreateFieldInput>;
  connect?: InputMaybe<PostCreatedByConnectFieldInput>;
  connectOrCreate?: InputMaybe<PostCreatedByConnectOrCreateFieldInput>;
};

export type PostCreatedByNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCreatedByNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PostCreatedByNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  lastModifiedBy_EQUAL?: InputMaybe<Scalars["ID"]>;
  email_EQUAL?: InputMaybe<Scalars["String"]>;
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  email_GT?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  email_GTE?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  email_LT?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  email_LTE?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  password_EQUAL?: InputMaybe<Scalars["String"]>;
  password_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  password_GT?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  password_GTE?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  password_LT?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  password_LTE?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  deletedAt_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedAt_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedAt_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedAt_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedAt_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedAt_GT?: InputMaybe<Scalars["Float"]>;
  deletedAt_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  deletedAt_MIN_GT?: InputMaybe<Scalars["Float"]>;
  deletedAt_MAX_GT?: InputMaybe<Scalars["Float"]>;
  deletedAt_SUM_GT?: InputMaybe<Scalars["Float"]>;
  deletedAt_GTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_LT?: InputMaybe<Scalars["Float"]>;
  deletedAt_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  deletedAt_MIN_LT?: InputMaybe<Scalars["Float"]>;
  deletedAt_MAX_LT?: InputMaybe<Scalars["Float"]>;
  deletedAt_SUM_LT?: InputMaybe<Scalars["Float"]>;
  deletedAt_LTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedBy_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedBy_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedBy_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedBy_GT?: InputMaybe<Scalars["Float"]>;
  deletedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  deletedBy_MIN_GT?: InputMaybe<Scalars["Float"]>;
  deletedBy_MAX_GT?: InputMaybe<Scalars["Float"]>;
  deletedBy_SUM_GT?: InputMaybe<Scalars["Float"]>;
  deletedBy_GTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_LT?: InputMaybe<Scalars["Float"]>;
  deletedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  deletedBy_MIN_LT?: InputMaybe<Scalars["Float"]>;
  deletedBy_MAX_LT?: InputMaybe<Scalars["Float"]>;
  deletedBy_SUM_LT?: InputMaybe<Scalars["Float"]>;
  deletedBy_LTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type PostCreatedByUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type PostCreatedByUpdateFieldInput = {
  where?: InputMaybe<PostCreatedByConnectionWhere>;
  update?: InputMaybe<PostCreatedByUpdateConnectionInput>;
  connect?: InputMaybe<PostCreatedByConnectFieldInput>;
  disconnect?: InputMaybe<PostCreatedByDisconnectFieldInput>;
  create?: InputMaybe<PostCreatedByCreateFieldInput>;
  delete?: InputMaybe<PostCreatedByDeleteFieldInput>;
  connectOrCreate?: InputMaybe<PostCreatedByConnectOrCreateFieldInput>;
};

export type PostCreateInput = {
  content: Scalars["String"];
  deletedBy?: InputMaybe<Scalars["ID"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<PostCreatedByFieldInput>;
};

export type PostDeleteInput = {
  createdBy?: InputMaybe<PostCreatedByDeleteFieldInput>;
};

export type PostDisconnectInput = {
  createdBy?: InputMaybe<PostCreatedByDisconnectFieldInput>;
};

export type PostFulltext = {
  PostContent?: InputMaybe<PostPostContentFulltext>;
};

export type PostInput = {
  content: Scalars["String"];
};

export type PostOnCreateInput = {
  content?: InputMaybe<Scalars["String"]>;
  deletedBy?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type PostOptions = {
  /** Specify one or more PostSort objects to sort Posts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PostSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type PostOutputCreateInput = {
  content: Scalars["String"];
};

export type PostOutputOptions = {
  /** Specify one or more PostOutputSort objects to sort PostOutputs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PostOutputSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

/** Fields to sort PostOutputs by. The order in which sorts are applied is not guaranteed when specifying many fields in one PostOutputSort object. */
export type PostOutputSort = {
  content?: InputMaybe<SortDirection>;
};

export type PostOutputUpdateInput = {
  content?: InputMaybe<Scalars["String"]>;
};

export type PostOutputWhere = {
  OR?: InputMaybe<Array<PostOutputWhere>>;
  AND?: InputMaybe<Array<PostOutputWhere>>;
  content?: InputMaybe<Scalars["String"]>;
  content_NOT?: InputMaybe<Scalars["String"]>;
  content_IN?: InputMaybe<Array<Scalars["String"]>>;
  content_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  content_CONTAINS?: InputMaybe<Scalars["String"]>;
  content_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  content_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  content_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  content_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  content_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
};

export type PostPostContentFulltext = {
  phrase: Scalars["String"];
  score_EQUAL?: InputMaybe<Scalars["Int"]>;
};

export type PostRelationInput = {
  createdBy?: InputMaybe<PostCreatedByCreateFieldInput>;
};

/** Fields to sort Posts by. The order in which sorts are applied is not guaranteed when specifying many fields in one PostSort object. */
export type PostSort = {
  content?: InputMaybe<SortDirection>;
  deletedBy?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  deletedAt?: InputMaybe<SortDirection>;
  lastModifiedAt?: InputMaybe<SortDirection>;
};

export type PostUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PostUpdateInput = {
  content?: InputMaybe<Scalars["String"]>;
  deletedBy?: InputMaybe<Scalars["ID"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<PostCreatedByUpdateFieldInput>;
};

export type PostWhere = {
  OR?: InputMaybe<Array<PostWhere>>;
  AND?: InputMaybe<Array<PostWhere>>;
  content?: InputMaybe<Scalars["String"]>;
  content_NOT?: InputMaybe<Scalars["String"]>;
  content_IN?: InputMaybe<Array<Scalars["String"]>>;
  content_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  content_CONTAINS?: InputMaybe<Scalars["String"]>;
  content_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  content_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  content_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  content_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  content_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  deletedBy?: InputMaybe<Scalars["ID"]>;
  deletedBy_NOT?: InputMaybe<Scalars["ID"]>;
  deletedBy_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  deletedBy_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  deletedBy_CONTAINS?: InputMaybe<Scalars["ID"]>;
  deletedBy_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  deletedBy_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  deletedBy_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  deletedBy_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  deletedBy_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  deletedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  deletedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  lastModifiedAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  lastModifiedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserWhere>;
  createdBy_NOT?: InputMaybe<UserWhere>;
  createdByAggregate?: InputMaybe<PostCreatedByAggregateInput>;
  createdByConnection?: InputMaybe<PostCreatedByConnectionWhere>;
  createdByConnection_NOT?: InputMaybe<PostCreatedByConnectionWhere>;
};

export type RefreshTokenInput = {
  accessKey: Scalars["String"];
  accessToken: Scalars["String"];
  refreshToken: Scalars["String"];
};

export type SignupInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type SignUpSuccessOutputCreateInput = {
  success: Scalars["Boolean"];
};

export type SignUpSuccessOutputOptions = {
  /** Specify one or more SignUpSuccessOutputSort objects to sort SignUpSuccessOutputs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SignUpSuccessOutputSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

/** Fields to sort SignUpSuccessOutputs by. The order in which sorts are applied is not guaranteed when specifying many fields in one SignUpSuccessOutputSort object. */
export type SignUpSuccessOutputSort = {
  success?: InputMaybe<SortDirection>;
};

export type SignUpSuccessOutputUpdateInput = {
  success?: InputMaybe<Scalars["Boolean"]>;
};

export type SignUpSuccessOutputWhere = {
  OR?: InputMaybe<Array<SignUpSuccessOutputWhere>>;
  AND?: InputMaybe<Array<SignUpSuccessOutputWhere>>;
  success?: InputMaybe<Scalars["Boolean"]>;
  success_NOT?: InputMaybe<Scalars["Boolean"]>;
};

export type UserConnectInput = {
  friends?: InputMaybe<UserFriendsConnectFieldInput>;
  posts?: InputMaybe<UserPostsConnectFieldInput>;
};

export type UserConnectOrCreateInput = {
  friends?: InputMaybe<UserFriendsConnectOrCreateFieldInput>;
  posts?: InputMaybe<UserPostsConnectOrCreateFieldInput>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  deletedAt?: InputMaybe<Scalars["Float"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  email: Scalars["String"];
  lastModifiedBy?: InputMaybe<Scalars["ID"]>;
  password: Scalars["String"];
  friends?: InputMaybe<UserFriendsFieldInput>;
  posts?: InputMaybe<UserPostsFieldInput>;
};

export type UserDeleteInput = {
  friends?: InputMaybe<UserFriendsDeleteFieldInput>;
  posts?: InputMaybe<UserPostsDeleteFieldInput>;
};

export type UserDisconnectInput = {
  friends?: InputMaybe<UserFriendsDisconnectFieldInput>;
  posts?: InputMaybe<UserPostsDisconnectFieldInput>;
};

export type UserFriendsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserFriendsAggregateInput>>;
  OR?: InputMaybe<Array<UserFriendsAggregateInput>>;
  node?: InputMaybe<UserFriendsNodeAggregationWhereInput>;
};

export type UserFriendsConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  connect?: InputMaybe<UserConnectInput>;
};

export type UserFriendsConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type UserFriendsConnectionWhere = {
  AND?: InputMaybe<Array<UserFriendsConnectionWhere>>;
  OR?: InputMaybe<Array<UserFriendsConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
  node_NOT?: InputMaybe<UserWhere>;
};

export type UserFriendsConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: UserFriendsConnectOrCreateFieldInputOnCreate;
};

export type UserFriendsConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type UserFriendsCreateFieldInput = {
  node: UserCreateInput;
};

export type UserFriendsDeleteFieldInput = {
  where?: InputMaybe<UserFriendsConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type UserFriendsDisconnectFieldInput = {
  where?: InputMaybe<UserFriendsConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type UserFriendsFieldInput = {
  create?: InputMaybe<UserFriendsCreateFieldInput>;
  connect?: InputMaybe<UserFriendsConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserFriendsConnectOrCreateFieldInput>;
};

export type UserFriendsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserFriendsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserFriendsNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  lastModifiedBy_EQUAL?: InputMaybe<Scalars["ID"]>;
  email_EQUAL?: InputMaybe<Scalars["String"]>;
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  email_GT?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  email_GTE?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  email_LT?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  email_LTE?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  password_EQUAL?: InputMaybe<Scalars["String"]>;
  password_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  password_GT?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  password_GTE?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  password_LT?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  password_LTE?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  deletedAt_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedAt_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedAt_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedAt_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedAt_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedAt_GT?: InputMaybe<Scalars["Float"]>;
  deletedAt_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  deletedAt_MIN_GT?: InputMaybe<Scalars["Float"]>;
  deletedAt_MAX_GT?: InputMaybe<Scalars["Float"]>;
  deletedAt_SUM_GT?: InputMaybe<Scalars["Float"]>;
  deletedAt_GTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_LT?: InputMaybe<Scalars["Float"]>;
  deletedAt_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  deletedAt_MIN_LT?: InputMaybe<Scalars["Float"]>;
  deletedAt_MAX_LT?: InputMaybe<Scalars["Float"]>;
  deletedAt_SUM_LT?: InputMaybe<Scalars["Float"]>;
  deletedAt_LTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedBy_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedBy_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedBy_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedBy_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  deletedBy_GT?: InputMaybe<Scalars["Float"]>;
  deletedBy_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  deletedBy_MIN_GT?: InputMaybe<Scalars["Float"]>;
  deletedBy_MAX_GT?: InputMaybe<Scalars["Float"]>;
  deletedBy_SUM_GT?: InputMaybe<Scalars["Float"]>;
  deletedBy_GTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_LT?: InputMaybe<Scalars["Float"]>;
  deletedBy_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  deletedBy_MIN_LT?: InputMaybe<Scalars["Float"]>;
  deletedBy_MAX_LT?: InputMaybe<Scalars["Float"]>;
  deletedBy_SUM_LT?: InputMaybe<Scalars["Float"]>;
  deletedBy_LTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type UserFriendsUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type UserFriendsUpdateFieldInput = {
  where?: InputMaybe<UserFriendsConnectionWhere>;
  update?: InputMaybe<UserFriendsUpdateConnectionInput>;
  connect?: InputMaybe<UserFriendsConnectFieldInput>;
  disconnect?: InputMaybe<UserFriendsDisconnectFieldInput>;
  create?: InputMaybe<UserFriendsCreateFieldInput>;
  delete?: InputMaybe<UserFriendsDeleteFieldInput>;
  connectOrCreate?: InputMaybe<UserFriendsConnectOrCreateFieldInput>;
};

export type UserInput = {
  field: Scalars["String"];
};

export type UserOnCreateInput = {
  deletedAt?: InputMaybe<Scalars["Float"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  lastModifiedBy?: InputMaybe<Scalars["ID"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type UserOutputCreateInput = {
  id: Scalars["ID"];
};

export type UserOutputOptions = {
  /** Specify one or more UserOutputSort objects to sort UserOutputs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserOutputSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

/** Fields to sort UserOutputs by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserOutputSort object. */
export type UserOutputSort = {
  id?: InputMaybe<SortDirection>;
};

export type UserOutputUpdateInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type UserOutputWhere = {
  OR?: InputMaybe<Array<UserOutputWhere>>;
  AND?: InputMaybe<Array<UserOutputWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
};

export type UserPostsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserPostsAggregateInput>>;
  OR?: InputMaybe<Array<UserPostsAggregateInput>>;
  node?: InputMaybe<UserPostsNodeAggregationWhereInput>;
};

export type UserPostsConnectFieldInput = {
  where?: InputMaybe<PostConnectWhere>;
  connect?: InputMaybe<PostConnectInput>;
};

export type UserPostsConnectionSort = {
  node?: InputMaybe<PostSort>;
};

export type UserPostsConnectionWhere = {
  AND?: InputMaybe<Array<UserPostsConnectionWhere>>;
  OR?: InputMaybe<Array<UserPostsConnectionWhere>>;
  node?: InputMaybe<PostWhere>;
  node_NOT?: InputMaybe<PostWhere>;
};

export type UserPostsConnectOrCreateFieldInput = {
  where: PostConnectOrCreateWhere;
  onCreate: UserPostsConnectOrCreateFieldInputOnCreate;
};

export type UserPostsConnectOrCreateFieldInputOnCreate = {
  node: PostOnCreateInput;
};

export type UserPostsCreateFieldInput = {
  node: PostCreateInput;
};

export type UserPostsDeleteFieldInput = {
  where?: InputMaybe<UserPostsConnectionWhere>;
  delete?: InputMaybe<PostDeleteInput>;
};

export type UserPostsDisconnectFieldInput = {
  where?: InputMaybe<UserPostsConnectionWhere>;
  disconnect?: InputMaybe<PostDisconnectInput>;
};

export type UserPostsFieldInput = {
  create?: InputMaybe<UserPostsCreateFieldInput>;
  connect?: InputMaybe<UserPostsConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserPostsConnectOrCreateFieldInput>;
};

export type UserPostsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserPostsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserPostsNodeAggregationWhereInput>>;
  deletedBy_EQUAL?: InputMaybe<Scalars["ID"]>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  content_EQUAL?: InputMaybe<Scalars["String"]>;
  content_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  content_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  content_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  content_GT?: InputMaybe<Scalars["Int"]>;
  content_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  content_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  content_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  content_GTE?: InputMaybe<Scalars["Int"]>;
  content_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  content_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  content_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  content_LT?: InputMaybe<Scalars["Int"]>;
  content_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  content_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  content_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  content_LTE?: InputMaybe<Scalars["Int"]>;
  content_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  content_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  content_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  deletedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type UserPostsUpdateConnectionInput = {
  node?: InputMaybe<PostUpdateInput>;
};

export type UserPostsUpdateFieldInput = {
  where?: InputMaybe<UserPostsConnectionWhere>;
  update?: InputMaybe<UserPostsUpdateConnectionInput>;
  connect?: InputMaybe<UserPostsConnectFieldInput>;
  disconnect?: InputMaybe<UserPostsDisconnectFieldInput>;
  create?: InputMaybe<UserPostsCreateFieldInput>;
  delete?: InputMaybe<UserPostsDeleteFieldInput>;
  connectOrCreate?: InputMaybe<UserPostsConnectOrCreateFieldInput>;
};

export type UserRelationInput = {
  friends?: InputMaybe<UserFriendsCreateFieldInput>;
  posts?: InputMaybe<UserPostsCreateFieldInput>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  deletedAt?: InputMaybe<SortDirection>;
  deletedBy?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  lastModifiedBy?: InputMaybe<SortDirection>;
  password?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  lastModifiedAt?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type UserUpdateInput = {
  deletedAt?: InputMaybe<Scalars["Float"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  email?: InputMaybe<Scalars["String"]>;
  lastModifiedBy?: InputMaybe<Scalars["ID"]>;
  password?: InputMaybe<Scalars["String"]>;
  friends?: InputMaybe<UserFriendsUpdateFieldInput>;
  posts?: InputMaybe<UserPostsUpdateFieldInput>;
};

export type UserWhere = {
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  deletedAt?: InputMaybe<Scalars["Float"]>;
  deletedAt_NOT?: InputMaybe<Scalars["Float"]>;
  deletedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  deletedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  deletedAt_LT?: InputMaybe<Scalars["Float"]>;
  deletedAt_LTE?: InputMaybe<Scalars["Float"]>;
  deletedAt_GT?: InputMaybe<Scalars["Float"]>;
  deletedAt_GTE?: InputMaybe<Scalars["Float"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  deletedBy_NOT?: InputMaybe<Scalars["Float"]>;
  deletedBy_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  deletedBy_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  deletedBy_LT?: InputMaybe<Scalars["Float"]>;
  deletedBy_LTE?: InputMaybe<Scalars["Float"]>;
  deletedBy_GT?: InputMaybe<Scalars["Float"]>;
  deletedBy_GTE?: InputMaybe<Scalars["Float"]>;
  email?: InputMaybe<Scalars["String"]>;
  email_NOT?: InputMaybe<Scalars["String"]>;
  email_IN?: InputMaybe<Array<Scalars["String"]>>;
  email_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]>;
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  lastModifiedBy?: InputMaybe<Scalars["ID"]>;
  lastModifiedBy_NOT?: InputMaybe<Scalars["ID"]>;
  lastModifiedBy_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  lastModifiedBy_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  lastModifiedBy_CONTAINS?: InputMaybe<Scalars["ID"]>;
  lastModifiedBy_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  lastModifiedBy_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  lastModifiedBy_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  lastModifiedBy_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  lastModifiedBy_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  password?: InputMaybe<Scalars["String"]>;
  password_NOT?: InputMaybe<Scalars["String"]>;
  password_IN?: InputMaybe<Array<Scalars["String"]>>;
  password_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  password_CONTAINS?: InputMaybe<Scalars["String"]>;
  password_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  password_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  password_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  password_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  password_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  lastModifiedAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]>>;
  lastModifiedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  lastModifiedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  friends?: InputMaybe<UserWhere>;
  friends_NOT?: InputMaybe<UserWhere>;
  friendsAggregate?: InputMaybe<UserFriendsAggregateInput>;
  posts?: InputMaybe<PostWhere>;
  posts_NOT?: InputMaybe<PostWhere>;
  postsAggregate?: InputMaybe<UserPostsAggregateInput>;
  friendsConnection?: InputMaybe<UserFriendsConnectionWhere>;
  friendsConnection_NOT?: InputMaybe<UserFriendsConnectionWhere>;
  postsConnection?: InputMaybe<UserPostsConnectionWhere>;
  postsConnection_NOT?: InputMaybe<UserPostsConnectionWhere>;
};

export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface LoginSuccessOutputAggregateSelectionInput {
  count?: boolean;
  accessKey?: StringAggregateInputNullable;
  accessToken?: StringAggregateInputNonNullable;
  refreshToken?: StringAggregateInputNonNullable;
}

export declare class LoginSuccessOutputModel {
  public find(args?: {
    where?: LoginSuccessOutputWhere;

    options?: LoginSuccessOutputOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<LoginSuccessOutput[]>;
  public create(args: {
    input: LoginSuccessOutputCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateLoginSuccessOutputsMutationResponse>;
  public update(args: {
    where?: LoginSuccessOutputWhere;
    update?: LoginSuccessOutputUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateLoginSuccessOutputsMutationResponse>;
  public delete(args: {
    where?: LoginSuccessOutputWhere;

    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: LoginSuccessOutputWhere;

    aggregate: LoginSuccessOutputAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<LoginSuccessOutputAggregateSelection>;
}

export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface PostAggregateSelectionInput {
  count?: boolean;
  content?: StringAggregateInputNonNullable;
  deletedBy?: IdAggregateInputNullable;
  id?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  deletedAt?: DateTimeAggregateInputNullable;
  lastModifiedAt?: DateTimeAggregateInputNonNullable;
}

export declare class PostModel {
  public find(args?: {
    where?: PostWhere;
    fulltext?: PostFulltext;
    options?: PostOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Post[]>;
  public create(args: {
    input: PostCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePostsMutationResponse>;
  public update(args: {
    where?: PostWhere;
    update?: PostUpdateInput;
    connect?: PostConnectInput;
    disconnect?: PostDisconnectInput;
    create?: PostCreateInput;
    connectOrCreate?: PostConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePostsMutationResponse>;
  public delete(args: {
    where?: PostWhere;
    delete?: PostDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PostWhere;
    fulltext?: PostFulltext;
    aggregate: PostAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PostAggregateSelection>;
}

export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface PostOutputAggregateSelectionInput {
  count?: boolean;
  content?: StringAggregateInputNonNullable;
}

export declare class PostOutputModel {
  public find(args?: {
    where?: PostOutputWhere;

    options?: PostOutputOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<PostOutput[]>;
  public create(args: {
    input: PostOutputCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePostOutputsMutationResponse>;
  public update(args: {
    where?: PostOutputWhere;
    update?: PostOutputUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePostOutputsMutationResponse>;
  public delete(args: {
    where?: PostOutputWhere;

    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PostOutputWhere;

    aggregate: PostOutputAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PostOutputAggregateSelection>;
}

export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface SignUpSuccessOutputAggregateSelectionInput {
  count?: boolean;
}

export declare class SignUpSuccessOutputModel {
  public find(args?: {
    where?: SignUpSuccessOutputWhere;

    options?: SignUpSuccessOutputOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<SignUpSuccessOutput[]>;
  public create(args: {
    input: SignUpSuccessOutputCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateSignUpSuccessOutputsMutationResponse>;
  public update(args: {
    where?: SignUpSuccessOutputWhere;
    update?: SignUpSuccessOutputUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateSignUpSuccessOutputsMutationResponse>;
  public delete(args: {
    where?: SignUpSuccessOutputWhere;

    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: SignUpSuccessOutputWhere;

    aggregate: SignUpSuccessOutputAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<SignUpSuccessOutputAggregateSelection>;
}

export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface UserAggregateSelectionInput {
  count?: boolean;
  deletedAt?: FloatAggregateInputNullable;
  deletedBy?: FloatAggregateInputNullable;
  email?: StringAggregateInputNonNullable;
  id?: IdAggregateInputNonNullable;
  lastModifiedBy?: IdAggregateInputNullable;
  password?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  lastModifiedAt?: DateTimeAggregateInputNonNullable;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;
    connectOrCreate?: UserConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface UserOutputAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
}

export declare class UserOutputModel {
  public find(args?: {
    where?: UserOutputWhere;

    options?: UserOutputOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UserOutput[]>;
  public create(args: {
    input: UserOutputCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUserOutputsMutationResponse>;
  public update(args: {
    where?: UserOutputWhere;
    update?: UserOutputUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUserOutputsMutationResponse>;
  public delete(args: {
    where?: UserOutputWhere;

    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserOutputWhere;

    aggregate: UserOutputAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserOutputAggregateSelection>;
}

export interface ModelMap {
  LoginSuccessOutput: LoginSuccessOutputModel;
  Post: PostModel;
  PostOutput: PostOutputModel;
  SignUpSuccessOutput: SignUpSuccessOutputModel;
  User: UserModel;
  UserOutput: UserOutputModel;
}
