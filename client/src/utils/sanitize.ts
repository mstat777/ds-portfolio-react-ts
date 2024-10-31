import DOMPurify from "dompurify";

// Add a hook to make all DOMPurify'd links open a new window
export function domPurifyOpenLinksInNewWindow() {
    DOMPurify.addHook('afterSanitizeAttributes', function(node: any) {
      // set all elements owning target to target=_blank
      if ('target' in node) {
        node.setAttribute('target', '_blank');
        // prevent https://www.owasp.org/index.php/Reverse_Tabnabbing
        node.setAttribute('rel', 'noopener noreferrer');
      }
      // set non-HTML/MathML links to xlink:show=new
      if (!node.hasAttribute('target') && (node.hasAttribute('xlink:href') || node.hasAttribute('href'))) {
        node.setAttribute('xlink:show', 'new');
      }
      return node;
    });
  }