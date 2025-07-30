import { Pressable, Text } from "react-native";
import { styles } from "./style";

export default function sla(props){
    return(
        <Pressable>
            <Text style={styles.pressableTitle}>
                {props.title}
            </Text>
        </Pressable>
    )
}