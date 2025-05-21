import { useState } from 'react';
import { View } from 'react-native';
import { ButtonGroup, Input, Text } from '@rneui/themed';
import { Colors } from '@/utils/colors';

interface FilterProps {
    onFilter: (value: string, filterParam: string) => void;
    numResults?: number
}

const Filter = ({ onFilter, numResults = 0 }: FilterProps) => {

    // Estado para gestionar el temporizador
    const [trigger, setTrigger] = useState<NodeJS.Timeout>();
    // Estado para gestionar el texto del input
    const [text, setText] = useState<string>('');
    // Estado parámetro de búsqueda
    const [groupIndex, setGroupIndex] = useState<number>(0);

    // Objeto de opciones para el grupo de botones
    const groupOptions = { 'Symbol': 'symbol', 'Name': 'name' };



    const onChangeText = (value: string) => {
        clearTimeout(trigger);
        setText(value);

        const timer = setTimeout(() => {
            onFilter(value, Object.values(groupOptions)[groupIndex]);
        }, 500);

        setTrigger(timer);
    }

    const onChangeParam = (indexParam: number) => {
        setGroupIndex(indexParam);

        // Dispara búsqueda al seleccionar un group item
        onFilter(text, Object.values(groupOptions)[indexParam]);
    }

    const onCleanInput = () => {
        setText('');
        onFilter('', Object.values(groupOptions)[groupIndex]);
    }

    const optionSelected = Object.keys(groupOptions)[groupIndex];

    return (
        <View style={{ paddingTop: 20, paddingBottom: text !== '' ? 10 : 0 }}>
            <ButtonGroup
                // disabled={text === ''}
                buttons={Object.keys(groupOptions)}
                selectedIndex={groupIndex}
                onPress={onChangeParam}
                containerStyle={{ marginBottom: 20 }}
                selectedButtonStyle={{ backgroundColor: Colors.primary }}
                selectedTextStyle={{ color: '#FFF' }}
            />
            <Input
                value={text}
                onChangeText={onChangeText}
                placeholder={`Coin ${optionSelected}`}

                leftIcon={{ type: 'material-icons', name: 'filter-list', color: 'white' }}
                rightIcon={{
                    type: 'material-icons',
                    name: 'clear',
                    color: text === '' ? 'gray' : 'white',
                    onPress: onCleanInput
                }}
                style={{ color: 'white', fontWeight: 'bold' }}
                label={`Filter coin by ${optionSelected}`}
                inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 10, borderRadius: 10, marginTop: 5 }}
            />
            {text !== '' && <Text style={{ paddingLeft: 10 }}>Results found: {numResults}</Text>}
        </View>
    )
};

export default Filter;