<<<<<<< HEAD
import Button from './button' 
import Input from './input'
import CategoryTab from './categoryTab'
import Pilihan from './pilihan'

export {Button, Input, CategoryTab, Pilihan}
=======
import { Text, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectInput, SelectItem, SelectPortal, SelectTrigger, FormControlLabel } from "@gluestack-ui/themed";
import React, { useState } from "react";

const Pilihan = ({ label, datas, width, height, fontSize, selectedValue, onValueChange }) => {
    if (label === "Status") {
        return (
            <>
                <FormControlLabel marginTop={"$10"}>
                    <Text fontSize={fontSize ? fontSize : "$lg"}>{label} :</Text>
                </FormControlLabel>
                <Select onValueChange={onValueChange} selectedValue={selectedValue}>
                    <SelectTrigger>
                        <SelectInput fontSize={fontSize ? fontSize : "$lg"} placeholder="-- Pilih ---" width={width} height={height ? height : "$40"} color="$black" />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                            <SelectDragIndicatorWrapper borderWidth={"$1"} borderRadius={"$sm"}>
                                <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label="Progress" value="progress" />
                            <SelectItem label="Done" value="done" />
                        </SelectContent>
                    </SelectPortal>
                </Select>
            </>
        );
    } else if (label === "Category") {
        return (
            <>
                <FormControlLabel marginTop={"$10"}>
                    <Text fontSize={fontSize ? fontSize : "$lg"}>{label} :</Text>
                </FormControlLabel>
                <Select onValueChange={onValueChange} selectedValue={selectedValue}>
                    <SelectTrigger>
                        <SelectInput fontSize={fontSize ? fontSize : "$lg"} placeholder="-- Pilih ---" width={width} height={height ? height : "$40"} color="$black" />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                            <SelectDragIndicatorWrapper borderWidth={"$1"} borderRadius={"$sm"}>
                                <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label={"Dummy"} value={null} />
                            <SelectItem label={"Dummy"} value={null} />
                            <SelectItem label={"Dummy"} value={null} />
                        </SelectContent>
                    </SelectPortal>
                </Select>
            </>
        );
    }
};

export default Pilihan;
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
