import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from "@jupyterlab/application";

import { MainAreaWidget } from "@jupyterlab/apputils";

import { ILauncher } from "@jupyterlab/launcher";

import { reactIcon } from "@jupyterlab/ui-components";

import { CounterWidget } from "./widget";

/**
 * The command IDs used by the react-widget plugin.
 */
namespace CommandIDs {
  export const create = "create-react-widget";
}

/**
 * Initialization data for the react-widget extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: "react-widget",
  autoStart: true,
  optional: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    const { commands } = app;

    const command = CommandIDs.create;
    commands.addCommand(command, {
      caption: "ILMS Module",
      label: "ILMS Module",
      icon: (args) => (args["isPalette"] ? null : reactIcon),
      execute: () => {
        const content = new CounterWidget();
        const widget = new MainAreaWidget<CounterWidget>({ content });
        widget.title.label = "ILMS";
        widget.title.icon = reactIcon;
        app.shell.add(widget, "main");
      },
    });

    if (launcher) {
      launcher.add({
        command,
      });
    }
  },
};

export default extension;
