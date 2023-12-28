import * as Flex from '@twilio/flex-ui';

import { FlexComponent } from '../../../types/feature-loader';

export const componentName = FlexComponent.ViewCollection;
export const componentHook = function addAgentTeamsView(flex: typeof Flex, manager: Flex.Manager) {
  // Pull back the user roles disable this component if it exists
  const myWorkerRoles = manager.store.getState().flex?.worker?.worker?.attributes?.roles;
  // Update the role names if you wish to inlude this feature for more role types
  if ((myWorkerRoles.includes('supervisor') || myWorkerRoles.includes('admin')) && myWorkerRoles.includes('agent')) {
    // Since we are a "super agent" and want a restricted view.  Removing the default Teams and Queue Stats Views
    flex.ViewCollection.Content.remove('queue-stats');
    flex.ViewCollection.Content.remove('schedule-manager');
  }
};
