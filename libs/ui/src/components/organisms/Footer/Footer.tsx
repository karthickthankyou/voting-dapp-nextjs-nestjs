import { Container } from '../../atoms/Container'

export interface IFooterProps {}

export const Footer = () => (
  <footer className="border-t">
    <Container className="justify-between pt-8 mt-8 text-xs sm:flex">
      <a target="_blank" href="https://www.iamkarthick.com" rel="noreferrer">
        <div
          // Brand color!
          style={{ color: '#e63746' }}
          className="font-light text-xl py-0.5"
        >
          Karthick Ragavendran
        </div>
        <div>2023</div>
      </a>
      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
        <div>Privacy policy</div>
        <div>Cookie policy</div>
        <div>Cookie settings</div>
        <div>Terms and Conditions</div>
      </div>
    </Container>
  </footer>
)
