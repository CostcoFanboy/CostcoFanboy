import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:mihaidamaschinwebdev@gmail.com');

  return 'Opening mailto:mihaidamaschinwebdev@gmail.com...';
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: unable to run the command '${args[0]}' as root. C'mon you didn't think it would be this easy, did you?`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/CostcoFanboy/CostcoFanboy', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const credits = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/m4tt72/terminal', '_blank');
  }, 1000);

  return `Credits to M4TT72 for this template!`;
}

export const banner = (args?: string[]): string => {
  return `
███╗   ███╗██╗██╗  ██╗ █████╗ ██╗    ██████╗  █████╗ ███╗   ███╗ █████╗ ███████╗ ██████╗██╗  ██╗██╗███╗   ██╗
████╗ ████║██║██║  ██║██╔══██╗██║    ██╔══██╗██╔══██╗████╗ ████║██╔══██╗██╔════╝██╔════╝██║  ██║██║████╗  ██║
██╔████╔██║██║███████║███████║██║    ██║  ██║███████║██╔████╔██║███████║███████╗██║     ███████║██║██╔██╗ ██║
██║╚██╔╝██║██║██╔══██║██╔══██║██║    ██║  ██║██╔══██║██║╚██╔╝██║██╔══██║╚════██║██║     ██╔══██║██║██║╚██╗██║
██║ ╚═╝ ██║██║██║  ██║██║  ██║██║    ██████╔╝██║  ██║██║ ╚═╝ ██║██║  ██║███████║╚██████╗██║  ██║██║██║ ╚████║
╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝
                                                                                                              v${packageJson.version}

Type 'help' to see list of available commands.
--
`;
};