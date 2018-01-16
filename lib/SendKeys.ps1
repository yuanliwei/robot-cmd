[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")

# KeyCode https://technet.microsoft.com/en-us/library/ff731008.aspx?f=255&MSPPError=-2147217396

# Examples
# [System.Windows.Forms.SendKeys]::SendWait("{F5}{ENTER}")
# [System.Windows.Forms.SendKeys]::SendWait("~Name:{TAB}")
# [System.Windows.Forms.SendKeys]::SendWait("ABCDEFGHIJKLM~")
# [System.Windows.Forms.SendKeys]::SendWait("ABCDEFGHIJKLM{BACKSPACE}~")
# [System.Windows.Forms.SendKeys]::SendWait("^{HOME}{RIGHT}{RIGHT}{RIGHT}{RIGHT}{RIGHT}~{DELETE}")
#
# [System.Windows.Forms.SendKeys]::SendWait("%F")
#
# [System.Windows.Forms.SendKeys]::SendWait("X")
#
# [System.Windows.Forms.SendKeys]::SendWait("N")
