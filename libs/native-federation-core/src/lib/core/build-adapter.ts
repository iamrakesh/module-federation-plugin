import { logger } from '../utils/logger';
import { MappedPath } from '../utils/mapped-paths';

let _buildAdapter: BuildAdapter = async () => {
  // TODO: add logger
  logger.error('Please set a BuildAdapter!');
};

export type BuildKind = 'shared-package' | 'shared-mapping' | 'exposed';

export interface BuildAdapterOptions {
  entryPoint: string;
  tsConfigPath?: string;
  external: Array<string>;
  outfile: string;
  mappedPaths: MappedPath[];
  packageName?: string;
  esm?: boolean;
  dev?: boolean;
  watch?: boolean;
  kind: BuildKind;
}

export type BuildAdapter = (options: BuildAdapterOptions) => Promise<void>;

export function setBuildAdapter(buildAdapter: BuildAdapter): void {
  _buildAdapter = buildAdapter;
}

export function getBuildAdapter(): BuildAdapter {
  return _buildAdapter;
}
