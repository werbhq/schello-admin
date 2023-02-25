import {
  CreateParams,
  CreateResult,
  DataProvider,
  DeleteManyParams,
  DeleteParams,
  DeleteResult,
  GetListResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
  DeleteManyResult,
  GetListParams,
} from "react-admin";

export interface DataProviderCustom extends DataProvider {
  resource: string;
  create?: (resource: string, params: CreateParams) => Promise<CreateResult>;
  delete?: (resource: string, params: DeleteParams) => Promise<DeleteResult>;
  deleteMany?: (
    resource: string,
    params: DeleteManyParams
  ) => Promise<DeleteManyResult>;
  getList?: (resource: string, params: GetListParams) => Promise<GetListResult>;
  getOne?: (resource: string, params: GetOneParams) => Promise<GetOneResult>;
  getMany?: (resource: string, params: GetManyParams) => Promise<GetManyResult>;
  getManyReference?: (
    resource: string,
    params: GetManyReferenceParams
  ) => Promise<GetManyReferenceResult>;
  update?: (resource: string, params: UpdateParams) => Promise<UpdateResult>;
  updateMany?: (
    resource: string,
    params: UpdateManyParams
  ) => Promise<UpdateManyResult>;
}
