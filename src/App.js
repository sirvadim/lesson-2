import React, { Component } from 'react'
import { Normalize } from 'styled-normalize'

import { ThemeProvider, theme } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { GlobalStyles } from '@ui/theme'

import { Registration, Exchange } from '@ui/pages'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Normalize />
          <GlobalStyles />
          {/* <div className="App">
            <Body2>lesson1</Body2>
          </div> */}
          {/* <Registration /> */}
          <Exchange />
        </>
      </ThemeProvider>
    )
  }
}

export default App
