import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

export function loadYAMLFile() {
  const YAML_SHARED_FILE = 'configs/shared.yml';
  const YAML_CONFIG_FILE = 'configs/env.yml';

  const shared = yaml.load(readFileSync(YAML_SHARED_FILE, 'utf8'));
  const configs = yaml.load(readFileSync(YAML_CONFIG_FILE, 'utf8'));

  Object.assign(process.env, shared, configs);
}

export default () => {
  return {};
};
