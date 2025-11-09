export type ControllerMapping = {
  a_button: string;
  b_button: string;
  x_button: string;
  y_button: string;
  dpad_up: string;
  dpad_down: string;
  dpad_left: string;
  dpad_right: string;
  left_bumper: string;
  right_bumper: string;
  left_trigger: string;
  right_trigger: string;
  left_stick_x: string;
  left_stick_y: string;
  left_stick_press: string;
  right_stick_x: string;
  right_stick_y: string;
  right_stick_press: string;
  view_button: string;
  menu_button: string;
};

export type MappingKey = keyof ControllerMapping;

export const initialMappings: ControllerMapping = {
  a_button: '',
  b_button: '',
  x_button: '',
  y_button: '',
  dpad_up: '',
  dpad_down: '',
  dpad_left: '',
  dpad_right: '',
  left_bumper: '',
  right_bumper: '',
  left_trigger: '',
  right_trigger: '',
  left_stick_x: '',
  left_stick_y: '',
  left_stick_press: '',
  right_stick_x: '',
  right_stick_y: '',
  right_stick_press: '',
  view_button: '',
  menu_button: '',
};
