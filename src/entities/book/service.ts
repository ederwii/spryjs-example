import { BaseService, IService, IPatchOperation } from "@codiks/spryjs";
import Book from "./";
import { Schema } from "mongoose";
import spryjs from "@codiks/spryjs";

const schema = new Schema(Book);
const model = spryjs.createModel('Book', schema);

export default class BookService implements IService {
  constructor(private service: BaseService = new BaseService(model, 'Book')) {
  }
  Get(): Promise<any[]> {
    return this.service.Get();
  }
  GetById(id: string): Promise<any> {
    return this.service.GetById(id);
  }
  Create(payload: Partial<any>): Promise<any> {
    payload.name = `${payload.name} - visit mybook.com`;
    return this.service.Create(payload);
  }
  Delete(id: string): Promise<boolean> {
    return this.service.Delete(id);
  }
  Patch(operations: IPatchOperation[], id: string): Promise<any> {
    return this.service.Patch(operations, id);
  }
  GetByKeyword(keyword: any): Promise<any[]> {
    return this.service.GetByKeyword(keyword);
  }
  GetByKeywordMatch(keyword: any): Promise<any[]> {
    return this.service.GetByKeywordMatch(keyword);
  }
  GetByQuery(params: any, fields: string, options: any): Promise<any[]> {
    return this.service.GetByQuery(params, fields, options);
  }
  GetCount(): Promise<Number> {
    return this.service.GetCount();
  }
  Update(id: string, payload: Partial<any>): Promise<any> {
    return this.service.Update(id, payload);
  }
  
}
