export interface RuleOptions {
  required: boolean
  min: string
}

export type Rule = string | RuleOptions
