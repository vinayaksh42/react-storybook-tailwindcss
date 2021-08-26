import '../src/index.css';
import '../src/index.css';
import '../src/components/atoms/button/button.css';
import '../src/components/atoms/category-button/category-button.css';
import '../src/components/atoms/exit/exit.css';
import '../src/components/atoms/upload/upload.css';
import '../src/components/molecules/workflow/workflow.css';
import '../src/components/organisms/organisms.css';
import '../src/pages/template/template.css';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}