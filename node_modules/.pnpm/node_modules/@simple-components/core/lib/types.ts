import { Signal } from "./reactivity";

export type StringLike<TString extends string = string> =
  | TString
  | Signal<TString>;
export type NumberLike = number | Signal<number>;
export type BooleanLike = boolean | Signal<boolean>;
export type ObjectLike<TObject extends {} = {}> = TObject | Signal<TObject>;

export type ChildType = VNode | NumberLike | StringLike;

export type PropsType = VNodeData | number | string | null;

/**
 * This file gets copied to all distributions of stencil component collections.
 * - no imports
 */

export interface ComponentWillLoad {
  /**
   * The component is about to load and it has not
   * rendered yet.
   *
   * This is the best place to make any data updates
   * before the first render.
   *
   * componentWillLoad will only be called once.
   */
  componentWillLoad(): Promise<void> | void;
}

export interface ComponentDidLoad {
  /**
   * The component has loaded and has already rendered.
   *
   * Updating data in this method will cause the
   * component to re-render.
   *
   * componentDidLoad will only be called once.
   */
  componentDidLoad(): void;
}

export interface ComponentWillUpdate {
  /**
   * The component is about to update and re-render.
   *
   * Called multiple times throughout the life of
   * the component as it updates.
   *
   * componentWillUpdate is not called on the first render.
   */
  componentWillUpdate(): Promise<void> | void;
}

export interface ComponentDidUpdate {
  /**
   * The component has just re-rendered.
   *
   * Called multiple times throughout the life of
   * the component as it updates.
   *
   * componentWillUpdate is not called on the
   * first render.
   */
  componentDidUpdate(): void;
}

export interface ComponentInterface
  extends ComponentWillLoad,
    ComponentDidLoad,
    ComponentWillLoad,
    ComponentWillUpdate,
    ComponentDidUpdate {
  connectedCallback?(): void;
  disconnectedCallback?(): void;

  componentWillRender?(): Promise<void> | void;
  componentDidRender?(): void;

  render(): VNode | VNode[];

  [memberName: string]: any;
}

/**
 * Host
 */
export interface HostAttributes {
  class?: StringLike | { [className: string]: BooleanLike };
  style?: { [key: string]: StringLike | undefined };
  ref?: (el: ObjectLike<HTMLElement> | null) => void;

  [prop: string]: any;
}

export interface FunctionalComponent<T = {}> {
  (props: T, children: ChildType[]): VNode | VNode[];
}

/**
 * A virtual DOM node
 */

export type TextVNode = {
  $text$?: StringLike;
};

export type ElementVNode = {
  $tag$: StringLike;
  $props$?: any;
  $children$?: ObjectLike<VNode[]>;
};

export type VNode = ElementVNode | TextVNode | any;
// export interface VNode {
//   //$flags$?: NumberLike;
//   $tag$?: StringLike;
//   $elm$?: any;
//   $text$?: StringLike;
//   $children$?: ObjectLike<VNode[]>;
//   $props$?: any;
//   //$name$?: StringLike;
//   //$key$?: StringLike | NumberLike;
// }

export interface VNodeData {
  class?: { [className: string]: BooleanLike };
  style?: any;
  [attrName: string]: any;
}

declare namespace LocalJSX {
  export interface Element {}
  export interface IntrinsicElements extends JSXBase.IntrinsicElements {}
}

export type { LocalJSX as JSX };

export namespace JSXBase {
  export interface IntrinsicElements {
    // Stencil elements
    slot: JSXBase.SlotAttributes;

    // HTML
    a: JSXBase.AnchorHTMLAttributes<HTMLAnchorElement>;
    abbr: JSXBase.HTMLAttributes;
    address: JSXBase.HTMLAttributes;
    area: JSXBase.AreaHTMLAttributes<HTMLAreaElement>;
    article: JSXBase.HTMLAttributes;
    aside: JSXBase.HTMLAttributes;
    audio: JSXBase.AudioHTMLAttributes<HTMLAudioElement>;
    b: JSXBase.HTMLAttributes;
    base: JSXBase.BaseHTMLAttributes<HTMLBaseElement>;
    bdi: JSXBase.HTMLAttributes;
    bdo: JSXBase.HTMLAttributes;
    big: JSXBase.HTMLAttributes;
    blockquote: JSXBase.BlockquoteHTMLAttributes<HTMLQuoteElement>;
    body: JSXBase.HTMLAttributes<HTMLBodyElement>;
    br: JSXBase.HTMLAttributes<HTMLBRElement>;
    button: JSXBase.ButtonHTMLAttributes<HTMLButtonElement>;
    canvas: JSXBase.CanvasHTMLAttributes<HTMLCanvasElement>;
    caption: JSXBase.HTMLAttributes<HTMLTableCaptionElement>;
    cite: JSXBase.HTMLAttributes;
    code: JSXBase.HTMLAttributes;
    col: JSXBase.ColHTMLAttributes<HTMLTableColElement>;
    colgroup: JSXBase.ColgroupHTMLAttributes<HTMLTableColElement>;
    data: JSXBase.HTMLAttributes<HTMLDataElement>;
    datalist: JSXBase.HTMLAttributes<HTMLDataListElement>;
    dd: JSXBase.HTMLAttributes;
    del: JSXBase.DelHTMLAttributes<HTMLModElement>;
    details: JSXBase.DetailsHTMLAttributes<HTMLElement>;
    dfn: JSXBase.HTMLAttributes;
    dialog: JSXBase.DialogHTMLAttributes<HTMLDialogElement>;
    div: JSXBase.HTMLAttributes<HTMLDivElement>;
    dl: JSXBase.HTMLAttributes<HTMLDListElement>;
    dt: JSXBase.HTMLAttributes;
    em: JSXBase.HTMLAttributes;
    embed: JSXBase.EmbedHTMLAttributes<HTMLEmbedElement>;
    fieldset: JSXBase.FieldsetHTMLAttributes<HTMLFieldSetElement>;
    figcaption: JSXBase.HTMLAttributes;
    figure: JSXBase.HTMLAttributes;
    footer: JSXBase.HTMLAttributes;
    form: JSXBase.FormHTMLAttributes<HTMLFormElement>;
    h1: JSXBase.HTMLAttributes<HTMLHeadingElement>;
    h2: JSXBase.HTMLAttributes<HTMLHeadingElement>;
    h3: JSXBase.HTMLAttributes<HTMLHeadingElement>;
    h4: JSXBase.HTMLAttributes<HTMLHeadingElement>;
    h5: JSXBase.HTMLAttributes<HTMLHeadingElement>;
    h6: JSXBase.HTMLAttributes<HTMLHeadingElement>;
    head: JSXBase.HTMLAttributes<HTMLHeadElement>;
    header: JSXBase.HTMLAttributes;
    hgroup: JSXBase.HTMLAttributes;
    hr: JSXBase.HTMLAttributes<HTMLHRElement>;
    html: JSXBase.HTMLAttributes<HTMLHtmlElement>;
    i: JSXBase.HTMLAttributes;
    iframe: JSXBase.IframeHTMLAttributes<HTMLIFrameElement>;
    img: JSXBase.ImgHTMLAttributes<HTMLImageElement>;
    input: JSXBase.InputHTMLAttributes<HTMLInputElement>;
    ins: JSXBase.InsHTMLAttributes<HTMLModElement>;
    kbd: JSXBase.HTMLAttributes;
    keygen: JSXBase.KeygenHTMLAttributes<HTMLElement>;
    label: JSXBase.LabelHTMLAttributes<HTMLLabelElement>;
    legend: JSXBase.HTMLAttributes<HTMLLegendElement>;
    li: JSXBase.LiHTMLAttributes<HTMLLIElement>;
    link: JSXBase.LinkHTMLAttributes<HTMLLinkElement>;
    main: JSXBase.HTMLAttributes;
    map: JSXBase.MapHTMLAttributes<HTMLMapElement>;
    mark: JSXBase.HTMLAttributes;
    menu: JSXBase.MenuHTMLAttributes<HTMLMenuElement>;
    menuitem: JSXBase.HTMLAttributes;
    meta: JSXBase.MetaHTMLAttributes<HTMLMetaElement>;
    meter: JSXBase.MeterHTMLAttributes<HTMLMeterElement>;
    nav: JSXBase.HTMLAttributes;
    noscript: JSXBase.HTMLAttributes;
    object: JSXBase.ObjectHTMLAttributes<HTMLObjectElement>;
    ol: JSXBase.OlHTMLAttributes<HTMLOListElement>;
    optgroup: JSXBase.OptgroupHTMLAttributes<HTMLOptGroupElement>;
    option: JSXBase.OptionHTMLAttributes<HTMLOptionElement>;
    output: JSXBase.OutputHTMLAttributes<HTMLOutputElement>;
    p: JSXBase.HTMLAttributes<HTMLParagraphElement>;
    param: JSXBase.ParamHTMLAttributes<HTMLParamElement>;
    picture: JSXBase.HTMLAttributes<HTMLPictureElement>;
    pre: JSXBase.HTMLAttributes<HTMLPreElement>;
    progress: JSXBase.ProgressHTMLAttributes<HTMLProgressElement>;
    q: JSXBase.QuoteHTMLAttributes<HTMLQuoteElement>;
    rp: JSXBase.HTMLAttributes;
    rt: JSXBase.HTMLAttributes;
    ruby: JSXBase.HTMLAttributes;
    s: JSXBase.HTMLAttributes;
    samp: JSXBase.HTMLAttributes;
    script: JSXBase.ScriptHTMLAttributes<HTMLScriptElement>;
    section: JSXBase.HTMLAttributes;
    select: JSXBase.SelectHTMLAttributes<HTMLSelectElement>;
    small: JSXBase.HTMLAttributes;
    source: JSXBase.SourceHTMLAttributes<HTMLSourceElement>;
    span: JSXBase.HTMLAttributes<HTMLSpanElement>;
    strong: JSXBase.HTMLAttributes;
    style: JSXBase.StyleHTMLAttributes<HTMLStyleElement>;
    sub: JSXBase.HTMLAttributes;
    summary: JSXBase.HTMLAttributes;
    sup: JSXBase.HTMLAttributes;
    table: JSXBase.TableHTMLAttributes<HTMLTableElement>;
    tbody: JSXBase.HTMLAttributes<HTMLTableSectionElement>;
    td: JSXBase.TdHTMLAttributes<HTMLTableDataCellElement>;
    textarea: JSXBase.TextareaHTMLAttributes<HTMLTextAreaElement>;
    tfoot: JSXBase.HTMLAttributes<HTMLTableSectionElement>;
    th: JSXBase.ThHTMLAttributes<HTMLTableHeaderCellElement>;
    thead: JSXBase.HTMLAttributes<HTMLTableSectionElement>;
    time: JSXBase.TimeHTMLAttributes<HTMLTimeElement>;
    title: JSXBase.HTMLAttributes<HTMLTitleElement>;
    tr: JSXBase.HTMLAttributes<HTMLTableRowElement>;
    track: JSXBase.TrackHTMLAttributes<HTMLTrackElement>;
    u: JSXBase.HTMLAttributes;
    ul: JSXBase.HTMLAttributes<HTMLUListElement>;
    var: JSXBase.HTMLAttributes;
    video: JSXBase.VideoHTMLAttributes<HTMLVideoElement>;
    wbr: JSXBase.HTMLAttributes;

    // SVG
    animate: JSXBase.SVGAttributes;
    circle: JSXBase.SVGAttributes;
    clipPath: JSXBase.SVGAttributes;
    defs: JSXBase.SVGAttributes;
    desc: JSXBase.SVGAttributes;
    ellipse: JSXBase.SVGAttributes;
    feBlend: JSXBase.SVGAttributes;
    feColorMatrix: JSXBase.SVGAttributes;
    feComponentTransfer: JSXBase.SVGAttributes;
    feComposite: JSXBase.SVGAttributes;
    feConvolveMatrix: JSXBase.SVGAttributes;
    feDiffuseLighting: JSXBase.SVGAttributes;
    feDisplacementMap: JSXBase.SVGAttributes;
    feDistantLight: JSXBase.SVGAttributes;
    feDropShadow: JSXBase.SVGAttributes;
    feFlood: JSXBase.SVGAttributes;
    feFuncA: JSXBase.SVGAttributes;
    feFuncB: JSXBase.SVGAttributes;
    feFuncG: JSXBase.SVGAttributes;
    feFuncR: JSXBase.SVGAttributes;
    feGaussianBlur: JSXBase.SVGAttributes;
    feImage: JSXBase.SVGAttributes;
    feMerge: JSXBase.SVGAttributes;
    feMergeNode: JSXBase.SVGAttributes;
    feMorphology: JSXBase.SVGAttributes;
    feOffset: JSXBase.SVGAttributes;
    fePointLight: JSXBase.SVGAttributes;
    feSpecularLighting: JSXBase.SVGAttributes;
    feSpotLight: JSXBase.SVGAttributes;
    feTile: JSXBase.SVGAttributes;
    feTurbulence: JSXBase.SVGAttributes;
    filter: JSXBase.SVGAttributes;
    foreignObject: JSXBase.SVGAttributes;
    g: JSXBase.SVGAttributes;
    image: JSXBase.SVGAttributes;
    line: JSXBase.SVGAttributes;
    linearGradient: JSXBase.SVGAttributes;
    marker: JSXBase.SVGAttributes;
    mask: JSXBase.SVGAttributes;
    metadata: JSXBase.SVGAttributes;
    path: JSXBase.SVGAttributes;
    pattern: JSXBase.SVGAttributes;
    polygon: JSXBase.SVGAttributes;
    polyline: JSXBase.SVGAttributes;
    radialGradient: JSXBase.SVGAttributes;
    rect: JSXBase.SVGAttributes;
    stop: JSXBase.SVGAttributes;
    svg: JSXBase.SVGAttributes;
    switch: JSXBase.SVGAttributes;
    symbol: JSXBase.SVGAttributes;
    text: JSXBase.SVGAttributes;
    textPath: JSXBase.SVGAttributes;
    tspan: JSXBase.SVGAttributes;
    use: JSXBase.SVGAttributes;
    view: JSXBase.SVGAttributes;
  }

  export interface SlotAttributes extends JSXAttributes {
    name?: StringLike;
    slot?: StringLike;
    onSlotchange?: (event: Event) => void;
  }

  export interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    download?: ObjectLike<any>;
    href?: StringLike;
    hrefLang?: StringLike;
    hreflang?: StringLike;
    media?: StringLike;
    ping?: StringLike;
    rel?: StringLike;
    target?: StringLike;
    referrerPolicy?: StringLike<ReferrerPolicy>;
  }

  export interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

  export interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: StringLike;
    coords?: StringLike;
    download?: ObjectLike<any>;
    href?: StringLike;
    hrefLang?: StringLike;
    hreflang?: StringLike;
    media?: StringLike;
    rel?: StringLike;
    shape?: StringLike;
    target?: StringLike;
  }

  export interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
    href?: StringLike;
    target?: StringLike;
  }

  export interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: StringLike;
  }

  export interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: BooleanLike;
    form?: StringLike;
    formAction?: StringLike;
    formaction?: StringLike;
    formEncType?: StringLike;
    formenctype?: StringLike;
    formMethod?: StringLike;
    formmethod?: StringLike;
    formNoValidate?: BooleanLike;
    formnovalidate?: BooleanLike;
    formTarget?: StringLike;
    formtarget?: StringLike;
    name?: StringLike;
    type?: StringLike;
    value?: StringLike | ObjectLike<StringLike[]> | NumberLike;

    // popover
    popoverTargetAction?: StringLike;
    popoverTargetElement?: ObjectLike<Element> | null;
    popoverTarget?: StringLike;
  }

  export interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
    height?: NumberLike | StringLike;
    width?: NumberLike | StringLike;
  }

  export interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: NumberLike;
  }

  export interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: NumberLike;
  }

  export interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
    open?: BooleanLike;
    onToggle?: (event: Event) => void;
  }

  export interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: StringLike;
    dateTime?: StringLike;
    datetime?: StringLike;
  }

  export interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
    onCancel?: (event: Event) => void;
    onClose?: (event: Event) => void;
    open?: BooleanLike;
    returnValue?: StringLike;
  }

  export interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
    height?: NumberLike | StringLike;
    src?: StringLike;
    type?: StringLike;
    width?: NumberLike | StringLike;
  }

  export interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: BooleanLike;
    form?: StringLike;
    name?: StringLike;
  }

  export interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    acceptCharset?: StringLike;
    acceptcharset?: StringLike;
    action?: StringLike;
    autoComplete?: StringLike;
    autocomplete?: StringLike;
    encType?: StringLike;
    enctype?: StringLike;
    method?: StringLike;
    name?: StringLike;
    noValidate?: BooleanLike;
    novalidate?: BooleanLike | StringLike;
    target?: StringLike;
  }

  export interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
    manifest?: StringLike;
  }

  export interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
    allow?: StringLike;
    allowFullScreen?: BooleanLike;
    allowfullScreen?: StringLike | BooleanLike;
    allowTransparency?: BooleanLike;
    allowtransparency?: StringLike | BooleanLike;
    frameBorder?: NumberLike | StringLike;
    frameborder?: NumberLike | StringLike;
    importance?: StringLike<"low" | "auto" | "high">;
    height?: NumberLike | StringLike;
    loading?: StringLike<"lazy" | "auto" | "eager">;
    marginHeight?: NumberLike;
    marginheight?: NumberLike | StringLike;
    marginWidth?: NumberLike;
    marginwidth?: NumberLike | StringLike;
    name?: StringLike;
    referrerPolicy?: ReferrerPolicy;
    sandbox?: StringLike;
    scrolling?: StringLike;
    seamless?: BooleanLike;
    src?: StringLike;
    srcDoc?: StringLike;
    srcdoc?: StringLike;
    width?: NumberLike | StringLike;
  }

  export interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: StringLike;
    crossOrigin?: StringLike;
    crossorigin?: StringLike;
    decoding?: StringLike<"async" | "auto" | "sync">;
    importance?: StringLike<"low" | "auto" | "high">;
    height?: NumberLike | StringLike;
    loading?: StringLike<"lazy" | "auto" | "eager">;
    sizes?: StringLike;
    src?: StringLike;
    srcSet?: StringLike;
    srcset?: StringLike;
    useMap?: StringLike;
    usemap?: StringLike;
    width?: NumberLike | StringLike;
  }

  export interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: StringLike;
    dateTime?: StringLike;
    datetime?: StringLike;
  }

  export interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    accept?: StringLike;
    allowdirs?: BooleanLike;
    alt?: StringLike;
    autoCapitalize?: StringLike;
    autocapitalize?: StringLike;
    autoComplete?: StringLike;
    autocomplete?: StringLike;
    capture?: StringLike; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    checked?: BooleanLike;
    crossOrigin?: StringLike;
    crossorigin?: StringLike;
    defaultChecked?: BooleanLike;
    defaultValue?: StringLike;
    dirName?: StringLike;
    disabled?: BooleanLike;
    files?: any;
    form?: StringLike;
    formAction?: StringLike;
    formaction?: StringLike;
    formEncType?: StringLike;
    formenctype?: StringLike;
    formMethod?: StringLike;
    formmethod?: StringLike;
    formNoValidate?: BooleanLike;
    formnovalidate?: BooleanLike;
    formTarget?: StringLike;
    formtarget?: StringLike;
    height?: NumberLike | StringLike;
    indeterminate?: BooleanLike;
    list?: StringLike;
    max?: NumberLike | StringLike;
    maxLength?: NumberLike;
    maxlength?: NumberLike | StringLike;
    min?: NumberLike | StringLike;
    minLength?: NumberLike;
    minlength?: NumberLike | StringLike;
    multiple?: BooleanLike;
    name?: StringLike;
    onSelect?: (event: Event) => void;
    onselect?: (event: Event) => void;
    pattern?: StringLike;
    placeholder?: StringLike;
    readOnly?: BooleanLike;
    readonly?: BooleanLike | StringLike;
    required?: BooleanLike;
    selectionStart?: NumberLike | StringLike;
    selectionEnd?: NumberLike | StringLike;
    selectionDirection?: StringLike;
    size?: NumberLike;
    src?: StringLike;
    step?: NumberLike | StringLike;
    type?: StringLike;
    value?: StringLike | ObjectLike<StringLike[]> | NumberLike;
    valueAsDate?: any;
    valueAsNumber?: any;
    webkitdirectory?: BooleanLike;
    webkitEntries?: any;
    width?: NumberLike | StringLike;

    // popover
    popoverTargetAction?: StringLike;
    popoverTargetElement?: Element | null;
    popoverTarget?: StringLike;
  }

  export interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
    challenge?: StringLike;
    disabled?: BooleanLike;
    form?: StringLike;
    keyType?: StringLike;
    keytype?: StringLike;
    keyParams?: StringLike;
    keyparams?: StringLike;
    name?: StringLike;
  }

  export interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: StringLike;
    htmlFor?: StringLike;
  }

  export interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: StringLike | ObjectLike<StringLike[]> | NumberLike;
  }

  export interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    as?: StringLike;
    href?: StringLike;
    hrefLang?: StringLike;
    hreflang?: StringLike;
    importance?: StringLike<"low" | "auto" | "high">;
    integrity?: StringLike;
    media?: StringLike;
    rel?: StringLike;
    sizes?: StringLike;
    type?: StringLike;
  }

  export interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: StringLike;
  }

  export interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
    type?: StringLike;
  }

  export interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoPlay?: BooleanLike;
    autoplay?: BooleanLike | StringLike;
    controls?: BooleanLike;
    crossOrigin?: StringLike;
    crossorigin?: StringLike;
    loop?: BooleanLike;
    mediaGroup?: StringLike;
    mediagroup?: StringLike;
    muted?: BooleanLike;
    preload?: StringLike;
    src?: StringLike;

    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
    onAbort?: (event: Event) => void;
    onCanPlay?: (event: Event) => void;
    onCanPlayThrough?: (event: Event) => void;
    onDurationChange?: (event: Event) => void;
    onEmptied?: (event: Event) => void;
    onEnded?: (event: Event) => void;
    onError?: (event: Event) => void;
    onInterruptBegin?: (event: Event) => void;
    onInterruptEnd?: (event: Event) => void;
    onLoadedData?: (event: Event) => void;
    onLoadedMetaData?: (event: Event) => void;
    onLoadStart?: (event: Event) => void;
    onMozAudioAvailable?: (event: Event) => void;
    onPause?: (event: Event) => void;
    onPlay?: (event: Event) => void;
    onPlaying?: (event: Event) => void;
    onProgress?: (event: Event) => void;
    onRateChange?: (event: Event) => void;
    onSeeked?: (event: Event) => void;
    onSeeking?: (event: Event) => void;
    onStalled?: (event: Event) => void;
    onSuspend?: (event: Event) => void;
    onTimeUpdate?: (event: Event) => void;
    onVolumeChange?: (event: Event) => void;
    onWaiting?: (event: Event) => void;
  }

  export interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
    charSet?: StringLike;
    charset?: StringLike;
    content?: StringLike;
    httpEquiv?: StringLike;
    httpequiv?: StringLike;
    name?: StringLike;
  }

  export interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: StringLike;
    high?: NumberLike;
    low?: NumberLike;
    max?: NumberLike | StringLike;
    min?: NumberLike | StringLike;
    optimum?: NumberLike;
    value?: StringLike | ObjectLike<StringLike[]> | NumberLike;
  }

  export interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: StringLike;
  }

  export interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
    classID?: StringLike;
    classid?: StringLike;
    data?: StringLike;
    form?: StringLike;
    height?: NumberLike | StringLike;
    name?: StringLike;
    type?: StringLike;
    useMap?: StringLike;
    usemap?: StringLike;
    width?: NumberLike | StringLike;
    wmode?: StringLike;
  }

  export interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
    reversed?: BooleanLike;
    start?: NumberLike;
  }

  export interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: BooleanLike;
    label?: StringLike;
  }

  export interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: BooleanLike;
    label?: StringLike;
    selected?: BooleanLike;
    value?: StringLike | ObjectLike<StringLike[]> | NumberLike;
  }

  export interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: StringLike;
    htmlFor?: StringLike;
    name?: StringLike;
  }

  export interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: StringLike;
    value?: StringLike | ObjectLike<StringLike[]> | NumberLike;
  }

  export interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
    max?: NumberLike | StringLike;
    value?: StringLike | ObjectLike<StringLike[]> | NumberLike;
  }

  export interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
    async?: BooleanLike;
    charSet?: StringLike;
    charset?: StringLike;
    crossOrigin?: StringLike;
    crossorigin?: StringLike;
    defer?: BooleanLike;
    importance?: StringLike<"low" | "auto" | "high">;
    integrity?: StringLike;
    nonce?: StringLike;
    src?: StringLike;
    type?: StringLike;
  }

  export interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: BooleanLike;
    form?: StringLike;
    multiple?: BooleanLike;
    name?: StringLike;
    required?: BooleanLike;
    size?: NumberLike;
    autoComplete?: StringLike;
    autocomplete?: StringLike;
  }

  export interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
    height?: NumberLike;
    media?: StringLike;
    sizes?: StringLike;
    src?: StringLike;
    srcSet?: StringLike;
    type?: StringLike;
    width?: NumberLike;
  }

  export interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
    media?: StringLike;
    nonce?: StringLike;
    scoped?: BooleanLike;
    type?: StringLike;
  }

  export interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
    cellPadding?: NumberLike | StringLike;
    cellpadding?: NumberLike | StringLike;
    cellSpacing?: NumberLike | StringLike;
    cellspacing?: NumberLike | StringLike;
    summary?: StringLike;
  }

  export interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: StringLike;
    autocomplete?: StringLike;
    cols?: NumberLike;
    disabled?: BooleanLike;
    form?: StringLike;
    maxLength?: NumberLike;
    maxlength?: NumberLike | StringLike;
    minLength?: NumberLike;
    minlength?: NumberLike | StringLike;
    name?: StringLike;
    onSelect?: (event: Event) => void;
    onselect?: (event: Event) => void;
    placeholder?: StringLike;
    readOnly?: BooleanLike;
    readonly?: BooleanLike | StringLike;
    required?: BooleanLike;
    rows?: NumberLike;
    value?: StringLike | ObjectLike<StringLike[]> | NumberLike;
    wrap?: StringLike;
  }

  export interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
    colSpan?: NumberLike;
    headers?: StringLike;
    rowSpan?: NumberLike;
  }

  export interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
    abbr?: StringLike;
    colSpan?: NumberLike;
    headers?: StringLike;
    rowSpan?: NumberLike;
    rowspan?: NumberLike | StringLike;
    scope?: StringLike;
  }

  export interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
    dateTime?: StringLike;
  }

  export interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
    default?: BooleanLike;
    kind?: StringLike;
    label?: StringLike;
    src?: StringLike;
    srcLang?: StringLike;
    srclang?: StringLike;
  }

  export interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
    height?: NumberLike | StringLike;
    playsInline?: BooleanLike;
    playsinline?: BooleanLike | StringLike;
    poster?: StringLike;
    width?: NumberLike | StringLike;
  }

  export interface HTMLAttributes<T = HTMLElement> extends DOMAttributes<T> {
    // vdom specific
    innerHTML?: StringLike;

    // Standard HTML Attributes
    accessKey?: StringLike;
    autoFocus?: BooleanLike;
    autofocus?: BooleanLike | StringLike;
    class?: StringLike | { [className: string]: BooleanLike };
    contentEditable?: BooleanLike | StringLike;
    contenteditable?: BooleanLike | StringLike;
    contextMenu?: StringLike;
    contextmenu?: StringLike;
    dir?: StringLike;
    draggable?: BooleanLike;
    hidden?: BooleanLike;
    id?: StringLike;
    inert?: BooleanLike;
    lang?: StringLike;
    spellcheck?: "true" | "false" | any;
    style?: { [key: string]: StringLike | undefined };
    tabIndex?: NumberLike;
    tabindex?: NumberLike | StringLike;
    title?: StringLike;
    // These types don't allow you to use popover as a boolean attribute
    // so you can't write HTML like `<div popover>` and get the default value.
    // Developer must explicitly specify one of the valid popover values or it will fallback
    // to `manual` (following the HTML spec).
    popover?: StringLike | null;

    // Unknown
    inputMode?: StringLike;
    inputmode?: StringLike;
    enterKeyHint?: StringLike;
    enterkeyhint?: StringLike;
    is?: StringLike;
    radioGroup?: StringLike; // <command>, <menuitem>
    radiogroup?: StringLike;

    // WAI-ARIA
    role?: StringLike;

    // RDFa Attributes
    about?: StringLike;
    datatype?: StringLike;
    inlist?: any;
    prefix?: StringLike;
    property?: StringLike;
    resource?: StringLike;
    typeof?: StringLike;
    vocab?: StringLike;

    // Non-standard Attributes
    autoCapitalize?: StringLike;
    autocapitalize?: StringLike;
    autoCorrect?: StringLike;
    autocorrect?: StringLike;
    autoSave?: StringLike;
    autosave?: StringLike;
    color?: StringLike;
    itemProp?: StringLike;
    itemprop?: StringLike;
    itemScope?: BooleanLike;
    itemscope?: BooleanLike;
    itemType?: StringLike;
    itemtype?: StringLike;
    itemID?: StringLike;
    itemid?: StringLike;
    itemRef?: StringLike;
    itemref?: StringLike;
    results?: NumberLike;
    security?: StringLike;
    unselectable?: BooleanLike;
  }

  export interface SVGAttributes<T = SVGElement> extends DOMAttributes<T> {
    // Attributes which also defined in HTMLAttributes
    class?: StringLike | { [className: string]: BooleanLike };
    color?: StringLike;
    height?: NumberLike | StringLike;
    id?: StringLike;
    lang?: StringLike;
    max?: NumberLike | StringLike;
    media?: StringLike;
    method?: StringLike;
    min?: NumberLike | StringLike;
    name?: StringLike;
    style?: { [key: string]: StringLike | undefined };
    target?: StringLike;
    type?: StringLike;
    width?: NumberLike | StringLike;

    // Other HTML properties supported by SVG elements in browsers
    role?: StringLike;
    tabindex?: NumberLike;

    // SVG Specific attributes
    "accent-height"?: NumberLike | StringLike;
    accumulate?: "none" | "sum";
    additive?: "replace" | "sum";
    "alignment-baseline"?:
      | "auto"
      | "baseline"
      | "before-edge"
      | "text-before-edge"
      | "middle"
      | "central"
      | "after-edge"
      | "text-after-edge"
      | "ideographic"
      | "alphabetic"
      | "hanging"
      | "mathematical"
      | "inherit";
    allowReorder?: "no" | "yes";
    alphabetic?: NumberLike | StringLike;
    amplitude?: NumberLike | StringLike;
    "arabic-form"?: "initial" | "medial" | "terminal" | "isolated";
    ascent?: NumberLike | StringLike;
    attributeName?: StringLike;
    attributeType?: StringLike;
    autoReverse?: NumberLike | StringLike;
    azimuth?: NumberLike | StringLike;
    baseFrequency?: NumberLike | StringLike;
    "baseline-shift"?: NumberLike | StringLike;
    baseProfile?: NumberLike | StringLike;
    bbox?: NumberLike | StringLike;
    begin?: NumberLike | StringLike;
    bias?: NumberLike | StringLike;
    by?: NumberLike | StringLike;
    calcMode?: NumberLike | StringLike;
    "cap-height"?: NumberLike | StringLike;
    clip?: NumberLike | StringLike;
    "clip-path"?: StringLike;
    clipPathUnits?: NumberLike | StringLike;
    "clip-rule"?: NumberLike | StringLike;
    "color-interpolation"?: NumberLike | StringLike;
    "color-interpolation-filters"?: "auto" | "sRGB" | "linearRGB";
    "color-profile"?: NumberLike | StringLike;
    "color-rendering"?: NumberLike | StringLike;
    contentScriptType?: NumberLike | StringLike;
    contentStyleType?: NumberLike | StringLike;
    cursor?: NumberLike | StringLike;
    cx?: NumberLike | StringLike;
    cy?: NumberLike | StringLike;
    d?: StringLike;
    decelerate?: NumberLike | StringLike;
    descent?: NumberLike | StringLike;
    diffuseConstant?: NumberLike | StringLike;
    direction?: NumberLike | StringLike;
    display?: NumberLike | StringLike;
    divisor?: NumberLike | StringLike;
    "dominant-baseline"?: NumberLike | StringLike;
    dur?: NumberLike | StringLike;
    dx?: NumberLike | StringLike;
    dy?: NumberLike | StringLike;
    "edge-mode"?: NumberLike | StringLike;
    elevation?: NumberLike | StringLike;
    "enable-background"?: NumberLike | StringLike;
    end?: NumberLike | StringLike;
    exponent?: NumberLike | StringLike;
    externalResourcesRequired?: NumberLike | StringLike;
    fill?: StringLike;
    "fill-opacity"?: NumberLike | StringLike;
    "fill-rule"?: "nonzero" | "evenodd" | "inherit";
    filter?: StringLike;
    filterRes?: NumberLike | StringLike;
    filterUnits?: NumberLike | StringLike;
    "flood-color"?: NumberLike | StringLike;
    "flood-opacity"?: NumberLike | StringLike;
    focusable?: NumberLike | StringLike;
    "font-family"?: StringLike;
    "font-size"?: NumberLike | StringLike;
    "font-size-adjust"?: NumberLike | StringLike;
    "font-stretch"?: NumberLike | StringLike;
    "font-style"?: NumberLike | StringLike;
    "font-variant"?: NumberLike | StringLike;
    "font-weight"?: NumberLike | StringLike;
    format?: NumberLike | StringLike;
    from?: NumberLike | StringLike;
    fx?: NumberLike | StringLike;
    fy?: NumberLike | StringLike;
    g1?: NumberLike | StringLike;
    g2?: NumberLike | StringLike;
    "glyph-name"?: NumberLike | StringLike;
    "glyph-orientation-horizontal"?: NumberLike | StringLike;
    "glyph-orientation-vertical"?: NumberLike | StringLike;
    glyphRef?: NumberLike | StringLike;
    gradientTransform?: StringLike;
    gradientUnits?: StringLike;
    hanging?: NumberLike | StringLike;
    "horiz-adv-x"?: NumberLike | StringLike;
    "horiz-origin-x"?: NumberLike | StringLike;
    href?: StringLike;
    ideographic?: NumberLike | StringLike;
    "image-rendering"?: NumberLike | StringLike;
    in2?: NumberLike | StringLike;
    in?: StringLike;
    intercept?: NumberLike | StringLike;
    k1?: NumberLike | StringLike;
    k2?: NumberLike | StringLike;
    k3?: NumberLike | StringLike;
    k4?: NumberLike | StringLike;
    k?: NumberLike | StringLike;
    kernelMatrix?: NumberLike | StringLike;
    kernelUnitLength?: NumberLike | StringLike;
    kerning?: NumberLike | StringLike;
    keyPoints?: NumberLike | StringLike;
    keySplines?: NumberLike | StringLike;
    keyTimes?: NumberLike | StringLike;
    lengthAdjust?: NumberLike | StringLike;
    "letter-spacing"?: NumberLike | StringLike;
    "lighting-color"?: NumberLike | StringLike;
    limitingConeAngle?: NumberLike | StringLike;
    local?: NumberLike | StringLike;
    "marker-end"?: StringLike;
    markerHeight?: NumberLike | StringLike;
    "marker-mid"?: StringLike;
    "marker-start"?: StringLike;
    markerUnits?: NumberLike | StringLike;
    markerWidth?: NumberLike | StringLike;
    mask?: StringLike;
    maskContentUnits?: NumberLike | StringLike;
    maskUnits?: NumberLike | StringLike;
    mathematical?: NumberLike | StringLike;
    mode?: NumberLike | StringLike;
    numOctaves?: NumberLike | StringLike;
    offset?: NumberLike | StringLike;
    opacity?: NumberLike | StringLike;
    operator?: NumberLike | StringLike;
    order?: NumberLike | StringLike;
    orient?: NumberLike | StringLike;
    orientation?: NumberLike | StringLike;
    origin?: NumberLike | StringLike;
    overflow?: NumberLike | StringLike;
    "overline-position"?: NumberLike | StringLike;
    "overline-thickness"?: NumberLike | StringLike;
    "paint-order"?: NumberLike | StringLike;
    panose1?: NumberLike | StringLike;
    pathLength?: NumberLike | StringLike;
    patternContentUnits?: StringLike;
    patternTransform?: NumberLike | StringLike;
    patternUnits?: StringLike;
    "pointer-events"?: NumberLike | StringLike;
    points?: StringLike;
    pointsAtX?: NumberLike | StringLike;
    pointsAtY?: NumberLike | StringLike;
    pointsAtZ?: NumberLike | StringLike;
    preserveAlpha?: NumberLike | StringLike;
    preserveAspectRatio?: StringLike;
    primitiveUnits?: NumberLike | StringLike;
    r?: NumberLike | StringLike;
    radius?: NumberLike | StringLike;
    refX?: NumberLike | StringLike;
    refY?: NumberLike | StringLike;
    "rendering-intent"?: NumberLike | StringLike;
    repeatCount?: NumberLike | StringLike;
    repeatDur?: NumberLike | StringLike;
    requiredextensions?: NumberLike | StringLike;
    requiredFeatures?: NumberLike | StringLike;
    restart?: NumberLike | StringLike;
    result?: StringLike;
    rotate?: NumberLike | StringLike;
    rx?: NumberLike | StringLike;
    ry?: NumberLike | StringLike;
    scale?: NumberLike | StringLike;
    seed?: NumberLike | StringLike;
    "shape-rendering"?: NumberLike | StringLike;
    slope?: NumberLike | StringLike;
    spacing?: NumberLike | StringLike;
    specularConstant?: NumberLike | StringLike;
    specularExponent?: NumberLike | StringLike;
    speed?: NumberLike | StringLike;
    spreadMethod?: StringLike;
    startOffset?: NumberLike | StringLike;
    stdDeviation?: NumberLike | StringLike;
    stemh?: NumberLike | StringLike;
    stemv?: NumberLike | StringLike;
    stitchTiles?: NumberLike | StringLike;
    "stop-color"?: StringLike;
    "stop-opacity"?: NumberLike | StringLike;
    "strikethrough-position"?: NumberLike | StringLike;
    "strikethrough-thickness"?: NumberLike | StringLike;
    string?: NumberLike | StringLike;
    stroke?: StringLike;
    "stroke-dasharray"?: NumberLike | StringLike;
    "stroke-dashoffset"?: NumberLike | StringLike;
    "stroke-linecap"?: "butt" | "round" | "square" | "inherit";
    "stroke-linejoin"?: "miter" | "round" | "bevel" | "inherit";
    "stroke-miterlimit"?: StringLike;
    "stroke-opacity"?: NumberLike | StringLike;
    "stroke-width"?: NumberLike | StringLike;
    surfaceScale?: NumberLike | StringLike;
    systemLanguage?: NumberLike | StringLike;
    tableValues?: NumberLike | StringLike;
    targetX?: NumberLike | StringLike;
    targetY?: NumberLike | StringLike;
    "text-anchor"?: StringLike;
    "text-decoration"?: NumberLike | StringLike;
    textLength?: NumberLike | StringLike;
    "text-rendering"?: NumberLike | StringLike;
    to?: NumberLike | StringLike;
    transform?: StringLike;
    u1?: NumberLike | StringLike;
    u2?: NumberLike | StringLike;
    "underline-position"?: NumberLike | StringLike;
    "underline-thickness"?: NumberLike | StringLike;
    unicode?: NumberLike | StringLike;
    "unicode-bidi"?: NumberLike | StringLike;
    "unicode-range"?: NumberLike | StringLike;
    "units-per-em"?: NumberLike | StringLike;
    "v-alphabetic"?: NumberLike | StringLike;
    values?: StringLike;
    "vector-effect"?: NumberLike | StringLike;
    version?: StringLike;
    "vert-adv-y"?: NumberLike | StringLike;
    "vert-origin-x"?: NumberLike | StringLike;
    "vert-origin-y"?: NumberLike | StringLike;
    "v-hanging"?: NumberLike | StringLike;
    "v-ideographic"?: NumberLike | StringLike;
    viewBox?: StringLike;
    viewTarget?: NumberLike | StringLike;
    visibility?: NumberLike | StringLike;
    "v-mathematical"?: NumberLike | StringLike;
    widths?: NumberLike | StringLike;
    "word-spacing"?: NumberLike | StringLike;
    "writing-mode"?: NumberLike | StringLike;
    x1?: NumberLike | StringLike;
    x2?: NumberLike | StringLike;
    x?: NumberLike | StringLike;
    "x-channel-selector"?: StringLike;
    "x-height"?: NumberLike | StringLike;
    xlinkActuate?: StringLike;
    xlinkArcrole?: StringLike;
    xlinkHref?: StringLike;
    xlinkRole?: StringLike;
    xlinkShow?: StringLike;
    xlinkTitle?: StringLike;
    xlinkType?: StringLike;
    xmlBase?: StringLike;
    xmlLang?: StringLike;
    xmlns?: StringLike;
    xmlSpace?: StringLike;
    y1?: NumberLike | StringLike;
    y2?: NumberLike | StringLike;
    y?: NumberLike | StringLike;
    yChannelSelector?: StringLike;
    z?: NumberLike | StringLike;
    zoomAndPan?: StringLike;
  }

  export interface DOMAttributes<T> extends JSXAttributes<T> {
    slot?: StringLike;
    part?: StringLike;
    exportparts?: StringLike;

    // Clipboard Events
    onCopy?: (event: ClipboardEvent) => void;
    onCopyCapture?: (event: ClipboardEvent) => void;
    onCut?: (event: ClipboardEvent) => void;
    onCutCapture?: (event: ClipboardEvent) => void;
    onPaste?: (event: ClipboardEvent) => void;
    onPasteCapture?: (event: ClipboardEvent) => void;

    // Composition Events
    onCompositionend?: (event: CompositionEvent) => void;
    onCompositionendCapture?: (event: CompositionEvent) => void;
    onCompositionstart?: (event: CompositionEvent) => void;
    onCompositionstartCapture?: (event: CompositionEvent) => void;
    onCompositionupdate?: (event: CompositionEvent) => void;
    onCompositionupdateCapture?: (event: CompositionEvent) => void;

    // Focus Events
    onFocus?: (event: FocusEvent) => void;
    onFocusCapture?: (event: FocusEvent) => void;
    onFocusin?: (event: FocusEvent) => void;
    onFocusinCapture?: (event: FocusEvent) => void;
    onFocusout?: (event: FocusEvent) => void;
    onFocusoutCapture?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onBlurCapture?: (event: FocusEvent) => void;

    // Form Events
    onChange?: (event: Event) => void;
    onChangeCapture?: (event: Event) => void;
    onInput?: (event: InputEvent) => void;
    onInputCapture?: (event: InputEvent) => void;
    onReset?: (event: Event) => void;
    onResetCapture?: (event: Event) => void;
    onSubmit?: (event: Event) => void;
    onSubmitCapture?: (event: Event) => void;
    onInvalid?: (event: Event) => void;
    onInvalidCapture?: (event: Event) => void;

    // Image Events
    onLoad?: (event: Event) => void;
    onLoadCapture?: (event: Event) => void;
    onError?: (event: Event) => void; // also a Media Event
    onErrorCapture?: (event: Event) => void; // also a Media Event

    // Keyboard Events
    onKeyDown?: (event: KeyboardEvent) => void;
    onKeyDownCapture?: (event: KeyboardEvent) => void;
    onKeyPress?: (event: KeyboardEvent) => void;
    onKeyPressCapture?: (event: KeyboardEvent) => void;
    onKeyUp?: (event: KeyboardEvent) => void;
    onKeyUpCapture?: (event: KeyboardEvent) => void;

    // MouseEvents
    onAuxClick?: (event: MouseEvent) => void;
    onClick?: (event: MouseEvent) => void;
    onClickCapture?: (event: MouseEvent) => void;
    onContextMenu?: (event: MouseEvent) => void;
    onContextMenuCapture?: (event: MouseEvent) => void;
    onDblClick?: (event: MouseEvent) => void;
    onDblClickCapture?: (event: MouseEvent) => void;
    onDrag?: (event: DragEvent) => void;
    onDragCapture?: (event: DragEvent) => void;
    onDragEnd?: (event: DragEvent) => void;
    onDragEndCapture?: (event: DragEvent) => void;
    onDragEnter?: (event: DragEvent) => void;
    onDragEnterCapture?: (event: DragEvent) => void;
    onDragExit?: (event: DragEvent) => void;
    onDragExitCapture?: (event: DragEvent) => void;
    onDragLeave?: (event: DragEvent) => void;
    onDragLeaveCapture?: (event: DragEvent) => void;
    onDragOver?: (event: DragEvent) => void;
    onDragOverCapture?: (event: DragEvent) => void;
    onDragStart?: (event: DragEvent) => void;
    onDragStartCapture?: (event: DragEvent) => void;
    onDrop?: (event: DragEvent) => void;
    onDropCapture?: (event: DragEvent) => void;
    onMouseDown?: (event: MouseEvent) => void;
    onMouseDownCapture?: (event: MouseEvent) => void;
    onMouseEnter?: (event: MouseEvent) => void;
    onMouseLeave?: (event: MouseEvent) => void;
    onMouseMove?: (event: MouseEvent) => void;
    onMouseMoveCapture?: (event: MouseEvent) => void;
    onMouseOut?: (event: MouseEvent) => void;
    onMouseOutCapture?: (event: MouseEvent) => void;
    onMouseOver?: (event: MouseEvent) => void;
    onMouseOverCapture?: (event: MouseEvent) => void;
    onMouseUp?: (event: MouseEvent) => void;
    onMouseUpCapture?: (event: MouseEvent) => void;

    // Touch Events
    onTouchCancel?: (event: TouchEvent) => void;
    onTouchCancelCapture?: (event: TouchEvent) => void;
    onTouchEnd?: (event: TouchEvent) => void;
    onTouchEndCapture?: (event: TouchEvent) => void;
    onTouchMove?: (event: TouchEvent) => void;
    onTouchMoveCapture?: (event: TouchEvent) => void;
    onTouchStart?: (event: TouchEvent) => void;
    onTouchStartCapture?: (event: TouchEvent) => void;

    // Pointer Events
    onPointerDown?: (event: PointerEvent) => void;
    onPointerDownCapture?: (event: PointerEvent) => void;
    onPointerMove?: (event: PointerEvent) => void;
    onPointerMoveCapture?: (event: PointerEvent) => void;
    onPointerUp?: (event: PointerEvent) => void;
    onPointerUpCapture?: (event: PointerEvent) => void;
    onPointerCancel?: (event: PointerEvent) => void;
    onPointerCancelCapture?: (event: PointerEvent) => void;
    onPointerEnter?: (event: PointerEvent) => void;
    onPointerEnterCapture?: (event: PointerEvent) => void;
    onPointerLeave?: (event: PointerEvent) => void;
    onPointerLeaveCapture?: (event: PointerEvent) => void;
    onPointerOver?: (event: PointerEvent) => void;
    onPointerOverCapture?: (event: PointerEvent) => void;
    onPointerOut?: (event: PointerEvent) => void;
    onPointerOutCapture?: (event: PointerEvent) => void;
    onGotPointerCapture?: (event: PointerEvent) => void;
    onGotPointerCaptureCapture?: (event: PointerEvent) => void;
    onLostPointerCapture?: (event: PointerEvent) => void;
    onLostPointerCaptureCapture?: (event: PointerEvent) => void;

    // UI Events
    onScroll?: (event: UIEvent) => void;
    onScrollCapture?: (event: UIEvent) => void;

    // Wheel Events
    onWheel?: (event: WheelEvent) => void;
    onWheelCapture?: (event: WheelEvent) => void;

    // Animation Events
    onAnimationStart?: (event: AnimationEvent) => void;
    onAnimationStartCapture?: (event: AnimationEvent) => void;
    onAnimationEnd?: (event: AnimationEvent) => void;
    onAnimationEndCapture?: (event: AnimationEvent) => void;
    onAnimationIteration?: (event: AnimationEvent) => void;
    onAnimationIterationCapture?: (event: AnimationEvent) => void;

    // Transition Events
    onTransitionCancel?: (event: TransitionEvent) => void;
    onTransitionCancelCapture?: (event: TransitionEvent) => void;
    onTransitionEnd?: (event: TransitionEvent) => void;
    onTransitionEndCapture?: (event: TransitionEvent) => void;
    onTransitionRun?: (event: TransitionEvent) => void;
    onTransitionRunCapture?: (event: TransitionEvent) => void;
    onTransitionStart?: (event: TransitionEvent) => void;
    onTransitionStartCapture?: (event: TransitionEvent) => void;
  }
}

export interface JSXAttributes<T = Element> {
  // vdom specific
  key?: NumberLike | StringLike;
  ref?: (elm?: T) => void;
}
