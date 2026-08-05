import { logColor } from "./log-color";

export async function asyncDelay(millisenconds: number = 0, verbose = false) {
  if (millisenconds <= 0) return;

  if (verbose) {
    logColor(`delay de ${millisenconds / 1000}ms`);
  }

  await new Promise((resolve) => setTimeout(resolve, millisenconds));
}
