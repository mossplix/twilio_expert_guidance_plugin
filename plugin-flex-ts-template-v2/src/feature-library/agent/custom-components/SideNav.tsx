import * as Flex from '@twilio/flex-ui';

import { FlexComponent } from '../../../types/feature-loader';

export const componentName = FlexComponent.SideNav;
export const componentHook = function addAgentTeamsView(flex: typeof Flex, manager: Flex.Manager) {
  // Pull back the user roles disable this component if it exists
  const myWorkerRoles = manager.store.getState().flex?.worker?.worker?.attributes?.roles;
  // Update the role names if you wish to inlude this feature for more role types
  if ((myWorkerRoles.includes('supervisor') || myWorkerRoles.includes('admin')) && myWorkerRoles.includes('agent')) {
    // Since we are a "super agent" and want a restricted view.  Removing the default Queues Stats
    flex.SideNav.Content.remove('queues-stats');

    // Also we want to alter the Teams View so the "super agent" cannot change agent status IE by removing worker-canvas
    // and they cannot monitor calls via task-canvas
    flex.TeamsView.Content.remove('worker-canvas');
    flex.TeamsView.Content.remove('task-canvas');
    // Remove this if you want Agents to be able to change the schdule
    flex.SideNav.Content.remove('schedule-manager-side-nav');
  }
};
