import { body } from 'express-validator';

const updateUserNotificationSettings = [
  // Body
  body('enableEmailNotification').isBoolean(),
  body('enableOrderNotification').isBoolean(),
  body('enableGeneralNotification').isBoolean(),
];

export const notificationSettingsValidator = {
  updateUserNotificationSettings,
};
