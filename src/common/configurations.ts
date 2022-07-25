import { readFileSync, existsSync } from 'fs';
import * as yaml from 'js-yaml';

export function loadYAMLFile(...files: string[]) {
  files.forEach((file) => {
    if (existsSync(file)) {
      const configs = yaml.load(readFileSync(file, 'utf8'));

      process.env = Object.assign({}, process.env, configs);
    }
  });
}
