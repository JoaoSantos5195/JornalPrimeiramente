import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
export default function Button(props){
    return(
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.buttonTitle}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}
