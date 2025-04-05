import React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const PostgresqlFill = React.memo((props: IconProps) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        fill={color}
        d="M16.805 1a9.9 9.9 0 0 0-2.603.37l-.06.018a10.6 10.6 0 0 0-1.615-.151c-1.113-.019-2.07.243-2.84.68-.76-.256-2.336-.697-3.997-.609-1.157.061-2.419.402-3.354 1.36-.933.958-1.426 2.44-1.322 4.457.028.557.191 1.464.463 2.64.27 1.175.652 2.55 1.127 3.805s.996 2.384 1.81 3.15c.406.384.965.707 1.624.68.463-.018.882-.215 1.243-.506.176.225.364.323.535.414.215.114.425.192.642.244.39.094 1.059.22 1.84.091.267-.043.548-.127.828-.247.01.302.022.598.035.898.038.95.063 1.827.357 2.596.047.126.176.773.687 1.344.51.572 1.51.928 2.648.692.803-.167 1.825-.468 2.503-1.404.67-.926.973-2.254 1.033-4.409.015-.116.033-.215.052-.308l.16.014h.018c.857.038 1.787-.08 2.564-.43.688-.31 1.208-.622 1.587-1.177.095-.137.199-.303.227-.59.028-.285-.14-.733-.421-.939-.563-.414-.916-.257-1.295-.18q-.56.12-1.136.133c1.093-1.784 1.876-3.68 2.323-5.358.264-.99.413-1.903.425-2.701s-.055-1.505-.548-2.117c-1.541-1.91-3.708-2.438-5.384-2.456q-.078-.002-.156-.001zm-.044.587c1.585-.015 3.611.417 5.065 2.22.327.405.424.997.413 1.727-.012.729-.151 1.601-.405 2.557-.493 1.852-1.425 4.01-2.738 5.948a.7.7 0 0 0 .15.079c.274.11.898.204 2.145-.044.313-.065.543-.108.781.068a.48.48 0 0 1 .173.39.64.64 0 0 1-.123.308c-.24.351-.716.684-1.326.958-.539.244-1.313.371-1.999.379-.344.003-.661-.023-.93-.104l-.018-.006c-.104.971-.343 2.89-.498 3.765-.125.706-.343 1.267-.76 1.687-.416.42-1.004.673-1.796.838-.981.204-1.696-.016-2.157-.393-.46-.375-.671-.874-.798-1.18-.087-.21-.132-.483-.176-.848a18 18 0 0 1-.097-1.315 46 46 0 0 1-.028-2.312c-.41.363-.92.605-1.467.696-.65.107-1.232.002-1.579-.082a2.2 2.2 0 0 1-.49-.185c-.162-.083-.315-.177-.417-.363a.5.5 0 0 1-.054-.35.56.56 0 0 1 .206-.303c.188-.148.435-.23.808-.306.68-.135.917-.228 1.061-.339.123-.095.262-.287.508-.57l-.003-.037a2.9 2.9 0 0 1-1.257-.328c-.141.144-.865.887-1.748 1.917-.371.431-.781.678-1.214.696s-.824-.194-1.156-.506c-.665-.626-1.195-1.703-1.657-2.92-.46-1.218-.836-2.574-1.102-3.729-.268-1.155-.426-2.086-.448-2.535-.1-1.909.36-3.195 1.15-4.006S4.652 1.94 5.708 1.882c1.894-.106 3.693.535 4.057.673.701-.462 1.604-.75 2.733-.732a7.2 7.2 0 0 1 1.588.2l.019-.008q.344-.117.698-.196a9.4 9.4 0 0 1 1.957-.23zm.143.614h-.137a8.5 8.5 0 0 0-1.61.176 7.05 7.05 0 0 1 2.692 2.062c.435.539.795 1.13 1.07 1.76.104.242.174.447.213.605.02.08.034.147.038.217a.4.4 0 0 1-.011.132l-.006.012c.029.803-.176 1.347-.201 2.113-.019.556.127 1.209.163 1.92.034.67-.049 1.405-.497 2.127q.056.066.108.132c1.185-1.81 2.04-3.814 2.495-5.521.243-.92.373-1.753.384-2.413.01-.66-.117-1.139-.279-1.338-1.268-1.573-2.983-1.974-4.422-1.985m-4.525.235c-1.117.002-1.919.33-2.526.82-.627.507-1.047 1.2-1.323 1.911a7.9 7.9 0 0 0-.485 2.213l.013-.007c.337-.184.78-.367 1.254-.473.475-.106.986-.139 1.449.035s.846.584.985 1.206c.665 2.986-.207 4.096-.529 4.933a9 9 0 0 0-.312.929q.06-.017.121-.024a1.06 1.06 0 0 1 .51.1c.324.13.546.402.666.714q.047.124.067.26.02.057.019.117a49 49 0 0 0 .012 3.426c.022.494.054.928.095 1.271.04.342.098.602.135.69.12.294.297.678.617.939s.777.434 1.614.26c.726-.151 1.174-.36 1.474-.663.298-.301.477-.72.591-1.363.171-.963.515-3.754.556-4.28-.018-.395.042-.7.172-.932.135-.238.343-.384.522-.463.09-.04.174-.066.243-.085a6 6 0 0 0-.23-.298 4 4 0 0 1-.629-1.007 8 8 0 0 0-.243-.443c-.125-.22-.284-.495-.45-.804-.333-.619-.695-1.369-.883-2.1-.187-.729-.215-1.484.265-2.017.426-.473 1.172-.669 2.293-.559-.033-.096-.053-.176-.109-.304a7.1 7.1 0 0 0-.983-1.617c-.95-1.178-2.487-2.346-4.863-2.384h-.108zm-6.276.047q-.18 0-.36.01c-.954.053-1.856.322-2.501.986-.647.663-1.072 1.751-.98 3.553.019.34.172 1.296.434 2.43.262 1.136.634 2.471 1.08 3.65.446 1.18.988 2.207 1.502 2.693.259.243.484.341.688.333.205-.01.451-.124.753-.475a40 40 0 0 1 1.71-1.877 3.2 3.2 0 0 1-.932-1.307 3.1 3.1 0 0 1-.17-1.58c.097-.678.11-1.312.099-1.812-.012-.488-.048-.812-.048-1.015v-.028c-.001-1.056.188-2.103.559-3.095.264-.682.658-1.375 1.249-1.936-.58-.185-1.61-.467-2.725-.52a7 7 0 0 0-.36-.01zm11.714 4.842c-.641.008-1.001.169-1.19.379-.268.298-.293.82-.127 1.464s.507 1.365.829 1.963c.16.3.316.57.442.788.127.22.22.376.276.51q.08.181.168.331c.248-.509.293-1.008.267-1.529-.033-.644-.187-1.303-.164-1.97.025-.78.184-1.289.198-1.892a6 6 0 0 0-.699-.044m-7.78.105a2.7 2.7 0 0 0-.582.068 4.5 4.5 0 0 0-1.09.412q-.173.09-.33.209l-.02.018c.006.134.033.459.045.936.01.523-.002 1.19-.106 1.91-.226 1.568.946 2.866 2.324 2.868.08-.322.213-.648.345-.992.384-1.003 1.139-1.734.503-4.589-.104-.467-.31-.656-.594-.763a1.4 1.4 0 0 0-.495-.077m7.48.187h.048q.094.003.17.02a.4.4 0 0 1 .13.051.15.15 0 0 1 .071.1v.008a.2.2 0 0 1-.034.124.6.6 0 0 1-.104.137.65.65 0 0 1-.364.195.57.57 0 0 1-.388-.095.6.6 0 0 1-.123-.108.24.24 0 0 1-.06-.116.15.15 0 0 1 .04-.118.4.4 0 0 1 .111-.082 1.256 1.256 0 0 1 .504-.118zm-7.388.154q.075 0 .157.012c.144.02.273.057.371.112q.072.037.126.097.028.033.042.073t.009.083a.27.27 0 0 1-.071.141.6.6 0 0 1-.135.12.62.62 0 0 1-.424.103.7.7 0 0 1-.396-.209.7.7 0 0 1-.112-.15.25.25 0 0 1-.039-.162c.014-.1.099-.15.18-.18a.8.8 0 0 1 .29-.036zm8.56 6.732h-.003c-.139.05-.253.07-.35.11a.42.42 0 0 0-.225.197c-.06.105-.11.292-.095.61a.5.5 0 0 0 .14.064c.161.048.432.08.735.075.602-.007 1.344-.143 1.738-.321.323-.146.623-.336.891-.564-1.317.264-2.06.194-2.517.011a1.3 1.3 0 0 1-.314-.183m-7.588.086h-.02c-.05.004-.123.02-.263.172-.33.358-.444.582-.716.792-.27.21-.623.321-1.327.461-.223.044-.35.093-.436.132.028.022.025.028.066.049.103.055.236.103.342.13.303.073.8.159 1.319.073s1.058-.327 1.518-.953c.08-.108.088-.268.023-.44-.067-.17-.211-.318-.313-.36a.6.6 0 0 0-.193-.054z"
      />
    </Svg>
  );
});

export { PostgresqlFill };
export default PostgresqlFill;
