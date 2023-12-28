import { getFeatureFlags } from '../../utils/configuration';
import AgentConfig from './types/ServiceConfiguration';

const { enabled = false } = (getFeatureFlags()?.features?.agent as AgentConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};
