import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ComponentWithAs, IconProps, useColorModeValue } from '@chakra-ui/react';
import BlackLogo from "../assets/img/pegasus_black.png"
import WhiteLogo from "../assets/img/pegasus_white.png"

interface ColorHookResult {
  changeMode: ComponentWithAs<"svg", IconProps>
  logoMode: string
  background: string
  required: string
  input: string
  inputbg: string
  placeholder: string
  border: string
  currencySymbol: string
  currencyValue: string
  contact: string
  cardBorder: string
  fadeText: string
  black: string
  main: string
  panelbg: string
  progressStatus: string
  yellow: string
  green: string
  blue: string
  lightBlue: string
  lightGreen: string
}

export const useColor = (): ColorHookResult => {
  const changeMode = useColorModeValue(MoonIcon, SunIcon);
  const logoMode = useColorModeValue(BlackLogo, WhiteLogo);
  const background = useColorModeValue("white", "brand.900");
  const required = useColorModeValue('#F43F5E', 'black')
  const input = useColorModeValue('rock.800', 'white')
  const inputbg = useColorModeValue('rock.50', 'white')
  const placeholder = useColorModeValue('rock.300', 'gray.500')
  const border = useColorModeValue('rock.100', 'white')
  const currencySymbol = useColorModeValue('#F43F5E', 'white')
  const currencyValue = useColorModeValue('#FDA4AF', 'gray.50')
  const contact = useColorModeValue('#10B981', '#90B989')
  const cardBorder = useColorModeValue('brand.500', 'white')
  const fadeText = useColorModeValue('rock.400', 'white')
  const black = useColorModeValue('black', 'rock.900')
  const main = useColorModeValue('brand.500', 'white')
  const panelbg = useColorModeValue('brand.100', 'black')
  const progressStatus = useColorModeValue('rock.500', 'gray.100')
  const yellow = useColorModeValue('#cda900', '#3286ff')
  const green = useColorModeValue('#26a17b', '#d94e82')
  const blue = useColorModeValue('#2079FF', '#df8600')
  const lightBlue = useColorModeValue('#76deff', '#892100')
  const lightGreen = useColorModeValue('#34d399', '#cb2c00');


  return {
    changeMode,
    logoMode,
    background,
    required,
    input,
    inputbg,
    placeholder,
    border,
    currencySymbol,
    currencyValue,
    contact,
    cardBorder,
    fadeText,
    black,
    main,
    panelbg,
    progressStatus,
    yellow,
    green,
    blue,
    lightBlue,
    lightGreen
  };
};