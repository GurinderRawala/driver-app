import { ThemeConsumer, ThemeOptions } from '@rneui/themed'
import { PMCard } from 'components/cards'
import { PMButton } from 'components/pm-button';
import React,{ FC } from 'react'
import {StyleSheet } from 'react-native';

export const TripActionButton: FC = () => (
    <ThemeConsumer>
        {
            ({ theme }) => (
                <PMCard containerStyle={tripActionButtonStyles(theme).container} wrapperStyle={tripActionButtonStyles(theme).buttonWrapper}>
                    <PMButton  color="primary">Accept</PMButton>
                    <PMButton  color="secondary">Reject</PMButton>
                </PMCard>
            )
        }
    </ThemeConsumer>
)

export const tripActionButtonStyles = (theme: ThemeOptions) => StyleSheet.create(
    {
        container: {
            position: 'absolute',
            bottom: 20,
            left: 0,
            backgroundColor: theme.colors.grey4,
        },
        buttonWrapper: {
            flexDirection: 'row',
            justifyContent: "space-evenly",
        },
    }
)