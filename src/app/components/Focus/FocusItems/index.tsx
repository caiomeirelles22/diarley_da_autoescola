import { FocusItem} from "./FocusItem";
import { focusItemProps } from "./FocusItemModal";

export interface FocusItemsProps {
    focusItems: focusItemProps[]
}

export function FocusItems({focusItems}:FocusItemsProps) { 
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
            {focusItems.map((item:focusItemProps, key) => (
                <FocusItem key={key}  title={item.title} foto={item.foto} intro={item.intro} propostals={item.propostals}/>
            ))}
        </div>
    );
}