interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Insurance Provider'],
  tenantName: 'Organization',
  applicationName: 'Doctor Appointment System v4',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View organization, doctors, services, and insurance plans details.',
    'Book an appointment with a doctor.',
    'Update appointment details.',
    'Cancel appointment.',
  ],
  ownerAbilities: [
    'Manage organizations.',
    'Invite Healthcare Providers, Medical Staff, and Insurance Providers to join the organization.',
    'Manage doctors in the organization.',
    'Manage services provided by the organization.',
    'Manage insurance plans in the organization.',
    'View the details of the organization, doctors, services, and insurance plans.',
    'Manage appointments.',
  ],
};
