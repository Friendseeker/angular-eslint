import all from './configs/all.json';
import base from './configs/base.json';
import processInlineTemplates from './configs/process-inline-templates.json';
import recommended from './configs/recommended.json';
import processors from './processors';
import accessibilityAltText, {
  RULE_NAME as accessibilityAltTextRuleName,
} from './rules/accessibility-alt-text';
import accessibilityElementsContent, {
  RULE_NAME as accessibilityElementsContentRuleName,
} from './rules/accessibility-elements-content';
import accessibilityInteractiveSupportsFocus, {
  RULE_NAME as accessibilityInteractiveSupportsFocusRuleName,
} from './rules/accessibility-interactive-supports-focus';
import accessibilityLabelFor, {
  RULE_NAME as accessibilityLabelForRuleName,
} from './rules/accessibility-label-for';
import accessibilityLabelHasAssociatedControl, {
  RULE_NAME as accessibilityLabelHasAssociatedControlRuleName,
} from './rules/accessibility-label-has-associated-control';
import accessibilityRoleHasRequiredAria, {
  RULE_NAME as accessibilityRoleHasRequiredAriaRuleName,
} from './rules/accessibility-role-has-required-aria';
import accessibilityTableScope, {
  RULE_NAME as accessibilityTableScopeRuleName,
} from './rules/accessibility-table-scope';
import accessibilityValidAria, {
  RULE_NAME as accessibilityValidAriaRuleName,
} from './rules/accessibility-valid-aria';
import attributesOrder, {
  RULE_NAME as attributesOrderRuleName,
} from './rules/attributes-order';
import bananaInBox, {
  RULE_NAME as bananaInBoxRuleName,
} from './rules/banana-in-box';
import buttonHasType, {
  RULE_NAME as buttonHasTypeRuleName,
} from './rules/button-has-type';
import clickEventsHaveKeyEvents, {
  RULE_NAME as clickEventsHaveKeyEventsRuleName,
} from './rules/click-events-have-key-events';
import conditionalComplexity, {
  RULE_NAME as conditionalComplexityRuleName,
} from './rules/conditional-complexity';
import cyclomaticComplexity, {
  RULE_NAME as cyclomaticComplexityRuleName,
} from './rules/cyclomatic-complexity';
import eqeqeq, { RULE_NAME as eqeqeqRuleName } from './rules/eqeqeq';
import i18n, { RULE_NAME as i18nRuleName } from './rules/i18n';
import mouseEventsHaveKeyEvents, {
  RULE_NAME as mouseEventsHaveKeyEventsRuleName,
} from './rules/mouse-events-have-key-events';
import noAny, { RULE_NAME as noAnyRuleName } from './rules/no-any';
import noAutofocus, {
  RULE_NAME as noAutofocusRuleName,
} from './rules/no-autofocus';
import noCallExpression, {
  RULE_NAME as noCallExpressionRuleName,
} from './rules/no-call-expression';
import noDistractingElements, {
  RULE_NAME as noDistractingElementsRuleName,
} from './rules/no-distracting-elements';
import noDuplicateAttributes, {
  RULE_NAME as noDuplicateAttributesRuleName,
} from './rules/no-duplicate-attributes';
import noInlineStyles, {
  RULE_NAME as noInlineStylesRuleName,
} from './rules/no-inline-styles';
import noNegatedAsync, {
  RULE_NAME as noNegatedAsyncRuleName,
} from './rules/no-negated-async';
import noPositiveTabindex, {
  RULE_NAME as noPositiveTabindexRuleName,
} from './rules/no-positive-tabindex';
import useTrackByFunction, {
  RULE_NAME as useTrackByFunctionRuleName,
} from './rules/use-track-by-function';
import noInterpolationInAttributes, {
  RULE_NAME as noInterpolationInAttributesRuleName,
} from './rules/no-interpolation-in-attributes';

export default {
  configs: {
    all,
    base,
    recommended,
    'process-inline-templates': processInlineTemplates,
  },
  processors,
  rules: {
    [accessibilityAltTextRuleName]: accessibilityAltText,
    [accessibilityElementsContentRuleName]: accessibilityElementsContent,
    [accessibilityInteractiveSupportsFocusRuleName]:
      accessibilityInteractiveSupportsFocus,
    [accessibilityLabelForRuleName]: accessibilityLabelFor,
    [accessibilityLabelHasAssociatedControlRuleName]:
      accessibilityLabelHasAssociatedControl,
    [accessibilityRoleHasRequiredAriaRuleName]:
      accessibilityRoleHasRequiredAria,
    [accessibilityTableScopeRuleName]: accessibilityTableScope,
    [accessibilityValidAriaRuleName]: accessibilityValidAria,
    [attributesOrderRuleName]: attributesOrder,
    [bananaInBoxRuleName]: bananaInBox,
    [buttonHasTypeRuleName]: buttonHasType,
    [conditionalComplexityRuleName]: conditionalComplexity,
    [clickEventsHaveKeyEventsRuleName]: clickEventsHaveKeyEvents,
    [cyclomaticComplexityRuleName]: cyclomaticComplexity,
    [eqeqeqRuleName]: eqeqeq,
    [i18nRuleName]: i18n,
    [mouseEventsHaveKeyEventsRuleName]: mouseEventsHaveKeyEvents,
    [noAnyRuleName]: noAny,
    [noAutofocusRuleName]: noAutofocus,
    [noCallExpressionRuleName]: noCallExpression,
    [noDistractingElementsRuleName]: noDistractingElements,
    [noDuplicateAttributesRuleName]: noDuplicateAttributes,
    [noInlineStylesRuleName]: noInlineStyles,
    [noNegatedAsyncRuleName]: noNegatedAsync,
    [noPositiveTabindexRuleName]: noPositiveTabindex,
    [useTrackByFunctionRuleName]: useTrackByFunction,
    [noInterpolationInAttributesRuleName]: noInterpolationInAttributes,
  },
};
