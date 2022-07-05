import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

export function loadYAMLFile() {
  const YAML_CONFIG_FILE = 'configs/env.yml';
  const data = yaml.load(readFileSync(YAML_CONFIG_FILE, 'utf8'));

  Object.assign(process.env, data);
}

export default () => {
  return {};
};
