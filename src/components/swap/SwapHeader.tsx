import { Trans } from '@lingui/macro'
import { Percent } from '@uniswap/sdk-core'
import { InterfaceTrade } from 'state/routing/types'
import styled from 'styled-components/macro'
import { ThemedText } from 'theme'

import { RowBetween, RowFixed } from '../Row'
import SettingsTab from '../Settings'

const StyledSwapHeader = styled(RowBetween)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textSecondary};
`

const HeaderButtonContainer = styled(RowFixed)`
  padding: 0 12px;
  gap: 16px;
`

export default function SwapHeader({
  autoSlippage,
  chainId,
  trade,
}: {
  autoSlippage: Percent
  chainId?: number
  trade?: InterfaceTrade
}) {
  return (
    <StyledSwapHeader>
      <HeaderButtonContainer>
        <ThemedText.SubHeader>
          <Trans>Swap</Trans>
        </ThemedText.SubHeader>
      </HeaderButtonContainer>
      <RowFixed>
        <SettingsTab autoSlippage={autoSlippage} chainId={chainId} trade={trade} />
      </RowFixed>
    </StyledSwapHeader>
  )
}
