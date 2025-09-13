import { FilterStatus } from "@/types/FilterStatus";

import { CircleDashed, CircleCheck } from "lucide-react-native"



export function StatusIcon({ status }: { status: FilterStatus }) {
    return status === FilterStatus.DONE ? 
    (<CircleCheck color="#4EAF64" />) : 
    (<CircleDashed color="#E25858" />)
}