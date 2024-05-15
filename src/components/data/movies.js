const SERIES = [
  {
    id: 1,
    title: "K-Dramas",
    movies: [
      {
        id: 1,
        name: "Hierarchy",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABShUDLYfycP-_5t7GL677KwUe8wfbyQ19vAQddEaOQ1FR9eMmYI-FjfFQlS7Gk1z8u--f3cLBZJU-pj1hw3bSkL_KrGSeyz2h1PH_2nmOtIh5g7S3PoeLztfgMANvvFdR7y5.jpg?r=687",
        ratings: 4.8,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 2,
        name: "Crash Landing on You",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQlTQA4dxOpQYHVlzoJS2JWzfaUWrgd6JseSvmwkotg5rTZy33H0E2SNGbfY8_KtgOFG7s7ATrcawbwrSUaQgtGeMgoHT88j62HgMA7CXUssf7Sy8rzoCADGSIjPk6mOLqFX.jpg?r=d36",
        ratings: 4.7,
        totalSeasons: 1,
        totalLikes: 3000,
      },
      {
        id: 3,
        name: "Neverthless",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTT1zWDnHQkd7tl5WODFQwJ4YqwoSpyNqOXANiTlsOaA8U01_1vDESWXL3wu2pooLQFvVa96uvTfjaFnxfehQxycOuBaUS6dCtY1qMkPdkxAyA3G94cRSh6sesPxIfPGjhju.jpg?r=3e3",
        ratings: 4.6,
        totalSeasons: 1,
        totalLikes: 2800,
      },
      {
        id: 4,
        name: "It's Okay to Not Be Okay",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQk1R3LiOOmLJpdlBlJCuGUza-tNiViyDiav9mJpX3gN1FQisBE_NBisNPccnBOmScXKKE5d8aigE7WYbQ28YOv03W4HgcxKiNVLFFJeLKKEfpURvtbN7eCfV06sGWG2cyYy.jpg?r=f4c",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 5,
        name: "Love like a K-Drama",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZFd8CTDVGNM2Ue5Ds3Y571tyucJRk9DxjalQd29BkA3funHhuRqWXFddzmpqI3rGOflNoHMtDySkhZrPfwoSbARiZ7pKksZNSvCuiiAALX7tID3IR_0BL_UqtiZkpskgd_z.jpg?r=676",
        ratings: 4.9,
        totalSeasons: 12,
        totalLikes: 3200,
      },
      {
        id: 6,
        name: "Hidden Love",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcP2yvYlNzih1udDvnNyfs7338EksNOdlZun6_wbpmLP5SI2ArkYBItwm3JlObFSBHxIc3ZI5dYQ990ldoNqbCbwb_Gc470oBbo.webp?r=b8e",
        ratings: 4.9,
        totalSeasons: 25,
        totalLikes: 3200,
      },
      {
        id: 7,
        name: "Business Propsals",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa2zJwSIMAMHlIBOTl5qlldJShm07Lx2FnM1h4phjZwU6ajgOAxfrYcUDygTCAHSQ3wrkL6PEVHl0CVJJTlZrhczQHHCHT7tIvARPYTMai8cUh_RfetopFZzxGBTSwRsyCla.jpg?r=2c4",
        ratings: 4.9,
        totalSeasons: 12,
        totalLikes: 3200,
      },
      {
        id: 8,
        name: "Destined with You",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR86uQ6wGGB_dDtm7CqoFYSoUHEpbfevDQc7zSukpHtvI4Z6Vrs7BAzFhrR-Qa7qas6CUjUPl7yI64fzAWdJFP3-utXMyZKES2xLxbE2fJNdk9IcGUUzIALFC0Cuw3_5kNEO.jpg?r=998",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 9,
        name: "My Demon",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaYVY755-_DdvVN7rcTWva_ZQ4f24X-RvVTX8IhdIS6z6o0pXlQS1BYvUJJq0Oy6O02bjsCAXArk5wp01o8WfXNSM8DnFl4uRwl2nw_DKe24e2TEln8c3ePlKoZx-5AjcXYA.jpg?r=002",
        ratings: 4.9,
        totalSeasons: 16,
        totalLikes: 3200,
      },
      {
        id: 10,
        name: "Queen of Tears",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRKsO87Ns5UJbxaNQ6mILP8ToBm0UW9nW36jVTKaA0B-5JvJPtHjiZM2JdvuhTyqcBme58fb5jM3BqWL17HRnrWR6PN5--Teq2MW6dnc2L2EiXPXgL6C2Uk-dERe_hXKIE868Mbk-qPsZ9W5W-lwbC2revEBIdoXhObGnKLAeMqFtLvo_9niWpr4lZV_CvFB7b6yfdiOo1qU6BBLM8kQ_3EoYnkIxb9-mCHaQSj2ngwpiRJvOvsIFpTc-QuqlFhjrZV8BtQB0Swfu0de6kmpThouMeTGIbr9UuKHGxTsUdUUhs14QiVaxqT7kwHExjpoNmw7Avgi1k8l0WnK41DsYeRfb6V3urUEDgQ4pJPvICI-aRSNTFtjYe3vRc6d8eFr0ky0OIhDLuddeakkoKVd9sM8kvNuYDuaiNGp_87GDKCs-d99q77lJVgOeEbkOM5xODkExXjtxT4c9GiJdGJDP2ddOWw5DAlrraOLXUqOOv5K9uSKwmQx1z6sVdoifOVwpzk.jpg?r=07e",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 11,
        name: "Vincenzo",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVT59AReBhws780He2THvOsIw6GsIBY9peHwEaNnlkqHeVy_M2LTrEUs1ccWPNHHeNKerdzT_QfVWFvNKvAmlWXYJgmimTkpcsvUSDGktezLvsp8lYpcWczueku-nLRBEvis.jpg?r=ac9",
        ratings: 4.9,
        totalSeasons: 20,
        totalLikes: 3200,
      },
      {
        id: 12,
        name: "Guardian",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTfaOOyKCKc-8-HqKEohXVJv6SNsTfBX4KShIGtHK8RUdXl3xBiMzLqcU_HDza26YlwkjbyQOkytyaIwS9p1Tf3eNsEmaYP2ELs.webp?r=dfb",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 13,
        name: "The Glory",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABel48Hag5VZXcvpDfOnsOvq7QEMxzSG3nnBP1uaMMyd2PVZEEPRQjxKn-IuM3gA9Mq1Hh2LER5TDLI9e_IK-aDWgvDSEsUbMHQGsl5QIBCPDKoMVg2FbMkKMbdmr9F8QOrDp.jpg?r=3d2",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 14,
        name: "Celebrity",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVlkE-MsqRndcK4p-H_RcwtVqsxLNhwsofX-cqwDiDmrHBRHWg6xZOQ5Qb3KQN9YVoHnXzxJCj5Gn6wCRZPgex--zyuz6X8iBS7aKK9lfCFwGly2WILhyxFdLgts299fjy_n.jpg?r=09b",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 15,
        name: "Love to Harte You",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSsuHQUa78Lt9C8xHtWsBPFqPkAlWWgzVCl-Vr9jUqobFK8b9jGnZVH8rEUhL30tREcwI68dbk7QUHPx54NdXwf0pU82Ink2eBu9SCt0sqS-D3Juj_ZVXaAR4cwiYP-KRdpf.jpg?r=596",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 16,
        name: "Start-Up",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRQ1MPbFGU62keMEmwYswO7vl-Uv30CiqOOAEeT5vaNO3-XZMaPQLjVIIFB-bVPvJ4Tu2zFsTtEr7KojQ9KEJk0friK52vxdxsRvQP_jfr8vPjTsa-8eKQrZxfU2R00ULBZE.jpg?r=5a0",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 17,
        name: "Descendiants of the Sun",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV6cJqPSQSmu0vhYqPT0I0Y-qelgrVzZKa8McgBQ52rTPPgA2PnLb7u2I-j2R878IEfP24M4ajvcjpLlLpJP3p-rL2hoSrrd8CU.webp?r=5dd",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 18,
        name: "Doctor Slump",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSJVKf44tRlDGlJcHt4uZQcJmFQ9U0o85BjtlBd86fPcVv0gPo-r6uIYghpKk9bd-Vj34iatU2dAtPsozHSzVVo_zxumr_w3rz-BKHAXCYDmz8sNot1d0DvGjC_eGKySkHAR.jpg?r=d67",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 19,
        name: "Falling into your smile",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYszKppes5Nv4BTfAIN-2-EISS6vsL6XW6Cj5DYHdEtuukHN755eYwU3CX8WADAlJTQPlcXCdyRYxjAzDQW3FAEV3cvhEjpQa50.webp?r=7e0",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 20,
        name: "Doona",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfb0mTxP9dYkOIwzDzJiaTy326zPOD8Mqql0UjSxpY-zJvDvb1T0jYWkUfccIHgYL6RAWS47nDrBf9Dr8Z-HAI-xzit1jBVnyyfbB5_p8OXJbvZjAmb29FCzC_6_liy4ZmSL.jpg?r=632",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 21,
        name: "Wednesday",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYkgoseD_TOHDLSjIGLHiekygHJvAajW9ZttnvPJI60gRQVMlE9nhMNYPT3WI3BF9DIzkJrEONtWLUwUsSF6W1aV3OfSTmzfY8v9j1P35_hyOM8MiUekrJ1JXCYyk6ZN-4PC.jpg?r=4d2",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 22,
        name: "Love Alarm",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRv6EpSoLIqaK4evrwkNhsA313RdFZzPTxJwYDUWsd74uYHA3-8pbUgin85xN2orRITN6fo0Hzddpz0OxAN8vC7_1zqSoLyYdJOEV3ifLQoIJ-aOLxO2fLZXLtR35cn963qT.jpg?r=5f5",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 23,
        name: "A Love So beautiful",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYQnqzO7pqHufzVXNpxqQOnvX-eoXFTFQHQ1wYYeB-DRyAmqhiFrn-vj07-H-HWUzihysL5PRsnvpASPwfbdwMS6G0WDioLBUnHQswZMT6AQkshmOLRmYK4bZPZR18UvM0St.jpg?r=249",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 24,
        name: "A time called You",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZH9PabALsff_SmVcdBdu0De7_PSW1hZPhxaWWjS8VR9scIek8jeq7PExtD3vHbe7wEaE3ug2GHL42_qLwM6uPXgNWo4tgBBskxitg6y5c1OOAIMBOt4G0bZIgm_Cl9I38i-.jpg?r=deb",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 25,
        name: "Healer",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABckWRLh_m8GhgwEXHYSDzNBTLnNgDS1uNQNdb1VWZG0OvI4go6yhayHhIpsHkEPWUY_n4NQLQj5Ckd96Npnsb4f4DDeZoUXBFD8.webp?r=b8f",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
      {
        id: 26,
        name: "Frankly Speaking",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbym3q0rd0Ql4nKo2prD78SspglVvDcVDD1xxF-xBT5VuHta-d3M_DQS4e_x_TYq0PUBEc-9RPysceuRDWedjbnTLWQbSRxSv-1hgHosAxBqFa0wT6LyJeIhww3U6k4f7BQ5qDeVh654-TxF2D7KbTXWWRfIUL0Y6N31X-_x1anv_uEvY4GoFX5kU-rA1CIfcvjo6QhO2pHFlr1bANzQ3_pau6S1cpcJ173RjG1blYb3Lpk3JDhlcjmXEfX5PZ0DnJEZVEDRVPW7QyvdKj9SM-E0VFawYV7oeYaqXp8XAc6FZ1W81mDNAAnpinDmjF5M5n5koy_5YDC0hFKSSYwanjfnUXtijS4kz_eTZPDAGnbvTPem8Q0v1b1dNq58Kwnx9IQznTwZvuTAzDe0KnfvxhhupF64COfJ4ndYPd7jhyKnyDUTV6wEwQ2htA3fBz8E3jMzmbBE.jpg?r=384",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 3200,
      },
    ],
  },
  {
    id: 2,
    title: "Anime",
    movies: [
      {
        id: 1,
        name: "Naruto",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUMeRy-pleJv4DXuphLcwuravAf7tcbeQgwtTYOmLW5LQ20ecpo6QFyTY_lV1Tvf1Xh_dL4q893LjHZGLusDZXe-41fQeSZL2LA.webp?r=f87",
        ratings: 4.5,
        totalSeasons: 9,
        totalLikes: 5000,
      },
      {
        id: 2,
        name: "My Oni Girl",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfNHA6RWqI3zN-cd7Ts94eLfBedNt9LsJ9yMT03GQ0VygoIA4bMT-FMNISoHH7sLPbf9f8Yilth9H2HacH3L8pLBfdKahsr9T5zDS-GLFdBm7q8k8aFX2rtKpUMYOROCMbHB.jpg?r=bb2",
        ratings: 4.6,
        totalSeasons: 4,
        totalLikes: 4500,
      },
      {
        id: 3,
        name: "Spirited Way",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTJMVF4S2JatV82lBBo8t72lRA-6vjvsc5TAL5qCa45X4tkaFtADrvKiyNEZGq4RDo_n9WxoWybvwSbG9aBuTwUatCrlyDdvLvg.webp?r=f97",
        ratings: 4.8,
        totalSeasons: 2,
        totalLikes: 5100,
      },
      {
        id: 4,
        name: "Drifting Home",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfO0Scl-2ntrKxaQcTEi39NBjVDniejb7hcMYriwz4YcssxCVLMaYemoJiOU2vVnBbVJ6hAhABh2bo_mey-Jw7qUsIluTfvXYZ8cRgVhBBsWerSh1bFE-Z-KXlByNNQ3u9Wd.jpg?r=57b",
        ratings: 4.7,
        totalSeasons: 20,
        totalLikes: 5500,
      },
      {
        id: 5,
        name: "Ben 10",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaZJfqDCwxCDZnCSSd-jqIPE-LyXh65K4S4Os6o5JXp-Zej0Ljw3D7Lc2c3cQXlx7ORN3ZpycW8volwZmHkXB0wPZvX5cB_aEgc.webp?r=ef2",
        ratings: 4.5,
        totalSeasons: 9,
        totalLikes: 4800,
      },
      {
        id: 6,
        name: "Death Note",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        ratings: 4.8,
        totalSeasons: 1,
        totalLikes: 5200,
      },
      {
        id: 7,
        name: "Fullmetal Alchemist: Brotherhood",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUYfIKmO5Zeh3onId5SjcIuu-E8kEGNpJ0qnBQ1lOXrVz5iRNyV4_CzE29WpB-We2WVWK-QPtb2FDGED_I3lEgwH7_z3zkTfAbAR26isMeY_A72d53jaVAmIVJ26-o1NjShc.jpg?r=6af",
        ratings: 4.9,
        totalSeasons: 1,
        totalLikes: 5400,
      },
      {
        id: 8,
        name: "My Hero Academia",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWbM63q-lWFol7aI_0tgRbbCmy2SEhRGebAAtGLovkhKya8ct6Oqxb6OySWFLdJXtK57-fnFJUymTY3p6GKADOsSQ2h2WdwWaAjiM8-Lj3FRW3XA_mIffTg2d3KiwbmTejatPB8bacqlANOYEVTatyBNZ0J6kp1SEYejqR-EGAI8zPtY09_zv8ewmwcEzN4I_mnil-pjkH1CvLuEKS5SXR6KAk0yS4jIGDnbQgMOw1mnLqXWy4gsoOijiT8ijrp_WhugCOMiNbm7Oa7VYA1lA4Z4uNZkm98jIAF47e3019gjEwrjJEpoMLe7JEvZgtgxwo4fj6hq0ZZtpeOj4gLe-qPz3hjiY7pjnmg1AdZ-HQIuJafjGmkAfQWJOQmGdAHbwMIAfvn4ZPVDIHZBvEjjgt4ahNmGR8BMoMwVkLPRS50u.webp?r=901",
        ratings: 4.7,
        totalSeasons: 5,
        totalLikes: 4900,
      },
      {
        id: 9,
        name: "Sword Art Online",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQeAWehXOhLleil5cWeszlFXiMOsUPZwueoreFzZV5mQ2kVF56AQy9lltSqHVJK1076cFmGt8NLtB-DNzGrfZ1R7pxm3Lh1FOPY.webp?r=819",
        ratings: 4.4,
        totalSeasons: 4,
        totalLikes: 4700,
      },
      {
        id: 10,
        name: "Hunter x Hunter",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZDhFEVjgMMpHigiB5sH1cRw2YfWbNJxcDzNtJ2m5l4pUHIZiksLqeW0LoBdcujoN_gG0V82oDYD7U3uvZfslcvH1m4ftJWpxUM.webp?r=05b",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 11,
        name: "Spy x Family",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRpcqvP0l1D36Ju0MMwsDncxw22mne0CF7U6KxTxV0zkhU2sVGnQzoTl5nZYsAlLOSDjOqKyaWMJ4MbPaBFRRNuxN-VXhteSTOo.webp?r=07c",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 12,
        name: "Lookism",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX4S-Z0e-UH-70RFliO1w93F7i3IKyXPgknRCsswvdzddYdDAGTsKFAlml5atkE5hDJgnXNTY_94BX2KcQtTKM7UjJGOUc0xQcm5uolwE57x_yO4DvdY93NwrtArgMCvj_Nh.jpg?r=404",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 13,
        name: "Sol Levante",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABejXGmMN0hNyL3UokHR0rE1qwikSlEAFbRflks1deen_VbF_c-Ssp030j9PKJ3l4bqdb__SAwzQvmAgSqlotjI_S87SLzndK_6D-MOX_9NetF2sFqUffzRbTQoiI0HFTyXJj.jpg?r=1a5",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 14,
        name: "Haikyu",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZGx60JVhdH832X_BLBMGnZojNMt43Kqpa140ezzONeJpSbeEOpKNv0w3Gb7CU_UN-Wxt6Ao64ADQ8PvSFdEV406T-yOesGWuNo.webp?r=5cf",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 15,
        name: "One Punch Man",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaEmoQBHnQX9dsAEOluqGSe4WdcsPV8biU07KWc9qskoIoo46h1wF9SojEfoB0Nmz5Pw9nQAywVy5D3OJecLbWNaRMtB7v8kZRE.webp?r=c7b",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 16,
        name: "Baki Hanma",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRpzvPRBca8rv7ZENDSNCxmsvFy9Hq2xle-J5MNl3NB138lD5ub3tVNwCJCfvtmaGOIj9t3o1tgDzgR06F5jUpqxaE66JT_oILKtyGVpWPOxIM6Kq-W42Bfn2TmTQEOxPbIK.jpg?r=f60",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 17,
        name: "Parasyte",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZbDCKhFkiUUstufOMuC1n-1NuEBVvyvwihw-72gLEGchDk-zjgwVX2uO6n9sC8JGiWcUlcemXX-qhD0fR3BP58SpnI3YlUjPak.webp?r=2f4",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 18,
        name: "Ponyo",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTNzrYE3r19eeqip5Dl4DSbcUwLFXC_c420BtSZs1bM2K86uan6G6FqbFbt49nJ1dJD6vlBIXq6JgZT8Ufeih85ARAElWxXnHmc.webp?r=597",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 19,
        name: "Kakegurui",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfXT8bDO4BW-zgyaehRGiMwRGHUvwSLu8Xk1H_YQw3Oatx99MD8XbObKdu0W8YJJyKsKiPbEGTyFD3DPvPi1HFAKxuHqP8mpYws0mjLzSqr3uyx0Rtpy_iNj7QOq-P77Hazo.jpg?r=623",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 20,
        name: "Demon slayer",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRcPN0QlBFemyXiOLqUHaicdXrSgG3ptqQ6DhOjtmoP9Pq5NkFlmtrMf9ZxDOeivODA7tbnO8pB3upZkWa8rVV45uO9LRZOcSW4.webp?r=27e",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 21,
        name: "Jujutsu kaisen",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeeCEwJyvU3cpmMMx_AHswmfrhf1SWDX9C0lACbtEPs43PJrYxp9f7efKv4hzdzSMtYh_8QpQd8qIVW0stt5spl9BLdzkqyT7OU.webp?r=e46",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 22,
        name: "Vinland Saga",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbZekBdECvalaVEfVn2uOoo-mYBxoabaEYSeJ4SLK6FFII4rd96UM_TgsxKGYXsaEEf0DmYb50owc0_m9gAPZ6oZ63Dd1L1I2zI.webp?r=820",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },

      {
        id: 23,
        name: "Black x clover",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABe65hETsqlYSqcLIsJc2k6j8R0birTH32riUbAus5O0RfpCpPFi-9fCtSQfZSZHW9YZJx9Mnn91oYMs_PtPQOgmX_2jARY8DdwI.webp?r=0f0",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 25,
        name: "Howle's moving castle",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZP5MHz1053jUpUrGlh95RiZQLgNBag8tgYmel4prlPR6Kd0Kd44K8_ophTdXdfOo7SWACToc9Z3iW0pWUNz20BWCsZ0UPIKkKE.webp?r=6f2",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 26,
        name: "A whisker away",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQqRCNDhS5SUucUv4NFR-ABLUHFmHsqQyT47qFOV1mkukgeFpJa-S1aT6roBoBc3mAKQ6fRaaT7DAIYgX7IpfCScdDf9tF_USwEDDOcCU-nO4sC_sV6vw891DLhpGvcZ8EMX.jpg?r=192",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 27,
        name: "Classroom of the elite",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQaGLA7ZocjFI9KPjUy5odtZMde6S4aPIH38sKXzMruonC70C8JZKTfcso1Q-U_2bhIQqbXitJ5xj_s2pQQEuTzx9VgpysjrGx71qIiTjYljIZq4vCKItLUXRpuJpNBYQ1NQQOMjcv3bgzmHk0yPThmsh00SWJxGkJtoUi-5JQ3WPALSZpB1GZEwt_8SmMWVIEB3zUhcbDM3aapLTMAsc9HxmBex4NFw2fwTREGhZiOl2nLhnMTvYN1j9d2lD8rRrgih_P-_regr1lR-Kc76S-0.webp?r=ddc",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 28,
        name: "Maboroshi",
        imageUrl:
          "https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX_k4IepllSheXnOCuo8hFT_2lBnErqndv7grUeghUzZwMSxJaauXe2ceWhu17XcbLW043B8bblHzN70H5F4yfgulUNcyZ0mm51zfzs5Djb-XotiX_44ffVUmTCQaWxto969.jpg?r=8b1",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
    ],
  },
  {
    id: 3,
    title: "Super-Hero",
    movies: [
      {
        id: 1,
        name: "Spider-man 3",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVXX5gXjWKtNjLSHk7d1UlbpUDcP2BrD8-LTlPIEOSQH5g5ThZ4y4vhWlelrbdUBe2nLdJzUTRvvPqSAW3BqsTQE21IBk84Lk5A.webp?r=d90",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 2,
        name: "The amazing Spider-man",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ8Te_LTdItKH5HVJD54r2Bs046IlGWh5_G4dvahx7i2tA3aY2VXwS5iFqQSnN-UI00tLhgTxFIgg4lVdqufUQiiKw_z27YILyo.webp?r=5c0",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 3,
        name: "Spider-man",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaPvDwCAmvfpz9z5Qhj-BvCoUuMziuOYblN73p3qqlaJAPcgRa7wFuOtaBbpkAVGdKdmmA25G7l0i59q3QLCcx5iilkXR3GRC-c.webp?r=426",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 4,
        name: "Spider-man 2",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVg1Ox0R11b3ei4nCTVElUx_nhGAWDOksDpW27bQHunnrPAnnGLHPUTdysNEhkXZv-WaMWuSF3nDlKdHSjf3ZGdsrzbERU0o26Q.webp?r=2f8",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 5,
        name: "Black Adam",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR_tdJxgviYmjxHTq8kU7qncjzCey5MTxAShdMfbv12cL2XiwXNfwwrXMQQ-WiqmkxiLZtCvF8lXpf-NtoQmeebfDxFFOuELlaw.webp?r=b9e",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 6,
        name: "Venom",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTnuT8IKMMyKV-AbypiTXRFQDoPCtBy_8_FTzGL-E18kfTu6HftzgV0LpIwCYQbmP0sBy7UCn9lbiReU5yv7V9cm9B31g3DgIgY.webp?r=55d",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
     
      {
        id: 10,
        name: "Black Panther : Wakanda forever",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRw6OSIpkXjFKw_lCI7dcn8JxFpUq4kfPcwg&s",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 11,
        name: "Black widow",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4YtjvxzBxbKhdEzWy2N-6ZOzlMHsjCxBmQ&s",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 12,
        name: "Captain Marvel",
        imageUrl:
          "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Captain-Marvel.jpg",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 13,
        name: "Spider-man no way home",
        imageUrl:
          "https://images.thedirect.com/media/article_full/spider-man-no-way-home-posters.jpg",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 14,
        name: "Iron-man 3",
        imageUrl:
          "https://rukminim2.flixcart.com/image/850/1000/j81xsi80/poster/c/z/n/large-iron-man-3-movie-on-fine-art-paper-on-24x36-large-poster-original-imaerxze7vebfxzs.jpeg?q=90&crop=false",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 15,
        name: "Captain America : The Winter Soldier",
        imageUrl: "https://i.ytimg.com/vi/7SlILk2WMTI/maxresdefault.jpg",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 16,
        name: "Woner Woman",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQDcyuOKUE-BMxUB8BQjideZI0swYENSLpOLYVFing4hn2sN2IIUKg9WHsa3dFRqszVQwvlt9T9jnv1t9e5Gk5BGYNxaEHnGzwg.webp?r=0c4",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 17,
        name: "batman Begins",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVa8CnDvfMGNDi_mr-72OwuVLG2z4XtsJ1pxmWEveicMpVXRWneKG4DVVJoGCL0GnmZlmuzQ8RUjXXvTf5btxb-W_Qo2DuPpxw8.webp?r=f4e",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 18,
        name: "Aquaman",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfEGkLHooegJ7ZteoOU756glJzAuXd3jnDgRCTq_BbHN41dGF7vBIVhPNjCqI29t2wQZoNPw67X_mpiQeyzZ7EAw5bJ7ztS-cec.webp?r=845",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 19,
        name: "Man of Steel",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXkbq72Flvs10lEEX9VZPFo_BpOLN9ma5lWf-IG7MfQHVBxxvuDq-9x9TgNMj5xSC05_2tMpGfCnF_vFCDJE3JQ2cv6dKn3jdwk.webp?r=a60",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 20,
        name: "Bloodshot",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc5WmWEWAwwSwaUxvnm7_VWNcGBHgMq4Z9IfcGUrRzFaEZKz0TeEHOthRivc-jsQ4RFtz4rWycUx4MJec0Y0NTymYrS4FnqK_lY.webp?r=872",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 21,
        name: "The Batman",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf674lqN8RakPsm0QaaxepYUyXdSilV_NEdCIO5iHs8FEPJ9TtAt69dycqglBSBeXrpbdUE7zgZnrKf0J4jNTgwR8GLCSZRB-yg.webp?r=52e",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 22,
        name: "spider-man far from home",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABc8cAUHh2xQ76h6iB4ltMG0T981QM7H5PmlwQseK0Xjf_yQWoZrqSimBt7fccwDfBSvgDlu_bqcnphPMY6XGUhu33MSKySapwReNHMzrpm-9.webp?r=f58",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 23,
        name: "Stranger Things",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABddkzo4VpWNtISwfmK21StGOHJn7eNN1-R2WT5-YSOyzOePPNvSdEnzZ5hnyemxynECRuRavw5UnXPASKlbYX7q2oay6tM0-b2E2dllZwz8plg1lDz_BLO9cod5kXYBsBy3M.jpg?r=92f",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 24,
        name: "Spider-man : into the spider-verse",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeTNSuzeZdTGJ46MUpDxEgflxH66R_7Zw8G4gE3vBixYDL9Ksc4MGsSaPtvR1OhRPlHRoC9SRuROwSSJGbcYRskXd82KqFkmQZs.webp?r=cd8",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 25,
        name: "Spider-man Homecoming",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcDy9fkl6nQ9v3tLclCeY7z6ZAVrRZmFixrHvsBWs5vfh7heQ-PN5HAIlMUYgkAtlE7RUf4WvGqqa7SNoObHDVEsYYvcJe7yVus.webp?r=98a",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
    ],
  },
  {
    id: 4,
    title: "Indian",
    movies: [
      {
        id: 1,
        name: "Laaptaa Ladies",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABadvoVrFo9BvqctaGfg5VkKK3yenIEFSW8uQKVj-ba8szEZl7ssmcpvLwAuDQ6jWA9rp_yQz2r1YyXRPDJvbsEbzXVPDN3Y9lETrOCufOscbeixcGhibONGmEO-GcvdBqQ4l2atTUiFJI6x0T5KhsUg2foWQPu-01R4U6V7kMTnXSJ1KtlKJLKbE1CLOrXswCjkryeq4lrgzjW3J-wDaOZrtcV5jqdFEcKb9-PR9pKxlTEniRIXedpP1sl9gOCJxfvBk3UyjjljYzy66iRPl9xCkcZTbCkUBFzGk2snhVOUoVxxvRSqHAMmGwL7XncqDEnHnlBUBwVz4fk7rrf1jgJA.webp?r=7a1",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 2,
        name: "Shaitaan",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeBM-_UwqFP541qt8TFl5keoqGydaGLcjt0gWESEmVTFyykfndzf-qeXo30v62qzEe-cpAk0nvi7eEPbE7IO2aDVUw7Qa4n7YfBmeEGal-JFelwHI-tR7ji0EiVaf9csmPe3Ic8wSlegwKux6RU4-_hTLVlBo118-_UQRaoezeAgbNZAdulsjTHsj8ujpgf4ptc4esbRW3UXRWUmTa-HxvKpvydKIhIr7MsIsA0DxdHhe7gUHaOMWHnzGA34ssdBJm3d-vsaw84uk7Q_iAiYdG5KJ9PHm4NTVXHtnOR23mE2vxUxmLSeRBLgOEl8bGi5aXCywXRMfpuziU6rg6Mcd6w.webp?r=dc9",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 3,
        name: "fighter",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd0alM6vUwBCcMp1H9hfjL4tvh-XsknA4LRy22EO1ilakN5o5e6wrcUUwavP8mNSmZv6Y0CHnH1TQlQ84UG4_cTwoqZQIL7cw65ntKI05rFRSQozid0cpFMboTjwYu2qjalGYNTcOgtyvbmPWcQXigVjlKdSR_bsjkY.webp?r=25d",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 4,
        name: "Animal",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZhTOr3Zj0iwrnJ-8TVqlZxfE9s0Nq1RjBVFhuPObR5tOwvdnuP3igkRhGMoF6PfqoYHL2bst703o860lmlF0m_If8vIIIwsN3V-rBUzzwkIGw8rgJ2qko-9X3ktCWZ4Nnze2VgYOIlA7MpUq2A2qtaXPwH6azb9VCI.webp?r=d5c",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 5,
        name: "OMG 2",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdEFl2SOxgk1D2heNqtWlShKXpfWSvXQzYKcMKnETM1gjZ87yh927bShV8ahdau6YS58vpQ9bHbnph5iX2fZINmNrJMIiFh5z-o.webp?r=62d",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 6,
        name: "Dunki",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTyvJzdbudPgkBiAL1aIuW7x8hQ8u9w7bIEoY8WpXTujV0zxItSnYWWo276ljbWvdfs50az6_XVOWCJDwCPcobv801zd6_I2PXQ.webp?r=61f",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 7,
        name: "Jawaan",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVGSZt3q6j9YO5660ijNbVerNXpez9szkknZXOspZ1gEVVcO6NdR77xqn8HEbqixyH7I2m9pKJmYhxYoewbIRs-Ch5rHJrKLlpQ.webp?r=733",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 8,
        name: "yeh jawaani hai deewani",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXUFpmhc0PHt9TsSPk1bX8T3gjPGioYFKJegiM7wBAaI6ss1sr5CmwnkT-GB15ONNaEROx0zJjLsc_OzX8gYrizSSN41ponnNf0.webp?r=902",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 9,
        name: "RRR",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS6-q2JOcxraWLkpE1YM6S1di5AO5OUuPkW6AIajujvj4UnXjvPzn34BEK41DiX1Zmut2EbhLtWniQs7yddN4gTNTFWP2xoAlME.webp?r=b74",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 10,
        name: "Saalar",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYvJM6LNx5Ahk1AFRuLVghlc_f-m7MViSPqmBFfnBDlPk02b-cIvnu7Rp028v1t6Iq1bhBi9Dy89wVnnsrdpwONL6BbP7buIqag.webp?r=904",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 11,
        name: "Article 370",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfE8Ni_3Btt_gxNnaQoNWPwKta7QGPYFXyRCEEbfanP9Vv50zTl2ajZPCX8iqdRXO421FyYlBvFovNQXV6HVw8wdkjrN4TssT9V_H25l-rzSXE8H05YH-8h_Yfj-XdATRTJBHyrNnWqW2NmwJuEb7-xKfdAbv3tZSL0UMM-aDtLVRXseQCLjcz7qFET53DaZsKyCHwO9ja6bJooyUA7ak7xVnASwsJ1m_9nV9JiAtk3sNs8l0iZWVJ6SBYTLJ2YGNfV5a86HzwjDPLvMnLEdSDfzh3ln-43Qy_awu7kSOc2mQf6G4F3yHYaO-LuDAlvvUuh2qy3-7d8WoO22kqBCJIY.webp?r=87a",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 12,
        name: "jaane jaan",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSsdgVfT9XypDtfCzSettDXgwIEFiWJ1kP9KLaUGUl80tZWbtMTBiveHiNb_ZYjX_tKVTBZ_xAW5aazDnQSnB72OqcXTZyI4jfnUYv9h_tL2krth6w5SEHs3Xjm_wo_bui1d.jpg?r=687",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 13,
        name: "RAW beast",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRw2-7O83ha5gH9eUBFFwOh4EZUC3rro4SPWC9j_dQMXkvU--jRioXfWksT9AojunbEtk1eSk6Lz2Qq_rzgly4GGEtnNPesejzM.webp?r=b8a",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 14,
        name: "83",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaavzrkLEqXci-mfyYCQYbzaX_xf_kTWeYMml2PCtJICLN37IfSNDqi989htmaBAxWSuIHdEELasptRVCsnRaKB4C7jh3EzGU3E.webp?r=d3f",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 15,
        name: "The Ghazi Attack",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd6VRCZsRdeosW2w4THsRu9r_cpkoh6fYB3ncoLnsy9yBfuZS27lLFnCfN1KWcSGVYPKbx_OtMpHnTpnfW75F09MRAILtdaFnRE.webp?r=411",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 16,
        name: "Lust Stories 2",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQiJTS10Rn2dlBdeRq-Mnt9hBNH-UGRXP385u-nwbD7-YphWRgVGnHavEf5wr93V1qrdJ47X0ejqi9BtI9tvJvzJ9nmSTMcRdpdqZV95oPdsneAEGop4n9BbZ7Zfl1nqjYsJ.jpg?r=e81",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 17,
        name: "Sanju",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR4vva8ujt0IcCs_gduDvIALGQFLuVrQJHWiXElcCug4zHyxyfElTpWAsoHZQOmraHX65ghoFGgyCzbuxrZGAPj0gTrglf97l50.webp?r=25e",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 18,
        name: "Khufiy",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZEmIIVTnKzHZ4BTds_clLr8yfcKHKZogqEDkxXmoVWlEOCz_2sj5XH-xDPHfx4iut1fruf2cYq8RPa-3auNtpEA3PFeLlNs6mWmFb3A4jqIkbkaOXAFthQ_yrngozdELn7K.jpg?r=b91",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 19,
        name: "Drishyam",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc0xIUiuqxGazCgs2NlkEaEgDEeiXZgMBPDzkRYYGeMuEGdBuDjweibReyLtKpHJ4aQqqQ2om_nYf4Gy8IGDxUncBN0uUJzw4BQ.webp?r=7ad",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 20,
        name: "Guilty",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc2X0E8q7Rg4ARVQJV4XxEpTzZvP_kq-h31Vsh7x1rDm0O0RoiCVk149pZfmgZ0t1pF0wA0lAtSGOWGlv25eI4SLDkGbd8cudYdTbOK5r4hPNI2Xp78VeyKlRHEnOvEgesYR.jpg?r=aff",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 21,
        name: "Mimi",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUjqdZeOh8BN1KNPC4bsumPYsg5ELqTGCeccEjShwCy4vWFz_p2aVYTLiDWWmwiP3kA3r19NmF3C2FQcDwulnPNE3zhCFlieaX4.webp?r=24f",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 22,
        name: "PK",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXQvnPUBwHc63EV-Tu4zEmYbpWsYVG8H1l5NzHog2IkFEaBye4DDFO93nPNM-GTDQJWbaMbeBJ1fkey0wtIuMvTpuQor0Md-pJM.webp?r=8ab",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 23,
        name: "Kal ho naa ho",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRedAi24idEE6TTiOYWz7wV0M5z5mF7GSe-bqVuV4Fa5GSKry3lDIUuxX5AcA6YCfiVZ5RA2nC7xe1COP21Z9FMaRqZC6pyj4v0.webp?r=85b",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 24,
        name: "Qala",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa12klC6kS2O18ofkC-6ZjsH9tAx5hQkxWL0J75Kn4QXofRFy97eEhLK7Zp9pprQ3NKNvCpu3eiFlWEMmtmsySC0GfyMYN5LcgDcHX9aDloYZfHjiIkXtOXEmgutv3WNS1mq.jpg?r=ed8",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
      {
        id: 25,
        name: "Lust Stories",
        imageUrl:
          "https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcyDuF4UNhXT8tcfXdi1pEhKewRb_O7FoJ79TjMJbwwt3fmv_0j8a25apgcgn7Pj-Ku_fZCRfa3mRsUfC4NKe1LT3utn0YAYGvF8o0jcilYrxKpKsbREWlLlVAGPeWMLlmJY.jpg?r=e54",
        ratings: 4.6,
        totalSeasons: 6,
        totalLikes: 4600,
      },
    ],
  },
];

export default SERIES;

const MainContent = {
  id: String,
  title: String,
  subContent: [
    {
      name: String,
      releaseDate: String,
      imageUrl: String,
      description: String,
      categories: [String],
      totalLikes: Number,
      ratings: Number,
      type: {
        type: String,
        enum: ["movie", "series"],
      },
      videoUrl: {
        type: String,
        required: () => {
          return this.type === "movie";
        },
      },
      seasons: [
        {
          seasonNumber: Number,
          episodes: [
            {
              episodeNumber: Number,
              videoUrl: String,
              description: String,
            },
          ],
        },
      ],
    },
  ],
};