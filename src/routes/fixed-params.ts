import type { Metadata } from "next";
import type { ReactNode } from "react";

type Params = Record<string, string>;
// Incoming params come from Next and may be empty (`Promise<{}>` for a static route).
type Props = { params: Promise<object>; children?: ReactNode };
type PageFn = (props: never) => ReactNode | Promise<ReactNode>;
type MetaFn = (props: never) => Promise<Metadata> | Metadata;

/**
 * Wraps a shared route module so it runs with some params pinned. English routes live at real,
 * unprefixed static paths (so they're prerendered and served from the static cache) and reuse
 * the same page logic as /[lang]/ routes by pinning { lang: "en", ... }.
 */
export function withParams(mod: { default: PageFn; generateMetadata?: MetaFn }, fixed: Params) {
  const merge = (params?: Promise<object>) => Promise.resolve(params ?? {}).then((p) => ({ ...p, ...fixed }));
  const Page = (props: Props) => (mod.default as (p: Props) => ReactNode)({ ...props, params: merge(props.params) });
  const generateMetadata = mod.generateMetadata
    ? (props: Props) => (mod.generateMetadata as (p: Props) => Promise<Metadata>)({ ...props, params: merge(props.params) })
    : undefined;
  return { Page, generateMetadata };
}
