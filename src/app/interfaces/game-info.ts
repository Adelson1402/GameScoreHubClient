import { Cover } from "./cover";
import { Screenshot } from "./screenshot";

export interface GameInfo {
    id: number;
    name: string;
    cover: Cover;
    screenshot: Screenshot[];
}
