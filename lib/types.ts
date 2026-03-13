export type Student = {
  student_id: string;
  display_name: string;
  grade: string;
  subject: string;
  target_band: string;
  current_stage: string;
  main_focus_1: string;
  main_focus_2: string;
  main_focus_3: string;
  status_note: string;
  updated_at: string;
};

export type MetricSnapshot = {
  snapshot_id: string;
  student_id: string;
  date: string;
  metric_name: string;
  metric_value_text: string;
  trend: string;
  current_status: string;
  recent_change: string;
  next_focus: string;
};

export type FixLog = {
  fix_id: string;
  student_id: string;
  date: string;
  module: string;
  problem_found: string;
  error_logic: string;
  repair_action: string;
  same_type_check: string;
  result_note: string;
  next_recheck_date: string;
};

export type CompareCase = {
  case_id: string;
  student_id: string;
  date: string;
  module: string;
  before_problem: string;
  before_reason: string;
  after_method: string;
  after_change: string;
  show_in_live: boolean;
};
