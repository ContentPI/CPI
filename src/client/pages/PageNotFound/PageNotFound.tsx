// Dependencies
import React, { FC, useContext } from 'react'

// Contexts
import { I18nContext } from '~/client/contexts/i18n'

// Styles
import { StyledPageNotFound } from './PageNotFound.styled'

type Props = {
  noLayout?: boolean
}

const PageNotFound: FC<Props> = ({ noLayout = false }) => {
  // Contexts
  const { t } = useContext(I18nContext)

  // Characters
  const characters = ['boy', 'girl']
  const image = characters[Math.round(Math.random())]

  let text = `${t("We tried really hard, but couldn't find the page you were looking for.")}`
  text += ` ${t(
    'You may find what you were looking for on our',
    '<a href="/dashboard">dashboard homepage</a>.'
  )}`

  const Page404 = (
    <StyledPageNotFound className={image}>
      <img alt={t('Not Found')} src={`/images/characters/${image}.png`} />

      <div className="notFound">
        <h1>404</h1>

        <span>{t('Um, yeah. This is awkward')}.</span>

        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </StyledPageNotFound>
  )

  // TODO: Add MainLayout
  if (noLayout) {
    return <>{Page404}</>
  }

  return <>{Page404}</>
}

export default PageNotFound
