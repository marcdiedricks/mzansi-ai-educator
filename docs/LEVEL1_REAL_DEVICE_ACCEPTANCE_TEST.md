# Level 1 Real-Device Acceptance Test

Status: **PENDING — NOT YET EXECUTED**

This record must not be marked PASS from CI, repository inspection, or desktop simulation. It requires a real Android device running the protected-branch build.

## Build under test
Record the exact commit SHA and test URL/build before starting. Do not substitute the production site unless that exact commit has been intentionally deployed for acceptance.

## Preconditions
- Ordinary Android phone, with device model, Android version and Chrome version recorded.
- Test build opened once online so required app assets can be cached.
- At least one Level 1 lesson opened.
- A lesson completion/check result and My Learning Evidence response saved.
- Production data must not be deliberately overwritten for this test.

## Test sequence
1. Online launch: open the test build and confirm Level 1 loads.
2. English: open a canonical Level 1 lesson and confirm title, objective, lesson blocks, THINK behaviour, learning check and evidence area render.
3. Afrikaans: select/use Afrikaans and confirm the same canonical lesson renders in Afrikaans without changing its lesson identity or losing progress.
4. isiXhosa: select/use isiXhosa and confirm the same canonical lesson renders in isiXhosa without changing its lesson identity or losing progress.
5. Learning check: answer, receive formative feedback, retry if needed, and confirm no 70% pass barrier blocks continuation.
6. Evidence: enter and save “What did you try or apply?” and “What did you learn?”; confirm the lesson-aware activity/reflection guidance is visible.
7. Restart persistence: close the app/browser completely, reopen it, and confirm saved progress, latest score and evidence remain.
8. Offline cold start: while online first confirm the app has loaded, then close it completely, enable Airplane Mode, reopen from the installed icon, and confirm the app launches without internet.
9. Offline lesson access: open all eight Level 1 modules/lessons while offline. External video may require internet and must not be treated as required for lesson completion.
10. Offline evidence: save/edit evidence while offline, restart while still offline, and confirm it remains.
11. Return online: disable Airplane Mode and confirm the app still opens normally and local progress/evidence remain.

## Result record
Record for every failed step: exact step, visible message/behaviour, screenshot if available, device/browser details and whether the failure is repeatable.

Final result: **PENDING**

A PASS requires all required offline, progress, evidence and language-rendering checks above to pass on the real device. Language rendering PASS does not equal native-speaker translation approval.
