import { ThemeConsumer, ThemeOptions } from '@rneui/themed'
import { PMCard } from 'components/cards'
import { PMButton, PMButtonProps } from 'components/pm-button';
import React,{ FC } from 'react'
import {StyleSheet } from 'react-native';

export interface TripActionButtonProps{
    acceptButtonProps: Omit<PMButtonProps, "color">
    rejectButtonProps: Omit<PMButtonProps, "color">
}

export const TripActionButton: FC<TripActionButtonProps> = (
    {
        acceptButtonProps,
        rejectButtonProps
    }
) => (
    <ThemeConsumer>
        {
            ({ theme }) => (
                <PMCard containerStyle={tripActionButtonStyles(theme).container} wrapperStyle={tripActionButtonStyles(theme).buttonWrapper}>
                    <PMButton  color="primary" { ...acceptButtonProps }>Accept</PMButton>
                    <PMButton  color="secondary" { ...rejectButtonProps }>Reject</PMButton>
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