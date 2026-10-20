import { useEffect } from "react";

// Keep the dialog keyboard-accessible and restore its trigger on close.
export default function useModalFocus(ref, active = true) {
  useEffect(() => {
    if (!active || !ref.current) return;
    const dialog = ref.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const siblings = [];
    let current = dialog;
    while (current.parentElement && current !== document.body) {
      const node = current;
      siblings.push(...Array.from(node.parentElement.children).filter((element) => element !== node));
      current = current.parentElement;
    }
    const previousInert = siblings.map((element) => element.inert);
    siblings.forEach((element) => { element.inert = true; });
    document.body.style.overflow = "hidden";
    const focusable = () => Array.from(dialog.querySelectorAll(
      'a[href], button:not(:disabled), input:not(:disabled), textarea:not(:disabled), select:not(:disabled), [tabindex="0"]'
    ));
    const focusFirst = () => (focusable()[0] || dialog).focus();
    focusFirst();
    const trap = (event) => {
      if (event.key !== "Tab") return;
      const elements = focusable();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first) { event.preventDefault(); dialog.focus(); }
      else if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    };
    const containFocus = (event) => { if (!dialog.contains(event.target)) focusFirst(); };
    document.addEventListener("keydown", trap);
    document.addEventListener("focusin", containFocus);
    return () => {
      document.removeEventListener("keydown", trap);
      document.removeEventListener("focusin", containFocus);
      siblings.forEach((element, index) => { element.inert = previousInert[index]; });
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) {
        const target = trigger.checkVisibility && !trigger.checkVisibility()
          ? document.querySelector(".nav__menu-button")
          : trigger;
        target?.focus();
      }
    };
  }, [ref, active]);
}
