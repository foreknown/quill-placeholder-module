import {Placeholder} from './placeholder'

export interface ModuleOptions {
  placeholders: Placeholder[];
  delimiters?: string[];
  className?: string;
  spaceAfterInsert?: boolean;
  debug?: string;
}
