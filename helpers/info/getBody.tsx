import { mergeObjectsWithRekey } from "@/helpers/_silabs/mergeObjectsWithRekey";
import { getArmList } from "@/helpers/generator/body/getArmList";
import { getLegsList } from "@/helpers/generator/body/getLegsList";
import { GeneratorItem } from "@/types/Generator";

export function getBody(
    game: string = "all",
    value: string = ""
): GeneratorItem | Record<string, GeneratorItem> {
    const data = mergeObjectsWithRekey(
        getArmList(game),
        getLegsList(game)
    ) as Record<string, GeneratorItem>;

    return data;
}
