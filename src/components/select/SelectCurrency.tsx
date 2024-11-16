import React from 'react'

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import { SelectItemProps } from '@radix-ui/react-select'
import clsx from 'clsx'

import styles from './select.module.scss'

import { CurrencyResponse } from '../../services'

type Props = {
  currency?: CurrencyResponse[]
  onChange?: (value: string) => void
}

export const SelectCurrency = ({ currency, onChange }: Props) => {
  return (
    <Select.Root onValueChange={onChange}>
      <Select.Trigger aria-label={'Food'} className={styles.Trigger}>
        <Select.Value placeholder={'Select a currency…'} />
        <Select.Icon className={styles.Icon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={styles.Content}>
          <Select.ScrollUpButton className={styles.ScrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className={styles.Viewport}>
            <Select.Group>
              <Select.Label className={styles.Label}>Currency</Select.Label>
              {currency?.map(currency => {
                return (
                  <SelectItem key={currency.cc} value={currency.cc}>
                    {currency.txt}
                  </SelectItem>
                )
              })}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={styles.ScrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default SelectCurrency

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={clsx(styles.Item, className)} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={styles.ItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    )
  }
)
