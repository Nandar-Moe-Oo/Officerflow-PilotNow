/* @ds-bundle: {"format":3,"namespace":"TaskimooDesignSystem_da633e","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"DualStatus","sourcePath":"components/data/DualStatus.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Breadcrumb","sourcePath":"components/nav/Breadcrumb.jsx"},{"name":"SegmentedControl","sourcePath":"components/nav/SegmentedControl.jsx"},{"name":"Tabs","sourcePath":"components/nav/Tabs.jsx"},{"name":"KPIStrip","sourcePath":"components/surfaces/KPIStrip.jsx"},{"name":"SectionCard","sourcePath":"components/surfaces/SectionCard.jsx"},{"name":"TaskCard","sourcePath":"components/work/TaskCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"650b9a1b4b07","components/core/Button.jsx":"fd76b2696cdb","components/core/Chip.jsx":"e263ef070ee5","components/core/Pill.jsx":"7dadb2c2be5c","components/data/DataTable.jsx":"dd43c1702702","components/data/DualStatus.jsx":"ad9f225de0d8","components/data/ProgressBar.jsx":"ee8cbd008832","components/feedback/Banner.jsx":"6b64baa17153","components/feedback/EmptyState.jsx":"44f24fbddc83","components/feedback/Modal.jsx":"a68ee880584e","components/feedback/Toast.jsx":"c67396049f8d","components/forms/Checkbox.jsx":"c310c853a88c","components/forms/Input.jsx":"758e3fe0e239","components/forms/Select.jsx":"37c7983022d3","components/forms/Textarea.jsx":"e71624580290","components/forms/Toggle.jsx":"13d3db216fe8","components/nav/Breadcrumb.jsx":"2872893490f9","components/nav/SegmentedControl.jsx":"ebd585baa5ef","components/nav/Tabs.jsx":"51a3b6dec136","components/surfaces/KPIStrip.jsx":"0f4bd02bf07f","components/surfaces/SectionCard.jsx":"72a8e5b30601","components/work/TaskCard.jsx":"61ecbe531b3e","ui_kits/taskimoo-web/icons.jsx":"57872d1ca5f6","ui_kits/taskimoo-web/login.jsx":"233d90555c21","ui_kits/taskimoo-web/screen_dashboard.jsx":"5d1bd015b966","ui_kits/taskimoo-web/screen_delivery.jsx":"7b977003c091","ui_kits/taskimoo-web/screen_finance.jsx":"40c63cd602b6","ui_kits/taskimoo-web/shell.jsx":"e719b2b3c3e3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TaskimooDesignSystem_da633e = window.TaskimooDesignSystem_da633e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
'use client';

/**
 * Avatar — initials chip. Derives initials from `name` if `initials` not
 * given. `ai` renders the agent star marker (ink bg, red star); `tone`
 * supports the red / dark presets.
 */
function Avatar({
  initials,
  name,
  ai,
  size = 'md',
  tone
}) {
  const cls = `tk-avatar${size === 'sm' ? ' tk-avatar--sm' : ''}${ai ? ' tk-avatar--ai' : ''}`;
  const toneStyle = tone === 'red' ? {
    background: '#FFDEDB',
    color: '#B31D15'
  } : tone === 'dark' ? {
    background: '#262626',
    color: '#fff'
  } : undefined;
  if (ai) return /*#__PURE__*/React.createElement("span", {
    className: cls,
    title: name
  }, /*#__PURE__*/React.createElement(Style, null));
  const inits = initials || (name ? name.split(' ').map(p => p[0]).slice(0, 2).join('') : '?');
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: toneStyle,
    title: name
  }, inits, /*#__PURE__*/React.createElement(Style, null));
}
function Style() {
  return /*#__PURE__*/React.createElement("style", null, `
      .tk-avatar {
        width: 24px; height: 24px; border-radius: 50%;
        border: 1px solid var(--border-1);
        display: inline-flex; align-items: center; justify-content: center;
        font-size: 10px; font-weight: 600; flex-shrink: 0;
        background: var(--bg-2); color: var(--fg-1);
      }
      .tk-avatar--sm { width: 20px; height: 20px; font-size: 9px; }
      .tk-avatar--ai { background: var(--fg-0); color: var(--red-500); border-color: var(--fg-0); }
      .tk-avatar--ai::before { content: '★'; font-size: 12px; }
    `);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
'use client';

/**
 * Taskimoo primary action button. Variants follow the editorial system:
 * ink-filled `primary`, functional `red`, hairline `secondary`, and
 * quiet `ghost`. Icons are passed as nodes (use a Lucide SVG).
 */
function Button({
  children,
  variant = 'secondary',
  size = 'md',
  icon,
  iconRight,
  disabled,
  type = 'button',
  onClick,
  title
}) {
  const iconOnly = !children && (icon || iconRight);
  const cls = `tk-btn tk-btn--${variant}${iconOnly ? ' tk-btn--icon' : ''} tk-btn--${size}`;
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    type: type,
    disabled: disabled,
    onClick: onClick,
    title: title
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "tk-btn__i"
  }, icon) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "tk-btn__i"
  }, iconRight) : null, /*#__PURE__*/React.createElement("style", null, `
        .tk-btn {
          display: inline-flex; align-items: center; gap: 6px;
          border-radius: var(--radius-sm);
          font-family: var(--font-sans); font-weight: 500;
          border: 1px solid transparent; cursor: pointer;
          background: transparent; color: var(--fg-0);
          transition: all var(--dur-fast) var(--ease-out);
          line-height: 1; white-space: nowrap;
        }
        .tk-btn--sm { padding: 5px 8px; font-size: 11px; }
        .tk-btn--md { padding: 6px 10px; font-size: 12px; }
        .tk-btn--icon { padding: 6px; }
        .tk-btn--sm.tk-btn--icon { padding: 5px; }
        .tk-btn__i { display: inline-flex; }
        .tk-btn__i svg { width: 14px; height: 14px; display: block; }
        .tk-btn--sm .tk-btn__i svg { width: 12px; height: 12px; }
        .tk-btn--primary { background: var(--fg-0); color: var(--bg-0); }
        .tk-btn--primary:hover:not(:disabled) { opacity: 0.9; }
        .tk-btn--red { background: var(--red-500); color: #fff; }
        .tk-btn--red:hover:not(:disabled) { background: var(--red-600); }
        .tk-btn--secondary { background: var(--bg-0); color: var(--fg-0); border-color: var(--border-1); }
        .tk-btn--secondary:hover:not(:disabled) { background: var(--bg-2); }
        .tk-btn--ghost:hover:not(:disabled) { background: var(--bg-2); }
        .tk-btn:disabled { opacity: 0.45; cursor: not-allowed; }
      `));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
'use client';

/**
 * Chip — a rounded (pill-radius) tag, slightly larger than Pill. Used for
 * filters, metadata tags and the AI/beta markers. `red` tints it; `mono`
 * sets Geist Mono.
 */
function Chip({
  children,
  dot,
  red,
  mono
}) {
  const cls = `tk-chip${red ? ' tk-chip--red' : ''}${mono ? ' tk-chip--mono' : ''}`;
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, dot ? /*#__PURE__*/React.createElement("span", {
    className: "tk-chip__dot",
    style: {
      background: dot
    }
  }) : null, children, /*#__PURE__*/React.createElement("style", null, `
        .tk-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 3px 8px; border-radius: var(--radius-pill);
          font-size: 11px; font-weight: 500; line-height: 1;
          border: 1px solid var(--border-0); background: var(--bg-1); color: var(--fg-1);
        }
        .tk-chip--mono { font-family: var(--font-mono); font-size: 10px; }
        .tk-chip--red { background: var(--red-50); color: var(--red-700); border-color: var(--red-100); }
        .tk-chip__dot { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }
      `));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
'use client';

/**
 * Status pill — Taskimoo's smallest status marker. Tones map to semantic
 * colors; an optional leading dot carries an arbitrary status color.
 */
function Pill({
  children,
  tone,
  dot,
  mono
}) {
  const cls = `tk-pill${tone ? ` tk-pill--${tone}` : ''}${mono ? ' tk-pill--mono' : ''}`;
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, dot ? /*#__PURE__*/React.createElement("span", {
    className: "tk-pill__dot",
    style: {
      background: dot
    }
  }) : null, children, /*#__PURE__*/React.createElement("style", null, `
        .tk-pill {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 2px 6px; border-radius: var(--radius-xs);
          font-size: 10.5px; font-weight: 500; line-height: 1.4;
          font-family: var(--font-sans);
          border: 1px solid var(--border-0); background: var(--bg-1); color: var(--fg-1);
        }
        .tk-pill--mono { font-family: var(--font-mono); }
        .tk-pill__dot { width: 5px; height: 5px; border-radius: 50%; display: inline-block; }
        .tk-pill--red   { background: var(--red-50); color: var(--red-700); border-color: var(--red-100); }
        .tk-pill--green { background: var(--success-bg); color: var(--success); border-color: rgba(10,122,59,0.18); }
        .tk-pill--amber { background: var(--warning-bg); color: var(--warning); border-color: rgba(138,90,0,0.18); }
        .tk-pill--blue  { background: var(--info-bg); color: var(--info); border-color: rgba(31,79,163,0.18); }
      `));
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
'use client';

/**
 * DataTable — the dense editorial table used for finance, work lists and
 * portfolios. Mono uppercase headers, hairline row rules, hover highlight.
 * Columns declare alignment, mono/strong rendering, width, and an optional
 * cell `render`. Rows clickable via `onRowClick`; `selectedKey` adds the
 * red left rail.
 */
function DataTable({
  columns = [],
  rows = [],
  rowKey = 'id',
  onRowClick,
  selectedKey,
  empty
}) {
  const keyOf = (row, i) => typeof rowKey === 'function' ? rowKey(row, i) : row[rowKey] ?? i;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-tbl-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tk-tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      width: c.width
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 ? /*#__PURE__*/React.createElement("tr", {
    className: "tk-tbl__emptyrow"
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length
  }, empty ?? 'Nothing here yet.')) : rows.map((row, ri) => {
    const k = keyOf(row, ri);
    const sel = selectedKey != null && k === selectedKey;
    return /*#__PURE__*/React.createElement("tr", {
      key: k,
      className: `${onRowClick ? 'tk-tbl__row--click' : ''}${sel ? ' tk-tbl__row--sel' : ''}`,
      onClick: onRowClick ? () => onRowClick(row, ri) : undefined
    }, columns.map(c => {
      const content = c.render ? c.render(row[c.key], row, ri) : row[c.key];
      const cls = `${c.mono ? 'tk-tbl__mono' : ''}${c.strong ? ' tk-tbl__strong' : ''}`.trim();
      return /*#__PURE__*/React.createElement("td", {
        key: c.key,
        className: cls,
        style: {
          textAlign: c.align || 'left'
        }
      }, content);
    }));
  }))), /*#__PURE__*/React.createElement("style", null, `
        .tk-tbl-wrap { border: 1px solid var(--border-0); border-radius: var(--radius-md); overflow: hidden; background: var(--bg-0); }
        .tk-tbl { width: 100%; border-collapse: collapse; font-size: 12.5px; color: var(--fg-0); }
        .tk-tbl thead th { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-3); font-weight: 500; text-align: left; padding: 8px 12px; background: var(--bg-1); border-bottom: 1px solid var(--border-0); white-space: nowrap; }
        .tk-tbl tbody td { padding: 8px 12px; border-bottom: 1px solid var(--border-0); vertical-align: middle; }
        .tk-tbl tbody tr:last-child td { border-bottom: none; }
        .tk-tbl__row--click { cursor: pointer; transition: background var(--dur-fast) var(--ease-out); }
        .tk-tbl__row--click:hover { background: var(--bg-1); }
        .tk-tbl__row--sel td:first-child { box-shadow: inset 2px 0 0 var(--red-500); }
        .tk-tbl__mono { font-family: var(--font-mono); font-size: 11px; color: var(--fg-2); font-variant-numeric: tabular-nums; }
        .tk-tbl__strong { font-weight: 600; color: var(--fg-0); }
        .tk-tbl__emptyrow td { padding: 28px 12px; text-align: center; color: var(--fg-3); font-size: 12px; }
      `));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/DualStatus.jsx
try { (() => {
'use client';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DualStatus — Taskimoo's signature component. Renders the two parallel
 * truths a project carries side by side: COMMERCIAL (idea → … → paid →
 * closed) and DELIVERY (draft → … → released → closed) as stepped
 * pipelines. Each track shows a mono kicker, a segmented stepper filled to
 * the current stage, and the current stage name. A track marked
 * `tone="risk"` turns its current segment + label functional red.
 *
 * `compact` collapses each track to a single label + current-stage pill
 * for dense rows and tables.
 */
function Track({
  kicker,
  stages = [],
  current = 0,
  tone = 'normal',
  compact
}) {
  const cur = Math.max(0, Math.min(current, stages.length - 1));
  const risk = tone === 'risk';
  const label = stages[cur];
  if (compact) {
    return /*#__PURE__*/React.createElement("div", {
      className: "tk-ds__ctrack"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tk-ds__kicker"
    }, kicker), /*#__PURE__*/React.createElement("span", {
      className: `tk-ds__pill${risk ? ' tk-ds__pill--risk' : ''}`
    }, risk ? /*#__PURE__*/React.createElement("span", {
      className: "tk-ds__pdot"
    }) : null, label));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-ds__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-ds__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: `tk-ds__kicker${risk ? ' tk-ds__kicker--risk' : ''}`
  }, kicker), /*#__PURE__*/React.createElement("span", {
    className: "tk-ds__stage"
  }, label, /*#__PURE__*/React.createElement("span", {
    className: "tk-ds__count"
  }, cur + 1, "/", stages.length))), /*#__PURE__*/React.createElement("div", {
    className: "tk-ds__steps",
    role: "img",
    "aria-label": `${kicker}: ${label}, step ${cur + 1} of ${stages.length}`
  }, stages.map((s, i) => {
    const state = i < cur ? 'done' : i === cur ? 'cur' : 'future';
    const cls = `tk-ds__seg tk-ds__seg--${state}${state === 'cur' && risk ? ' tk-ds__seg--risk' : ''}`;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: cls,
      title: s
    });
  })));
}
function DualStatus({
  commercial,
  delivery,
  compact = false,
  bordered = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `tk-ds${compact ? ' tk-ds--compact' : ''}${bordered ? ' tk-ds--bordered' : ''}`
  }, commercial ? /*#__PURE__*/React.createElement(Track, _extends({
    kicker: "Commercial",
    compact: compact
  }, commercial)) : null, delivery ? /*#__PURE__*/React.createElement(Track, _extends({
    kicker: "Delivery",
    compact: compact
  }, delivery)) : null, /*#__PURE__*/React.createElement("style", null, `
        .tk-ds { display: flex; flex-direction: column; gap: 12px; }
        .tk-ds--bordered { background: var(--bg-0); border: 1px solid var(--border-0); border-radius: var(--radius-md); padding: 14px; }
        .tk-ds--compact { gap: 6px; }
        .tk-ds--compact.tk-ds--bordered { padding: 10px 12px; }

        .tk-ds__track { display: flex; flex-direction: column; gap: 7px; }
        .tk-ds__row { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; }
        .tk-ds__kicker { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--fg-3); font-weight: 500; }
        .tk-ds__kicker--risk { color: var(--red-600); }
        .tk-ds__stage { display: inline-flex; align-items: baseline; gap: 8px; font-size: 13px; font-weight: 600; color: var(--fg-0); white-space: nowrap; }
        .tk-ds__count { font-family: var(--font-mono); font-size: 10px; font-weight: 400; color: var(--fg-3); }

        .tk-ds__steps { display: flex; gap: 3px; }
        .tk-ds__seg { flex: 1; height: 4px; border-radius: 999px; background: var(--bg-3); transition: background var(--dur-med) var(--ease-out); }
        .tk-ds__seg--done { background: var(--fg-1); }
        .tk-ds__seg--cur { background: var(--fg-0); }
        .tk-ds__seg--risk { background: var(--red-500); }

        /* compact */
        .tk-ds__ctrack { display: flex; align-items: center; gap: 8px; }
        .tk-ds__kicker, .tk-ds__ctrack .tk-ds__kicker { min-width: 74px; }
        .tk-ds__pill { display: inline-flex; align-items: center; gap: 5px; padding: 2px 7px; border-radius: var(--radius-xs); font-size: 11px; font-weight: 500; background: var(--bg-2); color: var(--fg-1); border: 1px solid var(--border-0); }
        .tk-ds__pill--risk { background: var(--red-50); color: var(--red-700); border-color: var(--red-100); }
        .tk-ds__pdot { width: 5px; height: 5px; border-radius: 50%; background: var(--red-500); }
      `));
}
Object.assign(__ds_scope, { DualStatus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DualStatus.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
'use client';

/**
 * ProgressBar — a thin determinate bar for milestone / completion counts
 * ("5 of 8 milestones done"). Ink fill by default; `tone` switches to a
 * semantic color. Optional label row with a mono count on the right.
 */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = false,
  valueText,
  tone = 'ink',
  size = 'md'
}) {
  const pct = max > 0 ? Math.max(0, Math.min(100, value / max * 100)) : 0;
  const auto = `${value} / ${max}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-prog"
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "tk-prog__head"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "tk-prog__label"
  }, label) : /*#__PURE__*/React.createElement("span", null), showValue ? /*#__PURE__*/React.createElement("span", {
    className: "tk-prog__val"
  }, valueText ?? auto) : null), /*#__PURE__*/React.createElement("div", {
    className: `tk-prog__track tk-prog__track--${size}`,
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max
  }, /*#__PURE__*/React.createElement("div", {
    className: `tk-prog__fill tk-prog__fill--${tone}`,
    style: {
      width: `${pct}%`
    }
  })), /*#__PURE__*/React.createElement("style", null, `
        .tk-prog { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
        .tk-prog__head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; }
        .tk-prog__label { font-size: 12px; color: var(--fg-1); font-weight: 500; }
        .tk-prog__val { font-family: var(--font-mono); font-size: 10.5px; color: var(--fg-3); font-variant-numeric: tabular-nums; white-space: nowrap; }
        .tk-prog__track { width: 100%; background: var(--bg-3); border-radius: 999px; overflow: hidden; }
        .tk-prog__track--sm { height: 4px; }
        .tk-prog__track--md { height: 6px; }
        .tk-prog__fill { height: 100%; border-radius: 999px; transition: width var(--dur-med) var(--ease-out); }
        .tk-prog__fill--ink { background: var(--fg-0); }
        .tk-prog__fill--red { background: var(--red-500); }
        .tk-prog__fill--green { background: var(--success); }
        .tk-prog__fill--amber { background: var(--warning); }
        .tk-prog__fill--blue { background: var(--info); }
      `));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
'use client';

/**
 * Banner / callout — an inline message strip. Tones map to the semantic
 * palette (`info`, `success`, `warning`, `danger`) plus `ai` for the
 * red-shifted agent surface. Left accent rule, optional icon, title +
 * body, optional right-aligned actions and a dismiss button.
 */
function Banner({
  tone = 'info',
  title,
  children,
  icon,
  actions,
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `tk-banner tk-banner--${tone}`,
    role: "status"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "tk-banner__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    className: "tk-banner__body"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "tk-banner__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "tk-banner__text"
  }, children) : null, actions ? /*#__PURE__*/React.createElement("div", {
    className: "tk-banner__actions"
  }, actions) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    className: "tk-banner__x",
    onClick: onDismiss,
    "aria-label": "Dismiss"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))) : null, /*#__PURE__*/React.createElement("style", null, `
        .tk-banner { display: flex; align-items: flex-start; gap: 10px; padding: 11px 12px; border: 1px solid var(--border-0); border-left-width: 2px; border-radius: var(--radius-sm); background: var(--bg-1); color: var(--fg-1); }
        .tk-banner__icon { display: inline-flex; flex-shrink: 0; margin-top: 1px; }
        .tk-banner__icon svg { width: 15px; height: 15px; display: block; }
        .tk-banner__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
        .tk-banner__title { font-size: 12.5px; font-weight: 600; color: var(--fg-0); }
        .tk-banner__text { font-size: 12px; line-height: 1.45; color: var(--fg-1); }
        .tk-banner__actions { display: flex; gap: 6px; margin-top: 6px; }
        .tk-banner__x { flex-shrink: 0; display: inline-flex; padding: 2px; border: 0; background: transparent; color: var(--fg-3); cursor: pointer; border-radius: 3px; opacity: 0.8; transition: opacity var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out); }
        .tk-banner__x:hover { opacity: 1; background: var(--bg-2); color: var(--fg-0); }
        .tk-banner__x svg { width: 14px; height: 14px; display: block; }

        .tk-banner--info { background: var(--info-bg); border-color: color-mix(in srgb, var(--info) 22%, transparent); border-left-color: var(--info); }
        .tk-banner--info .tk-banner__icon { color: var(--info); }
        .tk-banner--success { background: var(--success-bg); border-color: color-mix(in srgb, var(--success) 22%, transparent); border-left-color: var(--success); }
        .tk-banner--success .tk-banner__icon { color: var(--success); }
        .tk-banner--warning { background: var(--warning-bg); border-color: color-mix(in srgb, var(--warning) 22%, transparent); border-left-color: var(--warning); }
        .tk-banner--warning .tk-banner__icon { color: var(--warning); }
        .tk-banner--danger { background: var(--danger-bg); border-color: var(--red-100); border-left-color: var(--red-500); }
        .tk-banner--danger .tk-banner__icon { color: var(--red-600); }
        .tk-banner--ai { background: var(--ai-tint); border-color: var(--ai-border); border-left-color: var(--ai-fg); }
        .tk-banner--ai .tk-banner__icon { color: var(--ai-fg); }
        .tk-banner--ai .tk-banner__title { color: var(--ai-fg); }
      `));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
'use client';

/**
 * Empty state — the dashed-border placeholder for empty lists, boards and
 * search results. Optional icon, title, description, and an action.
 */
function EmptyState({
  icon,
  title,
  description,
  action,
  compact = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `tk-empty${compact ? ' tk-empty--compact' : ''}`
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "tk-empty__icon"
  }, icon) : null, title ? /*#__PURE__*/React.createElement("div", {
    className: "tk-empty__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    className: "tk-empty__desc"
  }, description) : null, action ? /*#__PURE__*/React.createElement("div", {
    className: "tk-empty__action"
  }, action) : null, /*#__PURE__*/React.createElement("style", null, `
        .tk-empty { display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; padding: 40px 24px; border: 1px dashed var(--border-1); border-radius: var(--radius-md); color: var(--fg-2); background: var(--bg-0); }
        .tk-empty--compact { padding: 24px 16px; }
        .tk-empty__icon { display: inline-flex; color: var(--fg-3); margin-bottom: 2px; }
        .tk-empty__icon svg { width: 22px; height: 22px; display: block; }
        .tk-empty--compact .tk-empty__icon svg { width: 18px; height: 18px; }
        .tk-empty__title { font-size: 13.5px; font-weight: 600; color: var(--fg-0); }
        .tk-empty__desc { font-size: 12px; line-height: 1.45; color: var(--fg-2); max-width: 36ch; }
        .tk-empty__action { margin-top: 6px; }
      `));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
'use client';

/**
 * Modal — a centered dialog over a 30%-black backdrop. Header (title +
 * mono eyebrow + close), a body, and an optional right-aligned footer for
 * actions. Closes on backdrop click and Escape. Render conditionally on
 * `open`. `size` controls max-width.
 */
function Modal({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  size = 'md'
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-modal__backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: `tk-modal tk-modal--${size}`,
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-modal__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-modal__titles"
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "tk-modal__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "tk-modal__title"
  }, title) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "tk-modal__x",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))) : null), /*#__PURE__*/React.createElement("div", {
    className: "tk-modal__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "tk-modal__foot"
  }, footer) : null), /*#__PURE__*/React.createElement("style", null, `
        .tk-modal__backdrop { position: fixed; inset: 0; z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; background: color-mix(in srgb, #000 30%, transparent); animation: tk-modal-fade var(--dur-med) var(--ease-out); }
        .tk-modal { width: 100%; max-height: calc(100vh - 48px); display: flex; flex-direction: column; background: var(--bg-0); border: 1px solid var(--border-1); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); overflow: hidden; animation: tk-modal-pop var(--dur-med) var(--ease-out); }
        .tk-modal--sm { max-width: 380px; }
        .tk-modal--md { max-width: 520px; }
        .tk-modal--lg { max-width: 720px; }
        .tk-modal__head { display: flex; align-items: flex-start; gap: 12px; padding: 16px 18px; border-bottom: 1px solid var(--border-0); }
        .tk-modal__titles { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
        .tk-modal__eyebrow { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--fg-3); }
        .tk-modal__title { margin: 0; font-size: 17px; font-weight: 700; letter-spacing: -0.015em; color: var(--fg-0); }
        .tk-modal__x { flex-shrink: 0; display: inline-flex; padding: 4px; border: 0; background: transparent; color: var(--fg-2); cursor: pointer; border-radius: var(--radius-sm); transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out); }
        .tk-modal__x:hover { background: var(--bg-2); color: var(--fg-0); }
        .tk-modal__x svg { width: 16px; height: 16px; display: block; }
        .tk-modal__body { padding: 18px; overflow-y: auto; font-size: 13px; line-height: 1.5; color: var(--fg-1); }
        .tk-modal__foot { display: flex; align-items: center; justify-content: flex-end; gap: 8px; padding: 12px 18px; border-top: 1px solid var(--border-0); background: var(--bg-1); }
        @keyframes tk-modal-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes tk-modal-pop { from { opacity: 0; transform: translateY(8px) scale(0.98); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .tk-modal__backdrop, .tk-modal { animation: none; } }
      `));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
'use client';

/**
 * Toast — a transient confirmation/alert. A compact ink-on-paper card
 * with a tone accent dot, title, optional message, and dismiss. Stack
 * several inside a fixed-position container (bottom-right). Presentational
 * — wire timers / queueing in your app.
 */
function Toast({
  tone = 'default',
  title,
  message,
  icon,
  onDismiss,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `tk-toast tk-toast--${tone}`,
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-toast__rail"
  }), icon ? /*#__PURE__*/React.createElement("span", {
    className: "tk-toast__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    className: "tk-toast__body"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "tk-toast__title"
  }, title) : null, message ? /*#__PURE__*/React.createElement("div", {
    className: "tk-toast__msg"
  }, message) : null), action ? /*#__PURE__*/React.createElement("div", {
    className: "tk-toast__action"
  }, action) : null, onDismiss ? /*#__PURE__*/React.createElement("button", {
    className: "tk-toast__x",
    onClick: onDismiss,
    "aria-label": "Dismiss"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))) : null, /*#__PURE__*/React.createElement("style", null, `
        .tk-toast { position: relative; display: flex; align-items: flex-start; gap: 9px; min-width: 260px; max-width: 380px; padding: 11px 12px 11px 14px; background: var(--bg-0); border: 1px solid var(--border-1); border-radius: var(--radius-md); box-shadow: var(--shadow-lg); overflow: hidden; }
        .tk-toast__rail { position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--fg-0); }
        .tk-toast--success .tk-toast__rail { background: var(--success); }
        .tk-toast--danger .tk-toast__rail { background: var(--red-500); }
        .tk-toast--warning .tk-toast__rail { background: var(--warning); }
        .tk-toast--info .tk-toast__rail { background: var(--info); }
        .tk-toast__icon { display: inline-flex; flex-shrink: 0; margin-top: 1px; color: var(--fg-2); }
        .tk-toast--success .tk-toast__icon { color: var(--success); }
        .tk-toast--danger .tk-toast__icon { color: var(--red-600); }
        .tk-toast--warning .tk-toast__icon { color: var(--warning); }
        .tk-toast--info .tk-toast__icon { color: var(--info); }
        .tk-toast__icon svg { width: 15px; height: 15px; display: block; }
        .tk-toast__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
        .tk-toast__title { font-size: 12.5px; font-weight: 600; color: var(--fg-0); }
        .tk-toast__msg { font-size: 11.5px; line-height: 1.4; color: var(--fg-2); }
        .tk-toast__action { flex-shrink: 0; align-self: center; }
        .tk-toast__x { flex-shrink: 0; display: inline-flex; padding: 2px; border: 0; background: transparent; color: var(--fg-3); cursor: pointer; border-radius: 3px; opacity: 0.8; transition: opacity var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out); }
        .tk-toast__x:hover { opacity: 1; background: var(--bg-2); color: var(--fg-0); }
        .tk-toast__x svg { width: 13px; height: 13px; display: block; }
      `));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
'use client';

/**
 * Checkbox / radio — a custom-drawn control with the editorial ink fill.
 * Checked state fills with ink (`--fg-0`); the optional `red` accent
 * fills with functional red. Renders an inline row with label + optional
 * description. Set `type="radio"` for a round selector.
 */
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  disabled,
  red,
  type = 'checkbox',
  id,
  name,
  value,
  onChange
}) {
  const inputId = id || (name ? `tk-cb-${name}-${value ?? ''}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: `tk-check${disabled ? ' tk-check--disabled' : ''}`,
    htmlFor: inputId
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: type,
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    className: "tk-check__input"
  }), /*#__PURE__*/React.createElement("span", {
    className: `tk-check__box${type === 'radio' ? ' tk-check__box--radio' : ''}${red ? ' tk-check__box--red' : ''}`
  }, type === 'radio' ? /*#__PURE__*/React.createElement("span", {
    className: "tk-check__dot"
  }) : /*#__PURE__*/React.createElement("svg", {
    className: "tk-check__tick",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "tk-check__text"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "tk-check__label"
  }, label) : null, description ? /*#__PURE__*/React.createElement("span", {
    className: "tk-check__desc"
  }, description) : null), /*#__PURE__*/React.createElement("style", null, `
        .tk-check { display: inline-flex; align-items: flex-start; gap: 8px; cursor: pointer; user-select: none; }
        .tk-check--disabled { opacity: 0.5; cursor: not-allowed; }
        .tk-check__input { position: absolute; opacity: 0; width: 0; height: 0; }
        .tk-check__box { flex-shrink: 0; width: 16px; height: 16px; margin-top: 1px; border: 1px solid var(--border-2); border-radius: var(--radius-xs); background: var(--bg-0); display: inline-flex; align-items: center; justify-content: center; color: var(--bg-0); transition: all var(--dur-fast) var(--ease-out); }
        .tk-check__box--radio { border-radius: 50%; }
        .tk-check__tick { width: 11px; height: 11px; opacity: 0; transform: scale(0.6); transition: all var(--dur-fast) var(--ease-out); }
        .tk-check__dot { width: 7px; height: 7px; border-radius: 50%; background: var(--bg-0); opacity: 0; transform: scale(0.4); transition: all var(--dur-fast) var(--ease-out); }
        .tk-check__input:checked + .tk-check__box { background: var(--fg-0); border-color: var(--fg-0); }
        .tk-check__input:checked + .tk-check__box--red { background: var(--red-500); border-color: var(--red-500); }
        .tk-check__input:checked + .tk-check__box .tk-check__tick,
        .tk-check__input:checked + .tk-check__box .tk-check__dot { opacity: 1; transform: scale(1); }
        .tk-check__input:focus-visible + .tk-check__box { outline: 2px solid var(--red-500); outline-offset: 2px; }
        .tk-check__text { display: flex; flex-direction: column; gap: 1px; }
        .tk-check__label { font-size: 13px; color: var(--fg-0); line-height: 1.3; }
        .tk-check__desc { font-size: 11px; color: var(--fg-2); line-height: 1.35; }
      `));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
'use client';

/**
 * Text input — the form workhorse. Optional mono uppercase label, leading
 * icon, hint/error line, and a red focus ring. `invalid` flips the border
 * and hint to the functional red. Set `mono` for IDs / numbers (tabular).
 */
function Input({
  label,
  value,
  defaultValue,
  placeholder,
  type = 'text',
  icon,
  hint,
  invalid,
  disabled,
  mono,
  size = 'md',
  id,
  name,
  onChange
}) {
  const inputId = id || (name ? `tk-in-${name}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: "tk-field",
    htmlFor: inputId
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "tk-field__label"
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    className: `tk-input${icon ? ' tk-input--icon' : ''}${invalid ? ' tk-input--invalid' : ''} tk-input--${size}`
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "tk-input__i"
  }, icon) : null, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    name: name,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    className: mono ? 'tk-input__el tk-input__el--mono' : 'tk-input__el'
  })), hint ? /*#__PURE__*/React.createElement("span", {
    className: `tk-field__hint${invalid ? ' tk-field__hint--err' : ''}`
  }, hint) : null, /*#__PURE__*/React.createElement("style", null, `
        .tk-field { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
        .tk-field__label { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-2); font-weight: 500; }
        .tk-field__hint { font-size: 11px; color: var(--fg-2); }
        .tk-field__hint--err { color: var(--red-600); }
        .tk-input { display: flex; align-items: center; gap: 7px; background: var(--bg-0); border: 1px solid var(--border-1); border-radius: var(--radius-sm); transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out); }
        .tk-input--sm { padding: 4px 8px; }
        .tk-input--md { padding: 6px 10px; }
        .tk-input:focus-within { border-color: var(--red-500); box-shadow: var(--shadow-focus); }
        .tk-input--invalid { border-color: var(--red-500); }
        .tk-input--invalid:focus-within { box-shadow: var(--shadow-focus); }
        .tk-input__i { display: inline-flex; color: var(--fg-3); flex-shrink: 0; }
        .tk-input__i svg { width: 14px; height: 14px; display: block; }
        .tk-input__el { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; font-family: var(--font-sans); font-size: 13px; color: var(--fg-0); }
        .tk-input--sm .tk-input__el { font-size: 12px; }
        .tk-input__el--mono { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-size: 12px; }
        .tk-input__el::placeholder { color: var(--fg-3); }
        .tk-input:has(:disabled) { opacity: 0.5; background: var(--bg-2); cursor: not-allowed; }
      `));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
'use client';

/**
 * Select — native dropdown styled to match Input. Mono label, hairline
 * border, red focus ring, and a custom chevron. Pass `options` as
 * strings or {value,label} objects.
 */
function Select({
  label,
  value,
  defaultValue,
  options = [],
  placeholder,
  hint,
  invalid,
  disabled,
  size = 'md',
  id,
  name,
  onChange
}) {
  const inputId = id || (name ? `tk-sel-${name}` : undefined);
  const norm = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  return /*#__PURE__*/React.createElement("label", {
    className: "tk-selfield",
    htmlFor: inputId
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "tk-selfield__label"
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    className: `tk-select${invalid ? ' tk-select--invalid' : ''} tk-select--${size}`
  }, /*#__PURE__*/React.createElement("select", {
    id: inputId,
    name: name,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    className: "tk-select__el"
  }, placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    className: "tk-select__chev",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), hint ? /*#__PURE__*/React.createElement("span", {
    className: `tk-selfield__hint${invalid ? ' tk-selfield__hint--err' : ''}`
  }, hint) : null, /*#__PURE__*/React.createElement("style", null, `
        .tk-selfield { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
        .tk-selfield__label { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-2); font-weight: 500; }
        .tk-selfield__hint { font-size: 11px; color: var(--fg-2); }
        .tk-selfield__hint--err { color: var(--red-600); }
        .tk-select { position: relative; display: flex; align-items: center; background: var(--bg-0); border: 1px solid var(--border-1); border-radius: var(--radius-sm); transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out); }
        .tk-select:focus-within { border-color: var(--red-500); box-shadow: var(--shadow-focus); }
        .tk-select--invalid { border-color: var(--red-500); }
        .tk-select__el { appearance: none; -webkit-appearance: none; flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; font-family: var(--font-sans); color: var(--fg-0); cursor: pointer; }
        .tk-select--sm .tk-select__el { padding: 4px 26px 4px 8px; font-size: 12px; }
        .tk-select--md .tk-select__el { padding: 6px 28px 6px 10px; font-size: 13px; }
        .tk-select__chev { position: absolute; right: 8px; width: 14px; height: 14px; color: var(--fg-3); pointer-events: none; }
        .tk-select:has(:disabled) { opacity: 0.5; background: var(--bg-2); cursor: not-allowed; }
      `));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
'use client';

/**
 * Multiline text input. Same chrome as Input — mono label, hint/error
 * line, red focus ring — with a vertically resizable field. Use for
 * descriptions, acceptance criteria, notes.
 */
function Textarea({
  label,
  value,
  defaultValue,
  placeholder,
  rows = 4,
  hint,
  invalid,
  disabled,
  id,
  name,
  onChange
}) {
  const inputId = id || (name ? `tk-ta-${name}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: "tk-tafield",
    htmlFor: inputId
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "tk-tafield__label"
  }, label) : null, /*#__PURE__*/React.createElement("textarea", {
    id: inputId,
    name: name,
    rows: rows,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    className: `tk-textarea${invalid ? ' tk-textarea--invalid' : ''}`
  }), hint ? /*#__PURE__*/React.createElement("span", {
    className: `tk-tafield__hint${invalid ? ' tk-tafield__hint--err' : ''}`
  }, hint) : null, /*#__PURE__*/React.createElement("style", null, `
        .tk-tafield { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
        .tk-tafield__label { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-2); font-weight: 500; }
        .tk-tafield__hint { font-size: 11px; color: var(--fg-2); }
        .tk-tafield__hint--err { color: var(--red-600); }
        .tk-textarea { width: 100%; padding: 8px 10px; border: 1px solid var(--border-1); border-radius: var(--radius-sm); font-family: var(--font-sans); font-size: 13px; line-height: 1.5; color: var(--fg-0); background: var(--bg-0); resize: vertical; min-height: 64px; transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out); }
        .tk-textarea:focus { outline: none; border-color: var(--red-500); box-shadow: var(--shadow-focus); }
        .tk-textarea--invalid { border-color: var(--red-500); }
        .tk-textarea::placeholder { color: var(--fg-3); }
        .tk-textarea:disabled { opacity: 0.5; background: var(--bg-2); cursor: not-allowed; }
      `));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
'use client';

/**
 * Toggle / switch — for binary settings. Ink-filled track when on
 * (functional red when `red`). Optional label + description on the right.
 */
function Toggle({
  label,
  description,
  checked,
  defaultChecked,
  disabled,
  red,
  size = 'md',
  id,
  name,
  onChange
}) {
  const inputId = id || (name ? `tk-tg-${name}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: `tk-toggle tk-toggle--${size}${disabled ? ' tk-toggle--disabled' : ''}`,
    htmlFor: inputId
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    name: name,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    className: "tk-toggle__input"
  }), /*#__PURE__*/React.createElement("span", {
    className: `tk-toggle__track${red ? ' tk-toggle__track--red' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-toggle__thumb"
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "tk-toggle__text"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "tk-toggle__label"
  }, label) : null, description ? /*#__PURE__*/React.createElement("span", {
    className: "tk-toggle__desc"
  }, description) : null), /*#__PURE__*/React.createElement("style", null, `
        .tk-toggle { display: inline-flex; align-items: flex-start; gap: 9px; cursor: pointer; user-select: none; }
        .tk-toggle--disabled { opacity: 0.5; cursor: not-allowed; }
        .tk-toggle__input { position: absolute; opacity: 0; width: 0; height: 0; }
        .tk-toggle__track { position: relative; flex-shrink: 0; background: var(--bg-3); border-radius: 999px; transition: background var(--dur-med) var(--ease-out); }
        .tk-toggle--md .tk-toggle__track { width: 34px; height: 20px; margin-top: 0; }
        .tk-toggle--sm .tk-toggle__track { width: 28px; height: 16px; margin-top: 1px; }
        .tk-toggle__thumb { position: absolute; top: 2px; left: 2px; background: var(--bg-0); border-radius: 50%; box-shadow: 0 1px 2px rgba(0,0,0,0.2); transition: transform var(--dur-med) var(--ease-out); }
        .tk-toggle--md .tk-toggle__thumb { width: 16px; height: 16px; }
        .tk-toggle--sm .tk-toggle__thumb { width: 12px; height: 12px; }
        .tk-toggle__input:checked + .tk-toggle__track { background: var(--fg-0); }
        .tk-toggle__input:checked + .tk-toggle__track--red { background: var(--red-500); }
        .tk-toggle--md .tk-toggle__input:checked + .tk-toggle__track .tk-toggle__thumb { transform: translateX(14px); }
        .tk-toggle--sm .tk-toggle__input:checked + .tk-toggle__track .tk-toggle__thumb { transform: translateX(12px); }
        .tk-toggle__input:focus-visible + .tk-toggle__track { outline: 2px solid var(--red-500); outline-offset: 2px; }
        .tk-toggle__text { display: flex; flex-direction: column; gap: 1px; }
        .tk-toggle__label { font-size: 13px; color: var(--fg-0); line-height: 1.3; }
        .tk-toggle__desc { font-size: 11px; color: var(--fg-2); line-height: 1.35; }
      `));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/nav/Breadcrumb.jsx
try { (() => {
'use client';

/**
 * Breadcrumb — the topbar trail. Faint chevron separators; the last item
 * renders as the current page (ink, medium weight). Earlier items are
 * links/buttons. Pass items as strings or {label, href, onClick}.
 */
function Breadcrumb({
  items = []
}) {
  const norm = items.map(c => typeof c === 'object' ? c : {
    label: c
  });
  return /*#__PURE__*/React.createElement("nav", {
    className: "tk-crumb",
    "aria-label": "Breadcrumb"
  }, norm.map((c, i) => {
    const last = i === norm.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "tk-crumb__current",
      "aria-current": "page"
    }, c.label) : c.href || c.onClick ? /*#__PURE__*/React.createElement("a", {
      className: "tk-crumb__link",
      href: c.href,
      onClick: c.onClick
    }, c.label) : /*#__PURE__*/React.createElement("span", {
      className: "tk-crumb__link"
    }, c.label), !last ? /*#__PURE__*/React.createElement("svg", {
      className: "tk-crumb__sep",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m9 18 6-6-6-6"
    })) : null);
  }), /*#__PURE__*/React.createElement("style", null, `
        .tk-crumb { display: flex; align-items: center; gap: 6px; font-size: 13px; min-width: 0; }
        .tk-crumb__link { color: var(--fg-2); cursor: pointer; white-space: nowrap; transition: color var(--dur-fast) var(--ease-out); }
        .tk-crumb__link:hover { color: var(--fg-0); }
        .tk-crumb__current { color: var(--fg-0); font-weight: 500; white-space: nowrap; }
        .tk-crumb__sep { width: 13px; height: 13px; color: var(--fg-4); flex-shrink: 0; }
      `));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/nav/SegmentedControl.jsx
try { (() => {
'use client';

/**
 * Segmented control — compact 2–4 option switch for toolbars (view mode,
 * density, grouping). Active option inverts to ink-on-paper. Controlled
 * via `value` or uncontrolled via `defaultValue`.
 */
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  size = 'md',
  onChange
}) {
  const norm = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const [internal, setInternal] = React.useState(defaultValue ?? norm[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `tk-seg tk-seg--${size}`,
    role: "group"
  }, norm.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    className: `tk-seg__opt${active === o.value ? ' tk-seg__opt--active' : ''}`,
    onClick: () => select(o.value),
    "aria-pressed": active === o.value
  }, o.icon ? /*#__PURE__*/React.createElement("span", {
    className: "tk-seg__i"
  }, o.icon) : null, o.label != null ? /*#__PURE__*/React.createElement("span", null, o.label) : null)), /*#__PURE__*/React.createElement("style", null, `
        .tk-seg { display: inline-flex; border: 1px solid var(--border-1); border-radius: var(--radius-sm); overflow: hidden; background: var(--bg-0); }
        .tk-seg__opt { display: inline-flex; align-items: center; gap: 5px; border: 0; border-right: 1px solid var(--border-1); background: transparent; color: var(--fg-2); font-family: var(--font-sans); font-weight: 500; cursor: pointer; transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out); }
        .tk-seg--sm .tk-seg__opt { padding: 4px 8px; font-size: 11px; }
        .tk-seg--md .tk-seg__opt { padding: 5px 11px; font-size: 12px; }
        .tk-seg__opt:last-child { border-right: 0; }
        .tk-seg__opt:hover { color: var(--fg-0); background: var(--bg-1); }
        .tk-seg__opt--active { background: var(--fg-0); color: var(--bg-0); }
        .tk-seg__opt--active:hover { background: var(--fg-0); color: var(--bg-0); }
        .tk-seg__i { display: inline-flex; }
        .tk-seg__i svg { width: 13px; height: 13px; display: block; }
      `));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/nav/Tabs.jsx
try { (() => {
'use client';

/**
 * Tabs — the horizontal subnav used across Taskimoo screens. Active tab
 * inverts to ink-on-paper fill; optional mono count per tab. Controlled
 * via `value` + `onChange`, or uncontrolled via `defaultValue`.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange
}) {
  const norm = items.map(t => typeof t === 'object' ? t : {
    value: t,
    label: t
  });
  const [internal, setInternal] = React.useState(defaultValue ?? norm[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-tabs",
    role: "tablist"
  }, norm.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    "aria-selected": active === t.value,
    className: `tk-tabs__tab${active === t.value ? ' tk-tabs__tab--active' : ''}`,
    onClick: () => select(t.value)
  }, t.label, t.count != null ? /*#__PURE__*/React.createElement("span", {
    className: "tk-tabs__count"
  }, t.count) : null)), /*#__PURE__*/React.createElement("style", null, `
        .tk-tabs { display: flex; gap: 2px; align-items: center; border-bottom: 1px solid var(--border-0); overflow-x: auto; }
        .tk-tabs__tab { padding: 0 10px; height: 32px; margin-bottom: -1px; font-family: var(--font-sans); font-size: 13px; font-weight: 500; color: var(--fg-2); background: transparent; border: 0; border-radius: var(--radius-sm) var(--radius-sm) 0 0; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; transition: color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out); }
        .tk-tabs__tab:hover { color: var(--fg-0); background: var(--bg-1); }
        .tk-tabs__tab--active { color: var(--fg-0); border-bottom: 2px solid var(--fg-0); }
        .tk-tabs__count { font-family: var(--font-mono); font-size: 10px; color: var(--fg-3); margin-left: 6px; }
        .tk-tabs__tab--active .tk-tabs__count { color: var(--fg-2); }
      `));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/KPIStrip.jsx
try { (() => {
'use client';

/**
 * KPI strip — the `.run-bar` summary pattern: a bordered row of stat cells,
 * each a mono label + a large tabular number. Tones (pass/fail/block) color
 * the value for test-run and finance summaries.
 */
function KPIStrip({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-runbar"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: it.tone ? `tk-runbar__cell tk-runbar__cell--${it.tone}` : 'tk-runbar__cell'
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-runbar__l"
  }, it.label), /*#__PURE__*/React.createElement("span", {
    className: "tk-runbar__n"
  }, it.value))), /*#__PURE__*/React.createElement("style", null, `
        .tk-runbar { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); border: 1px solid var(--border-0); border-radius: var(--radius-md); background: var(--bg-0); overflow: hidden; }
        .tk-runbar__cell { padding: 10px 12px; border-right: 1px solid var(--border-0); display: flex; flex-direction: column; gap: 2px; }
        .tk-runbar__cell:last-child { border-right: none; }
        .tk-runbar__l { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-3); }
        .tk-runbar__n { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; color: var(--fg-0); }
        .tk-runbar__cell--pass .tk-runbar__n { color: var(--success); }
        .tk-runbar__cell--fail .tk-runbar__n { color: var(--red-600); }
        .tk-runbar__cell--block .tk-runbar__n { color: var(--warning); }
      `));
}
Object.assign(__ds_scope, { KPIStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/KPIStrip.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SectionCard.jsx
try { (() => {
'use client';

/**
 * Section card — the workhorse container. A bordered surface with an
 * optional head (title + mono meta + right-aligned actions) and a body
 * that is flush by default or padded via `pad`.
 */
function SectionCard({
  title,
  meta,
  actions,
  pad = false,
  children
}) {
  const showHead = title != null || meta != null || actions != null;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-section"
  }, showHead && /*#__PURE__*/React.createElement("div", {
    className: "tk-section__head"
  }, title != null && /*#__PURE__*/React.createElement("h3", null, title), meta != null && /*#__PURE__*/React.createElement("span", {
    className: "tk-section__meta"
  }, meta), actions != null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), actions)), /*#__PURE__*/React.createElement("div", {
    className: `tk-section__body${pad ? ' tk-section__body--pad' : ''}`
  }, children), /*#__PURE__*/React.createElement("style", null, `
        .tk-section { background: var(--bg-0); border: 1px solid var(--border-0); border-radius: var(--radius-md); display: flex; flex-direction: column; overflow: hidden; }
        .tk-section__head { display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-bottom: 1px solid var(--border-0); }
        .tk-section__head h3 { font-size: 12.5px; font-weight: 600; margin: 0; color: var(--fg-0); }
        .tk-section__meta { font-family: var(--font-mono); font-size: 10.5px; color: var(--fg-3); }
        .tk-section__body--pad { padding: 12px; }
      `));
}
Object.assign(__ds_scope, { SectionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SectionCard.jsx", error: String((e && e.message) || e) }); }

// components/work/TaskCard.jsx
try { (() => {
'use client';

/**
 * Task card — a kanban work-item card. Shows the work-item id (mono),
 * title, optional tags, a status dot + label, an optional due date
 * (turns red when overdue), and assignee initials. `selected` adds the
 * red left rail.
 */
function TaskCard({
  id,
  title,
  tags = [],
  statusLabel,
  statusColor,
  due,
  overdue,
  assignee,
  selected,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `tk-kcard${selected ? ' tk-kcard--selected' : ''}`,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-kcard__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-kcard__id"
  }, id), due ? /*#__PURE__*/React.createElement("span", {
    className: `tk-kcard__due${overdue ? ' tk-kcard__due--over' : ''}`
  }, due) : null), /*#__PURE__*/React.createElement("div", {
    className: "tk-kcard__title"
  }, title), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "tk-kcard__tags"
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `tk-kcard__tag${t.red ? ' tk-kcard__tag--red' : ''}`
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    className: "tk-kcard__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-kcard__status"
  }, statusColor ? /*#__PURE__*/React.createElement("span", {
    className: "tk-kcard__dot",
    style: {
      background: statusColor
    }
  }) : null, statusLabel), assignee ? /*#__PURE__*/React.createElement("span", {
    className: "tk-kcard__who"
  }, assignee) : null), /*#__PURE__*/React.createElement("style", null, `
        .tk-kcard { background: var(--bg-0); border: 1px solid var(--border-0); border-radius: var(--radius-md); padding: 10px 12px; display: flex; flex-direction: column; gap: 8px; cursor: pointer; transition: all var(--dur-fast) var(--ease-out); }
        .tk-kcard:hover { border-color: var(--border-1); box-shadow: var(--shadow-sm); }
        .tk-kcard--selected { border-left: 2px solid var(--red-500); }
        .tk-kcard__top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .tk-kcard__id { font-family: var(--font-mono); font-size: 10px; color: var(--fg-3); }
        .tk-kcard__due { font-family: var(--font-mono); font-size: 10px; color: var(--fg-2); }
        .tk-kcard__due--over { color: var(--red-600); }
        .tk-kcard__title { font-size: 13px; font-weight: 500; line-height: 1.35; color: var(--fg-0); }
        .tk-kcard__tags { display: flex; gap: 4px; flex-wrap: wrap; }
        .tk-kcard__tag { font-size: 10px; padding: 1px 6px; border-radius: var(--radius-xs); border: 1px solid var(--border-0); background: var(--bg-1); color: var(--fg-1); font-weight: 500; }
        .tk-kcard__tag--red { background: var(--red-50); color: var(--red-700); border-color: var(--red-100); }
        .tk-kcard__meta { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .tk-kcard__status { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; color: var(--fg-2); }
        .tk-kcard__dot { width: 7px; height: 7px; border-radius: 50%; }
        .tk-kcard__who { width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-1); background: var(--bg-2); color: var(--fg-1); display: inline-flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 600; }
      `));
}
Object.assign(__ds_scope, { TaskCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/TaskCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/taskimoo-web/icons.jsx
try { (() => {
// Lucide-style inline icons (stroke 1.6, matching the Taskimoo Icon component).
// Exposed as window.TkIcon for the UI-kit screens.
(function () {
  const P = {
    'layout-dashboard': '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    'inbox': '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    'folders': '<path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"/><path d="M2 8v11a2 2 0 0 0 2 2h14"/>',
    'banknote': '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
    'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'settings': '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    'bookmark': '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    'moon': '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    'panel-left-close': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>',
    'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
    'filter': '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    'kanban': '<path d="M6 5v11"/><path d="M12 5v6"/><path d="M18 5v14"/>',
    'check': '<polyline points="20 6 9 17 4 12"/>',
    'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    'more-horizontal': '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    'arrow-left': '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'git-branch': '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
    'send': '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    'gavel': '<path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/>',
    'circle': '<circle cx="12" cy="12" r="10"/>'
  };
  function TkIcon({
    name,
    size = 16,
    color,
    style,
    strokeWidth = 1.6
  }) {
    const inner = P[name];
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color || 'currentColor',
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        display: 'block',
        flexShrink: 0,
        ...style
      },
      dangerouslySetInnerHTML: {
        __html: inner || ''
      }
    });
  }
  window.TkIcon = TkIcon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/taskimoo-web/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/taskimoo-web/login.jsx
try { (() => {
// Login screen — mirrors apps/web/app/login + auth.module.css
(function () {
  function Login({
    onSignIn
  }) {
    const [email, setEmail] = React.useState('ken@nexstack.sg');
    const [pw, setPw] = React.useState('Taskimoo2026!');
    const [loading, setLoading] = React.useState(false);
    function submit(e) {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => onSignIn(), 480);
    }
    return /*#__PURE__*/React.createElement("main", {
      style: {
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: 'var(--bg-1)',
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      style: {
        width: 'min(100%, 360px)',
        display: 'grid',
        gap: 14,
        padding: 24,
        border: '1px solid var(--border-1)',
        borderRadius: 8,
        background: 'var(--bg-0)',
        boxShadow: 'var(--shadow-md)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 13,
        fontWeight: 800
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "sidebar-logo",
      style: {
        backgroundImage: "url('../../assets/logo-mark.svg')"
      }
    }), /*#__PURE__*/React.createElement("span", null, "TASKIMOO", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-orange)'
      }
    }, "."))), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 22
      }
    }, "Sign in"), /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'grid',
        gap: 6,
        fontSize: 12,
        color: 'var(--fg-2)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Email"), /*#__PURE__*/React.createElement("input", {
      value: email,
      onChange: e => setEmail(e.target.value),
      type: "email",
      style: {
        height: 38,
        border: '1px solid var(--border-1)',
        borderRadius: 6,
        padding: '0 10px',
        background: 'var(--bg-0)',
        color: 'var(--fg-0)'
      }
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'grid',
        gap: 6,
        fontSize: 12,
        color: 'var(--fg-2)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Password"), /*#__PURE__*/React.createElement("input", {
      value: pw,
      onChange: e => setPw(e.target.value),
      type: "password",
      style: {
        height: 38,
        border: '1px solid var(--border-1)',
        borderRadius: 6,
        padding: '0 10px',
        background: 'var(--bg-0)',
        color: 'var(--fg-0)'
      }
    })), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      type: "submit",
      disabled: loading,
      style: {
        height: 36,
        justifyContent: 'center'
      }
    }, loading ? 'Signing in…' : 'Sign in'), /*#__PURE__*/React.createElement("p", {
      className: "form-help",
      style: {
        margin: 0,
        fontSize: 12,
        color: 'var(--fg-2)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "t-link",
      href: "#"
    }, "Register"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
      className: "t-link",
      href: "#"
    }, "Reset password"))));
  }
  window.TkLogin = Login;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/taskimoo-web/login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/taskimoo-web/screen_dashboard.jsx
try { (() => {
// Dashboard — project operations cockpit (mirrors apps/web dashboard/page.tsx)
// Uses class-based kit CSS from styles.css (no bundle dependency).
(function () {
  const TkIcon = window.TkIcon;
  const PROJECTS = [{
    name: 'Mercury',
    client: 'Acme Corp',
    stage: 'Delivery',
    status: 'in progress',
    health: 'red',
    ms: 62,
    mDone: 5,
    mTotal: 8,
    pm: 1,
    ba: 1,
    dev: 3,
    uat: 'May 24',
    delivery: 'Jun 12'
  }, {
    name: 'Apollo',
    client: 'Northwind',
    stage: 'Delivery',
    status: 'in review',
    health: 'green',
    ms: 88,
    mDone: 7,
    mTotal: 8,
    pm: 1,
    ba: 1,
    dev: 2,
    uat: 'May 18',
    delivery: 'May 30'
  }, {
    name: 'Helios',
    client: 'Internal',
    stage: 'QA/QC',
    status: 'UAT',
    health: 'amber',
    ms: 74,
    mDone: 6,
    mTotal: 9,
    pm: 1,
    ba: 2,
    dev: 2,
    uat: 'May 20',
    delivery: 'Jun 03'
  }, {
    name: 'Pulse',
    client: 'Bright Labs',
    stage: 'Planning',
    status: 'planned',
    health: 'green',
    ms: 22,
    mDone: 1,
    mTotal: 6,
    pm: 1,
    ba: 1,
    dev: 1,
    uat: 'Jun 30',
    delivery: 'Jul 22'
  }];
  const HEALTH = {
    red: {
      label: 'At risk',
      cls: 'red'
    },
    amber: {
      label: 'Watch',
      cls: 'amber'
    },
    green: {
      label: 'On track',
      cls: 'green'
    }
  };
  const BARTONE = {
    red: 'var(--red-500)',
    amber: 'var(--warning)',
    green: 'var(--success)'
  };
  const DECISIONS = [{
    tone: 'var(--red-500)',
    title: 'Mercury bid expires in 2 days',
    sub: 'Quote QT-1042 · $84,000',
    action: 'Approve'
  }, {
    tone: 'var(--red-500)',
    title: 'TASK-148 blocked 3 days',
    sub: 'Mercury · invoice PDF export',
    action: 'Unblock'
  }, {
    tone: 'var(--warning)',
    title: 'Helios UAT sign-off pending',
    sub: 'Internal · 6 of 9 milestones',
    action: 'Review'
  }, {
    tone: 'var(--warning)',
    title: 'Apollo invoice ready to send',
    sub: 'INV-2210 · $31,000',
    action: 'Send'
  }, {
    tone: 'var(--fg-3)',
    title: 'Pulse needs a delivery lead',
    sub: 'Bright Labs · planning',
    action: 'Assign'
  }];
  function Bar({
    pct,
    tone
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: 4,
        background: 'var(--bg-2)',
        borderRadius: 2,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        background: tone
      }
    }));
  }
  function Avatar({
    name,
    tone
  }) {
    const inits = name.split(' ').map(p => p[0]).slice(0, 2).join('');
    const style = tone === 'dark' ? {
      background: '#262626',
      color: '#fff'
    } : {};
    return /*#__PURE__*/React.createElement("span", {
      className: "avatar sm",
      style: style,
      title: name
    }, inits);
  }
  function ProjectCard({
    p
  }) {
    const users = p.pm + p.ba + p.dev;
    return /*#__PURE__*/React.createElement("div", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-head"
    }, /*#__PURE__*/React.createElement("h3", null, p.name), /*#__PURE__*/React.createElement("span", {
      className: "meta"
    }, p.client), /*#__PURE__*/React.createElement("span", {
      className: "spacer"
    }), /*#__PURE__*/React.createElement("span", {
      className: `pill ${HEALTH[p.health].cls}`
    }, HEALTH[p.health].label)), /*#__PURE__*/React.createElement("div", {
      className: "section-body pad"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-meta"
    }, p.stage, " \xB7 ", p.status), /*#__PURE__*/React.createElement("div", {
      className: "col",
      style: {
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "row spread"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-meta truncate"
    }, "MILESTONES"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        fontWeight: 600
      }
    }, p.ms, "%")), /*#__PURE__*/React.createElement(Bar, {
      pct: p.ms,
      tone: BARTONE[p.health]
    }), /*#__PURE__*/React.createElement("span", {
      className: "mono-meta"
    }, p.mDone, " of ", p.mTotal, " milestones done")), /*#__PURE__*/React.createElement("div", {
      className: "row wrap",
      style: {
        gap: 6,
        borderTop: '1px solid var(--border-0)',
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "row",
      style: {
        gap: 4,
        fontSize: 12.5,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "users",
      size: 13
    }), users), /*#__PURE__*/React.createElement("span", {
      className: "tag-mini"
    }, p.pm, " PM"), /*#__PURE__*/React.createElement("span", {
      className: "tag-mini"
    }, p.ba, " BA"), /*#__PURE__*/React.createElement("span", {
      className: "tag-mini"
    }, p.dev, " Dev")), /*#__PURE__*/React.createElement("div", {
      className: "row spread",
      style: {
        borderTop: '1px solid var(--border-0)',
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "col",
      style: {
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-meta"
    }, "UAT"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        fontWeight: 600
      }
    }, p.uat)), /*#__PURE__*/React.createElement("span", {
      className: "col",
      style: {
        gap: 1,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-meta"
    }, "DELIVERY"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        fontWeight: 600
      }
    }, p.delivery))))));
  }
  function Dashboard() {
    return /*#__PURE__*/React.createElement("div", {
      className: "page"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "t-eyebrow"
    }, "Owner \xB7 Tue 12 May"), /*#__PURE__*/React.createElement("div", {
      className: "t-h1",
      style: {
        marginTop: -2
      }
    }, "Good morning, Ken."), /*#__PURE__*/React.createElement("div", {
      className: "muted",
      style: {
        fontSize: 12.5,
        marginTop: 2
      }
    }, "4 projects \xB7 19 deployed \xB7 2 free now \xB7 5 decisions")), /*#__PURE__*/React.createElement("div", {
      className: "run-bar"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "l"
    }, "Projects"), /*#__PURE__*/React.createElement("span", {
      className: "n"
    }, "4")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "l"
    }, "People deployed"), /*#__PURE__*/React.createElement("span", {
      className: "n"
    }, "19")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "l"
    }, "Developers"), /*#__PURE__*/React.createElement("span", {
      className: "n"
    }, "8")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "l"
    }, "BAs"), /*#__PURE__*/React.createElement("span", {
      className: "n"
    }, "5")), /*#__PURE__*/React.createElement("div", {
      className: "fail"
    }, /*#__PURE__*/React.createElement("span", {
      className: "l"
    }, "At risk"), /*#__PURE__*/React.createElement("span", {
      className: "n"
    }, "1")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "l"
    }, "Available now"), /*#__PURE__*/React.createElement("span", {
      className: "n"
    }, "2"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 300px',
        gap: 12,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col gap-3",
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "row spread"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, "Projects"), /*#__PURE__*/React.createElement("span", {
      className: "mono-meta"
    }, "bidding \u2192 active \xB7 4 total")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 8
      }
    }, PROJECTS.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
      key: p.name,
      p: p
    }))), /*#__PURE__*/React.createElement("div", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-head"
    }, /*#__PURE__*/React.createElement("h3", null, "Availability"), /*#__PURE__*/React.createElement("span", {
      className: "meta"
    }, "who's free & freeing up")), /*#__PURE__*/React.createElement("div", {
      className: "section-body pad"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row spread",
      style: {
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-meta"
    }, "AVAILABLE NOW"), /*#__PURE__*/React.createElement("span", {
      className: "pill green"
    }, "2")), /*#__PURE__*/React.createElement("div", {
      className: "row gap-2"
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Sam Okafor"
    }), /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 600
      }
    }, "Sam Okafor"), /*#__PURE__*/React.createElement("span", {
      className: "mono-meta"
    }, "Developer"))), /*#__PURE__*/React.createElement("div", {
      className: "row gap-2"
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Ivy Tran"
    }), /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 600
      }
    }, "Ivy Tran"), /*#__PURE__*/React.createElement("span", {
      className: "mono-meta"
    }, "QA engineer")))), /*#__PURE__*/React.createElement("div", {
      className: "col gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row spread",
      style: {
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-meta"
    }, "FREE NEXT WEEK"), /*#__PURE__*/React.createElement("span", {
      className: "pill amber"
    }, "3")), /*#__PURE__*/React.createElement("span", {
      className: "mono-meta",
      style: {
        maxWidth: 160
      }
    }, "Maya (PM), Lin (Dev), Diego (QA) roll off Apollo")))))), /*#__PURE__*/React.createElement("div", {
      className: "section",
      style: {
        position: 'sticky',
        top: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-head"
    }, /*#__PURE__*/React.createElement("h3", null, "Needs your decision"), /*#__PURE__*/React.createElement("span", {
      className: "meta"
    }, "5")), /*#__PURE__*/React.createElement("div", {
      className: "section-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "feed"
    }, DECISIONS.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "feed-row",
      style: {
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: d.tone,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "grow col",
      style: {
        gap: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "truncate",
      style: {
        fontSize: 12.5,
        fontWeight: 500
      }
    }, d.title), /*#__PURE__*/React.createElement("span", {
      className: "mono-meta truncate"
    }, d.sub)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9.5,
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        border: '1px solid var(--border-1)',
        borderRadius: 4,
        padding: '2px 6px',
        color: 'var(--fg-1)',
        flexShrink: 0
      }
    }, d.action))))))));
  }
  window.TkDashboard = Dashboard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/taskimoo-web/screen_dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/taskimoo-web/screen_delivery.jsx
try { (() => {
// Delivery board — kanban of work items (mirrors projects/[code]/delivery)
// Uses class-based kit CSS (.kcard, .pill) — no bundle dependency.
(function () {
  const TkIcon = window.TkIcon;
  const COLUMNS = [{
    key: 'todo',
    title: 'Todo',
    color: 'var(--status-todo)',
    items: [{
      id: 'REQ-12',
      title: 'Dual-status model for projects',
      tags: [{
        label: 'BA'
      }],
      due: 'May 20',
      assignee: 'DG'
    }, {
      id: 'TASK-151',
      title: 'Seed demo workspace + users',
      tags: [{
        label: 'Dev'
      }],
      assignee: 'SO'
    }]
  }, {
    key: 'progress',
    title: 'In progress',
    color: 'var(--status-progress)',
    items: [{
      id: 'TASK-148',
      title: 'Wire up invoice PDF export',
      tags: [{
        label: 'Finance'
      }, {
        label: 'Blocked',
        red: true
      }],
      due: 'May 12',
      overdue: true,
      assignee: 'LP',
      selected: true
    }, {
      id: 'TASK-144',
      title: 'Catch-all proxy for Hono API',
      tags: [{
        label: 'Dev'
      }],
      due: 'May 16',
      assignee: 'LP'
    }]
  }, {
    key: 'review',
    title: 'In review',
    color: 'var(--status-review)',
    items: [{
      id: 'BUG-7',
      title: 'Aging report off by one day',
      tags: [{
        label: 'QA'
      }],
      assignee: 'MC'
    }]
  }, {
    key: 'qa',
    title: 'QA / UAT',
    color: 'var(--status-review)',
    items: [{
      id: 'TASK-139',
      title: 'Quotes → invoice generation flow',
      tags: [{
        label: 'Finance'
      }],
      assignee: 'IV'
    }]
  }, {
    key: 'done',
    title: 'Done',
    color: 'var(--status-done)',
    items: [{
      id: 'TASK-132',
      title: 'Role-based home views',
      tags: [{
        label: 'Dev'
      }],
      assignee: 'LP'
    }, {
      id: 'REQ-9',
      title: 'Work-item engine: typed items',
      tags: [{
        label: 'BA'
      }],
      assignee: 'DG'
    }]
  }];
  const TABS = [{
    id: 'board',
    label: 'Board',
    count: 8
  }, {
    id: 'tasks',
    label: 'Tasks',
    count: 24
  }, {
    id: 'sprint',
    label: 'Sprint'
  }, {
    id: 'roadmap',
    label: 'Roadmap'
  }, {
    id: 'meetings',
    label: 'Meetings'
  }];
  function Card({
    it,
    col
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: `kcard${it.selected ? ' selected' : ''}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "id"
    }, it.id), it.due ? /*#__PURE__*/React.createElement("span", {
      className: `due${it.overdue ? ' overdue' : ''}`
    }, it.due) : null), /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, it.title), it.tags.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "tags"
    }, it.tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: `tag${t.red ? ' red' : ''}`
    }, t.label))), /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 11,
        color: 'var(--fg-2)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: col.color
      }
    }), col.title), /*#__PURE__*/React.createElement("span", {
      className: "avatar sm",
      title: it.assignee
    }, it.assignee)));
  }
  function Delivery() {
    const [tab, setTab] = React.useState('board');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "page-header"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, "DELIVERY \xB7 MERCURY"), /*#__PURE__*/React.createElement("h1", null, "Delivery board"), /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, "Acme Corp \xB7 in progress \xB7 UAT May 24")), /*#__PURE__*/React.createElement("div", {
      className: "page-header-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost"
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "filter",
      size: 14
    }), "Filter"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary"
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "plus",
      size: 14
    }), "New work item"))), /*#__PURE__*/React.createElement("div", {
      className: "subnav"
    }, TABS.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      className: `tab${tab === t.id ? ' active' : ''}`,
      onClick: () => setTab(t.id)
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, t.count)))), /*#__PURE__*/React.createElement("div", {
      className: "board"
    }, COLUMNS.map(col => /*#__PURE__*/React.createElement("div", {
      key: col.key,
      className: "column"
    }, /*#__PURE__*/React.createElement("div", {
      className: "column-header"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dot",
      style: {
        background: col.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, col.title), /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, col.items.length), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: "ico-btn"
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "plus",
      size: 14
    }))), /*#__PURE__*/React.createElement("div", {
      className: "column-body"
    }, col.items.map(it => /*#__PURE__*/React.createElement(Card, {
      key: it.id,
      it: it,
      col: col
    })))))));
  }
  window.TkDelivery = Delivery;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/taskimoo-web/screen_delivery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/taskimoo-web/screen_finance.jsx
try { (() => {
// Finance — quotes & invoices table with KPI strip (mirrors apps/web finance)
// Uses class-based kit CSS (.tbl, .run-bar, .pill) — no bundle dependency.
(function () {
  const TkIcon = window.TkIcon;
  const TABS = [{
    id: 'overview',
    label: 'Overview'
  }, {
    id: 'quotes',
    label: 'Quotes',
    count: 4
  }, {
    id: 'invoices',
    label: 'Invoices',
    count: 9
  }, {
    id: 'payments',
    label: 'Payments'
  }, {
    id: 'aging',
    label: 'Aging'
  }];
  const ROWS = [{
    id: 'INV-2210',
    project: 'Apollo',
    client: 'Northwind',
    amount: '$31,000',
    status: 'Sent',
    tone: 'blue',
    due: 'May 30'
  }, {
    id: 'INV-2208',
    project: 'Mercury',
    client: 'Acme Corp',
    amount: '$42,000',
    status: 'Overdue',
    tone: 'red',
    due: 'May 02'
  }, {
    id: 'INV-2205',
    project: 'Helios',
    client: 'Internal',
    amount: '$18,500',
    status: 'Paid',
    tone: 'green',
    due: 'Apr 28'
  }, {
    id: 'QT-1042',
    project: 'Mercury',
    client: 'Acme Corp',
    amount: '$84,000',
    status: 'Draft',
    tone: '',
    due: '—'
  }, {
    id: 'QT-1039',
    project: 'Pulse',
    client: 'Bright Labs',
    amount: '$26,000',
    status: 'Accepted',
    tone: 'green',
    due: '—'
  }];
  function Finance() {
    const [tab, setTab] = React.useState('invoices');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "page-header"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, "COMMERCIAL CONTROL"), /*#__PURE__*/React.createElement("h1", null, "Finance"), /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, "quotations \xB7 invoices \xB7 payments")), /*#__PURE__*/React.createElement("div", {
      className: "page-header-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-secondary"
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "download",
      size: 14
    }), "Export"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary"
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "plus",
      size: 14
    }), "New quote"))), /*#__PURE__*/React.createElement("div", {
      className: "subnav"
    }, TABS.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      className: `tab${tab === t.id ? ' active' : ''}`,
      onClick: () => setTab(t.id)
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, t.count)))), /*#__PURE__*/React.createElement("div", {
      className: "page",
      style: {
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "run-bar"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "l"
    }, "Invoiced (MTD)"), /*#__PURE__*/React.createElement("span", {
      className: "n"
    }, "$91.5k")), /*#__PURE__*/React.createElement("div", {
      className: "pass"
    }, /*#__PURE__*/React.createElement("span", {
      className: "l"
    }, "Collected"), /*#__PURE__*/React.createElement("span", {
      className: "n"
    }, "$49.5k")), /*#__PURE__*/React.createElement("div", {
      className: "fail"
    }, /*#__PURE__*/React.createElement("span", {
      className: "l"
    }, "Overdue"), /*#__PURE__*/React.createElement("span", {
      className: "n"
    }, "$42k")), /*#__PURE__*/React.createElement("div", {
      className: "block"
    }, /*#__PURE__*/React.createElement("span", {
      className: "l"
    }, "Quotes outstanding"), /*#__PURE__*/React.createElement("span", {
      className: "n"
    }, "$110k"))), /*#__PURE__*/React.createElement("table", {
      className: "tbl"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Project"), /*#__PURE__*/React.createElement("th", null, "Client"), /*#__PURE__*/React.createElement("th", null, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Due"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, ROWS.map(r => /*#__PURE__*/React.createElement("tr", {
      key: r.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "mono"
    }, r.id), /*#__PURE__*/React.createElement("td", {
      className: "strong"
    }, r.project), /*#__PURE__*/React.createElement("td", null, r.client), /*#__PURE__*/React.createElement("td", {
      className: "mono",
      style: {
        fontVariantNumeric: 'tabular-nums',
        color: 'var(--fg-0)',
        fontSize: 12.5
      }
    }, r.amount), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: `pill${r.tone ? ' ' + r.tone : ''}`
    }, r.status)), /*#__PURE__*/React.createElement("td", {
      className: "mono"
    }, r.due), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "ico-btn"
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "chevron-right",
      size: 14
    })))))))));
  }
  window.TkFinance = Finance;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/taskimoo-web/screen_finance.jsx", error: String((e && e.message) || e) }); }

// ui_kits/taskimoo-web/shell.jsx
try { (() => {
// App shell: Sidebar + Topbar. Uses kit CSS classes from styles.css.
(function () {
  const TkIcon = window.TkIcon;
  const NAV_TOP = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'layout-dashboard'
  }, {
    id: 'my-tasks',
    label: 'My tasks',
    icon: 'inbox',
    count: 7
  }, {
    id: 'delivery',
    label: 'Projects',
    icon: 'folders',
    count: 12
  }, {
    id: 'finance',
    label: 'Finance',
    icon: 'banknote'
  }];
  const PINNED = [{
    id: 'mercury',
    name: 'Mercury',
    dot: 'var(--status-progress)',
    blocked: 2
  }, {
    id: 'apollo',
    name: 'Apollo',
    dot: 'var(--status-done)'
  }, {
    id: 'helios',
    name: 'Helios',
    dot: 'var(--status-review)'
  }, {
    id: 'pulse',
    name: 'Pulse',
    dot: 'var(--status-todo)'
  }];
  const NAV_ORG = [{
    id: 'team',
    label: 'Team',
    icon: 'users'
  }, {
    id: 'changelog',
    label: 'Changelog',
    icon: 'file-text'
  }, {
    id: 'settings',
    label: 'Settings',
    icon: 'settings'
  }];
  function Sidebar({
    active,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      className: "sidebar",
      "aria-label": "Primary navigation"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sidebar-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sidebar-logo",
      style: {
        backgroundImage: "url('../../assets/logo-mark.svg')"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "sidebar-brand"
    }, "TASKIMOO", /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }, "."))), NAV_TOP.map(it => /*#__PURE__*/React.createElement("div", {
      key: it.id,
      className: `sidebar-item${active === it.id ? ' active' : ''}`,
      onClick: () => onNavigate(it.id)
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: it.icon,
      size: 15
    }), /*#__PURE__*/React.createElement("span", null, it.label), it.count != null && /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, it.count))), /*#__PURE__*/React.createElement("div", {
      className: "sidebar-section"
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "bookmark",
      size: 10,
      style: {
        marginRight: 4,
        display: 'inline-block',
        verticalAlign: 'middle'
      }
    }), "Pinned \xB7 ", PINNED.length), PINNED.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: `sidebar-item${active === p.id ? ' active' : ''}`,
      onClick: () => onNavigate('delivery')
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: p.dot,
        marginLeft: 3,
        marginRight: 4,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, p.name), p.blocked ? /*#__PURE__*/React.createElement("span", {
      className: "count",
      style: {
        color: 'var(--red-700)',
        fontWeight: 600
      }
    }, p.blocked) : null)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "sidebar-section"
    }, "Workspace"), NAV_ORG.map(it => /*#__PURE__*/React.createElement("div", {
      key: it.id,
      className: `sidebar-item${active === it.id ? ' active' : ''}`,
      onClick: () => onNavigate(it.id)
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: it.icon,
      size: 15
    }), /*#__PURE__*/React.createElement("span", null, it.label))));
  }
  function Topbar({
    crumbs,
    onSignOut,
    theme,
    onToggleTheme
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "topbar"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-icon",
      title: "Collapse"
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "panel-left-close"
    })), /*#__PURE__*/React.createElement("div", {
      className: "breadcrumb"
    }, crumbs.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      className: "sep"
    }, "/"), /*#__PURE__*/React.createElement("span", {
      className: i === crumbs.length - 1 ? 'current' : ''
    }, c)))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "search"
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "search",
      size: 13
    }), /*#__PURE__*/React.createElement("span", null, "Search tasks, bugs, people\u2026"), /*#__PURE__*/React.createElement("span", {
      className: "kbd"
    }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-icon",
      title: "Theme",
      onClick: onToggleTheme
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "moon"
    })), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-icon",
      title: "Notifications"
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "bell"
    })), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-secondary",
      onClick: onSignOut,
      title: "Log out"
    }, /*#__PURE__*/React.createElement(TkIcon, {
      name: "log-out",
      size: 14
    }), "Log out"), /*#__PURE__*/React.createElement("div", {
      className: "avatar sm",
      style: {
        background: '#262626',
        color: '#fff'
      },
      title: "Ken"
    }, "KN"));
  }
  window.TkShell = {
    Sidebar,
    Topbar
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/taskimoo-web/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DualStatus = __ds_scope.DualStatus;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.KPIStrip = __ds_scope.KPIStrip;

__ds_ns.SectionCard = __ds_scope.SectionCard;

__ds_ns.TaskCard = __ds_scope.TaskCard;

})();
