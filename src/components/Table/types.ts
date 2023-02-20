import { FC, PropsWithChildren } from "react";

export enum TableActionTypes {
  default = "default",
  edit = "edit",
}

export interface ITableHead {
  id: string;
  title: string;
}

export interface ITableBody<T> {
  getRowStructure: (row: T, index: number) => React.ReactNode;
}

export interface IContextValue<T> {
  data: T[];
  headers: ITableHead[];
}

export interface ITableProps<ObjectType> {
  data: ObjectType[] | [];
  headers: ITableHead[];
}

export interface ContentComposition<T> {
  Row?: FC<PropsWithChildren>;
  Cell?: FC<PropsWithChildren>;
  Body?: FC<ITableBody<T>>;
  Head?: FC<ITableHead>;
}
