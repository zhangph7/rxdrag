import { memo, useMemo } from "react"
import styled, { ThemeProvider } from "styled-components"
import { Navbar } from "../Navbar"
import { Toolbar } from "../Toolbar"
import { Toolbox } from "../Toolbox"
import { PropertyPanel } from "../PropertyPanel"
import { GlobalToken, theme } from "antd"

const Container = styled.div`
  z-index: 100000;
`

export const Toolkits = memo((props: {
  toolbox?: React.ReactNode,
  toolbar?: React.ReactNode | false,
}) => {
  const { toolbox, toolbar } = props;
  const { token } = theme.useToken()
  const themeValue: { token: GlobalToken } = useMemo(() => {
    return {
      token
    }
  }, [token])
  return (
    <ThemeProvider theme={themeValue}>
      <Container>
        {
          toolbox !== false &&
          <Toolbox>
            {toolbox}
          </Toolbox>
        }
        
        <PropertyPanel />
        {
          toolbar !== false &&
          <Toolbar>
            {toolbar}
          </Toolbar>
        }
        <Navbar />
      </Container>
    </ThemeProvider>
  )
})