type HardwareMarkProps = {
  className?: string;
};

export function Ps5Mark({
  className = "h-full w-full",
}: HardwareMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 200"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Panel izquierdo */}
      <path
        d="
          M33 22
          C33 14 38 9 46 7
          C54 5 60 8 63 15
          C67 25 68 44 68 66
          V164
          C68 174 62 181 52 184
          L44 186
          C36 188 30 182 30 174
          C35 142 37 111 36 80
          C35 56 33 37 33 22Z
        "
        fill="currentColor"
      />

      {/* Panel derecho */}
      <path
        d="
          M107 22
          C107 14 102 9 94 7
          C86 5 80 8 77 15
          C73 25 72 44 72 66
          V164
          C72 174 78 181 88 184
          L96 186
          C104 188 110 182 110 174
          C105 142 103 111 104 80
          C105 56 107 37 107 22Z
        "
        fill="currentColor"
        opacity="0.92"
      />

      {/* Núcleo central */}
      <path
        d="M64 22C66 16 74 16 76 22L80 168C80 176 76 181 70 181C64 181 60 176 60 168L64 22Z"
        fill="var(--navy, #052743)"
      />

      {/* Luz central */}
      <path
        d="M66 28V156"
        stroke="var(--mint, #c3ffdc)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Botones */}
      <circle cx="69" cy="162" r="2.5" fill="var(--mint, #c3ffdc)" />
      <circle cx="74" cy="162" r="1.7" fill="currentColor" opacity="0.55" />

      {/* Base */}
      <path
        d="M48 185H92L101 192H39L48 185Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}

export function DualSenseMark({
  className = "h-full w-full",
}: HardwareMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 190"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* =====================================================
          SILUETA PRINCIPAL
          Más ancha, baja y con grips largos tipo DualSense
      ====================================================== */}
      <path
        d="
          M111 28

          C93 24
          77 25
          63 33

          C49 41
          42 54
          37 72

          L18 129

          C10 151
          20 171
          39 179

          C56 187
          73 179
          84 161

          L104 129

          C111 118
          120 112
          132 110

          H188

          C200 112
          209 118
          216 129

          L236 161

          C247 179
          264 187
          281 179

          C300 171
          310 151
          302 129

          L283 72

          C278 54
          271 41
          257 33

          C243 25
          227 24
          209 28

          L194 31

          C183 27
          172 25
          160 25

          C148 25
          137 27
          126 31

          Z
        "
        fill="currentColor"
        stroke="var(--navy, #052743)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* =====================================================
          SOMBRAS DE LOS HOMBROS
      ====================================================== */}

      <path
        d="
          M64 34
          C77 27
          92 27
          108 30
          L101 36
          C86 33
          74 34
          64 39
          Z
        "
        fill="var(--navy, #052743)"
        opacity="0.25"
      />

      <path
        d="
          M256 34
          C243 27
          228 27
          212 30
          L219 36
          C234 33
          246 34
          256 39
          Z
        "
        fill="var(--navy, #052743)"
        opacity="0.25"
      />

      {/* =====================================================
          PANEL NEGRO SUPERIOR
      ====================================================== */}

      <path
        d="
          M121 38

          C143 32
          177 32
          199 38

          L194 72

          C192 84
          185 93
          174 100

          L169 103

          H151

          Z
        "
        fill="var(--navy, #052743)"
      />

      {/* Barra de luz DualSense */}
      <path
        d="M148 101 H172"
        stroke="var(--mint, #c3ffdc)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* =====================================================
          TOUCHPAD
      ====================================================== */}

      <path
        d="
          M132 44

          C148 40
          172 40
          188 44

          L184 70

          C170 75
          150 75
          136 70

          Z
        "
        fill="var(--paper, #ffffff)"
        opacity="0.82"
      />

      {/* Reflejo touchpad */}
      <path
        d="
          M139 48
          C151 45
          169 45
          181 48
        "
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.18"
      />

      {/* =====================================================
          CREATE / OPTIONS
      ====================================================== */}

      <rect
        x="109"
        y="47"
        width="4"
        height="15"
        rx="2"
        fill="var(--navy, #052743)"
        opacity="0.65"
      />

      <rect
        x="207"
        y="47"
        width="4"
        height="15"
        rx="2"
        fill="var(--navy, #052743)"
        opacity="0.65"
      />

      {/* =====================================================
          D-PAD
      ====================================================== */}

      <g fill="var(--navy, #052743)">
        <path
          d="
            M76 57
            H88
            C91 57 93 59 93 62

            V70

            H101
            C104 70 106 72 106 75

            V87
            C106 90 104 92 101 92

            H93

            V100
            C93 103 91 105 88 105

            H76
            C73 105 71 103 71 100

            V92

            H63
            C60 92 58 90 58 87

            V75
            C58 72 60 70 63 70

            H71

            V62
            C71 59 73 57 76 57

            Z
          "
        />
      </g>

      <circle
        cx="82"
        cy="81"
        r="5"
        fill="currentColor"
        opacity="0.15"
      />

      {/* =====================================================
          FACE BUTTONS
      ====================================================== */}

      {/* Triangle */}
      <path
        d="
          M238 57
          L246 70
          H230
          Z
        "
        stroke="var(--navy, #052743)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Circle */}
      <circle
        cx="258"
        cy="82"
        r="8"
        stroke="var(--navy, #052743)"
        strokeWidth="3.5"
      />

      {/* Cross */}
      <path
        d="
          M230 96
          L246 112

          M246 96
          L230 112
        "
        stroke="var(--navy, #052743)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Square */}
      <rect
        x="210"
        y="74"
        width="16"
        height="16"
        rx="2"
        stroke="var(--navy, #052743)"
        strokeWidth="3.5"
      />

      {/* =====================================================
          SPEAKER
      ====================================================== */}

      <g fill="currentColor" opacity="0.32">
        <circle cx="142" cy="84" r="1.6" />
        <circle cx="151" cy="84" r="1.6" />
        <circle cx="160" cy="84" r="1.6" />
        <circle cx="169" cy="84" r="1.6" />
        <circle cx="178" cy="84" r="1.6" />

        <circle cx="146.5" cy="91" r="1.6" />
        <circle cx="155.5" cy="91" r="1.6" />
        <circle cx="164.5" cy="91" r="1.6" />
        <circle cx="173.5" cy="91" r="1.6" />
      </g>

      {/* =====================================================
          PANEL NEGRO INFERIOR
          Mucho más parecido al DualSense:
          ancho entre sticks, no una punta gigante.
      ====================================================== */}

      <path
        d="
          M116 101

          C126 95
          139 92
          151 92

          H169

          C181 92
          194 95
          204 101

          L213 122

          C217 131
          213 141
          204 147

          C192 155
          177 159
          160 159

          C143 159
          128 155
          116 147

          C107 141
          103 131
          107 122

          Z
        "
        fill="var(--navy, #052743)"
      />

      {/* =====================================================
          STICK IZQUIERDO
      ====================================================== */}

      <circle
        cx="128"
        cy="113"
        r="18"
        fill="var(--navy, #052743)"
      />

      <circle
        cx="128"
        cy="113"
        r="11"
        fill="currentColor"
        opacity="0.2"
      />

      <circle
        cx="128"
        cy="113"
        r="5"
        fill="var(--mint, #c3ffdc)"
      />

      {/* =====================================================
          STICK DERECHO
      ====================================================== */}

      <circle
        cx="192"
        cy="113"
        r="18"
        fill="var(--navy, #052743)"
      />

      <circle
        cx="192"
        cy="113"
        r="11"
        fill="currentColor"
        opacity="0.2"
      />

      <circle
        cx="192"
        cy="113"
        r="5"
        fill="var(--mint, #c3ffdc)"
      />

      {/* =====================================================
          BOTÓN PS
      ====================================================== */}

      <path
        d="
          M160 99
          L166 107
          L163 117
          H157
          L154 107
          Z
        "
        fill="var(--mint, #c3ffdc)"
      />

      {/* =====================================================
          MICRO
      ====================================================== */}

      <circle
        cx="160"
        cy="132"
        r="3.2"
        fill="var(--mint, #c3ffdc)"
        opacity="0.9"
      />

      {/* =====================================================
          LÍNEA INFERIOR / JACK
      ====================================================== */}

      <path
        d="
          M145 148
          C149 154
          154 157
          160 157

          C166 157
          171 154
          175 148
        "
        stroke="var(--mint, #c3ffdc)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

export function PcMark({
  className = "h-full w-full",
}: HardwareMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 190"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Gabinete */}
      <rect
        x="25"
        y="8"
        width="100"
        height="174"
        rx="10"
        fill="currentColor"
      />

      {/* Panel lateral */}
      <path
        d="M37 20H88L112 44V162H37V20Z"
        fill="var(--navy, #052743)"
        opacity="0.5"
      />

      {/* Línea diagonal del cristal */}
      <path
        d="M88 20L112 44"
        stroke="var(--mint, #c3ffdc)"
        strokeWidth="3"
        opacity="0.65"
      />

      {/* Panel frontal */}
      <rect
        x="96"
        y="18"
        width="20"
        height="154"
        rx="5"
        fill="var(--navy, #052743)"
        opacity="0.75"
      />

      {/* Ventilador frontal 1 */}
      <circle
        cx="106"
        cy="48"
        r="15"
        stroke="var(--mint, #c3ffdc)"
        strokeWidth="3"
      />
      <circle cx="106" cy="48" r="4" fill="var(--mint, #c3ffdc)" />

      {/* Ventilador frontal 2 */}
      <circle
        cx="106"
        cy="92"
        r="15"
        stroke="var(--mint, #c3ffdc)"
        strokeWidth="3"
      />
      <circle cx="106" cy="92" r="4" fill="var(--mint, #c3ffdc)" />

      {/* Ventilador frontal 3 */}
      <circle
        cx="106"
        cy="136"
        r="15"
        stroke="var(--mint, #c3ffdc)"
        strokeWidth="3"
      />
      <circle cx="106" cy="136" r="4" fill="var(--mint, #c3ffdc)" />

      {/* GPU */}
      <rect
        x="45"
        y="93"
        width="43"
        height="13"
        rx="3"
        fill="currentColor"
        opacity="0.42"
      />

      {/* Motherboard */}
      <rect
        x="46"
        y="39"
        width="34"
        height="40"
        rx="4"
        fill="currentColor"
        opacity="0.25"
      />

      {/* Cooler */}
      <circle
        cx="63"
        cy="59"
        r="11"
        stroke="var(--mint, #c3ffdc)"
        strokeWidth="2.5"
      />

      {/* Power */}
      <circle cx="106" cy="24" r="3" fill="var(--mint, #c3ffdc)" />

      {/* Patas */}
      <rect x="34" y="180" width="20" height="4" rx="2" fill="currentColor" />
      <rect x="96" y="180" width="20" height="4" rx="2" fill="currentColor" />
    </svg>
  );
}